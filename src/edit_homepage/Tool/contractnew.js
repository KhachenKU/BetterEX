import React, { Component } from 'react';
import { storage, db } from '../firebase';
import Plus from '../Tool/add-512.png';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';



class ImageUpload extends Component {
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
    //     const uploadTask = storage.ref(`images/${image.name}`).put(image);
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

        // db.collection('contract').get().then(snapshot => {
        //     snapshot.docs.forEach(doc => {
        //         if(doc.id == '1'){
        //             this.setState({name: doc.data().name})
        //             this.setState({email: doc.data().email})
        //             this.setState({address: doc.data().address})
        //             this.setState({tel: doc.data().tel})
        //         }
        //     })
        // })


        return (
            // <div style = {style}>
            //     <input type = "file" onChange={this.handleChange} />
            //     <Button onClick={this.handleUpload} > Upload </Button>
            // </div>
            <div >
                <h2> Contract US</h2>
                <div style={{ padding: 30 }} >
                    <Button outline color="secondary" onClick={this.toggle.bind(this)} block style={{ height: 160 }}>
                        edit
             </Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.className} style={{ height: 600, width: 800, }}>
                        <ModalHeader toggle={this.toggle.bind(this)}>Fill Out</ModalHeader>
                        <ModalBody>
                            {/* <FormGroup>
              <Label for="exampleCustomFileBrowser">File Browser</Label>
              <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label = "choose" onChange={this.handleChange} />
            </FormGroup>
                <input type = "file" onChange={this.handleChange} /> */}
                            <form id="input">
                                {/* <FormGroup>
                                    <Label for="exampleAddress">Name</Label>
                                    <input type="text" name="name" id="name" placeholder="1234 Main St" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAddress2">Email</Label>
                                    <input type="text" name="email" id="email" placeholder="Apartment, studio, or floor" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAddress">Address</Label>
                                    <input type="text" name="address" id="address" placeholder="1234 Main St" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAddress2">Tel</Label>
                                    <input type="text" name="tel" id="tel" placeholder="Apartment, studio, or floor" />
                                </FormGroup> */}
                                <div className="form">
                                    <div className="form-group">
                                        <label htmlFor="username">Name : </label>
                                        <input type="text" name="name"  />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email : </label>
                                        <input type="text" name="email"  />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username">Address: </label>
                                        <input type="text" name="address"   />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Tel : </label>
                                        <input type="email" name="tel"  />
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button  color="success" onClick={() => fn()}>SUMMIT</Button>
                            {/* <Button  outline color="secondary" onClick={() => fn()}>SUMMIT</Button> */}
                        </ModalFooter>
                    </Modal>

                </div>
            </div>





        )
    }
}

export default ImageUpload;