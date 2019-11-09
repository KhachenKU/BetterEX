import React from 'react';
import EditMenu from '../Theme/Tool/editMenu';
import NavBar from '../Theme/Tool/navBar';
import Logo from './Tool/edit_home';
import History from './Tool/history'
import Us from './Tool/contractnew'
import Summit from './Tool/summit'
import { Container, Row, Col } from 'reactstrap';
import Pic1 from './components/pic1';
import Pic2 from './components/pic2';
import Pic3 from './components/pic3';
import { useSelector } from 'react-redux';

import './App.css';

function App() {
  const BGcolor = useSelector(state => state.BGcolor);
  const TXcolor = useSelector(state => state.TXcolor);
  const USERstate = useSelector(state => state.userstate);
  const ADMINstate = useSelector(state => state.adminstate);

  return (

    <div className='background-color'>
      <NavBar us={USERstate} ad={ADMINstate} logo="BetterExhibition" log={"log in"} bgcolor={BGcolor} txColor={TXcolor} />
      <EditMenu page="homepage" bgcolor={BGcolor}/>

      <div style={{ padding: 40 }}>
        <Logo />
        <h2> Promotion </h2>
        <Container style={{ margin: "0px" }}>
          <Row>
            <Col lg="2.5"> <Pic1 /> </Col>
            <Col lg="2.5" > <Pic2 /> </Col>
            <Col lg="2.5" > <Pic3 /> </Col>
          </Row>
        </Container>
        <History />
        <Us />

      </div>
      <div align="center" style={{margin: "1cm"}}>
        {/* <Summit /> */}
      </div>

    </div>


    // <div>
    //   <Up/>
    // </div>



  );
}

export default App;

