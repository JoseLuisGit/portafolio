<template>
   <div class="project-single mfp-hide" id="project-single">
        <div class="container project-container">
          <!-- Project Intro -->
          <div class="project-intro">
            <h3 class="project-heading">{{dataSelected.nombre}}</h3>
          <span class="portfolio-cat category s-v">{{dataSelected.categoria}}</span>
          </div>
          <div class="row">
            <div class="col-lg-7">
              <!-- Project Details -->
              <div class="project-details">
                <p>
                 {{dataSelected.descripcion}}
                </p>
                <!-- Project Sliders -->
                <div class="container">
                  <img v-for="image in dataSelected.image" :key="image"
                    class="img-fluid"
                    :src="image"
                    alt=""
                  />
                  
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <!-- Project Info -->
              <div class="project-info">
                <h4 class="project-sub-heading">Project Info</h4>
                <ul class="list-inline project-info-list">
                 
                  <li v-if="dataSelected.demo != ''">
                    <span>Enlace:</span><a :href="dataSelected.demo">{{dataSelected.demo}}</a>
                  </li>
                  <li><span>Tecnologias:</span>{{dataSelected.tecnologia}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
props:{
    dataSelected: Object
}
}
</script>

<style>

</style>