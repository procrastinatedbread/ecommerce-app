import { createContext, useReducer, useState } from "react";

export const AddressContext = createContext();
const addressReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return { ...state, addresses: [...state.addresses, action.payload] };
    case "EDIT_ADDRESS": {
      const updatedAddress = action.payload;
      const newAddresses = state.addresses.map((address) =>
        address.id === updatedAddress.id ? updatedAddress : address
      );
      return { ...state, addresses: newAddresses };
    }
    case "REMOVE_ADDRESS": {
      console.log("Case matched", action.payload);
      return {
        ...state,
        addresses: state.addresses.filter(
          (address) => address.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};

const AddressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addressReducer, {
    addresses: [
      {
        id: 1,
        fullName: "Adarsh Balika",
        home_address: "D-2/175 Jeewan Park, Uttam Nagar",
        state: "New Delhi",
        country: "India",
        pincode: 110059,
      },
    ],
  });
  const [selectedAddress, setSelectedAddress] = useState(state.addresses[0]);
  return (
    <AddressContext.Provider
      value={{ state, dispatch, selectedAddress, setSelectedAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};
export default AddressProvider;
