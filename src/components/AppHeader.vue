<template>
    <header id="appHeader" class="header">
      <div class="brand">
        <a @click="SHOW_HIDE_NAVIGATION"><i class="fa fa-bars"></i></a>
        <span class="hidden">Github Explorer</span>
        <!-- <span class="show"><i class="fa fa-github show"></i></span> -->
      </div>
      <div></div>
      <nav></nav>
      <div class="row auth-div">
        <div class="search">
          <input placeholder="search repo">
          <span class="fa fa-search"></span>
        </div>
        <base-button width="100" height="35" font="20" name="signIn">SignIn</base-button>
      </div>
      <!-- <router-link :to="{ name: 'REPO_DETAIL', params: { reponame: 'abc' }}"></router-link> -->
      <!-- <div class="progress-container">
        <div class="progress-bar" id="myBar"></div>
      </div>  -->
    </header>
    
</template>
<script>
import { mapMutations } from 'vuex';

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
  z-index: 5;
  grid-template-columns: repeat(4, 1fr);
  background-color: var(--c-blue-light);
  color: white;
  padding: 8px;
  @media (max-width: 768px) {
      grid-template-columns: auto auto auto auto;
    }
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
  .search { position: relative; }
  .search input { text-indent: 30px; width: 280px;
    @media (max-width: 768px) {
          width: 150px
        }
        }
  .search .fa-search { 
    position: absolute;
    top: 24px;
    right: 0px;
    font-size: 15px;
  }

  .brand {
    font-size: var(--lh-height);
    position: relative;
    top: 5px; 
    margin-left: 5px;
  }
  .auth-div {
    grid-template-columns: 300px 100px;
    @media (max-width: 768px) {
          grid-template-columns: auto auto;
        }
  }
  .search {
  position: relative;
  top: -5px;
  color: #aaa;
  font-size: 16px;
}

.search input {
  height: 32px;
  background: #fcfcfc;
  border: 1px solid #aaa;
  border-radius: 5px;
  box-shadow: 0 0 3px #ccc, 0 10px 15px #ebebeb inset;
}

.search input { text-indent: 32px;}
.search .fa-search { 
  position: absolute;
  top: 10px;
  left: 10px;
}
}
/* The progress container (grey background) */
.progress-container {
  display: grid;
  grid-template-columns: 100%;
  // width: 100%;
  height: 8px;
  background: #ccc;
}

/* The progress bar (scroll indicator) */
.progress-bar {
  height: 8px;
  background: #4caf50;
  width: 0%;
}
</style>

