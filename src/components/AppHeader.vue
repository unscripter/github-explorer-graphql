<template>
    <header id="appHeader" class="header">
      <div class="brand">
        <a @click="SHOW_HIDE_NAVIGATION"><i class="fa fa-bars"></i></a>
        <span class="hidden">Github Explorer</span>
        <!-- <span class="show"><i class="fa fa-github show"></i></span> -->
      </div>
      <div></div>
      <nav></nav>
      <div class="auth-div">
        <button class="auth-buttons">SignIn</button>
      </div>
    </header>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations(['SHOW_HIDE_NAVIGATION'])
    }
}
</script>

<style lang="scss">
.sticky{
  background-color: var(--c-blue) !important;
  position: fixed;
  top:0;
  width: 100%;
}
.header {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: var(--c-blue-light);
  color: white;
  padding: 8px;
  @media (max-width: 768px) {
      grid-template-columns: auto auto auto auto;
    }
  // @media (max-width: 400px) {
  //       width: 396px;
  // }
.hidden {
    margin-left: 5px;
     @media (max-width: 768px) {
      display: none;
    }
.show {
    display: none;
    margin-left: 5px;
    @media (max-width: 768px) {
      display: none;
    }
}
}

  .brand {
    font-size: var(--lh-height);
    position: relative;
    top: 5px; 
    margin-left: 5px;
  }
  .auth-buttons {
      width: 100px;
      height: 35px;
      border: 1px solid white;
      border-radius: 5px;
      background-color: transparent;
      font-size: 20px;
      color: white;
      float: right;
      padding: 5px;
       @media (max-width: 768px) {
       left: 0;
    }
    }
}
</style>

