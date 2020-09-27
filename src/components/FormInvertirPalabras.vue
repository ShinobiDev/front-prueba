<template>
<div class="container">
    <div class="row justify-content-md-center">
        <p class="col-6">Ingrese una frase y el sistema invertira las palabras que tengan mas de 5 letras.</p>
        <br>
    </div>
    <div class="row justify-content-md-center">
        <b-form class="col-6">
            <b-form-group>
                <b-form-input v-model="text" placeholder="Ingrese la frase"></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-button variant="info">Invertir palabras</b-button>
            </b-form-group>
        </b-form>
    </div>
</div>
</template>
