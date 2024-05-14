declare type Dish = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Dish[]
}

declare type DeliveryInfo = {
  receiver: string
  description: string
  city: string
  zipCode: string
  number: string
  complement: string
}

declare type PaymentInfo = {
  cardName: string
  cardNumber: string
  cardCode: string
  cardExpirationMonth: string
  cardExpirationYear: string
}

declare type Product = {
  id: number
  price: number
}

declare type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

declare type PurchaseResponse = {
  orderId: string
}
