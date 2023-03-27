<script setup>
  import {
    RouterLink,
    RouterView
  } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cv">CV</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/github">Github</router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  
  <RouterView />
</template>

<style scoped>
  nav {
    border-radius: 10px;

    font-size: 25px;
  }

  .navbar-expand-lg .navbar-collapse {
    flex-direction: column !important;
  }
</style>