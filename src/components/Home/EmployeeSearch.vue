<template>
<b-container>
  <b-jumbotron class="mt-5" header="" lead="Employee Search" >
    <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="employeeSearch"
                      label="Please scan your employee number"
                      label-for="employeeNumber"
                      description="">
          <b-form-input id="employeeNumber"
                        type="text"
                        v-model="form.employeeNumber"
                        required
                        placeholder="Scan employee number">
          </b-form-input>
        </b-form-group>
      <b-button class="b-button" type="submit" variant="primary">Go</b-button>
    </b-form>
  </b-jumbotron>
</b-container>
  
</template>

<script>
import Vue from 'vue';
import FunctionScan from './FunctionScan'

  export default {
    name: 'EmployeeSearch',
    components: {
      FunctionScan
    },
    data () {
    return {
      form: {
        employeeNumber: '',
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      var ComponentClass = Vue.extend(FunctionScan)
      var instance = new ComponentClass();
      instance.$mount() // pass nothing
      this.$parent.$refs.container.appendChild(instance.$el)
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .b-button {
    width: 4em;
  }
</style>
