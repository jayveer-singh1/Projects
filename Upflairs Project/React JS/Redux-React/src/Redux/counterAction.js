
export let increase = () => {
    return { type: 'counter/incremented' }
}
export let decrease = () => {
    return { type: 'counter/decremented' }
}