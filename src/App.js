import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Container} from 'react-bootstrap'
// import  Contact from "./component/Contact";
// import ContactForm from './component/ContactForm';
import { collection, query,onSnapshot,orderBy} from "firebase/firestore";
import {db,auth,} from './Firebase/ConfigContact';
import { AddContact } from './Action/ContactAction';
import {useDispatch} from 'react-redux';
import Routing from "./Routing";
import {newloginContact} from './Action/ContactAuthAction';
import { onAuthStateChanged } from "firebase/auth";


function App() {
  const dispatch= useDispatch();
 useEffect(()=> {
  const readInfo= async()=>{
    const q = query(collection(db, "Contact-form"), orderBy("timestamp","desc"));
     onSnapshot(q, (querySnapshot) => {
      const Contacts = [];
      querySnapshot.forEach((doc) => {
          Contacts.push(doc.data()) ;
      });
      dispatch(AddContact(Contacts))
      console.log(Contacts);
    });
    
  }
  readInfo();
 },[dispatch])

 useEffect(()=>{
  onAuthStateChanged(auth,(contact)=>{
   if(contact)dispatch(newloginContact(contact));
   else {dispatch(newloginContact(null))};

  })

},[dispatch])







  //const [users, setUsers] = useState([]);


// const AddNewUser = (data) => {
//   data.id = Math.random();toString();
//   setUsers([...users,data])
//   console.log(AddNewUser);
// }

// const EditUser = (id,newedit) => {
// setUsers(
//   users.map((data)=> {
//     if (data.id === id) {
//       return newedit;
//     }
//     return data;
//   })
// )
// }

// const DeleteUser = (id,deletedcontact) => {
// setUsers(
//   users.filter((data)=> {
//     if (data.id !== id) {
//       return deletedcontact
//     }
//     return data;
//   })
// );
//};


return (
  <>

 <Container>
  <Routing/>
  
 {/* <Row style={{marginTop: "20px"}}>
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

 </Row> */}
</Container> 

  </>
 );
};


export default App;


