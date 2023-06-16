'use client'
import React from 'react'
import { useLineContext } from '../app/context/lineContext.js'; 
import { useLineItemArrayContext } from '@/app/context/lineItemArrayContext.js';
import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
  

const LineItem = () => {

    const { lineItemArray, setLineItemArray } = useLineItemArrayContext()

    const [quantity, setQuantity] = useState('');
    const [amount, setAmount] = useState('');
    const [memo, setMemo] = useState('');
    const [lineArray, setLineArray] = useState([]); 

    const line_data = {
        line_quantity: quantity,
        line_amount: amount,
        line_memo: memo 
    }

    const handleLineSubmit = async () => {

        console.log(line_data)

        const updatedArray = [...lineArray, line_data];
        setLineArray(updatedArray) 
        console.log(lineArray)
        setAmount('')
        setQuantity('')
        setMemo('')

        await setLineItemArray(lineArray)
        console.log(lineItemArray[0])

    }

    const handleDeleteLine = (e) => {
        const index = e.target.index
        setLineArray(lineArray => {
            const newArray = [...lineArray];
            newArray.splice(index, 1);
            return newArray;
        });
    }

    const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleMemoChange = (e) => {
    setMemo(e.target.value);
  };

  const total = quantity * amount;

    const { data, setData } = useLineContext(false);
    
  
    return ( 
      <div>
        {data ? (
          <div className="line-item">
            <input type="text" placeholder='Dollar Amount' value={amount} onChange={handleAmountChange} />
            <input type="text" placeholder='Quantity' value={quantity} onChange={handleQuantityChange} />
            <input type="text" placeholder='Memo' value={memo} onChange={handleMemoChange} />
            <span>Total: {total}</span>
            <Button onClick={handleLineSubmit}>Add Line</Button>
            {lineArray.map((x, i) => <Card key={i} className='p-5 mt-5'><div className='flex-row'><h5>Line {i + 1}</h5><p>{x.line_amount}</p>x<p>{x.line_quantity}</p><p>Line Total: {x.line_quantity * x.line_amount}</p><p>{x.line_memo}</p><Button index={i} variant='danger' onClick={(e) => handleDeleteLine(e)}>Delete</Button></div></Card>)} 
          </div>
        ) : (
          <></>   
        )}
      </div>  
    );
  };

export default LineItem