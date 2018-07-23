<template>
    <div id="loading" v-if="$apollo.loading">
        <div class="loading"></div>
    </div>
</template>

<style lang="scss" scoped>
.loading {
        border-radius: 50%;
        width: 24px;
        height: 24px;
        border: .25rem solid black;
        border-top-color: white;
        animation: spin 1s infinite linear;
        margin: 15px auto;
}
</style>

