import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Btn, BtnDiv, ContactContainer, ContactFormDiv, ContactTitle, Div1, Input, InputContainer, Label, MapDiv, Text, Textarea, Title } from './ContactElements';

const containerStyle = {
  width: '100%',
  height: '100%',
  marginTop: '20px',
  marginBottom: '20px'
};

const center = {
  lat: 11.299916,
  lng: 124.689485
}

function ContactSection() {
  return (
    <ContactContainer id="contact">
        <ContactTitle>Contact</ContactTitle>
        <MapDiv>
        <LoadScript
        googleMapsApiKey="AIzaSyBTW6gsFAE3UoSc6_Tsl-Joa18W__xjbc8"
        >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
        </LoadScript>
        </MapDiv>
        <ContactFormDiv>
            <Div1>
                <Title>Inquiries</Title>
                <Text marginBtn='50px'>For any inquiries, questions, please call: 0916 256 9559 or fill out the following form.
                   
                </Text>
                <Title>Contact Us</Title>
                <InputContainer>
                    <Label>Firstname: </Label>
                    <Input/>
                </InputContainer>
                <InputContainer>
                    <Label>Lastname: </Label>
                    <Input/>
                </InputContainer>
                <InputContainer>
                    <Label>Email: </Label>
                    <Input/>
                </InputContainer>
                <InputContainer>
                    <Label>Subject: </Label>
                    <Input/>
                </InputContainer>
                <InputContainer height='100px'>
                    <Label>Subject: </Label>
                    <Textarea rows='5'/>
                </InputContainer>
                <BtnDiv>
                    <Btn>Submit</Btn>
                </BtnDiv>
               
            </Div1>
            <Div1>
            <Title>Head Office</Title>
            <Text marginBtn={0}>4 Lot Villa Olympia</Text>
            <Text marginBtn={0}>Phase 6 San Pedro</Text>
            <Text marginBtn={0}>4023 Laguna</Text>
            <Text marginBtn='20px'>Philippines</Text>

            <Text marginBtn={0}>elianaraphamineraltrading@gmail.com</Text>
            <Text marginBtn='40px'> Tel: 89246263</Text>
            <hr style={{border: '4px solid #FFE300',width: '50px',marginBottom:'12px'}}/>
            <Title style={{marginBottom: '50px'}}>Get a quote: 09983514237</Title>

            <Title>Head Office</Title>
            <Text>
                Mon: 8:00 AM - 5:30 PM<br/>
                Tue: 8:00 AM - 5:30 PM<br/>
                Wed: 8:00 AM - 5:30 PM<br/>
                Thurs: 8:00 AM - 5:30 PM<br/>
                Fri: 8:00 AM - 5:30 PM<br/>
                Sat: 8:00 AM - 5:30 PM<br/>
                Sun: ClosedM

            
            </Text>

            </Div1>
        </ContactFormDiv>
    </ContactContainer>
  )
}

export default React.memo(ContactSection)