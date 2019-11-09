import React from 'react';
import Promotionpic from './asset/promotion.jpg';
import './homepage.css';
import img1 from './asset/Picture1.jpg';
import img2 from './asset/Picture2.jpg';
import img3 from './asset/Picture3.jpg';
import img4 from './asset/Picture4.jpg';
import promo1 from './asset/newpromo1.jpg';
import promo2 from './asset/newpromo2.jpg';
import promo3 from './asset/newpromo3.jpg';
import {Carousel} from 'react-bootstrap';
import mis from './asset/mission.jpg';
import {db} from '../firebase';


class homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Promo1: '',
            Promo2: '',
            Promo3: '',
            Mission: '',
            Address: '',
            Email: '',
            Name: '',
            Tel: '',
            stState: true
        }
    }
    
    start(){
        if(this.state.stState===true){
            this.setState({stState:false})
        db.collection('Promotion').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                if(doc.id == 1){
                    this.setState({Promo1: doc.data().Link})             
                }
                if(doc.id == 2){
                    this.setState({Promo2: doc.data().Link})             
                }
                if(doc.id == 3){
                    this.setState({Promo3: doc.data().Link})             
                }
            })
          })
    
        db.collection('Mission').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                this.setState({Mission: doc.data().Link})             
            })
          })

        
        db.collection('contract').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                this.setState({Address: doc.data().address})
                this.setState({Email: doc.data().email})
                this.setState({Name: doc.data().name})
                this.setState({Tel: doc.data().tel})
            })
          })
        }
    }
    render(){
        this.start()
        return(
            <div>
                <section className = 'promotion'>
                    <Carousel pauseOnHover={false}>
                       {  this.state.Promo1 != '' && <Carousel.Item >
                            <img
                            className="d-block w-100"
                            src={this.state.Promo1}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                      </Carousel.Item> }
                      {  this.state.Promo2 != '' &&  <Carousel.Item pauseOnHover="false">
                            <img
                            className="d-block w-100"
                            src={this.state.Promo2}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
        </Carousel.Item> }
                        {     this.state.Promo1 != '' && <Carousel.Item pauseOnHover="false">
                            <img
                            className="d-block w-100"
                            src={this.state.Promo3}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
        </Carousel.Item> }
                </Carousel>
                </section>
                <section className = 'recommended'>
                    <div className='recommended-grid'>
                        <div className='first'>
                            <header>Recommended</header>
                            <p>These things I recommended you.</p>
                        </div>
                        <div className='img-group second'>
                            <img src = {img1} />
                            <img src = {img2} />
                            <img src = {img3} />
                            <img src = {img4} />
                        </div>
                    </div>
                </section>
                <section className = 'mission'>
                    <div className = 'mission-inside'>
                        {/* <header>Mission</header>
                        <div className='mission-data'>
                            <p>The most difficult thing is the decision to act, the rest is merely tenacity. 
                                The fears are paper tigers. You can do anything you decide to do. 
                                You can act to change and control your life; and the procedure, 
                                the process is its own reward.</p>
                        </div> */}
                        
                    </div>
                    {/* <br/> */}
                    <img src = {this.state.Mission} />
                </section>
                <footer className = 'contact'>
                    <div className='contact-data'>
                        <header>Contact Us</header>
                        {/* <p className='contact-data-name'>Name: Setthawut saengcharoen</p>
                        <p className='contact-data-email'>Email: contact@central.co.th</p>
                        <p className='contact-data-tel'>Tel: 0-2730-7777</p>
                        <p className='contact-data-address'>(วันจันทร์ ถึง ศุกร์ 9:00-21:00 น. วันเสาร์-วันอาทิตย์และวันหยุดนักขัตฤกษ์ 9:00-18:00 น.).</p> */}
                    
                        <p className='contact-data-name'>Name: {this.state.Name}</p>
                        <p className='contact-data-email'>Email: {this.state.Email}</p>
                        <p className='contact-data-tel'>Tel: {this.state.Tel}</p>
                        <p className='contact-data-address'>Address: {this.state.Address}</p>
                    
                    </div>
                </footer>
            </div>
        );
    }
}

export default homepage;