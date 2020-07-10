import styled from 'styled-components';

import cold from '../assets/cold.jpg';
import werm from '../assets/warm.jpg';
import logo from '../assets/logo.jpg';

interface Props {
  temp?: number;
}

export const Container = styled.div<Props>`
  background: url(${props => props.temp && props.temp > 16 ? werm : cold || logo});
  background-size: cover;
  background-position: center;
  transition: 0.4 ease;
`;

export const Content = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.75));
  padding: 25px;
`;

export const Search = styled.form`
  max-width: 500px;
  margin: 0 auto;

  input {
    display: flex;
    width: 100%;
    padding: 15px;

    appearance: none;
    background: none;
    border: none;
    outline: none;

    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px 0px 16px 16px;
    margin-top: -25px;

    box-shadow: 0px 5px rgba(0, 0, 0, 0.2);

    color: #313131;
    font-size: 20px;

    transition: 0.4s ease;

    &:focus {
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
`;


export const Result = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 80vh;
`;

export const ResultLocation = styled.div`
  h1 {
    color: #FFF;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
  }

  span {
    color: #FFF;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
    text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
  }
`;

export const ResultTemp = styled.div`
  h1 {
    position: relative;
    display: inline-block;
    margin: 30px auto;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 16px;

    padding: 15px 25px;

    color: #FFF;
    font-size: 102px;
    font-weight: 900;

    text-shadow: 3px 6px rgba(50, 50, 70, 0.5);
    text-align: center;
    box-shadow: 3px 6px rgba(0, 0, 0, 0.2);
  }

  h2 {
    color: #FFF;
    font-size: 48px;
    font-weight: 700;
    text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
    text-align: center;
  }
`;