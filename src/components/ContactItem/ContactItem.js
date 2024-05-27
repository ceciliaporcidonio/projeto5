import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact, editContact } from '../redux/contactsSlice';
import { Item, Button } from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <div>
        <strong>{contact.name}</strong>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <Button onClick={() => dispatch(removeContact(contact.id))}>Remover</Button>
      <Button onClick={() => dispatch(editContact({ ...contact, name: 'Novo Nome' }))}>Editar</Button>
    </Item>
  );
};

export default ContactItem;
