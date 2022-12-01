import React from 'react';
import ContactUsers from "./ContactUsers";
import { Container,Row } from 'react-bootstrap';
import { connect } from "react-redux";


const Contact = (props) => {
    return (
        <div>
            <h3>CONTACT LIST</h3>
    <Container>
        <Row md={3}>
        {props.contactsData.map((item)=> {
        return (
            <div key={item.id}>
            <ContactUsers 
            userData={item}
             editUser={props.editUser}
             delete={props.delete}/>
            </div>
        )
      })}
        </Row>
    </Container>
        </div>
    );
}
const mapStateToProps = (state)=> ({
    contactsData: state.ContactReducer.contacts
}
)
export default connect(mapStateToProps)(Contact);