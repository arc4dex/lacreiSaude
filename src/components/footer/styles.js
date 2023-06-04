import styled from "styled-components";

export const ContainerMain = styled.div`
display: flex;
flex-direction: column;
padding: 12px 5.3em;

hr{
  width: 100%;
  border: 1px solid;
  border-color: #B0E0D3;
}

@media(max-width: 1200px){
  padding: 10px;
}
`

export const Nav = styled.nav`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 position: relative;
  
 h1{
    color: var(--green);
    font-size: 2em;
    font-weight: 700;
    margin-left: 4em;
  }

`

export const List = styled.ul`
 display: flex;
 flex-direction: row;
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
  font-weight: 900;
 }
`

export const ContainerIcons = styled.div`
padding: 0 1.5rem;  
display: flex;
flex-direction: row;
margin-left: 10px;
gap: 40px;

.icon-color{
  color: var(--green);
  font-size: 40px;
  cursor: pointer;

  :hover{
    opacity: 0.8;
  }
}

@media(max-width: 1200px){
  margin-top: 10px;
  align-items: center;
  justify-content: center;
}

`