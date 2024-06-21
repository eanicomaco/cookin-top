# cookin-up

Este template deve ajudar você a começar a desenvolver com Vue 3 no Vite.

## Configuração de IDE Recomendada

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (e desative o Vetur).

## Suporte de Tipos para Importações de `.vue` em TS

O TypeScript não consegue lidar com informações de tipo para importações de `.vue` por padrão, então substituímos o `tsc` CLI pelo `vue-tsc` para verificação de tipos. Nos editores, precisamos do [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) para tornar o serviço de linguagem TypeScript ciente dos tipos `.vue`.

## Personalizar configuração

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