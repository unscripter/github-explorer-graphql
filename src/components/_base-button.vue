<template>
    <button :name="name" :style="buttonStyle" :class="className" v-on="$listeners">
     <slot>Submit</slot>   
    </button>
</template>

<script>
export default {
    computed: {
        buttonStyle() {
            return {
                height: `${this.height}px`,
                width: `${this.weight}px`,
                fontSize: `${this.font}px`,
            }
        }
    },
    props: {
        name: { type: [String, Number] }, 
        className: { type: String }, 
        height: { type: [Number, String], default: 35 }, 
        width: { type: [Number, String], default: 100}, 
        font: { type: [Number, String], default: 20 }
    }
}
</script>

<style lang="scss">
button {
    border: 1px solid white;
    border-radius: 5px;
    background-color: transparent;  
    color: white;
    padding: 5px;
}
.primary {
    background-color: var(--c-blue);
}
.danger {
    background-color: var(--c-red);
}
</style>


