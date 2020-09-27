<template>
<div class="container">
    <h4>Formulario para editar una tienda</h4>
    <br>
    <b-form class="col-6">
        <b-form-group>
            <b-form-input v-model="text" placeholder="Sku del producto"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-button variant="info">Buscar Producto</b-button>
        </b-form-group>
    </b-form>
    <b-form class="col-6">
        <b-form-group>
            <b-form-input v-model="text" placeholder="Nombre del producto"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input v-model="text" placeholder="SKU"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input v-model="text" placeholder="Descripción"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input v-model="text" placeholder="Valor"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input v-model="text" placeholder="Tienda"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-file v-model="file1" :state="Boolean(file1)" placeholder="Buscar archivo de la imagen" drop-placeholder="Drop file here..."></b-form-file>
        </b-form-group>
        <b-form-group>
            <b-button variant="success">Editar Producto</b-button>
        </b-form-group>

    </b-form>

</div>
</template>

<script>
export default {
    data() {
        return {
            selected: null,
            options: [{
                    value: 'A',
                    text: 'Tienda A'
                },
                {
                    value: 'B',
                    text: 'Tienda B'
                }
            ]
        }
    }
}
</script>
