# Mutation sample
mutation {
  createContact(input: {
    firstName: "Lin",
    lastName: "Jaen",
    email: "ljaenm@gerdau.com",
    company: "Gerdau"
  }) {
    id
    firstName
    company
  }
}