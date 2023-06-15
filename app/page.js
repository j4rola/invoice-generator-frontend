import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header'
import InvoiceForm from '@/components/InvoiceForm'
import ToggleSwitch from '@/components/ToggleSwitch'
import LineItem from '@/components/LineItem'


export default function Home() {
  return (
    <div className='flex'>
    <h1 className='m-5'>Invoice Generator</h1>
    <ToggleSwitch />
    <InvoiceForm></InvoiceForm>  
    <LineItem></LineItem>
    </div>

  )
}
