const formatDescription = (description: string, size: number) => {
  if (description.length > size) {
    return description.slice(0, size - 3) + '...'
  }
  return description
}

export default formatDescription
