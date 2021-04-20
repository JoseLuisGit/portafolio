<template>
    <!-- Sidebar Section -->
    <header
      class="sidebar fixed-top"
      style="display: flex; align-items: center"
    >
      <!-- Sidebar-toggler -->
      <div
        class="sidebar-mobile-toggler justify-content-center align-items-center" @click="toggleSidebar()"
      >
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div class="sidebar-content">
        <!-- Sidebar Title -->
        <h2 class="sidebar-title dynamic-title cd-headline clip is-full-width">
          <span class="cd-words-wrapper">
            <!-- Site Logo -->
            <b class="is-visible"
              ><span class="gold-title">Jose Luis Quispe</span></b
            >
          </span>
        </h2>
        <!-- Sidebar Navbar -->
        <nav class="nav">
          <!-- Navbar Menu -->
          <ul class="nav-list list-inline">
            <li class="nav-item">
              <a class="nav-link active" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">Acerca</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#resume">Resumen</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">Portafolio</a>
            </li>
          </ul>
          <!-- Sidebar Footer -->
          <div class="sidebar-footer">
            <a class="btn btn-rounded sidebar-btn" href="#">Descargar CV</a>
          </div>
        </nav>
      </div>
    </header>
</template>

<script>
export default {
name:'sidebar-component',

  methods:{
 
   toggleSidebar(){
    document.querySelector('.sidebar-mobile-toggler').classList.toggle('active');
      document.querySelector('.sidebar').classList.toggle('active');
    
   }
  }
}
</script>

<style>

</style>