import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Form, FormGroup, Label } from 'reactstrap';
import Plus from './Plus-PNG-Image.png';

export default class ModalExample extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedFile: null ,
      modal: false ,
      setModal:false
    }
  }
  // const {
  //   buttonLabel,
  //   className
  // } = props;
  toggle = () => {
    const {modal} = this.state;
    this.setState({modal: !modal})
  }
  
render(){
  return (
    <div >
    <div >
      <h2>      Promotion </h2>
       <div style = {{padding: 30}} >
       <Button outline color="secondary" onClick={this.toggle} style = {{height: 150, width: 150}}>
       <img src= {Plus} alt = "Plus" width="40" height="40" align="absmiddle" /> 
       </Button>
      <Modal isOpen={this.modal} toggle={this.toggle} className={this.className} >
        <ModalHeader toggle={this.toggle}>Choose Picture</ModalHeader>
        <ModalBody>
          <FormGroup>
        <Label for="exampleCustomFileBrowser">File Browser</Label>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label = "choose" /> */}
       {/* <input type = "file"/> */}
      </FormGroup>
        </ModalBody>
        <ModalFooter>
        <Button  outline color="secondary" onClick={this.toggle}>DELETE</Button>
          <Button  outline color="secondary" onClick={this.toggle}>SUMMIT</Button>
        </ModalFooter>
      </Modal>

      <Button outline color="secondary" onClick={this.toggle} style = {{height: 150, width: 150}}>
       <img src= {Plus} alt = "Plus" width="40" height="40" align="absmiddle" /> 
       </Button>
      <Modal isOpen={this.modal} toggle={this.toggle} className={this.className} >
        <ModalHeader toggle={this.toggle}>Choose Picture</ModalHeader>
        <ModalBody>
          <FormGroup>
        <Label for="exampleCustomFileBrowser">File Browser</Label>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label = "choose" />
      </FormGroup>
        </ModalBody>
        <ModalFooter>
        <Button  outline color="secondary" onClick={this.toggle}>DELETE</Button>
          <Button  outline color="secondary" onClick={this.toggle}>SUMMIT</Button>
        </ModalFooter>
      </Modal>

      <Button outline color="secondary" onClick={this.toggle} style = {{height: 150, width: 150}}>
       <img src= {Plus} alt = "Plus" width="40" height="40" align="absmiddle" /> 
       </Button>
      <Modal isOpen={this.modal} toggle={this.toggle} className={this.className} >
        <ModalHeader toggle={this.toggle}>Choose Picture</ModalHeader>
        <ModalBody>
          <FormGroup>
        <Label for="exampleCustomFileBrowser">File Browser</Label>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label = "choose" />
      </FormGroup>
        </ModalBody>
        <ModalFooter>
        <Button  outline color="secondary" onClick={this.toggle}>DELETE</Button>
          <Button  outline color="secondary" onClick={this.toggle}>SUMMIT</Button>
        </ModalFooter>
      </Modal>
       </div>
    </div>
    </div>
  );
}
}

// export default ModalExample;
//  export default ModalExample;

