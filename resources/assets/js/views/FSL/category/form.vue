<template>
   <transition name="fade">
      <div class="pt-md-3 pt-2" id="employeeRegister">
         <div class="card">
            <ul class="nav nav-tabs justify-content-center bg-default"><h6>{{mode}} Category</h6></ul>
            <div class="card-body pl-4 pr-4">
               <form @submit.prevent="onSave">
                  <h5>Category Details</h5>
                  <div class="clearfix">
                     <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                        <label>Category ID</label>
                        <input class="form-control"
                               data-vv-as="category id"
                               name="category_id"
                               placeholder="category id"
                               type="text"
                               disabled
                               v-model="form.category_id" v-validate="'required|max:50'">
                        <small v-if="errors.first('category_id')">{{ errors.first('category_id') }}</small>
                     </div>
                     <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                        <label>Category name</label>
                        <input class="form-control"
                               data-vv-as="category name"
                               name="category_name"
                               placeholder="category name"
                               type="text"
                               v-model="form.category_name" v-validate="'required|max:150'">
                        <small v-if="errors.first('category_name')">{{ errors.first('category_name') }}</small>
                     </div>




                     <div class="spaceBetween mb-md-2 mb-0"></div>
                     <hr class="style-two">
                  </div>
                  <div class="col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3">
                     <div class="clearfix d-flex justify-content-end">
                        <button @click="onCancel" class="mx-3 btn btn-secondary" type="button" v-if="mode ==='edit'">Cancel</button>
                        <button :disabled="$isProcessing" class="mx-3 btn bg-default" type="submit">
                           {{mode | capitalize}} Category <i class="far fa-paper-plane ml-1"></i>
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </transition>
</template>
<script>
   import Vue from 'vue';

   export default {
      props: {},
      data() {
         return {
            form: {
               category_id: 'CT-0001',//Expected to come from a counter in the db
               category_name: null,
            },
            mode: null,
            error: {},
            show: false,
            resource: 'categories',
            store: '/api/categories',
            method: 'POST',
            title: 'Create',
         }
      },
      beforeRouteEnter(to, from, next) {
         //1. make request to back end for the form to be used

         //2 send to the method in this component that will handle it when component is created

         //3. set the current mode of the form
         next(vm => vm.setMode(to.meta.mode));
      },
      beforeRouteUpdate(to, from, next) {
         //1. make request to back end for the form to be used

         //2 send to the method in this component that will handle it when component is created

         //3. Edit data that will be used for api update call
         this.store = `/api/category/${this.$route.params.id}`;
         this.method = 'PUT';

         //3. set the current mode of the form
         this.setMode(to.meta.mode);
         next();
      },
      methods: {
         setMode(mode) {
            this.show = false;
            /** set the current mode of the form*/
            Vue.set(this.$data, 'mode', mode);
         },
         onCancel() {

         },
         onSave() {
            /** 1. Validate form*/
            this.$validator.validateAll().then(result => {
               /** 2.if validation is successful*/
               if (result) {
                  /** 3. Check is there is network*/
                  if (this.$network()) {
                     //There is network
                     /** 4. Show loader and set isProcessing to true*/
                     this.$LIPS(true);
                     /** 5. Clear errors*/
                     this.error = {};
                     /** 6 make request to BE*/
                     console.log(this.form);

                     this.$LIPS(false);

                     /** 7. Log the process*/

                     /** 8. Throw success message*/

                     /** 9. Take to the page view of the current supplier created*/
                  } else this.$networkErr()
               } else this.$networkErr('form');
            })
         }
      }
   }
</script>