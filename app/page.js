import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header'
import Test from '@/components/Test'
import InvoiceForm from '@/components/InvoiceForm'


export default function Home() {
  return (
    <div>
      <Test></Test>
      <InvoiceForm></InvoiceForm>
    </div>
  )
}
