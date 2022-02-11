//Write a function which filter users who has scoresGreaterThan85, Write a function which addUser to the user array only if the user does not exist. Write a function which addUserSkill which can add skill to a user only if the user exist. Write a function which editUser if the user exist in the users array.

const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16,
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22,
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTM'],
    age: 25,
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26,
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20,
  },
]

function addUserSkill(user, name, skill) {
  let newName = []
  user.forEach((element) => newName.push(element.name))
  if (newName.includes(name)) {
    for (let property in user) {
      if (user[property].name == name) {
        user[property].skills = skill
      }
    }
  } else {
    return `${name} user does not exist`
  }
  return user
}

console.log(addUserSkill(users, 'Raja', ['React', 'Js']))
