### Componente: `TheBreadcrumb`

Este componente encapsula o componente `Breadcrumb` do PrimeVue, fornecendo flexibilidade na configuração de itens de navegação e suporte para links personalizados com `vue-router`.

---

### Uso

```vue
<template>
  <CustomBreadcrumb
    :items="[
      { label: 'Home', route: '/' },
      { label: 'Produtos', route: '/produtos' },
      { label: 'Detalhes', route: '/produtos/detalhes' },
    ]"
  />
</template>

<script setup lang="ts">
import CustomBreadcrumb from "@/components/CustomBreadcrumb.vue";
</script>
```

---

### Propriedades

| Propriedade | Tipo                | Padrão | Descrição                                                                                         |
| ----------- | ------------------- | ------ | ------------------------------------------------------------------------------------------------- |
| `items`     | `BreadcrumbItems[]` | `[]`   | Lista de objetos representando os itens do breadcrumb. Cada objeto pode conter `label` e `route`. |

---

### Estrutura de `BreadcrumbItems`

Cada item deve ser configurado como um objeto com as seguintes propriedades:

| Propriedade | Tipo     | Padrão      | Descrição                                                                        |
| ----------- | -------- | ----------- | -------------------------------------------------------------------------------- |
| `label`     | `string` | `undefined` | O texto exibido no breadcrumb.                                                   |
| `route`     | `string` | `undefined` | Rota associada ao item. Se definida, será usada para navegação com `vue-router`. |

---

### Exemplo de Configuração

#### Breadcrumb Simples:

```vue
<template>
  <CustomBreadcrumb
    :items="[
      { label: 'Home', route: '/' },
      { label: 'Sobre', route: '/sobre' },
    ]"
  />
</template>
```

#### Breadcrumb Com Link Externo:

```vue
<template>
  <CustomBreadcrumb
    :items="[
      { label: 'Documentação', route: '/docs' },
      { label: 'Ajuda', route: undefined },
    ]"
  />
</template>
```

---

### Personalização

O componente suporta o uso de slots para personalizar a renderização dos itens.

#### Exemplo de Customização:

```vue
<template>
  <CustomBreadcrumb :items="breadcrumbItems">
    <template #item="{ item }">
      <a :href="item.route" class="custom-breadcrumb-item">
        {{ item.label }}
      </a>
    </template>
  </CustomBreadcrumb>
</template>

<script setup lang="ts">
const breadcrumbItems = [
  { label: "Home", route: "/" },
  { label: "Loja", route: "/store" },
];
</script>
```

---

### Notas

- Este componente é baseado no componente `Breadcrumb` do PrimeVue. Consulte a [documentação oficial do PrimeVue](https://primefaces.org/primevue/) para mais informações.
- Links são renderizados como `router-link` se a propriedade `route` for fornecida. Caso contrário, um link simples (`<a>`) é usado.

---
