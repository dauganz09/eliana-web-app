import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background-color: #003152;
    height : 100px;
    /* margin-top:-100px; */
    display : flex;
    justify-content : center;
    align-items : center;
    font-size :1rem;
    position: sticky;
    top :0;
    z-index : 10;
`

export const NavbarContainer = styled.div`
    display :flex;
    justify-content: space-between;
    height: 100%;
    z-index : 1;
    width : 100%;
    max-width: 1600px;
    
   
`

export const NavLogo = styled(LinkR)`
    color : #000;
    background-color: #FFE300;
    width: 250px;
    justify-self: flex-start;
    cursor: pointer;
    height: 100%;
    display : flex;
    align-items: center;
    padding-left: 24px;
    font-weight: bold;
    text-decoration : none;
    border: 1px solid black;
`

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    justify-content: space-between;
    list-style:none;
    text-align: center;
    width: 600px;
    
    height: 100%;
`
export const NavItem = styled.li`
    height : 90px;
`

export const NavLinks = styled(LinkS)`
    color : #fff;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor : pointer;

    &.active {
        border-bottom : 3px solid #FFE300;
    }

    &:hover {
        color : #FFE300
    }
    
`;

export const NavBtn = styled.nav`
    display : flex;
    align-items : center;

`

export const NavBtnLink = styled(LinkR)`
    border-radius : 50px;
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


    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: black;
        
    }
`