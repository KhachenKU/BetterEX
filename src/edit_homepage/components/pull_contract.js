import React, { Component } from 'react';
import { storage, db } from '../firebase';
import { Alert } from 'reactstrap';

// const Example = (props) => {
// this.state = {
//     name: '',
//     email: '',
//     address: '',
//     tel: ''
// }

// db.collection('contract').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         if (doc.id == 1) {
//             this.setState({ name: doc.data().name })
//             this.setState({ email: doc.data().email })
//             this.setState({ address: doc.data().address })
//             this.setState({ tel: doc.data().tel })

//         }
//     })
// })

//     return (
//         <div>
//             <Alert color="success">
//                 <h4 className="alert-heading">Well done!</h4>
//                 <p>
//                     Aww yeah, you successfully read this important alert message. This example text is going
//                     to run a bit longer so that you can see how spacing within an alert works with this kind
//                     of content.
//           </p>
//                 <hr />
//                 <p className="mb-0">
//                     Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
//           </p>
//             </Alert>
//         </div>
//     );
// };

// export default Example;

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: '',
            tel: ''
        }
    }

    render() {

        db.collection('contract').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                if (doc.id == '1') {
                    this.setState({ name: doc.data().name })
                    this.setState({ email: doc.data().email })
                    this.setState({ address: doc.data().address })
                    this.setState({ tel: doc.data().tel })

                }
            })
        })

        return (
            <div>
                <Alert color="success">
                    <h4 className="alert-heading">Contract US</h4>
                    <p>
                        {this.state.address}
                    </p>
                    <p>
                        {this.state.email}
                    </p>
                    <p>
                        {this.state.tel}
                    </p>
                    <hr />
                    <p className="mb-0">
                        {this.state.name}
                    </p>
                </Alert>

            </div>




        )
    }
}

export default ImageUpload;



