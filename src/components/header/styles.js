import styled from "styled-components";

export const Nav = styled.nav`
 width: 100%;
 height: 3.75em;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 background-color: #EEEEEE;
 position: relative;
  
 h1{
    color: #018762;
    font-size: 2em;
    font-weight: 700;
    margin-left: 4em;
  }

  @media(max-width: 1200px){
    h1{
      margin-left: 16px;
    }
  }
`
export const Container = styled.div`
 width: ${(props) => props.width && props.width};
 display: flex;
 flex-direction: row;
`

export const ContainerDropList = styled.div`
 margin-right: 10px;
 display: none;

 @media(max-width: 1200px){
  display: flex;
 }
`

export const DropList = styled.div`
 display: flex;
 flex-direction: column;
 background-color: #FFFFFF;
 border-radius: 6px;
 box-shadow: 0 0 5px #ccc;
 position: absolute;
 top: 60px;
 left: 0;
 padding: 15px;
 gap: 10px;
`

export const List = styled.ul`
 display: flex;
 flex-direction: row;
 margin-right: 4em;
 gap: 2.5em;
 list-style: none;

 @media(max-width: 1200px){
    display: none;
  }
`

export const Options = styled.li`
 font-size: ${(props)=> props.mobile ? "1.5em" : "1em"};
 font-weight: 700;
 color: #1F1F1F;
 list-style: none;
 text-align: ${(props) => props.mobile && "left"};

 cursor: pointer;
 :hover{
  color: var(--green);
 }
`

export const ContainerLanguage = styled.div`
  background-color: var(--green);
  color: #ffffff;
  border-radius: 5px;
  width: 80px;
  position: absolute;
  height: 20px;
  padding: 5px;
  top: 16px;
  right: 430px;

  @media(max-width: 1000px){
    right: 80px;
  }
`

export const ChangeLanguage = styled.ul`
 position: relative;
 list-style: none;
 display: flex;
 padding: 0;
 flex-direction: column;
 align-items: left;
 background-color: #ffffff;
 box-shadow: 0 0 5px #ccc;
 margin: 0;
 top: 5px;
`

export const TextLanguage = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  justify-content: center;
`

export const OptionLanguage = styled.li`
 cursor: pointer;
 color: var(--green);
 
 :hover{
  background-color: var(--green);
  color: #ffffff;
 }
 
`