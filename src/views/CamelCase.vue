<template>
<div>
    <NavFunciones></NavFunciones>
    <FormCamelCase></FormCamelCase>
    <ResultadoCamelCase></ResultadoCamelCase>
</div>
</template>

<script>
import NavFunciones from '../components/NavFunciones.vue'
import FormCamelCase from '../components/FormCamelCase.vue'
import ResultadoCamelCase from '../components/ResultadoCamelCase.vue'

export
default {
    name: 'About',
    components: {
        NavFunciones,
        FormCamelCase,
        ResultadoCamelCase
    }
}
</script>
