<template>
<div class="container">
    <h4>Formulario para crear una tienda</h4>
    <br>
    <b-form class="col-6">
        <b-form-group>
            <b-form-input v-model="nombre" placeholder="Nombre de la tienda"></b-form-input>
        </b-form-group>
        <b-form-group>
            <label for="example-datepicker">Fecha de apertura</label>
            <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
        </b-form-group>
        <b-button variant="info" v-on:click="crearTienda()">Crear Tienda</b-button>
    </b-form>

</div>
</template>

<script>
import axios from "axios";
export default {
    methods: {
        crearTienda: function () {
            axios.post(`http://localhost/treda/public/api/crearTienda`, {
                name: 'Moriarty',
                enemy: 'Sherlock'
            }).then(response => {
                console.log('Se alamacenaron los datos con exito')
            }).catch(e => {
                console.log(e);
            });
        }
    }
}
</script>
