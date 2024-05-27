import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact, editContact } from '../../redux/contactsSlice';
import { Item, Button } from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  const handleEdit = () => {
    // Implementar lógica de edição
  };

  return (
    <Item>
      <p>{contact.name}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <Button onClick={handleRemove}>Remover</Button>
      <Button onClick={handleEdit}>Editar</Button>
    </Item>
  );
};

export default ContactItem;
