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
   }

   ul {
    display: flex;
    gap: 20px;
   }

   button {
    margin-right: 30px;
    padding: 10px;
    border-radius: 5px;
    background-color: #000000;
    color: #ffffff;
   }

`

export default NavbarTop;