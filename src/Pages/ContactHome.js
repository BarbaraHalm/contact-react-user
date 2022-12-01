import React from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import  Contact from "../component/Contact";
import ContactForm from '../component/ContactForm';
import {signOut } from "firebase/auth";
import { auth } from "../Firebase/ConfigContact";


function ContactHome() {
    const handleSignout= async(e)=>{
        e.preventDefault();
        try{
          signOut(auth)
        }catch(e){console.log(e)};
    }
    
    return (
        <>

     <Container>
        <Row style={{ marginTop: "20px" }}>
            <Col md={4}>
                <h3>CONTACT FORM</h3>
            <ContactForm
                //addUser= {AddNewUser}
            />
            </Col>
            
            <Col md={8}>
            <Contact
                // user={users} 
                //editUser={EditUser} 
                //delete={DeleteUser}
            />
            </Col>
            <Button variant="danger" onClick={handleSignout}
                style={{marginTop: "20px",}}>
                    LOGOUT</Button>
        </Row>
    </Container>
        </>
    );
}

export default ContactHome;