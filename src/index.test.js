const intersect = require('./index')

const emptyObject = {}
const obj = {
  first: 'first',
  second: 2
}
const obj1 = { a: 'a', b: 'b', c: 'c', d: 'd', e: obj }
const obj2 = Object.assign({}, obj1, { b: 'x' })
const obj3 = { a: 'a', c: 'c' } // subset of obj1
const obj4 = { d: 'd', a: 'a', b: 'b', c: 'c', e: obj } // re-order from obj1

describe('invalid params, return empty object', () => {
  test('no params', () => {
    expect(intersect()).toEqual(emptyObject)
  })

  test('empty object', () => {
    expect(intersect(emptyObject)).toEqual(emptyObject)
  })

  test('null', () => {
    expect(intersect(null)).toEqual(emptyObject)
  })

  test('undefined', () => {
    expect(intersect(undefined)).toEqual(emptyObject)
  })
})

describe('valid params', () => {
  test('2 params (save key, same value)', () => {
    expect(intersect(obj1, obj3)).toEqual(obj3)
  })

  test('2 params (same key but difference value, will take from the first)', () => {
    expect(intersect(obj1, obj2)).toEqual(obj1)
  })

  test('2 same params (re-order)', () => {
    expect(intersect(obj1, obj4)).toEqual(obj1)
  })

  test('3 params', () => {
    expect(intersect(obj1, obj3, obj2)).toEqual({
      a: 'a',
      c: 'c'
    })
  })
})
