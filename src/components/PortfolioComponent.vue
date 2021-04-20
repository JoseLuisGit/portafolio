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
        <div
          class="col-xl-6 branding"
          v-for="data in dataPortfolio"
          :key="data.id"
        >
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
              <h3 class="portfolio-heading">{{ data.nombre }}</h3>
              <span class="project-cat category">{{ data.categoria }}</span>
              <a
                class="btn btn-animated project-popup portfolio-btn"
                href="#project-single"
                @click="dataSelected = data"
                >Detalles</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <project-detail-component
      v-bind:dataSelected="dataSelected"
    ></project-detail-component>
  </section>
</template>

<script>
import ProjectDetailComponent from "./ProjectDetailComponent.vue";
export default {
  name: "portfolio-component",
  components: {
    ProjectDetailComponent,
  },
  created() {
    this.dataSelected = this.dataPortfolio[0];
  },

  data() {
    return {
      dataPortfolio: [
        {
          id: 1,
          nombre: "Expression Calculator",
          descripcion:
            "En la aplicacion se puede ingresar una expresion matematica donde se puede incluir algunas operaciones trigonometricas y logaritmicas que se pueden adicionar operaciones de una manera muy sencilla.",
          tecnologia: "Flutter",
          categoria: "Aplicacion Movil",
          imagen: ["https://i.ibb.co/jGbZZPd/1.png"],
          demo: [],
        },
        {
          id: 2,
          nombre: "Aporte Sistema Web para Samaipata",
          descripcion:
            "Un aporte para resolver algunos problemas que se da en el Fuerte de Samaipata como la compra de boletos. El sistema se caracteriza por compras de boletos a travez de los pagos por QR y otras caracteristicas como ver las Galerias, Eventos, Videos, Informacion Adicional, etc. Adicionalmente una parte Administrativa donde se gestiona todo lo anterior dicho.",
          tecnologia: "Angular, Laravel",
          categoria: "Aplicacion Web (General y Administrador)",
          imagen: [
            "https://i.ibb.co/8B2Dvvc/image.jpg",
            "https://i.ibb.co/0nT0kvc/1.jpg",
            "https://i.ibb.co/yVdnxnx/2.jpg",
            "https://i.ibb.co/mRWf5P5/3.png",
            "https://i.ibb.co/QCBbjNh/4.png",
            "https://i.ibb.co/FnqHDLk/5.png",
          ],

          demo: [
            "http://adminsamaipata.herokuapp.com",
            "http://visitasamaipata.herokuapp.com",
          ],
        },
        {
          id: 3,
          nombre: "Control de asistencia",
          categoria: "Aplicación Web y Movil",
          descripcion:
            "Proyecto que hace enfasis en el control de asistencia de estudiantes en la universidad que el docente tiene registros de sus materias y creacion de eventos en las mismas.",
          tecnologia: "Vue, Laravel, Flutter",
          imagen: ["https://i.ibb.co/1mkXDfK/2.png", "https://i.ibb.co/QrQHp3Q/3.png", "https://i.ibb.co/D4b3NLK/4.png"],
          demo: [],

        },

        {
          id: 4,
          nombre: "Plotter Poligonos",
          categoria: "Aplicación Movil",
          descripcion:
            "Aplicacion movil con la que se puede dibujar poligonos abiertos y cerrados, con la capacidad de poder guardarlos y recuperarlos donde la otra funcionalidad era conectar mediante bluetooth a un plotter y enviar los poligonos para que los imprima.",
          tecnologia: "Flutter",
          imagen: ["https://i.ibb.co/hfgVxNS/1.png", "https://i.ibb.co/BT6rDCG/2.png", "https://i.ibb.co/DKj7T6v/3.png"],
          demo: [],
        },
      ],


      dataSelected: null,
    };
  },
};
</script>

<style></style>
