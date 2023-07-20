import styled from "styled-components";

const ProductsCard = styled.div `
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
 background-color: #ededf5;
 background-image: linear-gradient(180deg, #ededf5 0%, #f6f6d2 100%);
 padding: 3rem;


 .hash{
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
 }
 h3 {
    font-size: 2.8rem;
    margin-top: 3rem;
    font-family: 'Caudex', serif;
 }
 
 .cardArea {
    width: 100%;
    display: flex;
    margin-top: 3rem;
    gap: 10px;
    
 }
 .card {
    display: flex;
    flex-direction: column;
    width:30%;
    background-color: #ffffff;
    padding: 20px;
    align-items: center;
    

    h5{
        font-size: 1.2rem;
        font-family: 'Caudex', serif;
    }

    p {
        margin-top: 0.8rem;

    }

    img{
        margin-top: 1rem;
        
        border-radius: 50%;
     height: 150px;
    object-fit: cover;
    width: 150px;
    }

    button {
        margin-top: 1rem;
        font-family: 'Caudex', serif;
        background-color: #EAF586;
        padding: 10px;
        border-style: none;
        font-weight: 700;

        
    &:hover{
        cursor: pointer;
    }
    }


 }



`

export default ProductsCard;