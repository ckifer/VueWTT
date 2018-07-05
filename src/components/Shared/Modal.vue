<template>
    <b-modal ref="modal" :id="id" hide-footer :title="title">
        <div class="d-block text-center">
            <h5>{{ modalMsg }}</h5>
        </div>
        <hr>
        <b-btn :to="confirmLocation" class="mt-3" variant="primary" block @click="hideModal">Okay</b-btn>
    </b-modal>
</template>

<script>
    export default {
        name: 'Modal',
        props: {
            modalMsg: String,
            title: String,
            id: String,
            confirmLocation: String
        },
        methods: {
            hideModal: function() {
                this.$refs.modal.hide();
            }
        },
        mounted() {
           setTimeout(() => {
                this.$refs.modal.hide();
                location.reload();
            }, 6000);
        }
    }
</script>

<style scoped>

</style>