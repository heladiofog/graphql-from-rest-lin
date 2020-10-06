// get all
query {
  getContacts {
    firstName
    lastName
    email
    company
    #telephone
  }
}

// get one contact
query {
  getOneContact(id: "5f7cac724762a93541ade8d6") {
    firstName
    lastName
    company
    email
  }
}
// Alias for different queries
query {
  one: getOneContact(id: "5f7cac724762a93541ade8d6") {
    firstName
    lastName
    company
    email
  },
  two: getOneContact(id: "5f7ca97ef79d233498a76e5a") {
    firstName
    lastName
  },
}

// Aliases and Fragments fot less typying on your queries
query {
  one: getOneContact(id: "5f7cac724762a93541ade8d6") {
    ...contactFragment
  },
  two: getOneContact(id: "5f7ca97ef79d233498a76e5a") {
    ...contactFragment
  },
}

fragment contactFragment on Contact {
  firstName
  lastName
  email
}