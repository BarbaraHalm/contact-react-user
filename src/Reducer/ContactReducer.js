
let initialState = {
  contacts:[]
}

let ContactReducer =(state=initialState,action)=>{
  switch (action.type) {
    case "ADD_CONTACT":
        return{...state, contacts:action.payload};



        case "EDIT_CONTACT": 
          const editeddata = state.contacts.map ((user)=>{
              if(user.id===action.payload.updatedContact.id) {
                  return action.payload.updatedContact;
              }
              else {
                  return user
              }
          })
  
          return {...state,contacts:editeddata}
        
        case "DELETE_CONTACT":
          const UndeletedContact = state.contacts.filter
          ((user)=> user.id !== action.payload)
          return{...state, contacts:UndeletedContact} 

          
      default:
          return state
}
  }


export default ContactReducer;       
