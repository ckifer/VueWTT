<template>
    <b-navbar toggleable="md" type="dark" variant="primary">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="/">{{ title }}</b-navbar-brand>
       

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item to="Home">Time Tracker</b-nav-item>
            </b-navbar-nav>
             <b-navbar-nav class="ml-auto">
                <b-nav-item to="Admin">Admin Panel</b-nav-item>
                <b-nav-item to="SuperAdmin">Super Admin Panel</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        title: String
    }
}
</script>


