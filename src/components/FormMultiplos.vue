<template>
<div class="container">
    <div class="row justify-content-md-center">
        <p class="col-6">Ingrese un numero y el sistema realizara la suma de todos los multiplos de 3 y 5 menores al numero ingresado.</p>
        <br>
    </div>
    <div class="row justify-content-md-center">
        <b-form class="col-6">
            <b-form-group>
                <b-form-input v-model="text" placeholder="Ingrese un numero"></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-button variant="info">Realizar calculo</b-button>
            </b-form-group>
        </b-form>
    </div>
</div>
</template>
