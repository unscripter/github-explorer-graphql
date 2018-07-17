<template>
<div>
    <a class="repo-item">
      <repo-content :repo="repo"></repo-content>      
    </a>    
</div>
</template>

<script>
import RepoContent from './RepoContent'

export default {
    components: {
        RepoContent
    },
    props: ['repo']
    
}
</script>

<style lang="scss" scoped>
.repo-item {
    border-radius: 6px;
    background-color: #ffffff;
    border: solid 0.5px #e5e5e5;
    margin-bottom: 5px;
    display: block;
    text-decoration: none !important;
    overflow: hidden;
}
</style>


