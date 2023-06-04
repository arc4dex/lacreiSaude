import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => {
    return props.buttonColor || "#018762";
  }};
  width: ${(props) => {
    return props.widthButton || "100%";
  }};
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 5px #ccc;
  cursor: pointer;
  color: ${(props) => {
    return props.color || "#FFF";
  }};
  border: ${(props) => {
    return props.border || "none";
  }};
  font-size: ${(props) => {
    return props.fontSize || "1.2rem";
  }};

  :hover{
    background-color: #fff;
    color: #018762;
  }

  @media(max-width: 1200px){
   width: 100%;
 }
`;
