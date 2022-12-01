import React  from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";




function ProtectedRoute({children,authContact}) {
    
    if (!authContact) return <Navigate to="/login"replace={true} />
    return children;
}
const mapStateToProps =(state)=>{
    return{
        authContact: state.ContactAuthReduce.loginContact,
    }
}
export default connect(mapStateToProps)(ProtectedRoute);