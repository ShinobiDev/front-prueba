<template>
<div class="container">
    <div class="row justify-content-md-center">
        <h4 class="col-6">Formulario para eliminar una tienda</h4>
        <br>
    </div>
    <div class="row justify-content-md-center">
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
    </div>
    <div class="row justify-content-md-center">
        <b-form class="col-6">
            <div>
                <b-table striped hover :items="items" :fields="fields"></b-table>
            </div>
            <b-form-group>
                <b-button variant="danger">Eliminar tienda</b-button>
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
            fields: ['id', 'Nombre', 'Apertura'],
            items: [{
                id: 40,
                Nombre: 'Dickerson',
                Apertura: '02-02-2020'
            }]
        }
    }
}
</script>
