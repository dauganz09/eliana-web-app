import styled from "styled-components";


export const ContactContainer = styled.div`
    width: 100%;
    height: 1300px;
    display: flex ;
    align-items: center;
    justify-content: space-between;
    border: 1px solid yellow;
    flex-direction: column;
    padding: 40px;

`

export const ContactTitle = styled.h1`
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
    margin-bottom: 20px;
   
    
`

export const Div1 = styled.div`
    width: 50%;
    height: 100%;
   
    padding: 20px;
    display: flex;
    flex-direction: column;
`
export const Title = styled.h1`
    font-size: 20px;
    font-weight: 500;
    color: #000;
    
    `
export const Text = styled.p`
    width: 280px;
    font-size: 13px;
    color: #000;
    font-weight: 200;
    margin-bottom : ${props => props.marginBtn};
`

export const ContactFormDiv = styled.div`
   
    width: 800px;
    height: 700px;
    display: flex;
    align-items: center;
`


export const MapDiv = styled.div`
    width: 1200px;
    height: 500px;
    display: flex ;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
   
`

export const InputContainer = styled.div`
    width:300px;
    height: ${props =>props.height ? props.height : '50px' };
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  

`

export const Label = styled.label`
    font-size: 12px;
    font-weight:200;
    color: #000;
`
export const Input = styled.input`
    padding: .2em;
    width: 100%;
    height: 100%;
    outline: none;
    border: 1px solid black;
    background: #EEEEEE;

`

export const Textarea = styled.textarea`
     width: 100%;
    height: 100%;
    outline: none;
    border: 1px solid black;
    background: #EEEEEE;
`

export const BtnDiv = styled.div`
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const Btn = styled.button`
    width: 150px;
    height: 100%;
    background: black;
    color: yellow;

`