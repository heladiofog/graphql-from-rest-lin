// import { Promise } from 'mongoose';
import { Contacts } from './dbConnectors';

// Resolver map: is a way to define what is available and what it doable inside graphQL 
export const resolvers = {
  Query: {
    getContacts: () => {
      // Going to db and return db contacts
      return Contacts.find();
    },
    getOneContact: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Contacts.findById(id, (err, contact) => {
          if (err) reject(err);
          else return resolve(contact);
        })
      })
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
      });
    },
    // Update
    updateContact: (root, { input }) => {
      return new Promise((resolve, reject) => {
        Contacts.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, contact) => {
            if (err) reject(err);
            else resolve(contact);
          });
      });
    }
  }
}