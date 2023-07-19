import styled from "styled-components";


const NavbarTop = styled.nav`
display: flex;
background-color: pink;
width: 100%;
justify-content: space-between;
height: 98px;
align-items: center;

    
span {
    font-weight: 700;
    font-size: 2rem;
    padding: 20px;
    font-family: 'Montserrat Alternates', sans-serif;
   }

   ul {
    display: flex;
    gap: 30px;
   }

   li {

    &:hover{
        cursor: pointer;
        font-weight:700;
    }
   }

   button {
    margin-right: 30px;
    padding: 10px;
    border-radius: 5px;
    background-color: #000000;
    color: #ffffff;
    border-style: none;

    &:hover{
        background-color:#EAF586;
        color: #000000;
        cursor: pointer;
    }
   }

`

export default NavbarTop;