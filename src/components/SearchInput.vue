<template>
    <div class="row search">
        <input @focus="$emit('focus')"
            v-bind="$attrs"
            @input="$emit('input', $event.target.value)"
            @keyup.enter="$emit('search')" 
            class="search-input" 
            :value="value">
        <button @click="$emit('search')" class="search-button"><i class="fa fa-search"></i></button>
    </div>
</template>
<script>
    export default {
        inheritAttrs: false,
        props: ['searchText', 'value'],
    }
</script>

<style lang="scss" scoped>
.search {
    grid-template-columns: 200px 40px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 1px;
    .search-input {
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        width: 220px;
        margin-right: 5px;
    }
    .search-button {
        height: 40px;
        margin-left: 10px;
        border-radius: 8px;
        background-image: linear-gradient(to bottom, #a5de41, #55b130);
        box-shadow: inset 0 0.5px 0.5px 0 #e2ffce;
        border: none;
        font-family: GothamPro-Bold;
        font-size: 14px;
        letter-spacing: 0.5px;
        padding: 20px 20px 20px 20px;

        &.icon {
            padding: 10px;
            width: 44px;
            font-size: 20px;
        }
    }
}
</style>

