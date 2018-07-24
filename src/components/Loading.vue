<template>
    <div id="loading">
        <div class="loading"></div>
    </div>
</template>

<style lang="scss" scoped>
.loading {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        border: .25rem solid black;
        border-top-color: white;
        animation: spin 1s infinite linear;
        margin: 15px auto;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>

