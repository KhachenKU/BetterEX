import React, { Component } from 'react';
import { storage, db } from '../firebase';
import Plus from '../Tool/add-512.png';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Form, FormGroup, Label } from 'reactstrap';




class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            show: '',
            col: '',
            url: '',
            modal: false,
            check: false
        }

        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        // let form = document.querySelector('#promo3');

    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }





    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image, check: !this.state.check }));
            this.setState(() => ({ show: URL.createObjectURL(image) }));

        }
    }

    handleUpload = () => {
       
        const { image } = this.state;
        const uploadTask = storage.ref(`promotion/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
            },
            (error) => {
                // error function ....
                console.log(error);
            },
            () => {
                // complete function ....
        
                storage.ref('promotion').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ url });
                    // var sendUrl = storage.ref('promotion').child(image.name).getDownloadURL().then(url => {
                    //     return url;
                   
     
                    db.collection('Promotion').doc('2').set({
                        Link: url
                       
                    })
                    console.log(url);
                
                })
             
        
            });

        // let form = document.querySelector('#promo3');
            
    }


    


    delete() {
        this.setState({
            url: '',
            show: ''
        });
        db.collection('Promotion').doc('2').set({
            Link: ''
           
        })
        
    }

    delete2() {
        this.setState({
            show: ''
        });
        // db.collection('Promotion').doc('3').set({
        //     Link: ''
           
        // })
    }

   
    



    render() {
        const style = {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };

        const fn = () => {
            this.toggle()
            this.delete2()
            if (this.state.check) {
                this.handleUpload()
            }
        }



        const fn2 = () => {
            this.toggle()
            this.delete()


        }

        const fn3 = () => {
            this.toggle()
            this.delete2()


        }

        db.collection('Promotion').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                if(doc.id == 2){
                    this.setState({url: doc.data().Link})
                }
            })
        })



        return (
            // <div style = {style}>
            //     <input type = "file" onChange={this.handleChange} />
            //     <Button onClick={this.handleUpload} > Upload </Button>
            // </div>
            <div >
                <div style={{ padding: 30 }} >
                    <form id="promo3">
                        <Button outline color="secondary" onClick={this.toggle.bind(this)} style={{ height: 160, width: 160 }}>
                            <center>
                                <img src={this.state.url || Plus} alt="Uploaded images" style={{ height: 140, width: 140 }} />
                            </center>
                        </Button>
                    </form>
                    <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.className} style={{ height: 600, width: 600 }}>
                        <ModalHeader toggle={() => fn3()}>Choose Picture</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Label for="exampleCustomFileBrowser">File Browser</Label>
                                <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="choose" onChange={this.handleChange} />
                            </FormGroup>
                            {/* <input type = "file" onChange={this.handleChange} /> */}
                            <img src={this.state.show} />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={() => fn2()}>DELETE</Button>
                            <Button color="success" onClick={() => fn()}>SUBMIT</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>





        )
    }
}

export default ImageUpload;