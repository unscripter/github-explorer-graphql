<template>
    <transition @scroll="stickTimeline()" @before-enter="beforeEnter()">
    <div :id="modalID" class="modal open">
        <div class="modal-content">
            <header class="modal-header">
                <span class="close" @click="$emit('close')">&times;</span>
                <slot name="header"></slot>
                <!-- <base-search></base-search> -->
            </header>
            <section class="modal-body">
                <slot name="body"></slot>
            </section>
            <footer class="modal-footer">
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
    </transition>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    props: ['modalID'],
    computed: {
        ...mapGetters(['tabModal'])
    },
    methods: {
        ...mapMutations(['SHOW_HIDE_MODAL_TAB_MODAL']),
       stickTimeline() {
            // document.body.style.overflow = 'hidden';
        },
        beforeEnter() {
            
        }
    }
}
</script>


<style lang="scss" scoped>
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 10; /* Sit on top */
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.open {
    display: block;
}
/* Modal Content */
.modal-content {
    position: fixed;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s
}

/* Add Animation */
@-webkit-keyframes animatetop {
    from {top:-300px; opacity:0} 
    to {top:0; opacity:1}
}

@keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/* The Close Button */
.close {
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;
    float: right;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    // float: right;
}

.modal-header {
    padding: 10px;
    background-color: var(--c-blue);
    color: white;
    text-align: center;
    min-height: 40px;
    font-size: 20px;
    overflow: hidden;
}

.modal-body {
    margin-top: -14px;
}

.modal-footer {
    padding: 5px;
    position: fixed;
    height: 30px;
    width: 100%;
    bottom: 0;
    font-size: 30px;
    // text-align: center;
    background-color: var(--c-blue);
    color: white;
}
</style>

