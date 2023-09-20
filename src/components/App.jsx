import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { StyledLayout } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    for (let contact of contacts) {
      if (newContact.name.toLowerCase() === contact.name.toLowerCase()) {
        return alert(`${newContact.name.toUpperCase()} is already in contacts`);
      }
    }
    const list = setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), ...newContact },
    ]);
    return list;
  };

  const changeContacts = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filterContacts = () =>
    contacts.filter(contact => {
      const isContact = contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
      return isContact;
    });

  return (
    <StyledLayout>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeContacts={changeContacts} />
      <ContactList options={filterContacts()} onDelete={deleteContact} />
    </StyledLayout>
  );
}
