<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import Tag from './Tag.vue';

const selecionado = ref(false);

const props = defineProps<{
    ingrediente: string;
}>();

const emit = defineEmits<{
    (e: 'adicionarIngrediente', ingrediente: string): void;
    (e: 'removerIngrediente', ingrediente: string): void;
}>()

function aoClicar() {
    selecionado.value = !selecionado.value;
    if (selecionado.value) {
        emit('adicionarIngrediente', props.ingrediente);
    } else {
        emit('removerIngrediente', props.ingrediente);
    }
}
</script>

<template>
    <!-- @click = v-on:click -->
    <button class="ingrediente" @click="aoClicar" :aria-pressed="selecionado">
        <Tag :texto="ingrediente" :ativa="selecionado" /> <!-- ativa faz mudar a cor pra laranja -->
    </button>
</template>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>