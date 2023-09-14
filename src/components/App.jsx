import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { StyledLayout } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    for (let contact of this.state.contacts) {
      if (newContact.name.toLowerCase() === contact.name.toLowerCase()) {
        return alert(`${newContact.name.toUpperCase()} is already in contacts`);
      }
    }
    const list = this.setState(pState => ({
      contacts: [...pState.contacts, { id: nanoid(), ...newContact }],
    }));

    return list;
  };

  changeContacts = newContact => {
    this.setState({ filter: newContact });
  };

  deleteContact = contactId => {
    this.setState(pState => ({
      contacts: pState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  componentDidMount = () => {
    // console.log('App componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    // console.log(parsedContacts);
    if (parsedContacts !== null) {
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate = (pProps, pState) => {
    // console.log(pState);
    // console.log(this.state);
    if (pState.contacts !== this.state.contacts) {
      // console.log('ok');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  render() {
    return (
      <StyledLayout>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onChangeContacts={this.changeContacts}
        />
        <ContactList
          options={this.filterContacts()}
          onDelete={this.deleteContact}
        />
      </StyledLayout>
    );
  }
}

export default App;
