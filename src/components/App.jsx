import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Box } from './Box';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  resetForm = (nameValue, numberValue) => {
    nameValue = '';
    numberValue = '';
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const isContactAdded = contacts.some(contact => contact.name === name);
    const newContact = { id: nanoid(3), name, number };

    if (isContactAdded) {
      alert(`${name} is Already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    this.addContact(name.value, number.value);
    this.resetForm(name.value, number.value);
  };

  render() {
    return (
      <Box width="400px">
        <Section title="Phonebook">
          <Form handleSubmit={this.handleSubmit}></Form>
        </Section>
        <Section title="Contacts">
          <Contacts
            handleChange={this.handleChange}
            handleDelete={this.deleteContact}
            contacts={this.handleFilter()}
            filterValue={this.state.filter}
          ></Contacts>
        </Section>
      </Box>
    );
  }
}
