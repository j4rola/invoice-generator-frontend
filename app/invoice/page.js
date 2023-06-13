'use client'
import { useInvoiceContext } from '../context/context'; 
import Link from 'next/link'; 



export default function Home() {  

    const { data, setData } = useInvoiceContext();    
    console.log(data)
  return (
    <>
    <div className='flex'>
    <div className='w-100 red' ></div> 
    <h1 id='title' style={{color: 'red', marginLeft: '100px'}} className='flex'></h1>
    
    <div id='paymentTerms'>  
            
    </div>
    <div id='invoiceDate'>  
          
  </div>
  <div id='invoiceAmount'>  
      
  </div>
  </div>
  </>
  )
}