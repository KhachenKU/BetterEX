import React, { Component } from 'react';
import { storage, db } from '../../../firebase';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';



export default class PopUp_reg extends Component {
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
        // this.handleChange = this
        //     .handleChange
        //     .bind(this);
        // this.handleUpload = this.handleUpload.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    sendinput = () => {
        console.log(55555)
        let form = document.querySelector('#input');
        var nm = document.getElementById('name')
        db.collection('contract').doc('1').update({
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







    // handleChange = e => {
    //     if (e.target.files[0]) {
    //         const image = e.target.files[0];
    //         this.setState(() => ({ image, check: !this.state.check }));

    //     }
    // }

    // handleUpload = () => {

    //     const { image } = this.state;
    //     const uploadTask = storage.ref(images/${image.name}).put(image);
    //     uploadTask.on('state_changed',
    //         (snapshot) => {
    //             // progrss function ....
    //             const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //             this.setState({ progress });
    //         },
    //         (error) => {
    //             // error function ....
    //             console.log(error);
    //         },
    //         () => {
    //             // complete function ....
    //             storage.ref('images').child(image.name).getDownloadURL().then(url => {
    //                 console.log(url);
    //                 this.setState({ url });
    //             })
    //         });
    // }



    render() {
        const style = {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };

        const fn = () => {
            this.sendinput()
            this.toggle()
        }
        return (
            <div >
                <div style={{ padding: 30 }} >
                    <button type="button" className="btnReg" onClick={this.toggle.bind(this)}>
                            Register
                        </button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.className} style={{ height: 600, width: 800, }}>
                        <ModalHeader toggle={this.toggle.bind(this)}>Fill Out</ModalHeader>
                        <ModalBody>
                            
                            <form id="input">
                                
                                <div className="form">
                                    <div className="form-group">
                                        <label htmlFor="username">Name : </label>
                                        <input type="text" name="name" placeholder="your name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username">Address: </label>
                                        <input type="text" name="address" placeholder="address" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Tel : </label>
                                        <input type="email" name="tel" placeholder="telephone number" />
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button className="btnReg" onClick={this.toggle.bind(this)}>
                                        Edit
                                    </Button>
                            <Button  color="success" onClick={() => fn()}>SUMMIT</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}
