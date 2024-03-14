function compareNodes(a: Node[], b: Node[]): boolean {
  if (a.length !== b.length) return false
  return a.every((_, i) => a.includes(b[i]))
}

export { compareNodes }
