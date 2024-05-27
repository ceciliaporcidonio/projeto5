import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { Form, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ id: Date.now(), name, email, phone }));
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome Completo" />
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" />
      <Button type="submit">Adicionar Contato</Button>
    </Form>
  );
};

export default ContactForm;
