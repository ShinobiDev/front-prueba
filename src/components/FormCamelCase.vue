<template>
<div class="container">
    <div class="row justify-content-md-center">
        <p class="col-6">Ingrese una frase con las palabras separadas por espacios, guion y guion bajo y el sistema implementara Camel Case en ella.</p>
        <br>
    </div>
    <div class="row justify-content-md-center">
        <b-form class="col-6">
            <b-form-group>
                <b-form-input v-model="text" placeholder="Ingrese la frase"></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-button variant="info">Convertir</b-button>
            </b-form-group>
        </b-form>
    </div>
</div>
</template>
