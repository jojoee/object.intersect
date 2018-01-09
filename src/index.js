/**
 * Intersect key
 * step 1, find init interaction obj by finding an obj that have minimum number of keys
 * step 2, find the intersectedKeys from all objects
 * step 3, copy value from key of first object
 *
 * @param {...Object.<string, any>} rest
 * @returns {Object.<string, any}
 */
function intersect (...rest) {
  if (rest.length === 1) return rest[0] || {}

  // step 1
  const keysList = rest.map(obj => {
    return Object.keys(obj)
  })
  const minNKeysIdx = keysList.reduce((resultIdx, currItems, idx) => {
    return keysList[resultIdx].length < currItems.length ? resultIdx : idx
  }, 0)

  // step 2
  const intersectedKeys = (keysList[minNKeysIdx] || []).filter((key, idx) => {
    return keysList.reduce((isKeyExist, keys, keyListIdx, arr) => {
      // return true, when same index of initObjKeys
      if (keyListIdx === minNKeysIdx) return true
      return isKeyExist && keys.indexOf(key) !== -1
    }, true)
  })

  // step 3
  return intersectedKeys.reduce((intersectedObject, key) => {
    intersectedObject[key] = rest[0][key]
    return intersectedObject
  }, {})
}

/* istanbul ignore next */
if (typeof module !== 'undefined' &&
  module.exports != null) {
  module.exports = intersect
}
