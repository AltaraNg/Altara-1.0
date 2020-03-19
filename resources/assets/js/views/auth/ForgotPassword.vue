<template>
    <transition name="fade">
        <div id="forgotPasswordCard">
            <div :style="{ marginTop: `${cardMT}px`}" class="col-md-5 mx-auto" id="forgotPasswordCard">
                <div class="card">
                    <ul class="nav nav-tabs justify-content-center bg-default"><h6>RESET PASSWORD</h6></ul>
                    <form @submit.prevent="forgotPasswordCard()" class="pt-1 pb-3">
                        <div class="card-body clearfix px-5">
                            <div class="col-sm-12 px-0 px-md-3">
                                <label class="category">* E-MAIL</label>
                                <div class="input-group">
                                    <input class="form-control" name="E-mail" type="email"
                                        placeholder="E-mail" v-model="form.email" v-validate="'required'">
                                    <span class="input-group-addon"><i class="ml-2 fa fa-envelope"></i></span>
                                </div>
                                <small class="error-control"
                                    v-if="errors.first('E-mail')">{{ errors.first('E-mail') }}
                                </small>
                                <small class="error-control" v-if="error.staff_id">{{error.staff_id[0]}}</small>
                            </div>
                            <div class="col-sm-12 mb-4 px-0 px-md-3 pt-3">
                                <button :disabled="$isProcessing" class="btn btn-block bg-default" type="submit">
                                   RESET
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
    import Auth from '../../utilities/auth';
    import {post} from '../../utilities/api';
    import Flash from '../../utilities/flash';

    export default {
        data() {
            return {
                form: {email: ''},
                cardMT: '',
                error: {}
            }
        },
        methods: {
            async forgotPasswordCard() {
                console.log('helo helo',this.form)
                if (this.$network()) {
                    this.$LIPS(true);
                    this.error = {};
                    await post('/api/password/reset', this.form)
                        .then(({data}) => {
                            if (data.auth) {
                                Flash.setSuccess(data.message);
                            }
                        })
                        .catch(({response: {data}}) => {
                            this.error = data.errors ? data.errors : data;
                            Flash.setError(data.message);
                        });
                    this.$LIPS(false);
                } else this.$networkErr()
            }
        },
        mounted() {
            this.cardMT = (window.innerHeight - $('#forgotPasswordCard').height()) / 2;
            this.$LIPS(false);
        },
    }
</script>