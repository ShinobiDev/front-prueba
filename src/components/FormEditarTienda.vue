<template>
<div class="container">
    <h4>Formulario para editar una tienda</h4>
    <br>
    <b-form class="col-6">
        <b-form-group>
            <b-form-select v-model="selected" :options="options" class="mb-3">
                <!-- This slot appears above the options from 'options' prop -->
                <template v-slot:first>
                    <b-form-select-option :value="null" disabled>-- Seleccione la tienda para editar --</b-form-select-option>
                </template>

                <!-- These options will appear after the ones from 'options' prop -->
                <b-form-select-option value="C">Tienda 1</b-form-select-option>
                <b-form-select-option value="D">Tienda 2</b-form-select-option>
            </b-form-select>
        </b-form-group>
        <b-form-group>
            <b-button variant="info">Buscar tienda</b-button>
        </b-form-group>
    </b-form>
    <b-form class="col-6">
        <b-form-group>
            <b-form-input v-model="text" placeholder="Nombre de la tienda"></b-form-input>
        </b-form-group>
        <b-form-group>
            <label for="example-datepicker">Fecha de apertura</label>
            <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
        </b-form-group>
        <b-button variant="success">Crear Tienda</b-button>
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
