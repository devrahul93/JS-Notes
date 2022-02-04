const triangle = (num) => {
  let triangle = []
  let line = ''
  do {
    // console.log(line)
    line = line + '#'
    triangle.push(line)
  } while (line.length < num)

  return triangle
}

console.log(triangle(8))
