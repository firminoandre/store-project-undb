# Documentação da Store do Carrinho

## Visão Geral

A `useCartStore` é uma store do Pinia para gerenciar o carrinho de compras em uma aplicação Vue.js 3 utilizando TypeScript. Ela fornece estado, getters e ações para lidar com a funcionalidade do carrinho, incluindo adicionar/remover itens, atualizar quantidades e controlar a visibilidade do carrinho.

---

## Estado (State)

### `items: Ref<CartItem[]>`

- **Descrição**: Armazena os itens atualmente no carrinho.
- **Tipo**: `CartItem[]`

### `isCartVisible: Ref<boolean>`

- **Descrição**: Controla se o carrinho está visível ou não.
- **Tipo**: `boolean`

---

## Getters

### `totalItems: Computed<number>`

- **Descrição**: Retorna o número total de itens no carrinho.
- **Tipo**: `number`
- **Cálculo**: Soma as quantidades de todos os itens no carrinho.

### `totalAmount: Computed<number>`

- **Descrição**: Retorna o valor total dos itens no carrinho.
- **Tipo**: `number`
- **Cálculo**: Soma o preço multiplicado pela quantidade de cada item no carrinho.

### `cartIsEmpty: Computed<boolean>`

- **Descrição**: Verifica se o carrinho está vazio.
- **Tipo**: `boolean`

---

## Ações (Actions)

### `addItem(product: Product, quantity: number = 1): void`

- **Descrição**: Adiciona um item ao carrinho. Se o item já existir, aumenta a quantidade.
- **Parâmetros**:
  - `product`: O produto a ser adicionado.
  - `quantity` (opcional): Quantidade do produto. Padrão é `1`.
- **Efeito Colateral**: O carrinho será exibido automaticamente após adicionar um item.

### `removeItem(productId: number): void`

- **Descrição**: Remove um item do carrinho pelo ID do produto.
- **Parâmetros**:
  - `productId`: O ID do produto a ser removido.

### `updateQuantity(productId: number, quantity: number): void`

- **Descrição**: Atualiza a quantidade de um item no carrinho.
- **Parâmetros**:
  - `productId`: O ID do produto.
  - `quantity`: Nova quantidade. Se for `0` ou menor, o item será removido.

### `clearCart(): void`

- **Descrição**: Remove todos os itens do carrinho.

### `showCart(): void`

- **Descrição**: Exibe o carrinho.

### `hideCart(): void`

- **Descrição**: Oculta o carrinho.

### `toggleCart(): void`

- **Descrição**: Alterna entre exibir e ocultar o carrinho.

---

## Tipos Utilizados

### `Rating`

```typescript
interface Rating {
  rate: number;
  count: number;
}
```

### `Product`

```typescript
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
```

- **Descrição**: Representa um produto disponível para adicionar ao carrinho.

### `CartItem`

```typescript
export interface CartItem extends Product {
  quantity: number;
}
```

- **Descrição**: Representa um item no carrinho, incluindo a quantidade.

---

## Como Usar

### Importando a Store

```typescript
import { useCartStore } from "@/stores/cart";
```

### Exemplo de Uso

```typescript
const cartStore = useCartStore();

// Adicionar um produto ao carrinho
cartStore.addItem(product, 2);

// Remover um produto do carrinho
cartStore.removeItem(1);

// Atualizar a quantidade de um item
cartStore.updateQuantity(1, 5);

// Obter o total de itens e o valor total
console.log(cartStore.totalItems); // Número total de itens
console.log(cartStore.totalAmount); // Valor total do carrinho
```

---

## Notas

- A funcionalidade de exibir automaticamente o carrinho ao adicionar um item é opcional e pode ser removida/modificada conforme necessário.
- A store é projetada para ser reativa, aproveitando os recursos do Vue 3 e Pinia para atualizações em tempo real.
