'use client'
import { useInvoiceContext } from '../context/context'; 
import Link from 'next/link'; 



export default function Home() {  

    const { data, setData } = useInvoiceContext();    
    console.log(data)
  return (
  <>
    <div className='flex-row bg-light'><h3>Invoice No.:</h3><h3 id='invoiceNumber'></h3></div>
    <div className='flex bord'>
      
      <div className='w-100 red' ></div> 
      <h1 id='invoiceNumber' style={{color: 'red'}} className='flex'></h1> 

      <div className='flex-row'>
        <div>Payment Terms:</div>
        <div id='paymentTerms'>  
      </div>
                
      
      <div id='invoiceDate'>    
              
      </div>
      <div id='invoiceAmount'>  
          
      </div>
      </div>
    </div>
  </>
  )
}