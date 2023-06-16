'use client';

import { createContext, useContext, useState } from "react";

const LineItemArrayContext = createContext({})

export const LineItemArrayContextProvider = ({ children }) => {

     
    const [lineItemArray, setLineItemArray] = useState([]);

    return (
        <LineItemArrayContext.Provider value={{ lineItemArray, setLineItemArray }}>
            {children}
        </LineItemArrayContext.Provider>   
    )
};

export const useLineItemArrayContext = () => useContext(LineItemArrayContext);