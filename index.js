// Declare firstName, lastName, age variables and assign your first name, your last name and your age to the variables.

// Concatenate the firstName , a space and lastName variable and assigned to a fullName variable.

// Check if your name is long or short. If the length of your first name is greater than 7, you have a long name else you have a short name

const firstName = 'Pankaj'
const lastName = 'Dubey'
let age = 30

let fullName = `${firstName} ${lastName}`

let cheker = (name) => {
  return name.split('').length >= 7 ? `it is too big` : `it is ok`
}
console.log(cheker(firstName))
cheker(firstName)
