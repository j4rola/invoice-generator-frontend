'use client'
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import axios from 'axios';
import { useInvoiceContext } from '../app/context/context.js'



const InvoiceForm = () => {

  const { data, setData} = useInvoiceContext('');

  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: '',
    paymentTerms: ''
  });

  const handleChange = (e) => {
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
    <>
    <Form onSubmit={generatePDF}>
      <Form.Group controlId="invoiceTitle">
        <Form.Label>Invoice Title:</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="invoiceAmount">
        <Form.Label>Invoice Amount:</Form.Label>
        <Form.Control
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="invoiceDate">
        <Form.Label>Invoice Date:</Form.Label>
        <Form.Control
          type="text"
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
          <option value="Net 30">Net 30</option>
          <option value="Net 60">Net 60</option>
          <option value="Net 90">Net 90</option>
        </Form.Control>
      </Form.Group>  

      <Link href='https://invoice-generator-backend.onrender.com/generate-pdf'>
        <Button variant="primary">
            Submit
        </Button>
      </Link>
      
    </Form>
    <Button variant="primary" onClick={() => setData('testing')}>
        test
    </Button>
    <p>{data}</p>
    </>  
  );
};

export default InvoiceForm;  
