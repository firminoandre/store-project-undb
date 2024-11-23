### Componente: `TheButton`

Este componente encapsula o componente `Button` do PrimeVue, adicionando flexibilidade e suporte a propriedades personalizadas.

---

### Uso

```vue
<template>
  <CustomButton
    label="Clique Aqui"
    icon="pi pi-check"
    iconPosition="right"
    :isLoading="false"
    :disable="false"
    variant="outlined"
  />
</template>

<script setup lang="ts">
import CustomButton from "@/components/CustomButton.vue";
</script>
```

---

### Propriedades

| Propriedade    | Tipo                             | Padrão      | Descrição                                                                         |
| -------------- | -------------------------------- | ----------- | --------------------------------------------------------------------------------- |
| `label`        | `string`                         | `undefined` | Texto exibido no botão.                                                           |
| `icon`         | `string`                         | `undefined` | Nome do ícone exibido no botão (seguindo a convenção de ícones do PrimeVue).      |
| `iconPosition` | `'right' \| 'top' \| 'bottom'`   | `"right"`   | Posição do ícone em relação ao texto do botão.                                    |
| `isLoading`    | `boolean`                        | `false`     | Define se o botão exibirá um indicador de carregamento.                           |
| `disable`      | `boolean`                        | `false`     | Desativa o botão se definido como `true`.                                         |
| `variant`      | `"outlined" \| "text" \| "link"` | `"text"`    | Define o estilo do botão entre os tipos disponíveis (`outlined`, `text`, `link`). |

---

### Exemplo de Configuração

#### Botão Com Ícone e Carregando:

```vue
<template>
  <CustomButton
    label="Carregando..."
    icon="pi pi-spinner"
    :isLoading="true"
    disable
    variant="outlined"
  />
</template>
```

#### Botão Simples:

```vue
<template>
  <CustomButton
    label="Salvar"
    icon="pi pi-save"
    iconPosition="top"
    :isLoading="false"
    :disable="false"
    variant="text"
  />
</template>
```

---

### Notas

- Este componente é baseado no componente `Button` do PrimeVue. Consulte a [documentação oficial do PrimeVue](https://primefaces.org/primevue/) para mais detalhes sobre suas funcionalidades básicas.
- O componente aceita todas as classes e estilos globais aplicáveis aos botões do PrimeVue.

---
