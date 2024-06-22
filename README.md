# cookin-up

Clique [aqui](https://actcontrol.vercel.app/) e visualize o projeto publicado no Vercel!

App desenvolvido com Vue 3 no Vite. O sistema apresenta uma lista de ingredientes categorizados. Ao selecionar os ingredientes disponíveis, o sistema apresenta uma lista de receitas que podem ser executadas com os ingredientes selecionados.

O sistema faz uso de duas APIs json uma contendo as [categorias de ingredientes](https://gist.githubusercontent.com/eanicomaco/a05a10efe349b95663356fd17e0b9361/raw/29f8ad3dde6746c563481b9ee3ad99adf409df4e/categorias.json) e a outra apresentando uma [lista de receitas](https://gist.githubusercontent.com/eanicomaco/29dcaf960adfdfa4d740d94e774dc22e/raw/92656451221eeb63877fe6ef12c53622d01891d3/receitas.json).

## Configuração de IDE Recomendada

[VSCode](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (e desative o Vetur).

## Suporte de Tipos para Importações de `.vue` em TS

O TypeScript não consegue lidar com informações de tipo para importações de `.vue` por padrão, então substituímos o `tsc` CLI pelo `vue-tsc` para verificação de tipos. Nos editores, precisamos do [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) para tornar o serviço de linguagem TypeScript ciente dos tipos `.vue`.

## Saiba mais sobre o Vite

Veja [Referência de Configuração do Vite](https://vitejs.dev/config/).

## Configuração do Projeto

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```