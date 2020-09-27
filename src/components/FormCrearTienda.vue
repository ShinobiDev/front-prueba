<template>
<div class="container">
    <h4>Formulario para crear una tienda</h4>
    <br>
    <b-form class="col-6">
        <b-form-group>
            <b-form-input v-model="text" placeholder="Nombre de la tienda"></b-form-input>
        </b-form-group>
        <b-form-group>
            <label for="example-datepicker">Fecha de apertura</label>
            <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
        </b-form-group>
        <b-button variant="info">Crear Tienda</b-button>
    </b-form>

</div>
</template>
