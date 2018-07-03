<template>
<b-container>
  <b-jumbotron class="mt-5" header="" lead="Employee Search" >
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="employeeSearch"
                      label="Please enter your employee number"
                      label-for="employeeNumber"
                      description="">
          <b-form-input id="employeeNumber"
                        type="text"
                        v-model="form.employeeNumber"
                        required
                        placeholder="Enter employee number">
          </b-form-input>
        </b-form-group>
      <b-button class="b-button" type="submit" variant="primary">Go</b-button>
    </b-form>
  </b-jumbotron>
</b-container>
  
</template>

<script>
  export default {
    name: 'EmployeeSearch',
    props: {
      
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
      alert(JSON.stringify(this.form));
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
