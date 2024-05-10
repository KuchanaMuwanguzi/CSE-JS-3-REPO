<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">

        <li class="nav-item">
          <RouterLink to="/">
            <a class="nav-link" href="#">StudentsDashboard</a> 
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/students/register">
            <a class="nav-link" href="#">Studentsregister</a> 
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/students/studentsView">
            <a class="nav-link" href="#">StudentsView</a> 
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/students/detail">
            <a class="nav-link" href="#">StudentsDetailView</a> 
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
        </nav>
    </div>
</template>


<script>
    export default {
        name: "NavComponent",

        data(){return {}},
        methods: {},
        compomponents: {},
    }
</script>


<style>

</style>