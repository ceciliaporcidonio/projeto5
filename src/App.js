import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  return (
    <Container>
      <h1>Lista de Contatos</h1>
      <ContactForm />
      <ContactList />
    </Container>
  );
};

export default App;
