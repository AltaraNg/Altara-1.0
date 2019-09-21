<div v-if="action !== 'update'">

<div :id="modal'" class="modal fade" v-for="type in picsView">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header py-2">
                <h6 class="modal-title py-1"> Verification Status</h6>
                <a aria-label="Close" class="close py-1" data-dismiss="modal" href="javascript:">
                <span aria-hidden="true" class="modal-close text-danger">
                    <i class="fas fa-times"></i>
                </span>
                </a>
            </div>
            <form @submit.prevent="save('modal')" v-if="customer">
                <div class="modal-body">
                    <div class="upload-image p-2">
                        <div class="upload-box">
                            <image-upload v-model="$data['form'][file]"/>
                        </div>
                    </div>
                    <small v-if="error[type]">{{error[type][0]}}</small>
                </div>
                <div class="modal-footer">
                    <button class="m-2 btn btn-secondary" data-dismiss="modal" type="button">
                        cancel
                    </button>
                    <button :disabled="$isProcessing" class="m-2 btn bg-default" type="submit">
                        Save changes <i class="far fa-paper-plane ml-1"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>




<div @click="modal(type+'_modal')" class="card-footer pointer">
    <i class="now-ui-icons ui-1_calendar-60 pr-1"></i>

                                    <small v-if="! key(type)">(Click here to update status!)</small>


</div>
