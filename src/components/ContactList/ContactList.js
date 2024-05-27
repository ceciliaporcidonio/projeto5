import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../redux/contactsSlice';
import ContactItem from './ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onRemove={() => dispatch(removeContact(contact.id))}
        />
      ))}
    </List>
  );
};

export default ContactList;
