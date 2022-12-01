let initialState ={
    loginContact: null
}

const ContactAuthReduce=(state=initialState,action)=>{
switch(action.type){
   case  "add_contacts":
   return {...state,loginContact:action.payload};
   default: return state
}

}
export default ContactAuthReduce;