'use client';

import { createContext, useContext, useState } from "react";

const LineContext = createContext({})

export const LineContextProvider = ({ children }) => {

     
    const [data, setData] = useState(false);

    return (
        <LineContext.Provider value={{ data, setData }}>
            {children}
        </LineContext.Provider>   
    )
};

export const useLineContext = () => useContext(LineContext);