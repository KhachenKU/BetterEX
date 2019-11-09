import React from "react";
import loginImg from "../../login.svg";
import { storage, db ,auth } from '../../../firebase';
import { Button, Modal, ModalHeader, ModalBody, ButtonGroup , ModalFooter, CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';
import CheckUorA from "./chkUserAdmin";

export class Register extends React.Component {
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

    // sendinput = () => {
    //     console.log(55555)
    //     let form = document.querySelector('#input');
    //     var nm = document.getElementById('name')
    //     db.collection('contract').doc('1').update({
    //         name: form.name.value,
    //         email: form.email.value,
    //         address: form.address.value,
    //         tel: form.tel.value

    //     })
    //     form.name.value = '';
    //     form.email.value = '';
    //     form.address.value = '';
    //     form.tel.value = '';
    // }

    

    uploadData = (e) => {
        e.preventDefault();
        let DataRegUser = document.querySelector('#pushRegister');
        let email = DataRegUser.email.value ;
        this.state.email = email ;
        let password = DataRegUser.password.value ;
        auth.createUserWithEmailAndPassword(email, password).then(() => db.collection('Members').doc(DataRegUser.email.value).set(
            {
                username: DataRegUser.username.value,
                email: DataRegUser.email.value,
                rank: null
                // Name: DataRegUser.name.value,
                // Address: DataRegUser.address.value,
                // Tel: DataRegUser.tel.value,
                // downloadkey: '',
                // downloadstatus: ''
            })) 
            .then(this.toggle())
    }
    

    render() {
        const fn = () => {
            this.sendinput()
            this.toggle()
        }

        return (
        <div className="base-container">
            <br />
            <div className="header">Register</div>
            <div className="image">
                <img src={loginImg} />
            </div>
            <div className="content">

                <form id='pushRegister'>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>


                        <Button color="success" onClick={this.uploadData}>Register</Button>
                    </div>
                </form>
                <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.className} style={{ height: 600, width: 800, }}>
                    <ModalHeader toggle={this.toggle.bind(this)}>Left or Right</ModalHeader>

                    <ModalBody>
                        <center>
                            <form id="input">
                                <CheckUorA email={this.state.email}/>
                            </form>
                        </center>
                    </ModalBody>
                </Modal>

            </div>
        </div>
    );
    }
}