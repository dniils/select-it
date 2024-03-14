/* eslint-disable */
import { compareNodes } from './compareNodes'

describe('compareNodes', () => {
  // Mock DOM with html elements
  beforeAll(() => {
    document.body.innerHTML = `
    <div class="table">
      <apple class=small></apple>
      <plate>
        <orange></orange>
      </plate>
      <orange></orange>
      <apple class="small"></apple>
      <apple></apple>
      <apple></apple>
    </div>
    `
  })

  it('returns true when arrays have the same elements in the same order', () => {
    const a: Node[] = Array.from(document.querySelectorAll('apple'))
    const b: Node[] = Array.from(document.querySelectorAll('apple'))
    expect(compareNodes(a, b)).toBe(true)
  })

  it('returns true when arrays have the same elements in different order', () => {
    const a: Node[] = Array.from(document.querySelectorAll('apple'))
    const b: Node[] = Array.from(document.querySelectorAll('apple')).reverse()
    expect(compareNodes(a, b)).toBe(true)
  })

  it('returns false when arrays have different elements but same lengths', () => {
    const a: Node[] = Array.from(document.querySelectorAll('apple.small'))
    const b: Node[] = Array.from(document.querySelectorAll('apple'))
    expect(compareNodes(a, b)).toBe(false)
  })

  it('returns false when arrays have different elements and different lengths', () => {
    const a: Node[] = Array.from(document.querySelectorAll('plate'))
    const b: Node[] = Array.from(document.querySelectorAll('apple'))
    expect(compareNodes(a, b)).toBe(false)
  })

  it('returns false when one of the arrays is empty', () => {
    const a: Node[] = []
    const b: Node[] = Array.from(document.querySelectorAll('orange'))
    expect(compareNodes(a, b)).toBe(false)
  })

  it('returns true when both of the arrays are empty', () => {
    const a: Node[] = []
    const b: Node[] = []
    expect(compareNodes(a, b)).toBe(true)
  })
})
