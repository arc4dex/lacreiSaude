import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 2em;
  padding: 0 4.375em;

  @media(max-width: 1200px){
    justify-content: ${(props)=> props.justifyMobile && "center"};
    padding: 10px;
  }
`
export const Container = styled.div`
 width: ${(props) => props.width && props.width};
 display: flex;
 flex-direction: ${(props) => props.direction ? "row" : "column"};
 padding: ${(props) =>  props.padding && props.padding};
 justify-content: ${(props) => props.content && props.content};
 margin-top: ${(props)=> props.mt && props.mt};
 align-items: ${(props) => props.align && "center"};
 
 hr{
  height: 165px;
  border: 4px solid;
  border-color: var(--green);
  margin-right: 20px;
 }
 
 @media(max-width: 1200px){
  display: ${(props)=> props.mobile && "none"};
  padding: 1.3em 0;

  hr{
    height: 110px;
    margin-right: 10px;
  }
 }
`
export const ContainerButton = styled.div`
 margin-top: 3em;
 display: flex;
 flex-direction: row;
 justify-content: space-between;

 @media(max-width: 1200px){
  flex-direction: column;
  gap: 1.5em;
  margin-top: 1.5em;
 }
`

export const Title = styled.h1`
font-size: 3em;
text-align: left;
margin: 0;

@media(max-width: 1200px){
  font-size: 2.2em;
 }
`

export const Text = styled.p`
font-size: 1.5em;
color: #515151;
text-align: left;
@media(max-width: 1200px){
  font-size: 1.2em;
  padding: 10px;
 }
`

export const ContainerImage = styled.figure`
 width: 50%;
 img{
  width: 80%;
 }

 @media(max-width: 1200px){
  display: none;
 }
`