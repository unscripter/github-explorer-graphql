<template lang="html">
    <div class="image-fade"
        :id="id"
        :class="className"
        :style="loaded ? {
            backgroundImage: `url('${src}')`,
            opacity: 1,
        } : {}">
    </div>
</template>

<script>
export default {
    data() {
        return {
            img: null,
            loaded: false
        }
    },
    props: ['src', 'className', 'id'],
    mounted() {
        this.$nextTick(() => {
            this.loadImg();
        });
    },
    watch: {
        src() {
            this.loadImg();
        }
    },
    methods: {
        loadImg() {
            this.loaded = false;
            this.img = new window.Image();
            this.img.onload = () => {
                this.loaded = true;
            };
            this.img.src = this.src;
        }
    }
}
</script>

<style lang="scss">
.image-fade {
    opacity: 0.01;
    transition: opacity 0.5s;
}
.user-avatar {
            width: 40px !important;
            height: 40px !important;
            border-radius: 5px;
            background-position: center center;
            background-size: cover;
            margin-right: 20px;
            margin-left: 10px;
            background-color: rgba(255, 255, 255, 0.5);
        }
.user-avatar-80 {
            width: 100px !important;
            height: 100px !important;
            border-radius: 10px;
            background-position: center center;
            background-size: cover;
            background-color: rgba(255, 255, 255, 0.5);
        }

</style>
