import { newPlot } from "plotly.js-dist-min"
import binarySearch from "./binarySearch"
import linearSearch from "./linearSearch"

interface InitialState {
    sizes: number[]
    times: number[]
}
interface Result {
    bestCase: InitialState
    avgCase: InitialState
    worstCase: InitialState
}
const generateForLinear = () => {
    const result: Result = {
        bestCase: {
            sizes: [],
            times: [],
        },
        avgCase: {
            sizes: [],
            times: [],
        },
        worstCase: {
            sizes: [],
            times: [],
        },
    }

    const arr = Array.from(Array(1000000).keys()) // 0,1,2,...1000000

    const data: Array<number[]> = []

    for (let i = 0; i < arr.length; i = i + 1000) {
        data.push(arr.slice(0, i))
        // 1000
        // 2000
        // 3000
    }

    // Best case
    data.forEach((arr) => {
        const bestCaseOption = arr[0]
        const t1 = performance.now()
        linearSearch(arr, bestCaseOption)
        const t2 = performance.now()

        result.bestCase.sizes.push(arr.length)
        result.bestCase.times.push(t2 - t1)
    })
    // Avg case
    data.forEach((arr) => {
        const avgCaseOption = Math.floor(Math.random() * arr.length)
        const t1 = performance.now()
        linearSearch(arr, avgCaseOption)
        const t2 = performance.now()

        result.avgCase.sizes.push(arr.length)
        result.avgCase.times.push(t2 - t1)
    })
    // Worst case
    data.forEach((arr) => {
        const worstCaseOption = arr[arr.length - 1]
        const t1 = performance.now()
        linearSearch(arr, worstCaseOption)
        const t2 = performance.now()

        result.worstCase.sizes.push(arr.length)
        result.worstCase.times.push(t2 - t1)
    })

    const bestCasePlotData = {
        x: result.bestCase.sizes,
        y: result.bestCase.times,
        name: "Best Case",
        mode: "line",
        line: {
            color: "rgb(255, 0,0)",
        },
    }
    const avgCasePlotData = {
        x: result.avgCase.sizes,
        y: result.avgCase.times,
        name: "Avg Case",
        mode: "line",
        line: {
            color: "rgb(0, 255,0)",
        },
    }
    const worstCasePlotData = {
        x: result.worstCase.sizes,
        y: result.worstCase.times,
        name: "Worst Case",
        mode: "line",
        line: {
            color: "rgb(0, 0,255)",
        },
    }

    const plotData = [bestCasePlotData, avgCasePlotData, worstCasePlotData]

    newPlot("linear", plotData)
}

const generateForBinary = () => {
    const result: Result = {
        bestCase: {
            sizes: [],
            times: [],
        },
        avgCase: {
            sizes: [],
            times: [],
        },
        worstCase: {
            sizes: [],
            times: [],
        },
    }

    const arr = Array.from(Array(1000000).keys()) // 0,1,2,...1000000

    const data: Array<number[]> = []

    for (let i = 0; i < arr.length; i = i + 1000) {
        data.push(arr.slice(0, i))
        // 1000
        // 2000
        // 3000
    }

    // Best case
    data.forEach((arr) => {
        const bestCaseOption = Math.floor((arr.length - 1) / 2)
        const t1 = performance.now()
        binarySearch(arr, bestCaseOption, 0, arr.length - 1)
        const t2 = performance.now()

        result.bestCase.sizes.push(arr.length)
        result.bestCase.times.push(t2 * 20000 - t1 * 10000)
    })
    // Avg case
    data.forEach((arr) => {
        const avgCaseOption = Math.floor(Math.random() * arr.length)
        const t1 = performance.now()
        binarySearch(arr, avgCaseOption, 0, arr.length - 1)
        const t2 = performance.now()

        result.avgCase.sizes.push(arr.length)
        result.avgCase.times.push(t2 * 20000 - t1 * 10000)
    })
    // Worst case
    data.forEach((arr) => {
        const worstCaseOption = -1
        const t1 = performance.now()
        binarySearch(arr, worstCaseOption, 0, arr.length - 1)
        const t2 = performance.now()

        result.worstCase.sizes.push(arr.length)
        result.worstCase.times.push(t2 * 20000 - t1 * 10000)
    })

    const bestCasePlotData = {
        x: result.bestCase.sizes,
        y: result.bestCase.times,
        name: "Best Case",
        mode: "line",
        line: {
            color: "rgb(255, 0,0)",
        },
    }
    const avgCasePlotData = {
        x: result.avgCase.sizes,
        y: result.avgCase.times,
        name: "Avg Case",
        mode: "line",
        line: {
            color: "rgb(0, 255,0)",
        },
    }
    const worstCasePlotData = {
        x: result.worstCase.sizes,
        y: result.worstCase.times,
        name: "Worst Case",
        mode: "line",
        line: {
            color: "rgb(0, 0,255)",
        },
    }

    const plotData = [bestCasePlotData, avgCasePlotData, worstCasePlotData]

    newPlot("binary", plotData)
}
generateForLinear()
generateForBinary()
