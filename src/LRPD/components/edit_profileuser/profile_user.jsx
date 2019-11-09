import React from "react" ;
// import pfUser from "../../profile_user.svg";
import "./styleEdit.scss";
import { storage, db } from '../../../firebase';
import { Container, Row, Col , Button } from 'reactstrap';
import {ImageUpload} from "../../components/edit_profileuser/imgupload"
import { Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';

export class ProfileUser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            modal: false,
            check: false,
            name: '',
            email: '',
            address: '',
            tel: ''
        }
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    uploadCompany = (e) => {
        e.preventDefault();
        let DataRegUser = document.querySelector('#pushCompany');
        db.collection('Users').doc('hero').update({
            Company: DataRegUser.company.value
            // Username: DataRegUser.username.value,
            // email: DataRegUser.email.value,
            // Password: DataRegUser.password.value,
            // Name: DataRegUser.name.value,
            // Address: DataRegUser.address.value,
            // Tel: DataRegUser.tel.value,
            // downloadkey: '',
            // downloadstatus: ''
        })
    }

    render() {
        return (
        <Container> 
            <Row>
                <Col>
            <div className= "base-container">
            <br />
                <div className= "header">Profile</div>
                    <div className= "content">
                        <div className="image">
                            {/* <img src={pfUser} /> */}
                            <ImageUpload/>
                        </div>
                </div>
            </div>
                    </Col>
                <Col>
                <br />
                <br />
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Company: </label>
                        <input type="text" name ="showcompany" />    
                        <button type="button" className="btnReg" onClick={this.toggle.bind(this)}>
                                    Edit
                                </button>
                                <form id = 'pushCompany'>
                                            <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.className} style={{ height: 400, width: 600, }}>
                                                <ModalHeader toggle={this.toggle.bind(this)}>Fill Out</ModalHeader>
                                                <ModalBody>
                                                    
                                                    <form id="input">
                                                        
                                                        <div className="form">
                                                            <div className="form-group">
                                                                <label htmlFor="username">Company : </label>
                                                                <input type="text" name="Company" placeholder="company" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </ModalBody>
                                    <ModalFooter>
                                        <Button  color="success" onClick = {this.uploadCompany}>SUMMIT</Button>
                                    </ModalFooter>
                                </Modal>
                                </form>
                            </div>
                    <div className="form-group">
                        <label htmlFor="email">Address: </label>
                        <input type="text" name ="address" />    
                        <button type="button" className="btnReg" onClick={this.toggle.bind(this)}>
                                    Edit
                                </button>
                            </div>
                    <div className="form-group">
                        <label htmlFor="username">Tel: </label>
                        <input type="text" name ="tel" />  
                        <button type="button" className="btnReg" onClick={this.toggle.bind(this)}>
                                    Edit
                                </button>  
                            </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name ="email" />    
                        <button type="button" className="btnReg" onClick={this.toggle.bind(this)}>
                                    Edit
                                </button>
                            </div>
                </div>
                </Col>
                <Col></Col>
                </Row>
            
                <Row>
                <Col>
                <br />
                <br />
                <div className="footer">
                    <center><Button color="dark">Transaction</Button></center>
                </div></Col>
                </Row>
      
      </Container>
        );
    }
}