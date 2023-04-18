import styled from 'styled-components';

export const Title = styled.p`
  display: block;
  justify-content: center;
  text-align: center;
  font-size: 28px;
  margin: 20px auto;
  background-color: aqua;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  max-width: 600px;
  white-space: pre-wrap;
  animation-name: changeColor;
  animation-duration: 3000ms;
  animation-iteration-count: infinite;
  @keyframes changeColor {
    0% {
      color: green;
    }
    50% {
      color: orange;
    }
    100% {
      color: green;
    }
  }
`;
