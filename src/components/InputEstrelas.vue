<template>
    <div>
        <i v-for="estrela in estrelas" :key="estrela.id" :class="estrela.estilo"></i>
        {{ estrelas }}
    </div>
</template>

<script>
export default {
    name: 'InputEstrelas',
    props: {
        numeroEstrelas: {
            type: Number,
            required: true
        }
    },
    data: () => ({
        estrelas: []
    }),
    created() {
        console.log('Número de estrelas: ', this.numeroEstrelas);
        this.iniciarEstrelas();
    },
    methods: {
        iniciarEstrelas() {
            for(let i = 0; i < this.numeroEstrelas; i++) {
                //console.log('estrela', i);
                this.estrelas[i] = { id: i, estilo: 'bi-star estrela' }
            }
        }
    }
}
</script>

<style scoped>
    .estrela {
        font-size: 1.5rem;
        color: #999;
        margin-left: 1px;
        margin-right: 1px;
    }
</style>