export const Utils = {
  categoryToIcon: (category) => {
    return categoryToIcon(category)
  },
  getObjectCopy: (obj) => {
    return getObjectCopy(obj)
  }
}

export function categoryToIcon (category) {
  switch (category) {
    case 'FILE':
      return 'folder-tree'
    case 'MAPPING':
      return 'sliders'
    case 'KAFKA':
      return 'atom'
    default:
      return 'plus'
  }
}
export function getObjectCopy (obj) {
  if (obj && typeof (obj) === 'object') {
    const copy = {}
    for (const p in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, p)) {
        copy[p] = obj[p]
      }
    }
    return copy
  }
  return obj
}
