<template>
<div class="container">
    <div class="row justify-content-md-center">
        <div class="col-6">

            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Fecha Apertura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tienda in tiendas">
                        <td>{{ tienda.id }}</td>
                        <td>{{ tienda.nombre }}</td>
                        <td>{{ tienda.fecha_apertura }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            // Note `isActive` is left out and will not appear in the rendered table
            fields: ['id', 'Nombre', 'Apertura'],
            items: null,
            tiendas: []
        }
    },
    methods: {
        async getTiendas() {
            let datos = await axios.get(`http://localhost/treda/public/api/getTiendas`, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            let tiendas = datos.data.data;
            console.log(tiendas);
            this.tiendas = tiendas;
        }
    },
    created() {
        this.getTiendas()
    }
}
</script>
