import { Button , Input , Modal ,ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ProductForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import CreatableSelect from 'react-select/creatable';
import {firebase } from '../edit_homepage/firebase';

export default class ProductForm extends Component {
  constructor( props ){
    super(props);
    this.state = { 
      Catagory : null,
      Brand : null,
      Name : null,
      Version : null,
      file : null,
      Show : false,
      options: [],
      optionsB: [],
      optionN: [],
      old_name:"",
      CataChange:null,
      success: false,
      BrandVal: null,
      CatagoryVal: null,
      image: null
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleChange3 = this.handleChange3.bind(this)
    this.handleIm = this.handleIm.bind(this)
    this.Submit = this.Submit.bind(this)
    this.last = this.last.bind(this)
    let x = firebase.database().ref('Product').on('value', (data)=>{
      var BrandData = data.toJSON()
      if(BrandData!== null){var z = Object.keys(BrandData)
        //console.log(BrandData)
      for(var i in z){
        this.state.options.push({label: z[i]})
      }}
    })
  }
  handleChange = (newValue) => {
    this.setState({CatagoryVal:newValue})
    if(newValue !== null){
      //if (this.state.old_name !== newValue){
        // if (this.state.optionsB !== []){
        //   this.setState({optionsB:[]})
        // }
        if(this.state.Catagory!==newValue.label){
          this.setState({CataChange:null,Brand:null,optionsB:[]})
        }
        this.setState({old_name:newValue})
        console.log("Enter This state")
        this.setState({Catagory : newValue.label});
        var y = firebase.database().ref('Product/'+newValue.label).on('value', (data)=>{
          var BrandData = data.toJSON()
          if(BrandData !== null){
            var z = Object.keys(BrandData)
            let zzz = []
            for(var i in z){
              zzz.push({label: z[i]})
            }
            this.setState({optionsB: zzz})
          }
        })
      //}
    }
    else{
      this.setState({Catagory: null,CataChange:null,optionsB:[],Brand:null})
    }
  };
  last=()=>{
    
    if(this.state.success){
      this.setState({
        Catagory : null,
        Brand : null,
        Name : null,
        Version : null,
        file : null,
        Show : false,
        options: [],
        optionsB: [],
        optionN: [],
        old_name:"",
        CataChange:null,
        success: false,
        BrandVal: null,
        CatagoryVal: null,
        image: null
      })
      firebase.database().ref('Product').on('value', (data)=>{
        let BrandData = data.toJSON()
        if(BrandData !== null && BrandData !== undefined){
          var z = Object.keys(BrandData)
          //console.log(BrandData)
        for(var i in z){
          this.state.options.push({label: z[i]})
        }}
      })
      this.setState({success:!this.state.success})
    }
  }
  handleChange2 = (newValue) => {
    this.setState({CataChange:newValue})
    if(newValue !== null){
      this.setState({Brand: newValue.label});
      
    }
    else{this.setState({Brand: null});}
  };
  handleChange3 = (newValue) => {
    if(newValue !== null){this.setState({[newValue.target.name]: newValue.target.value,optionsB:[]});}
    else{this.setState({[newValue.target.name]: null});}
  };
  handleIm(event) {
    if(event.target.files[0] !== undefined){
      this.setState( {file: URL.createObjectURL(event.target.files[0])} )
      this.setState({image: event.target.files[0]})
    }
    else{
      this.setState( {file: null, image: null} )
    }
  }
  Submit() {
    if(this.state.Catagory === null || this.state.Brand === null || this.state.Name === null || this.state.Version === null || this.state.file === null){
      this.setState({Show : !this.state.Show})
    }
    else{
      const image = this.state.image
      const uploadTask = firebase.storage().ref(`Product/${image.name}`).put(image);
      uploadTask.on('state_changed',(snapshot)=>{},(error)=>{
        firebase.database().ref('Product/'+this.state.Catagory+'/'+this.state.Brand+'/'+this.state.Name+'/'+this.state.Version).set({
          Catagory: this.state.Catagory,
          Brand: this.state.Brand,
          Name: this.state.Name,
          Version: this.state.Version,
          PictureLink: null
        });
      },
      ()=>{
        firebase.storage().ref('Product').child(image.name).getDownloadURL().then(url => {
          firebase.database().ref('Product/'+this.state.Catagory+'/'+this.state.Brand+'/'+this.state.Name+'/'+this.state.Version).set({
            Catagory: this.state.Catagory,
            Brand: this.state.Brand,
            Name: this.state.Name,
            Version: this.state.Version,
            PictureLink: url
          });
          this.setState({success:!this.state.success});
        })
      }
      )
      
    }
  }
  render(){
    let bgcolor = this.props.bgcolor;
    // let y = (firebase.database().ref('Brand/'+this.state.Catagory).on('value', (data)=>{
    //   this.state.optionsB.push(data.toJSON());
    // }))
    return (
      <center>
        <div>
      <Modal isOpen={this.state.Show} toggle={this.Submit}>
        <ModalHeader toggle={this.Submit}>Error</ModalHeader>
        <ModalBody>
          You didn't fill some input. 
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.Submit}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={this.state.success} toggle={this.last}>
        <ModalHeader toggle={this.last}>Success!</ModalHeader>
        <ModalBody>
          Submition complete! 
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.last}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
      <div className='Box'>
        <div className = 'ProductForm'>
          <div className = 'FormBox'>
            <th className='InputIm'>
              <div>
                <th><h4 className='Txt'>Catagory :</h4></th>
                <th><CreatableSelect isClearable options={this.state.options} value={this.state.CatagoryVal} className = 'In' onChange={this.handleChange}  /></th>
              </div>
              <div className='TR'>
                <th><h4 className='Txt'>Brand :</h4></th>
                <th><CreatableSelect  isClearable  options={this.state.optionsB} value={this.state.BrandVal} className = 'In' onChange={this.handleChange2} value = {this.state.CataChange}/></th>
              </div>
              <div className='TR'>
                <th><h4 className='Txt'>Name :</h4></th>
                <th><div className ='Input'><Input name="Name" value={this.state.Name} onChange={this.handleChange3}/></div></th>
              </div>
              <div className='TR'>
                <th><h4 className='Txt'>Version :</h4></th>
                <th><div className ='Input'><Input name="Version" value={this.state.Version} onChange={this.handleChange3}/></div></th>
              </div>
            </th>
            <th>
              <div className='InputIm2' >
                <div className='BoxIm'>
                  <br/>
                  <img src={this.state.file} className='Im'/>
                  <input type="file" onChange={this.handleIm} className='Choose'/>
                </div>
              </div>
            </th>
          </div>
        </div>
        </div>
        {/* <h>{this.state.Catagory} {this.state.Brand} {this.state.Name} {this.state.Version}</h> */}
        <Button className='ButtSub' color ={bgcolor} onClick={this.Submit}>
              Submit
        </Button>
        {console.log((this.state.Catagory in this.state.options))}
      </center>
    );
  }
}