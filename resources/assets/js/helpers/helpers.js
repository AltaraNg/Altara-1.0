//cus stands for customer
//ver stands for verification
export const getCustomerApprovalStatus = ver => !!ver ? (ver.address &&
    ver.id_card &&
    ver.passport &&
    ver.processing_fee &&
    ver.work_guarantor &&
    ver.personal_guarantor) : false;
export const getCustomerFullName = cus => `${cus.first_name} ${cus.last_name}`;
export const getCustomerAddress = cus => `${cus.add_houseno} ${cus.add_street} ${cus.area_address}, ${cus.city}, ${cus.state}.`;