<template>
<div>
    <NavFunciones></NavFunciones>
    <FormInvertirPalabras></FormInvertirPalabras>
    <ResultadoInvertirPalabra></ResultadoInvertirPalabra>
</div>
</template>

<script>
import NavFunciones from '../components/NavFunciones.vue'
import FormInvertirPalabras from '../components/FormInvertirPalabras.vue'
import ResultadoInvertirPalabra from '../components/ResultadoInvertirPalabra.vue'

export
default {
    name: 'About',
    components: {
        NavFunciones,
        FormInvertirPalabras,
        ResultadoInvertirPalabra
    }
}
</script>
