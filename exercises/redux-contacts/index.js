const redux = require("redux");

function contacts(prevNames = [], action) {
    switch (action.type) {
        case "ADD_CONTACT":
            return [...prevNames, action.contact];
        case "REMOVE_CONTACT":
            let contacts = [...prevNames];
            return contacts.filter((contact) => {
                return contact.id !== action.id;
            })
        case "EDIT_CONTACT":
            let editedContacts = [...prevNames];
            return editedContacts.map((contact)=>{
                if(contact.id === action.id) {
                    return action.updatedContact;
                } else {
                    return contact;
                }
            })
        default:
            return prevNames;
    }
}

let store = redux.createStore(redux.combineReducers({ contacts }));

store.subscribe(() => {
    console.log(store.getState());
})

let celeste = {
    id: 1,
    name: "celeste",
    phone: "801-910-2749",
    email: "celestekrobinson@gmail.com"
}

let austie = {
    id: 2,
    name: "austie",
    phone: "435-347-28239",
    email: "austi@gmail.com"
}

let julie = {
    id: 3,
    name: "Julie",
    phone: "287-298-3889",
    email: "julie@gmail.com"
}

function addContact(contact) {
    return {
        type: "ADD_CONTACT",
        contact
    }
}

function removeContact(id) {
    return {
        type: "REMOVE_CONTACT",
        id
    }
}

function editContact(id, updatedContact) {
    return {
        type: "EDIT_CONTACT",
        id,
        updatedContact
    }
}

store.dispatch(addContact(celeste));
store.dispatch(addContact(austie));
store.dispatch(addContact(julie));
store.dispatch(editContact(3, {
    id: 3,
    name: "Julie",
    phone: "478-299-2001",
    email: "julie@gmail.com"
}));
