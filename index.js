function sumPairs(ints, s) {
  // for (let i = 1; i < length; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (ints[i] + ints[j] === s) return [ints[j], ints[i]]
  //   }
  // }

  // let o
  // let t
  // const { length } = ints
  for (let i = 1; i < ints.length; i++) {
    for (let j = 0; j < i; j++) {
      if (ints[i] + ints[j] === s) return [ints[j], ints[i]]
    }
  }

  // if (t === undefined && o === undefined) {
  //   return undefined

  // return [o, t] || undefined
}
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10))
