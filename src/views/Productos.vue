<template>
<div>
    <NavProductos></NavProductos>
    <br>
    <div class="row justify-content-md-center">
        <h4 class="col-6">Prodcutos</h4>
        <br>
    </div>
    <br>
    <TablaTiendas></TablaTiendas>
</div>
</template>

<script>
import NavProductos from '../components/NavProductos.vue'
import TablaTiendas from '../components/TablaTiendas.vue'

export
default {
    name: 'About',
    components: {
        NavProductos,
        TablaTiendas
    }
}
</script>
