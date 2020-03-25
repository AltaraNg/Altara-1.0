<template>
</template>
<script>
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import Auth from "../../utilities/auth";
Vue.use(VueSweetalert2);
export default {
    name: "AutoLogout",
    data: function (){
        return {
             events:['click','mousemove','mousedown','scroll','keypress','load'],
             warningTimer:null,
             logoutTimer:null,

        }
    },
    mounted(){
        this.events.forEach((event)=>{
            window.addEventListener(event,this.resetTimer)
        });
        this.setTimer(); 
    },
    destroyed(){
        this.events.forEach((event)=>{
            window.removeEventListener(event,this.resetTimer)
        });
    },
    methods:{
        setTimer(){
             this.warningTimer = setTimeout(this.warningMessage,6*1000);
        },
        warningMessage(){
            this.logoutTimer = setTimeout(this.logoutUser,10000);
            let timerInterval
            this.$swal({
                icon: 'warning',
                title: 'Auto Logout',
                html: `You'll be logged out in <b></b> second(s).`,
                timer: 10000,
                timerProgressBar: true,
                  showConfirmButton: false,
                onBeforeOpen: () => {
                    timerInterval = setInterval(() => {
                    const content = this.$swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                        b.textContent = Math.floor(this.$swal.getTimerLeft()/1000)
                        }
                    }
                    }, 100)
                },
                onClose: () => {
                    clearInterval(timerInterval)
                }
            })
            
        },
        logoutUser(){
            Auth.remove();
            this.$router.push("/login");
        },
        resetTimer(){
            clearTimeout(this.warningTimer);
            clearTimeout(this.logoutTimer);
            this.setTimer();
        }
    }
}
</script>
<style>

</style>