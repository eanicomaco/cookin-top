<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { obterCategorias } from '@/http/index'; //@ refere-se ao src
import type ICategoria from '@/interfaces/ICategoria';
import CardCategoria from './CardCategoria.vue';
import BotaoPrincipal from './includes/BotaoPrincipal.vue';

const categorias = ref<ICategoria[]>([])

onMounted(async () => {
  categorias.value = await obterCategorias();
});

const emits = defineEmits<{
  (e: 'adicionarIngrediente', ingrediente: string): void;
  (e: 'removerIngrediente', ingrediente: string): void;
  (e: 'buscarReceitas'): void;
}>()
</script>
<script lang="ts">
export default {
  name: 'SelecionarIngredientes'
};
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

    <p class="paragrafo-lg intrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita.
    </p>

    <ul class="categorias">
      <li v-for="categoria in categorias" :key="categoria.nome">
        <CardCategoria :categoria="categoria" @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
          @remover-ingrediente="$emit('removerIngrediente', $event)" />
      </li>
    </ul>

    <p class="paragrafo dica">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>

    <BotaoPrincipal texto="Buscar receitas!" @click="$emit('buscarReceitas')" />
  </section>
</template>

<style escoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>