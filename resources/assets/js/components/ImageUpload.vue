<template>
    <div class="image">
        <image-preview :preview="value" @close="$emit('input', null)" v-if="value && usage === 'verification'"/>
        <div v-else><input type="file" accept="images/*" @change="upload"></div>
    </div>
</template>
<script>
    import ImagePreview from './ImagePreview'

    export default {
        components: {
            ImagePreview
        },
        props: {
            value: {
                type: [String, File],
                default: null
            },
            usage:{
                type:[String],
                default:'verification'
            }
        },
        methods: {
            upload(e) {
                const files = e.target.files;
                if (files && files.length > 0) this.$emit('input', files[0])
            }
        }
    }
</script>