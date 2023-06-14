'use client'
import { useInvoiceContext } from '../context/context'; 
import Link from 'next/link'; 



export default function Home() {  

    const { data, setData } = useInvoiceContext();    
    console.log(data)
  return (
  <>
    <div className='flex-start p-5'> 
      
      <div className='flex bg-grey border p-3'> 
        <div className='flex-row'><h5>Invoice No.:</h5><h5 id='invoiceNumber'></h5></div>
        <div className='flex-row'><h5>Invoice Date:</h5><h5 id='invoiceDate'></h5></div> 
      </div>
       

    </div>
    
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