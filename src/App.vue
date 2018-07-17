<template>
  <div id="app">
    <side-bar></side-bar>
    <header-bar></header-bar>
    <main id="nav">
      <router-view/>
    </main>
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import HeaderBar from '@/components/AppHeader';
import FooterBar from '@/components/AppFooter';
import SideBar from '@/components/SideBar'

export default {
    components: {
        HeaderBar,
        FooterBar,
        SideBar
        }
}
</script>

<style lang="scss">
@import './themes/root.scss';
@import './themes/base.scss';
@import './themes/grid.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  // padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
