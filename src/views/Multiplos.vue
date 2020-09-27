<template>
<div>
    <NavFunciones></NavFunciones>
    <FormMultiplos></FormMultiplos>
    <ResultadoMultiplos></ResultadoMultiplos>
</div>
</template>

<script>
import NavFunciones from '../components/NavFunciones.vue'
import FormMultiplos from '../components/FormMultiplos.vue'
import ResultadoMultiplos from '../components/ResultadoMultiplos.vue'

export
default {
    name: 'About',
    components: {
        NavFunciones,
        FormMultiplos,
        ResultadoMultiplos
    }
}
</script>
