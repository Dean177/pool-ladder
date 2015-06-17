// Turns out Object.values isn't a thing until ES7
export function values(obj) { Object.keys(obj).map(key => obj[key]) }
