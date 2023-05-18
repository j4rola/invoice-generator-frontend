'use client'
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const InvoiceForm = () => {
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
    axios.post('https://invoice-generator-backend.onrender.com/', formData)
      .then(response => {
        // Handle success response
        console.log('API Response:', response.data);
      })
      .catch(error => {
        // Handle error
        console.error('API Error:', error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default InvoiceForm;
