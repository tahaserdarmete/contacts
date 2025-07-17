const initialState = {
  contacts: [
    {
      id: 1,
      name: 'Ali',
      phone: '+90 555 444 33 22',
    },
    {
      id: 2,
      name: 'Mehmet',
      phone: '+90 532 000 03 01',
    },
    {
      id: 3,
      name: 'Ayla',
      phone: '+90 123 456 78 90  ',
    },
  ],
};

export default contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      const randomID = Date.now();
      return {
        ...state,
        contacts: [...state.contacts, { ...action.payload, id: randomID }],
      };

    case 'LOAD_CONTACTS':
      return { ...state, contacts: action.payload };

    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== action.payload),
      };

    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact,
        ),
      };

    default:
      return { ...state };
  }
};
