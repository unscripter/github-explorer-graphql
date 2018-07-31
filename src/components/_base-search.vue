<template>
    <div class="search">
        <input placeholder="search repo">
        <span class="fa fa-search"></span>
    </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped>
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

</style>
