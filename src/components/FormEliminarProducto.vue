<template>
<div class="container">
    <div class="row justify-content-md-center">
        <h4 class="col-6">Formulario para eliminar un producto</h4>
        <br>
    </div>
    <div class="row justify-content-md-center">
        <b-form class="col-6">
            <b-form-group>
                <b-form-input v-model="text" placeholder="SKU del producto que desea eliminar"></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-button variant="info">Buscar producto</b-button>
            </b-form-group>
        </b-form>
    </div>
    <div class="row justify-content-md-center">
        <b-form class="col-10">
            <div>
                <b-table striped hover :items="items" :fields="fields"></b-table>
            </div>
            <b-form-group>
                <b-button variant="danger">Eliminar producto</b-button>
            </b-form-group>
        </b-form>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            // Note `isActive` is left out and will not appear in the rendered table
            fields: ['id', 'Nombre', 'SKU', 'Descripción', 'Valor', 'Tienda', 'Imagen'],
            items: [{
                id: 40,
                Nombre: 'Dickerson',
                SKU: '2343',
                Descripción: 'Descripcion del producto',
                Valor: '3.500',
                Tienda: 'La mejor',
                Imagen: 'defwfr.jpg'

            }]
        }
    }
}
</script>
