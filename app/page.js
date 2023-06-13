import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header'
import InvoiceForm from '@/components/InvoiceForm'


export default function Home() {
  return (
    <div>
      <InvoiceForm></InvoiceForm>  
    </div>
  )
}
