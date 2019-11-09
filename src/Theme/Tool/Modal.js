import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import './Tool.css';
import { useDispatch } from 'react-redux';
import { changePrimary, changeSecondary, changeDanger, changeDark, changeInfo, changeLight, changeSuccess, changeWarning } from '../../actions';
import { useSelector } from 'react-redux';
import {storage , db , auth} from '../../../src/firebase';

const ModalExample = (props) => {
  const {
    passChange,
    title,
    color,
    buttonLabel,
    className
  } = props;
  const bgcolor = useSelector(state => state.BGcolor);
  const txcolor = useSelector(state => state.TXcolor);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const dispatch = useDispatch();

  function saveColor() {
    console.log(bgcolor)
    console.log(txcolor)
    db.collection('Colors').doc("BGcolor").update(
        {
            statusBGcolor: bgcolor
        }).then(db.collection('Colors').doc("TXcolor").update(
          {
            statusTXcolor: txcolor
        }))
      }

  const fn = (passChange) => {
    switch (passChange) {
      case "1":
        dispatch(changePrimary())
        setModal(!modal)
        saveColor()
        return 1
      case "2":
        dispatch(changeSecondary())
        setModal(!modal)
        saveColor()
        return 1
      case "3":
        dispatch(changeSuccess())
        setModal(!modal)
        saveColor()
        return 1
      case "4":
        dispatch(changeDanger())
        setModal(!modal)
        saveColor()
        return 1
      case "5":
        dispatch(changeWarning())
        setModal(!modal)
        saveColor()
        return 1
      case "6":
        dispatch(changeInfo())
        setModal(!modal)
        saveColor()
        return 1
      case "7":
        dispatch(changeLight())
        setModal(!modal)
        saveColor()
        return 1
      case "8":
        dispatch(changeDark())
        setModal(!modal)
        saveColor()
        return 1 
    }
  }

  return (
    <div>
      <Button color={color} className="colorButton" onClick={toggle}><h3 className="font">{buttonLabel}</h3></Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalFooter>
          <Button color="success" onClick={() => fn(passChange)}>Accept</Button>{' '}
          <Button color="danger" onClick={toggle}>Denied</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;