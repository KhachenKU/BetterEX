// import React from 'react';
import { Button, Card, CardBody, CardText, CardGroup, CardTitle, Alert, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Form, FormGroup, Label } from 'reactstrap';
import Plus from './Plus-PNG-Image.png';
import Pro from './5b.gif';


// export default class Example extends React.Component {


//   render() {
//     return (
//     <div>
//       <br></br>
//         <h3> Promotion </h3>
//      <div style = {{padding: 30}}>
//      <Button  outline color="secondary" style = {{height: 100 , width: 150}} >

//       <img src= {Plus} alt = "Plus" width="40" height="40" align="absmiddle" /> 

//       </Button>
//       {/* <Card style = {{height: 100 , width: 150}}>
//         <CardBody>
//           <CardTitle>

//             <Button close />

//           </CardTitle>
//           <img src= {Pro} alt = "Pro" width="80" height="60" align="absmiddle" /> 
//         </CardBody>
//       </Card> */}
//      </div> 



//      </div>   
//      );
//   }
// }

import React, { useState } from 'react';


const AlertExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  //const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  //const onDismiss = () => setVisible(false);
  //const toggle2 = () => setVisible(!visible);

  return (

    <div>
      <br></br>
      <h3> Promotion </h3>
      <div style={{ padding: 30 }}>

        {/*          
            <Button  outline color="secondary" style = {{height: 100 , width: 150}} >
      
             <img src= {Plus} alt = "Plus" width="40" height="40" align="absmiddle" /> 

             </Button>
              */}

        <Button outline color="secondary" onClick={toggle} style={{ height: 150, width: 150 }}>Edit</Button>
        <Modal isOpen={modal} toggle={toggle} className={className} style={{ height: 600, width: 600 }}>
          <ModalHeader toggle={toggle}>Choose Picture</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="exampleCustomFileBrowser">File Browser</Label>
              <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="choose" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button outline color="secondary" onClick={toggle2}>SUMMIT</Button>

          </ModalFooter>
        </Modal>

      </div>



    </div>
  );
}

export default AlertExample;

