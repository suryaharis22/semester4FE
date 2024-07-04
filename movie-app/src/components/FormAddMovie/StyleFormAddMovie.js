// src/components/FormAddMovie/StyleFormAddMovie.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

export const Poster = styled.div`
  margin-right: 20px;
  flex: 0 0 100%;
  margin-bottom: 20px;

  img {
    border-radius: 50px;
    max-width: 467px;
    height: 424px;
  }

  @media screen and (min-width: 768px) {
    flex: 0 0 calc(50% - 10px);
    margin-bottom: 0;
  }
`;

export const Form = styled.div`
  flex-grow: 1;
  max-width: 400px;

  h2 {
    color: #06D6A0;
  }

  @media screen and (min-width: 768px) {
    max-width: calc(50% - 10px);
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #06D6A0;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #04a579;
  }
`;
