function maskify(cc) {
  let newCC = cc.split('').reverse()
  let numCC = newCC.map((x) => +x)
  let z = []
  // for (i = 0; i < newCC.length - 4; i++) {
  //   z.push(newCC[i])
  // }

  let number = newCC.length - (newCC.length - 4)

  for (i = 0; i < number; i++) {
    z.push(newCC[i])
  }

  for (i = 0; i < newCC.length - 4; i++) {
    z.push('*')
  }

  return z.reverse().join('')
}

console.log(maskify('12345676789000'))
