import binarySearch from "./binarySearch"

test("index of 3 in array [1,2,3,4,5] is 2", () => {
    const arr = [1, 2, 3, 4, 5]
    expect(binarySearch(arr, 3, 0, arr.length - 1)).toBe(2)
})
