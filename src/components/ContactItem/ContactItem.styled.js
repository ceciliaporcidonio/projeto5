import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin-left: 10px;
  padding: 5px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
`;

export const EditButton = styled(Button)`
  background-color: #008CBA;
`;
