<template>
<div class="container">
  <div class="row">
    <main-menu></main-menu>
  </div>
  <div class="row">
    <div class="coll-12">
      <div class="col-12">
         <div class="mv-but"> Hello my project</div> 
      </div>
      <div class="col-12">
         <div class="mv-but-circ"> 
           <i class="fa fa-search" aria-hidden="true"></i> 
         </div> 
      </div>
       <div class="col-12">
         <div class="mv-but-clear"> Hello my project</div> 
      </div>
       <div class="coll-12">
        <input class="elem-search" value="Hi i`m search"/>
      </div>
    </div>
  </div>
</div>

</template>
 
<script>
import MainMenu from "./components/menus/MainMenu.vue";

export default {
  name: "app",
  data() {
    return {
      message: "Welcome My to Vue.js"
    };
  },
  components: {
    "main-menu": MainMenu
  }
};
</script>
 
<style>

</style>