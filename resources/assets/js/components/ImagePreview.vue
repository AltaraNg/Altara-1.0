<template>
    <div class="position-relative" v-if="image">
        <img :src="image">
        <button class="btn btn-danger upload-close m-0 px-3 py-2" @click.prevent="$emit('close')">
            <i class="fas fa-times text-white"></i>
        </button>
    </div>
</template>
<script type="text/javascript">
    export default {
        props: {
            preview: {
                type: [String, File],
                default: null
            }
        },
        data() {
            return {
                image: null
            }
        },
        created() {
            this.setPreview()
        },
        watch: {
            'preview': 'setPreview'
        },
        methods: {
            setPreview() {
                if (this.preview instanceof File) {
                    const fileReader = new FileReader();
                    fileReader.onload = (event) => {
                        this.image = event.target.result;
                    };
                    fileReader.readAsDataURL(this.preview)
                } else if (typeof this.preview === 'string') {
                    this.image = `https://s3.eu-west-2.amazonaws.com/altara-one/${this.preview}`;
                } else this.image = null;
            }
        }
    }
</script>