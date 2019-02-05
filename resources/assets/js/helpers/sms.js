import {get} from "./api";

export default {
   message: "",
   welcome(details) {
      this.message = `Welcome to Altara credit. Please secure your login details. Staff ID: ${details.loginID}, password: ${details.loginPassword}`;
      this.send(details);
   },
   customerReg(details) {
      this.message = `Dear ${details.first_name} ${details.last_name}, Welcome to Altara Credit Limited, You are hereby invited to our showroom at ${details.branch.description} to learn more about our offerings. Pick up products now and pay later. We look forward to seeing you. For more info contact: ${details.branch.phone_yoruba}. Your customer id is: ${details.id}`;
      this.send({phone: details.telephone.substr(1)});
   },
   passwordReset(details) {
      this.message = `Password reset successful! if your did not request for a new password kindly report back immediately, your staff ID is ${details.staff_id}, new password: ${details.password}`;
      this.send(details);
   },
   dvaMessage(details) {
      this.message = details.message;
      this.send(details);
   },
   send(details) {
      console.log(details);
      get(`/api/message/create?to=234${details.phone}&message=${this.message}`).then(res => {
         let data = JSON.parse(res.data);
         if (data.messages[0].status.groupId === 1) {
            console.log("sms sent successfully");
         }
      });
   }
};
