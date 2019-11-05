import React from 'react';
import NavBar from './Tool/navBar';
import Modal from './Tool/Modal'
import Contact from './Tool/contactUs';
import EditMenu from './Tool/editMenu';
import { Container, Row, Col } from 'reactstrap';
import './Tool/Tool.css';
import { useSelector } from 'react-redux';

function Theme() {
  const BGcolor = useSelector(state => state.BGcolor);
  const TXcolor = useSelector(state => state.TXcolor);
  const USERstate = useSelector(state => state.userstate);
  const ADMINstate = useSelector(state => state.adminstate);

  return (
    <div>
      <NavBar us={USERstate} ad={ADMINstate} logo="BetterExhibition" log={"log in"} bgcolor={BGcolor} txColor={TXcolor} />
      <EditMenu page="theme" bgcolor={BGcolor} />
      <center style={{ padding:"0cm 0cm 2cm 0cm" }}>
        <h1 style={{padding:"1cm"}}>Choose your color!</h1> 
        <Container>
          <Row >
            <Col lg="4" ><Modal passChange="1" title="Do you want to change color to primary?" color="primary" buttonLabel="Primary" ></Modal></Col>
            <Col lg="4"><Modal passChange="2" title="Do you want to change color to secondary?" color="secondary" buttonLabel="Secondary" ></Modal></Col>
            <Col lg="4"><Modal passChange="3" title="Do you want to change color to sucess?" color="success" buttonLabel="Success" ></Modal></Col>
          </Row>
          <Row style={{ padding:"3px 0px" }}>
            <Col lg="4"><Modal passChange="4" title="Do you want to change color to danger?" color="danger" buttonLabel="Danger" ></Modal></Col>
            <Col lg="4"><Modal passChange="5" title="Do you want to change color to warning?" color="warning" buttonLabel="Warning" ></Modal></Col>
            <Col lg="4"><Modal passChange="6" title="Do you want to change color to info?" color="info" buttonLabel="Info" ></Modal></Col>
          </Row>
          <Row>
            <Col lg="4"><Modal passChange="7" title="Do you want to change color to light?" color="light" buttonLabel="Light" ></Modal></Col>
            <Col lg="4"><Modal passChange="8" title="Do you want to change color to dark?" color="dark" buttonLabel="Dark" ></Modal></Col>
          </Row>
        </Container>
      </center>
      <div>
        <Contact bgcolor={BGcolor} />
      </div>
    </div>
  );
}

export default Theme;
