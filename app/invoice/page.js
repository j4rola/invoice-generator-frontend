'use client'
import { useInvoiceContext } from '../context/context';
import Link from 'next/link'



export default function Home() {

    const { data, setData } = useInvoiceContext('testing');
    console.log(data)
  return (
    <div>
      {data}   
    </div>
  )
}