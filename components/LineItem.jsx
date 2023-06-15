'use client'
import React from 'react'
import { useLineContext } from '../app/context/lineContext.js'; 

const LineItem = () => {
    const { data, setData } = useLineContext(false);
  
    return (
      <div>
        {data ? (
          <div>test</div>
        ) : (
          <div>testing 1</div>   
        )}
      </div>  
    );
  };

export default LineItem