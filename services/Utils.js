export const Utils = {
  categoryToIcon: (category) => {
    return categoryToIcon(category)
  },
  getObjectCopy: (obj) => {
    return getObjectCopy(obj)
  },
  findOperationById: (list, id) => {
    return treeSearch({ operations: list }, id)
  },
  removeOperationById: (list, id) => {
    return treeClean(list, id)
  },
  groupBy: (arr, prop) =>
    arr.reduce((acc, val) => {
      ;(acc[val[prop]] = acc[val[prop]] || []).push(val)
      return acc
    }, {})
}

export function treeSearch (item, id) {
  let result
  if (item && item.id === id) {
    result = item
  } else if (item && item.operations) {
    item.operations.forEach((subItem) => {
      const subResult = treeSearch(subItem, id)
      if (subResult) {
        result = subResult
      }
    })
  }
  return result
}
export function treeClean (list, id) {
  if (list) {
    return list.filter((item) => {
      if (item.operations) {
        item.operations = treeClean(item.operations, id)
      }
      return item.id !== id
    })
  }
}

export function categoryToIcon (category) {
  switch (category) {
    case 'FILE':
      return 'folder-tree'
    case 'MAPPING':
      return 'sliders'
    case 'SCHEDULER':
      return 'calendar-days'
    case 'LOOP':
      return 'repeat'
    case 'SWITCH':
      return 'shuffle'
    case 'EXCEPTION':
      return 'triangle-exclamation'
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
