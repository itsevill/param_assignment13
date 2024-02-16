import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0069d9;
  }

  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }
`;