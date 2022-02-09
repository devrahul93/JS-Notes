//Create a function which filter ages greater than 18.
const ages = [35, 30, 17, 18, 15, 22, 16, 20]

const agesGreaterEighteen = (num) => {
  return num.filter((value) => value > 18)
}

console.log(agesGreaterEighteen(ages))
//[35, 30, 22, , 20];
