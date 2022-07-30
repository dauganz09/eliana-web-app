import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'

export const ProductContainer = styled.div`
    width: 100%;
    height:  1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

export const ProductTitle = styled.h1`
    width: 300px;
    text-transform: uppercase;
    font-size: 60px;
    font-weight: bold;
    outline : none;
    border: none;
    border-bottom: 8px solid #FFE300;
    display: flex;
    align-items: center;
    justify-content: center;
   
    
`

export const ProductGrid = styled.div`
    width: 55%;
    height: 900px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 10px;
    justify-content: space-around;
   
    `

export const ProductCard = styled.div`
    height: 400px;
    width: 400px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
   
`

export const ViewButton = styled.div`
    width: 200px;
    height: 50px;
    border: 3px solid white;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.4em;
    opacity: 0;
    transition: all 0.4s ease-in-out;

 
`

export const ProductImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        transform : scale(1.2);
        opacity: 0.6;
    }

    &:hover ~ ${ViewButton} {
        opacity : 1;
    }
`



export const NavBtn = styled.nav`
    display : flex;
    align-items : center;
    justify-content: center;

`

export const ProductBtnLink = styled(LinkR)`
    border-radius : 50px;
    width: 200px;
    height: 50px;
    background : #FFE300;
    white-space: nowrap;
    padding: 10px 22px;
    color: #000;
    font-size : 16px;
    outline: none;
    border: none;
    cursor : pointer;
    transition : all 0.2s ease-in-out;
    text-decoration : none;
    text-align: center;


    &:hover{
        transition: all 0.2s ease-in-out;
        border: 1px solid black;
        color: black;
        
    }
`