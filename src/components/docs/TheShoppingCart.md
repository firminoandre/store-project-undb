Este componente Vue implementa um carrinho de compras que utiliza o estado global gerenciado pela `useCartStore`. Ele apresenta uma interface deslizante que exibe os itens do carrinho, permitindo ao usuário visualizar, remover produtos ou continuar a compra. A seguir está uma explicação detalhada de sua estrutura e funcionalidade:

---

### **Estrutura e funcionalidade**

#### **1. Script Setup (Gerenciamento de Estado)**

- **Importações**:
  - `useCartStore`: Store responsável por gerenciar o estado do carrinho.
  - `TheButton`: Componente reutilizável para botões estilizados.
- **cartStore**:
  - Inicializa o estado global do carrinho para ser usado no template. É possível acessar métodos e propriedades como `items`, `toggleCart`, `removeItem`, `cartIsEmpty`, e `totalAmount`.

---

#### **4. Lista de Itens**

- **Itens renderizados dinamicamente**:
  - A lista de produtos é renderizada utilizando `v-for`, com os itens provenientes de `cartStore.items`.
  - Cada item exibe:
    - Imagem do produto (`item.image`).
    - Título e preço do produto.
    - Categoria e quantidade do produto.
    - Botão para remover o item (`@click="cartStore.removeItem(item.id)"`).
- **Estado vazio**:
  - Caso o carrinho esteja vazio (`cartStore.cartIsEmpty`), é exibida a mensagem: _"Seu carrinho está vazio"_.

---

#### **5. Resumo do Pedido**

- **Total**:
  - Exibe o total do carrinho com a propriedade `cartStore.totalAmount`.
  - Informa que as taxas de entrega não estão inclusas.
- **Botão de Pagamento**:
  - Um botão estilizado que leva o usuário para a etapa de pagamento.
- **Opção de Continuar Comprando**:
  - Um link que redireciona o usuário para a página de produtos (`RouterLink`).

---
