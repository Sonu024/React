import React from 'react'

const Person = () => {

    const person = [
        {
            name: "A",
            age: 10,
        },
          {
            name: "B",
            age: 20,
        }
    ]
    const personList = person.map(person => <h1>Hi! I am {person.name} and I am {person.age} years old.</h1>)
  return (
    <div>
      {personList}
    </div>
  )
}

export default Person
