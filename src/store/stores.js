import { writable, readable, derived } from 'svelte/store'

export const count = writable(0)
export const show = writable(true)
export const time = readable(new Date(), (set) => {
    const interval = setInterval(() => {
        set(new Date())
    }, 1000)

    return () => {
        clearInterval(interval)
    }
})

const start = new Date()

export const elapsed = derived(time, ($time) => {
    console.log(Math.round(($time - start) / 1000))
    return Math.round(($time - start) / 1000)
})
