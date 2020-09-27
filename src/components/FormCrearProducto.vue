<template>
<div class="container">
    <h4>Formulario para crear un producto</h4>
    <br>
    <b-form class="col-6">
        <b-form-group>
            <b-form-input v-model="text" placeholder="Nombre del poducto"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input v-model="text" placeholder="SKU del poducto"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input v-model="text" placeholder="Descripción del poducto"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input v-model="text" placeholder="Valor del poducto"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-select v-model="selected" :options="options" class="mb-3">
                <!-- This slot appears above the options from 'options' prop -->
                <template v-slot:first>
                    <b-form-select-option :value="null" disabled>-- Seleccione la tienda --</b-form-select-option>
                </template>

                <!-- These options will appear after the ones from 'options' prop -->
                <b-form-select-option value="C">Tienda 1</b-form-select-option>
                <b-form-select-option value="D">Tienda 2</b-form-select-option>
            </b-form-select>
        </b-form-group>
        <b-form-group>
            <b-form-file v-model="file1" :state="Boolean(file1)" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..."></b-form-file>
        </b-form-group>

        <b-button variant="info">Crear Tienda</b-button>
    </b-form>

</div>
</template>
