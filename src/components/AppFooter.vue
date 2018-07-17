<template>
    <div class="row footer">
        <div>1.0<span><i class="fa fa-github"></i></span></div>
        <div class="trade-mark">Github Explorer By :- Amit Mundra</div>
    </div>
</template>
<style lang="scss">
.footer {
    grid-template-columns: 60px auto;
    background-color: var(--c-blue);
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 20px;
    padding: 12px;
    z-index: 30;
    color: white;
     @media (max-width: 768px) {
      font-size: 15px;
    }

    .trade-mark {
    text-align: right
    }
    i {
        margin: 0 0 0 5px;
        height: 20px;
    }
}

</style>
