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




class BoxInstall extends React.Component {

    constructor(props) {
        super(props);
        this.state = { url1: '', url2: ''
        }
            
        this.download = this.download.bind(this)
    }

     
   
    download = () => {
     var imgRef = storage.ref('key/DYNALYZER.exe');
        imgRef.getDownloadURL().then(url1 => {
            
            this.setState({url1: url1})
            // console.log(this.state)
        })

        var imgRef2 = storage.ref('key/FAMAS.exe');
        imgRef2.getDownloadURL().then(url2 => {
            this.setState({url2: url2})
            // console.log(this.state)
        })
    }
    render() {

        // download = () => {
        //     // var imgRef = storage.ref('promotion/IMG_0213.jpg');

        //     // imgRef.getDownloadURL().then(function(url){

        //     //     console.log(url)
        //     // })
        // }

        const url1 = this.state.url1 
        const url2 = this.state.url2 
        // console.log(url1)
        // console.log(url2)
        // console.log(this.state)
        return (
            <div>
                <Button color="primary" onClick={this.download}   >Download</Button>
            <div>
                <br/>
                <br/>
                { url2 != "" && <a href = {url2}> FAMAS.exe </a>}
                <br/>
                <br/>
                { url1 != "" && <a href = {url1}> DYNALYZER.exe </a>}
               
            </div>
                


            </div>

        )
    }
}