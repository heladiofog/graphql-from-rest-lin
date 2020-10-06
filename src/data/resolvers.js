import { Contacts } from './dbConnectors';

// Resolver map: is a way to define what is available and what it doable inside graphQL 
export const resolvers = {
  Query: {
    getContacts: () => {
      // Going to db and return db contacts
      return Contacts.find();
    }
  },
  Mutation: {
    createContact: (root, { input }) => {
      const newContact = new Contacts({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        company: input.company
      });

      newContact.id = newContact._id;
      
      return new Promise((resolve, reject) => {
        newContact.save(err => {
          if (err) reject(err);
          else resolve(newContact);
        })
      })
    }
  }
}