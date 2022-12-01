export const AddContact =(newContact)=> {
    return{
        type:"ADD_CONTACT",
        payload:newContact
    }
}

export const editContact =(updatedContact)=> {
    return{
        type:"EDIT_CONTACT",
        payload: {updatedContact}
    }
} 


export const deleteContact =(id)=> {
    return{
        type:"DELETE_CONTACT",
        payload: id
    }
}

