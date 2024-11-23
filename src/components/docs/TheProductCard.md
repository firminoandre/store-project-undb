### Componente: `TheProductCard`

Este componente exibe as informações detalhadas de um produto, incluindo título, avaliações, preço e status de pré-venda. Ele é ideal para compor uma lista de produtos ou destacar um produto específico em uma página de e-commerce.

---

### Uso

```vue
<template>
  <ProductCard
    :id="1"
    title="Produto Exemplo"
    reviewsNumber="120"
    scoreNumber="4"
    :preOrderDetails="['fastDelivery', 'bestSeller']"
    price="199.99"
    offPrice="149.99"
    image="https://via.placeholder.com/150"
  />
</template>

<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
</script>
```

---

### Propriedades

| Propriedade       | Tipo                                                | Padrão      | Descrição                                                                         |
| ----------------- | --------------------------------------------------- | ----------- | --------------------------------------------------------------------------------- |
| `id`              | `number`                                            | -           | Identificador único do produto. Usado para rotas de detalhes.                     |
| `title`           | `string`                                            | -           | Título ou nome do produto.                                                        |
| `reviewsNumber`   | `number`                                            | -           | Número total de avaliações do produto.                                            |
| `scoreNumber`     | `number`                                            | -           | Pontuação média do produto (de 0 a 5).                                            |
| `preOrderDetails` | `('fastDelivery' \| 'bestSeller' \| 'bestPrice')[]` | `[]`        | Lista de status de pré-venda. Cada valor representa um ícone e texto específicos. |
| `price`           | `number`                                            | -           | Preço do produto em reais.                                                        |
| `offPrice`        | `number`                                            | `undefined` | Preço com desconto do produto.                                                    |
| `image`           | `string`                                            | -           | URL da imagem do produto.                                                         |

---

### Slots

O componente não possui slots customizáveis, mas você pode modificar seu comportamento utilizando as propriedades listadas.

---

### Exemplo de Configuração

#### Produto Simples:

```vue
<template>
  <ProductCard
    :id="101"
    title="Cadeira Gamer"
    reviewsNumber="350"
    scoreNumber="4.5"
    :preOrderDetails="['bestPrice']"
    price="1299.99"
    image="https://via.placeholder.com/150"
  />
</template>
```

#### Produto Com Desconto e Vários Status:

```vue
<template>
  <ProductCard
    :id="102"
    title="Notebook Ultrafino"
    reviewsNumber="1200"
    scoreNumber="5"
    :preOrderDetails="['fastDelivery', 'bestSeller', 'bestPrice']"
    price="4599.99"
    offPrice="3999.99"
    image="https://via.placeholder.com/150"
  />
</template>
```

---

### Detalhes Adicionais

1. **Avaliações e Estrelas:**

   - A pontuação é representada visualmente por até 5 estrelas preenchidas ou vazias.
   - O número de avaliações é exibido ao lado.

2. **Status de Pré-Venda:**

   - Cada status exibe um ícone específico e texto correspondente:
     - `fastDelivery`: "Entrega rápida" (ícone verde).
     - `bestSeller`: "Líder de vendas" (ícone cinza).
     - `bestPrice`: "Melhor preço" (ícone cinza).

3. **Botão de Compra:**

   - Um botão estilizado para adicionar o produto ao carrinho está incluído no rodapé do card.

4. **Navegação:**
   - A imagem e o título do produto redirecionam para uma rota de detalhes configurada com base no `id`.

---

### Notas

- Este componente usa `TheButton` para o botão de compra, que pode ser estilizado ou substituído conforme necessário.
- Os ícones e estilos seguem padrões pré-definidos do PrimeVue e do TailwindCSS.
- Certifique-se de configurar corretamente as rotas no Vue Router para suportar a navegação do produto.

---
