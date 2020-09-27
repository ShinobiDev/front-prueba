<template>
<div class="container">
    <div class="row justify-content-md-center">
        <div class="col-6">
            <b-table striped hover :items="items" :fields="fields"></b-table>
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
            items: [{
                    id: 40,
                    Nombre: 'Dickerson',
                    Apertura: '02-02-2020'
                },
                {
                    id: 40,
                    Nombre: 'Dickerson',
                    Apertura: '02-02-2020'
                },
                {
                    id: 40,
                    Nombre: 'Dickerson',
                    Apertura: '02-02-2020'
                },
                {
                    id: 40,
                    Nombre: 'Dickerson',
                    Apertura: '02-02-2020'
                }
            ]
        }
    },
    methods: {
        async getTiendas() {
            let datos = await axios.get(`http://localhost/treda/public/api/getTiendas`, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log(datos);
        }
    },
    created() {
        this.getTiendas()
    }
}
</script>
