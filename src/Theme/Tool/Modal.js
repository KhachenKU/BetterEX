import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import './Tool.css';
import { useDispatch } from 'react-redux';
import { changePrimary, changeSecondary, changeDanger, changeDark, changeInfo, changeLight, changeSuccess, changeWarning } from '../../actions';

const ModalExample = (props) => {
  const {
    passChange,
    title,
    color,
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const dispatch = useDispatch();

  const fn = (passChange) => {
    switch (passChange) {
      case "1":
        dispatch(changePrimary())
        setModal(!modal)
        return 1
      case "2":
        dispatch(changeSecondary())
        setModal(!modal)
        return 1
      case "3":
        dispatch(changeSuccess())
        setModal(!modal)
        return 1
      case "4":
        dispatch(changeDanger())
        setModal(!modal)
        return 1
      case "5":
        dispatch(changeWarning())
        setModal(!modal)
        return 1
      case "6":
        dispatch(changeInfo())
        setModal(!modal)
        return 1
      case "7":
        dispatch(changeLight())
        setModal(!modal)
        return 1
      case "8":
        dispatch(changeDark())
        setModal(!modal)
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