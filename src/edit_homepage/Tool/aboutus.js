import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Form, FormGroup,  Col, Row, Label, Input } from 'reactstrap';
import { storage, db } from '../firebase';






const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // db.collection('contract').get().then((snapshot) => {
  //   snapshot.docs.forEach(doc => {
  //     rendercontract(doc);
  //   })
  // });

  sendinput = () => {
    let form = document.querySelector('#input');
    var nm = document.getElementById('name')
    console.log(55555)
    db.collection('contract').add({
        name: form.name.value,
        email: form.email.value,
        address: form.address.value,
        tel: form.tel.value
        
      })
      form.name.value = '';
      form.email.value = '';
      form.address.value = '';
      form.tel.value = '';
  }
  

  // form.addEventListener('submit', (e) => {
  //   e.preventDefault();
    // db.collection('contract').add({
    //   name: form.name.value,
    //   email: form.email.value,
    //   address: form.address.value,
    //   tel: form.tel.value
      
    // })
    // form.name.value = '';
    // form.email.value = '';
    // form.address.value = '';
    // form.tel.value = '';


  // })


  return (
    <div>
        <br></br>
      <h2> Contract US</h2>
      <br></br>
      <Button outline color="secondary" onClick={toggle} style = {{height: 150, padding:"1cm"}} block>Edit</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} style = {{height: 600, width: 600}}>
        <ModalHeader toggle={toggle}>Choose Picture</ModalHeader>
        <ModalBody>
        <Form>
      {/* <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
      </Row> */}
      <form id = "input">
      <FormGroup>
        <Label for="exampleAddress">Name</Label>
        <Input type="text" name="name" id="name" placeholder="1234 Main St" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Email</Label>
        <Input type="text" name="email" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="address" placeholder="1234 Main St"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Tel</Label>
        <Input type="text" name="tel" id="tel" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
      </form>
      {/* <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row> */}
      {/* <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup>
      <Button>Sign in</Button> */}
    </Form>
        </ModalBody>
        <ModalFooter>
        <Button   color="danger" onClick={toggle}>DELETE</Button>
          <Button   color="success" onClick={sendinput}>SUMMIT</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;

