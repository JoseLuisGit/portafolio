<template>
  <!-- Section Portofolio -->
      <section class="section-portfolio" id="portfolio">
        <div class="container">
          <div class="section-heading">
            <p class="heading-bg">Portafolio</p>
            <h2 class="heading-main">Ultimos Proyectos</h2>
          </div>

          <!-- Portfolio Items -->
          <div class="row portfolio-grid">
            <div class="col-xl-6 branding" v-for="data in dataPortfolio" :key="data.id" >
              <!-- Portfolio Item 01 -->
              <div class="portfolio-item">
                <img
                  class="portfolio-img img-fluid"
                   src="../assets/image/code_text.jpg"
                  alt="Portfolio Item"
                />
                <div
                  class="portfolio-details d-flex flex-column justify-content-center"
                >
                  <h3 class="portfolio-heading">{{data.nombre}}</h3>
                 <span class="project-cat category">{{data.categoria}}</span>
                  <a
                    class="btn btn-animated project-popup portfolio-btn"
                    href="#project-single" @click="dataSelected = data"
                    >Detalles</a
                  >
                </div>
              </div>
            </div>
           
              </div>
            </div>
       

        
       <project-detail-component v-bind:dataSelected="dataSelected"></project-detail-component>
    
      </section>

      
</template>
 
<script>
import ProjectDetailComponent from './ProjectDetailComponent.vue';
export default {
name: 'portfolio-component',
components:{
    ProjectDetailComponent
},
created(){


     this.dataSelected = this.dataPortfolio[0]
    
},

data(){

    return {
     dataPortfolio: [
         {
             id:1,
          nombre: 'Expression Calculator',
          descripcion:'En la aplicacion se puede ingresar una expresion matematica donde se puede incluir algunas operaciones trigonometricas como sen y cos.',
          tecnologia:'Flutter',
          categoria:'Aplicacion Movil',
          imagen:[
              '../assets/image/calc/1.jpg',
              '../assets/image/calc/2.jpg',
          ],
          demo:''

         },
          {
              id:2,
          nombre: 'Expression Calculator',
          descripcion:'En la aplicacion se puede ingresar una expresion matematica donde se puede incluir algunas operaciones trigonometricas como sen y cos.',
          tecnologia:'Flutter',
          imagen:[
              '../assets/image/calc/1.jpg',
              '../assets/image/calc/2.jpg',
          ],
          demo:'http://google.com'

         },
          {id:3,
          nombre: 'Expression Calculator',
          descripcion:'En la aplicacion se puede ingresar una expresion matematica donde se puede incluir algunas operaciones trigonometricas como sen y cos.',
          tecnologia:'Flutter',
          imagen:[
              '../assets/image/calc/1.jpg',
              '../assets/image/calc/2.jpg',
          ],
          demo:''

         }
     ],
     dataSelected: null
     
    }
}
}
</script>

<style>

</style>