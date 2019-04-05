<template>
   <transition name="fade">
      <div class="pt-md-3 pt-2" id="employeeRegister">
         <div class="card">
            <ul class="nav nav-tabs justify-content-center bg-default"><h6>{{mode}} Product</h6></ul>
            <div class="card-body pl-4 pr-4">
               <form @submit.prevent="onSave">
                  <h5>Product Details</h5>
                  <div class="clearfix">

                     <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                        <label>Product ID</label>
                        <input class="form-control"
                               data-vv-as="product id"
                               name="product_id"
                               placeholder="product id"
                               type="text"
                               disabled
                               v-model="form.product_id" v-validate="'required|max:50'">
                        <small v-if="errors.first('product_id')">{{ errors.first('product_id') }}</small>
                     </div>
                     <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                        <label>Product name</label>
                        <input class="form-control"
                               data-vv-as="product name"
                               name="product_name"
                               placeholder="product name"
                               type="text"
                               v-model="form.product_name" v-validate="'required|max:150'">
                        <small v-if="errors.first('product_name')">{{ errors.first('product_name') }}</small>
                     </div>
                     <div class="spaceBetween mb-md-2 mb-0"></div>

                     <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                        <label>Product description</label>
                        <input class="form-control"
                               data-vv-as="product description"
                               name="product_desc"
                               placeholder="product desc"
                               type="text"
                               v-model="form.product_desc" v-validate="'required|max:50'">
                        <small v-if="errors.first('product_desc')">{{ errors.first('product_desc') }}</small>
                     </div>
                     <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                        <label>Category ID</label>
                        <select name="category_id" class="custom-select w-100" v-model="form.category_id"
                                v-validate="'required'" data-vv-validate-on="blur" data-vv-as="category id">
                           <option value="" selected>-- select category --</option>
                           <option v-for="category in categories" :value="category.id">{{category.name | capitalize}}</option>
                        </select>
                        <small v-if="errors.first('category_id')">{{ errors.first('category_id') }}</small>
                     </div>
                     <div class="spaceBetween mb-md-2 mb-0"></div>

                     <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                        <label>Supplier ID</label>
                        <select name="supplier_id" class="custom-select w-100" v-model="form.supplier_id"
                                v-validate="'required'" data-vv-validate-on="blur" data-vv-as="supplier id">
                           <option value="" selected>-- select supplier --</option>
                           <option v-for="supplier in suppliers" :value="supplier.id">{{supplier.name | capitalize}}</option>
                        </select>
                        <small v-if="errors.first('supplier_id')">{{ errors.first('supplier_id') }}</small>
                     </div>
                     <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                        <label>Brand ID</label>
                        <select name="brand_id" class="custom-select w-100" v-model="form.brand_id"
                                v-validate="'required'" data-vv-validate-on="blur" data-vv-as="brand id">
                           <option value="" selected>-- select brand --</option>
                           <option v-for="brand in brands" :value="brand.id">{{brand.name | capitalize}}</option>
                        </select>
                        <small v-if="errors.first('brand_id')">{{ errors.first('brand_id') }}</small>
                     </div>
                     <div class="spaceBetween mb-md-2 mb-0"></div>

                     <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                        <label>Date supplied</label>
                        <input class="form-control"
                               data-vv-as="date supplied"
                               name="date_supplied"
                               type="date"
                               v-model="form.date_supplied"
                               v-validate="'required'">
                        <small v-if="errors.first('date_supplied')">{{errors.first('date_supplied')}}</small>
                     </div>
                     <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                        <label>Date sold</label>
                        <input class="form-control"
                               data-vv-as="date sold"
                               name="date_sold"
                               type="date"
                               v-model="form.date_sold"
                               v-validate="'required'">
                        <small v-if="errors.first('date_sold')">{{errors.first('date_sold')}}</small>
                     </div>
                     <div class="spaceBetween mb-md-2 mb-0"></div>

                     <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                        <label>Sold by</label>
                        <select name="sold_by" class="custom-select w-100" v-model="form.sold_by"
                                v-validate="'required'" data-vv-validate-on="blur" data-vv-as="sold by">
                           <option value="" selected>-- select floor agent --</option>
                           <option v-for="agent in floorAgents" :value="agent.id">{{agent.name | capitalize}}</option>
                        </select>
                        <small v-if="errors.first('sold_by')">{{ errors.first('sold_by') }}</small>
                     </div>
                     <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                        <label>Inventory agent</label>
                        <select name="inventory_agent" class="custom-select w-100" v-model="form.inventory_agent"
                                v-validate="'required'" data-vv-validate-on="blur" data-vv-as="inventory agent">
                           <option value="" selected>-- select inventory agents --</option>
                           <option v-for="agent in inventoryAgents" :value="agent.id">{{agent.name | capitalize}}</option>
                        </select>
                        <small v-if="errors.first('inventory_agent')">{{ errors.first('inventory_agent') }}</small>
                     </div>
                     <div class="spaceBetween mb-md-2 mb-0"></div>
                     <hr class="style-two">
                  </div>
                  <div class="col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3">
                     <div class="clearfix d-flex justify-content-end">
                        <button @click="onCancel" class="mx-3 btn btn-secondary" type="button" v-if="mode ==='edit'">Cancel</button>
                        <button :disabled="$isProcessing" class="mx-3 btn bg-default" type="submit">
                           {{mode | capitalize}} Product <i class="far fa-paper-plane ml-1"></i>
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
               product_id: 'PID-0001',//expected to be generated automatically from the backend
               product_name: null,
               product_desc:null,
               category_id:'',
               supplier_id:'',
               brand_id:'',
               date_supplied:this.$getDate(),
               date_sold:null,
               sold_by:'',
               inventory_agent:'',
            },
            categories:[
               /*this list will come from the backend*/
               {id:1,name:'Fans'},
               {id:2,name:'Refrigerators'},
               {id:3,name:'Sound systems'},
               {id:4,name:'Phones'}
            ],
            suppliers:[
               /*this list will come from the backend*/
               {id:1,name:'Supplier 1'},
               {id:2,name:'Supplier 2'},
               {id:3,name:'Supplier 3'},
               {id:4,name:'Supplier 4'}
            ],
            brands:[
               /*this list will come from the backend*/
               {id:1,name:'synix'},
               {id:2,name:'samsung'},
               {id:3,name:'toshiba'},
               {id:4,name:'panasoni'}
            ],
            floorAgents:[
               /*this list will come from the backend - list of shop floor agents, and for best use will be defaulted to the logged in user*/
               {id:1,name:'agent-name-1'},
               {id:2,name:'agent-name-1'},
               {id:3,name:'agent-name-1'},
               {id:4,name:'agent-name-1'}
            ],
            inventoryAgents:[
               /*this will come from the backend*/
               {id:1,name:'officer-name-1'},
               {id:2,name:'officer-name-1'},
               {id:3,name:'officer-name-1'},
               {id:4,name:'officer-name-1'}
            ],
            mode: null,
            error: {},
            show: false,
            resource: 'products',
            store: '/api/products',
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
         this.store = `/api/products/${this.$route.params.id}`;
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