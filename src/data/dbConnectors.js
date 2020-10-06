// In case you have several data bases, connections go here
import mongoose from 'mongoose';

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contacts', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const ContactSchema = new Schema({
  firstName: {
    type: String,
    // required: 'Enter a first name'
  },
  lastName: {
    type: String,
    // required: 'Enter a last name'
  },
  email: {
    type: String
  },
  company: {
    type: String
  }
}, {
  collection: 'Contacts',
  timestamps: true
});

const Contacts = mongoose.model('contacts', ContactSchema);

export {
  Contacts
};