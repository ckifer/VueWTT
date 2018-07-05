<template>
    <div ref="container">
         <employee-search/>
    </div>
</template>
<script>
import EmployeeSearch from './EmployeeSearch'

export default {
    name: 'Home',
    components: {
        EmployeeSearch,
    }
}
</script>
