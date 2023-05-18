'use client';

import { createContext, useContext, useState } from "react";

const InvoiceContext = createContext({})

export const InvoiceContextProvider = ({ children }) => {

     
    const [data, setData] = useState('test');

    return (
        <InvoiceContext.Provider value={{ data, setData }}>
            {children}
        </InvoiceContext.Provider> 
    )
};

export const useInvoiceContext = () => useContext(InvoiceContext);

