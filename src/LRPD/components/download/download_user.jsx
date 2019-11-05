import React from "react";
import "./dl_user.scss";
import { storage, db } from '../../../edit_homepage/firebase';
import { Container, Row, Col, Button, InputGroup, InputGroupAddon, Input, Alert } from 'reactstrap';


export class DownloadUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false, chkshow: true, hold: false, col: '' };
        this.checkkey = this.checkkey.bind(this)
    }

    toggleDiv = () => {
        // const { show, chkshow } = this.state;
        // this.setState({ show: !show, chkshow: !chkshow })
    }

    checkkey = () => {
        let form = document.querySelector('#key');
        let check = form.input.value
        const { show, chkshow } = this.state;
        const hold = this.state.hold;
        console.log(check)
        db.collection('key').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                // console.log(doc.id)
               
                if (doc.id === check &&  doc.data().status === 'download') {
                    this.setState({ hold: true });
                    // console.log(555)
                }
            })
            if (this.state.hold) {
                this.setState({ show: true, chkshow: false })
                alert("สามารถ download ได้ครั้งเดียวเท่านั้น");
                db.collection('key').doc(check).update({
                    status: 'downloaded'

                })

                // console.log(this.state.hold)
            }
            else {
                this.setState({ show: false, chkshow: true })
                alert("KEY WRONG");
                // db.collection('key').doc(check).update({

                //     status: 'download'


                // })
                form.input.value = ''
            }

        })

    

    }

    // download() {
    //  var imgRef = storage.ref('promotion/IMG_0213.jpg');
    //     imgRef.getDownloadURL().then(function (url) {
    //         console.log(5555)
    //         // this.setState({url: this.state.url})
    //     })
    // }




    render() {


        // const fn = () => {
        //     this.toggleDiv()
        //     this.checkkey()
        //   }
        return (
            <Container>
                <Row>
                    <Col>
                        <br />
                        <div className="base-container">
                            <br />
                            <div className="header">Download</div>
                            <br /><br />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <br />
                    {/* <div className="txtKEY">KEY : </div> */}
                    <Col>
                        <form id="key">
                            {/* <InputGroup> */}
                            <center>
                                <Input name="input" />
                                <br/>
                                <br/>
                                {/* <InputGroupAddon addonType="prepend"> */}
                                {this.state.chkshow && <div><Button color="danger" onClick={this.checkkey}>Check Key</Button></div>}
                                {/* { this.state.chkshow && <DisChk/> } */}
                                {this.state.show && <BoxInstall />}
                                {/* </InputGroupAddon> */}
                            {/* </InputGroup> */}
                            </center>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}


const a = '/12 - Multiple Access.pdf' ;

class BoxInstall extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           url: ''
        }
        this.download = this.download.bind(this)
    }
     
   
    download = () => {
     var imgRef = storage.ref(a);
        imgRef.getDownloadURL().then(url => {
            // console.log(this.setState())
            this.setState({url: url})
        })
    }
    render() {

        // download = () => {
        //     // var imgRef = storage.ref('promotion/IMG_0213.jpg');

        //     // imgRef.getDownloadURL().then(function(url){

        //     //     console.log(url)
        //     // })
        // }


        return (
            <div>
                <Button color="primary" onClick={this.download}   >Download</Button>
            <div>
                <br/>
                <br/>
                <a href = {this.state.url}>  {this.state.url} </a>
               
            </div>
                


            </div>

        )
    }
}
