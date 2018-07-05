<template>
<b-container>
  <b-jumbotron class="mt-3" header="" lead="Function Scan" >
    <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="functionScan"
                      label="Please scan a function code"
                      label-for="function"
                      description="">
          <b-form-input ref="functionInput"
                        id="function"
                        type="text"
                        v-model="form.function"
                        required
                        placeholder="Scan function code">
          </b-form-input>
        </b-form-group>
      <b-button v-b-modal.clockIn class="b-button" type="submit" variant="primary">Clock In</b-button>
    </b-form>
  </b-jumbotron>
  <Modal confirmLocation="Home" id="clockIn" title="Clock In" modalMsg="You have successfully clocked in!"></Modal>
</b-container>
</template>

<script>
import Modal from '../Shared/Modal'

  export default {
    name: 'FunctionScan',
    components: {
        Modal
    },
    data () {
        return {
            form: {
                function: '',
            },
            show: true
        }
    },
    methods: {
        onSubmit (evt) {
            evt.preventDefault();
            
        }
    },
    mounted() {
        this.$nextTick(() => this.$refs.functionInput.focus())
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>