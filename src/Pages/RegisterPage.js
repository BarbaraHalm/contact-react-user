import React,{useState} from 'react';
import {Button,Container,Form} from 'react-bootstrap';
import {auth} from '../Firebase/ConfigContact';
import {Link,useNavigate} from 'react-router-dom'
import {createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";



function RegisterPage() {
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [name,setName]= useState("")
     const provider = new GoogleAuthProvider();
    const navigate= useNavigate();
    


    const handleRegister=async(e)=>{
      e.preventDefault()
      try{
       const contactRegister=await createUserWithEmailAndPassword(auth, email, password,name);
      navigate("/login",{replace:true}); 
       console.log(contactRegister)
      }catch(e){console.log(e)
    }
    setEmail("");
    setPassword("");
    setName("");


    };
    const handlegoogle=async(e)=>{
        e.preventDefault()
        try{
        const contactRegister = await signInWithPopup(auth, provider)
         console.log(contactRegister)
        }catch(e){console.log(e)
      }
      setEmail("");
      setPassword("");
      setName("");
  
      }
  

    return ( 
        <Container style={{marginTop:"20px",marginLeft:"250px",width:"55%",backgroundColor:"lightcoral", 
        border: "1px solid black", height: "500px" }}>
        <Form>
            <h1>Register Here</h1>
            <p>If you don't have an already existing account</p>
            <Form.Group style={{  marginTop: "20px", marginLeft: "30px" }}
         className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" 
          value={name}
          onChange={(e)=>
          setName(e.target.value)}/>
        </Form.Group>

        <Form.Group style={{  marginTop: "20px", marginLeft: "30px" }}
         className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" 
          value={email}
          onChange={(e)=>
          setEmail(e.target.value)}/>
        </Form.Group>
  
        <Form.Group style={{  marginTop: "20px", marginLeft: "30px" }}
        className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>
          setPassword(e.target.value)}/>
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={handleRegister} 
         style={{marginRight:"10px",marginLeft: "30px" , fontSize:"15px", width:"75px"}}>
          Submit
        </Button>
        
        <Button variant="info,danger" type="submit" onClick={handlegoogle} style={{fontSize:"20px"}}>
          SignUp with Google
        </Button>
         <div style={{marginTop: "10px",marginLeft:"30px",}}> 
        <Link to="/login">signIn if you have an existing account </Link>
        </div> 
      </Form>
      </Container>
    );
}

export default RegisterPage;