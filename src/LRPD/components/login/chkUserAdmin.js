import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { storage, db , auth} from '../../../firebase';

const CheckUserorAdmin = (props) => {
    const {
        email
      } = props;

  const [rSelected, setRSelected] = useState(null);

  function upUser(e) {
    e.preventDefault();
    // let DataRegUser = document.querySelector('#pushEmailtoUser');
    db.collection('Members').doc(email).update(
        {
            rank: 'user'
            // Name: DataRegUser.name.value,
            // Address: DataRegUser.address.value,
            // Tel: DataRegUser.tel.value,
            // downloadkey: '',
            // downloadstatus: ''
        }).then(() => setRSelected(2))
}
const upAdmin = (e) => {
    e.preventDefault();
    // let DataRegUser = document.querySelector('#pushEmailtoAdmin');
    db.collection('Members').doc(email).update(
        {
            rank: 'admin'
            // Name: DataRegUser.name.value,
            // Address: DataRegUser.address.value,
            // Tel: DataRegUser.tel.value,
            // downloadkey: '',
            // downloadstatus: ''
        }).then(() => setRSelected(1))
}

  return (
    <div>
      <ButtonGroup>
        <Button color="info" onClick={upUser} active={rSelected === 2}>Create User</Button>
        <Button color="success" onClick={upAdmin} active={rSelected === 1}>Create your Web</Button>
      </ButtonGroup>
    </div>
  );
}

export default CheckUserorAdmin;