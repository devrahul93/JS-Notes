// Print the following pattern using loop and console.log(). (2.5 pts)

// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

for (let index = 0; index < 10; index++) {
  console.log(`${index}   ${index * index}   ${index * index * index}`)
}
