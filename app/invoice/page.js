'use client'
import { useInvoiceContext } from '../context/context'; 
import Link from 'next/link'; 



export default function Home() {  

    const { data, setData } = useInvoiceContext();  
    console.log(data)
  return (
    <>
    <div className='w-100 red' >test</div>
    <h1 id='title' style={{color: 'red'}}></h1>
    
    <div id='paymentTerms'>
            
    </div>
    <div id='invoiceDate'>
          
  </div>
  <div id='invoiceAmount'>
      
  </div>
  </>
  )
}