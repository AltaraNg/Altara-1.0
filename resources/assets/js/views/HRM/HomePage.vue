<template>
   <transition name="fade">
      <div>
         <div v-for="portal in portals">
            <portal-card :desc="portal.desc" :title="portal.title" :url="portal.url" :url_c="portal.url_c"/>
         </div>
      </div>
   </transition>
</template>
<script>
   import PortalCard from '../../components/portalCard';

   export default {
      components: {PortalCard},
      data() {
         return {
            portals: [
               {
                  url: 'employee', title: 'Staff Management', url_c: 'Manage staff Details!',
                  desc: 'For Registering new staff'
               }/*,
               {
                  url: 'attendance', title: 'Manage Attendance', url_c: 'Manage Attendance!',
                  desc: 'Managing staff attendance'
               }*/
            ]
         }
      }
   }
</script>