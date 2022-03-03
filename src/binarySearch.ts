/**
 * Binary Search
 * @param {Array<number>} arr
 * @param {number} target
 * @param {number} left
 * @param {number} right
 * @returns  {number}
 */
const binarySearch = (arr: number[], target: number, left: number, right: number): number => {
    if (left > right) return -1

    const mid = Math.floor((right + left) / 2)

    if (arr[mid] === target) return mid

    if (arr[mid] > target) {
        // 1,2,3,4,5
        return binarySearch(arr, target, left, mid - 1)
    } else {
        return binarySearch(arr, target, mid + 1, right)
    }
}

export default binarySearch
