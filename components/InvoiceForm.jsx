'use client'
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import axios from 'axios';
import { useInvoiceContext } from '../app/context/context.js'; 



const InvoiceForm = () => {

  const { data, setData} = useInvoiceContext('');

  const [formData, setFormData] = useState({
    invoiceNumber: '',
    amount: '',
    date: '',
    paymentTerms: ''
  });

  const handleChange = (e) => {
    e.preventDefault(); 
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform API request using Axios
    axios.get('https://invoice-generator-backend.onrender.com/generate-pdf')
      .then(response => {
        // Handle success response
        console.log('API Response:', response.data);
      })
      .catch(error => {
        // Handle error
        console.error('API Error:', error);
      });
  };

  const generatePDF = () => {
    fetch('https://invoice-generator-backend.onrender.com/generate-pdf')
      .then(response => response.blob())
      .then(blob => {
        // Create a temporary download link
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'document.pdf';
  
        // Trigger the download
        downloadLink.click();
  
        // Clean up the temporary download link
        URL.revokeObjectURL(downloadLink.href);
        downloadLink.remove();
      })
      .catch(error => {
        // Handle error
        console.error('API Error:', error);
      });
  };

  



  return (

  <div className='w-100 flex'>

    
    
    <Form className='px-5 w-75' >
      <Form.Group controlId="invoiceNumber">
        <Form.Label>Invoice Number:</Form.Label>   
        <Form.Control
          type="text"
          name="invoiceNumber"
          value={formData.invoiceNumber}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="invoiceAmount">
        <Form.Label>Invoice Amount:</Form.Label>
        <Form.Control
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="invoiceDate">
        <Form.Label>Invoice Date:</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="paymentTerms">
        <Form.Label>Payment Terms:</Form.Label>
        <Form.Control
          as="select"
          name="paymentTerms"
          value={formData.paymentTerms}
          onChange={handleChange}
        >
          <option value="">-- Select Payment Terms --</option>  
          <option value="N/A">N/A</option>
          <option value="Net 30">Net 30</option>
          <option value="Net 60">Net 60</option>
          <option value="Net 90">Net 90</option>
        </Form.Control>
      </Form.Group>  

      
      
    </Form>
     <Link className='m-5' href={`https://invoice-generator-backend.onrender.com/generate-pdf?invoiceNumber=${formData.invoiceNumber}&paymentTerms=${formData.paymentTerms}&invoiceDate=${formData.date}&invoiceAmount=${formData.amount}`}>
        <Button variant="primary">     
            Submit
        </Button>
      </Link>
    <Button variant="primary" onClick={() => setData('testingg')}>
        test
    </Button>
    <p>{data}</p>
    <Link href='/invoice'>go</Link>
    
  </div>  

  );
};

export default InvoiceForm;  
