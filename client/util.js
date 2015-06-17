// Turns out Object.values isn't a thing until ES7
export default function values(obj) {
  let keys = Object.keys(obj);
  return keys ? keys.map(key => obj[key]) : [];
}
