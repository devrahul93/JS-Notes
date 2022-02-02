// eclare an object called person, it has firstName, lastName, age, country, getPersonInfo keys. The getPersonInfo is a method which return about the person object. eg.

//

let person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 200,
  country: 'Finland',
  getPersonInfo: function () {
    return `I am ${this.firstName} ${this.lastName}. I am ${this.age} years old. I live in from ${this.country}`
  },
}

console.log(person.getPersonInfo())
