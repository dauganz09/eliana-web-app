import { FileExcelFilled } from "@ant-design/icons";
import styled from "styled-components";


export const ChatHead = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: #003152;
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor : pointer;
    z-index: 1000;
    box-shadow: 1px 6px 14px -4px rgba(0,0,0,0.75);
    -webkit-box-shadow: 1px 6px 14px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 6px 14px -4px rgba(0,0,0,0.75);
    transition : all 0.2s ease-in-out;

    &:hover {
      transform: translateY(-8px);
      }

`

export const ChatBox =styled.div`
display: flex;
flex-direction: column;


  width: 300px;
  height: 400px;
  background : #fff;
  position: fixed;
  bottom:60px;
  right:90px;
  z-index: 1000;
  border-radius : 10px;
  /* margin-bottom:60px;
  margin-right: 90px; */
  z-index: -123456;
  opacity: 0;
  transition: all .5s ease-in-out;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.4);

  &.open {
    transform: translateY(-20px);
    z-index: 123456;
    opacity: 1;
  }

`


export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px;
  background: #003152;
  border-top-left-radius : 10px;
  border-top-right-radius : 10px;
`

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background:  #FFE300;
  border-radius: 50%;
`

export const HeaderText = styled.h1`
  font-size: 1.5em;
  text-transform: uppercase;
  color: white;
 
  font-weight: 500;
  margin-top: 4px;
`


export const ChatBody = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow-y: scroll;
  padding: 15px 20px;

  &::-webkit-scrollbar {
    width: 10px;
}

&::-webkit-scrollbar-track {
    -webkit-box-shadow: 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}

&::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: 0 0 6px rgba(0,0,0,0.2); 
    background: rgba(0,0,0,0.2)
}
`

export const ChatFooter = styled.div`
   display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px 15px;
  background: #003152;
  border-bottom-left-radius : 10px;
  border-bottom-right-radius : 10px;
  `


export const  ChatInput = styled.input`
  background : #eeee;
  width: 230px;
  height: 40px;
  border-radius: 25px;
  padding: 20px 15px;
  outline: none;
  border: none;
`
export const SendBtn = styled.button`
  width: 40px;
  height: 40px;
  background : transparent;
  border-radius: 50%;
  border: none;
  display : flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4 ease-in-out;
  cursor: pointer;

&:hover {
  background: rgba(128,128,128,0.2) ;
}

`

export const ChatMsg = styled.p`
 font-size: 1em;
  max-width: 200px;
  text-align: justify;
  align-self: ${props => props.type  == 'bot'? 'start' : 'end'};
  word-break: break-all;
  padding: 12px;
  line-height:1.1em;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: ${props=> props.type =='bot' ? '30px': 0};
  border-bottom-left-radius: ${props=> props.type =='user' ? '30px': 0};
  background-color: ${props => props.type == 'bot' ? '#DDDDDD': '#003152'};
  color : ${props => props.type == 'bot' ? '#000': '#fff'};
  box-shadow: 0px 12px 5px -10px rgba(0,0,0,0.3);


  &.user {
    transform : translateY(50%);
    opacity: 0;
    animation: fade-in-right 0.3s ease-in-out both;
  }



  @keyframes fade-in-right{
    0% {
      transform: translateY(50%);
      opacity : 0;

    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  
`