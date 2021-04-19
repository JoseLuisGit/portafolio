<template>
  <div id="app">
     <div class="scrolling-indicator"></div>
     <sidebar-component></sidebar-component>
         <main class="page-main modern">
        <home-component></home-component>
   <about-component></about-component>
   <skill-component></skill-component>
   <portfolio-component></portfolio-component>

       <!-- Single Project Full -->
     
         </main>
  </div>
</template>

<script>

import SidebarComponent from './components/SidebarComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import SkillComponent from './components/SkillComponent.vue';
import PortfolioComponent from './components/PortfolioComponent.vue';


export default {
  name: 'App',
  components: {
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    SkillComponent,
   PortfolioComponent,
  }
}


</script>

