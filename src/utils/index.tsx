export const formatDescription = (description: string, size: number) => {
  if (description.length > size) {
    return description.slice(0, size - 3) + '...'
  }
  return description
}

export const getTotalPrice = (items: Dish[]) => {
  return items.reduce((total, current) => total + current.preco, 0)
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
