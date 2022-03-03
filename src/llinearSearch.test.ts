import linearSearch from "./linearSearch"

test("index of 3 in array [1,2,3,4,5] is 2", () => {
    const arr = [1, 2, 3, 4, 5]
    expect(linearSearch(arr, 3)).toBe(2)
})
