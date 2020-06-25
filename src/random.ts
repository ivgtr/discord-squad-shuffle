export const random = (min = 0, max = 10): number => {
  const num = Math.floor(Math.random() * (max + 1 - min)) + min
  return num
}

export const action = ([...array]: string[]): string[] => {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default random
