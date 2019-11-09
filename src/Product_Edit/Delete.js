import { Button , Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import './Delete.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Select from 'react-select';
import {firebase } from '../edit_homepage/firebase';
export default class ProductForm extends Component {
  constructor( props ){
    super(props);
    this.state = { 
      Catagory : null,
      Brand : null,
      Name : null,
      Version : null,
      Show : false,
      show2: false,
      CataOptions: [],
      BrandOptions: [],
      NameOptions: [],
      VersionOptions: [],
      BrandVal: null,
      NameVal: null,
      VersionVal: null,
      warning: '',
      CatagoryVal: null
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleChange3 = this.handleChange3.bind(this)
    this.Submit = this.Submit.bind(this)
    this.Permit = this.Permit.bind(this)
    this.Allow = this.Allow.bind(this)
    let x = firebase.database().ref('Product').on('value', (data)=>{
      var BrandData = data.toJSON()
      if(BrandData!== null&&BrandData!== undefined){var z = Object.keys(BrandData)
      for(var i in z){
        this.state.CataOptions.push({label: z[i]})
      }}
    })
  }
  handleChange = (newValue) => {
    
    if(newValue !== null){
      if(this.state.Catagory!==newValue.label){
        this.setState({BrandVal:null,Brand:null,BrandOptions:[],Name:null,NameVal:null,NameOptions:[],Version:null,VersionVal:null,Version:[]})
      }
      this.setState({Catagory: newValue.label,CatagoryVal:newValue});
      var y = firebase.database().ref('Product/'+newValue.label).on('value', (data)=>{
        var BrandData = data.toJSON()
        if(BrandData !== null){
          var z = Object.keys(BrandData)
          let zzz = []
          for(var i in z){
            console.log(z[i])
            zzz.push({label: z[i]})
          }
          this.setState({BrandOptions: zzz})
        }
      })
    }
    else{
      this.setState({Catagory: null,BrandVal:null,Brand:null,BrandOptions:[],Name:null,NameVal:null,NameOptions:[],Version:null,VersionVal:null,Version:[]})
    }
  };
  handleChange1 = (newValue) => {
    if(newValue !== null){
      this.setState({Brand: newValue.label,BrandVal:newValue});
      if(this.state.Brand!==newValue.label){
        this.setState({Name:null,NameVal:null,NameOptions:[],Version:null,VersionVal:null,Version:[]})
      }
      var y = firebase.database().ref('Product/'+this.state.Catagory+'/'+newValue.label).on('value', (data)=>{
        var BrandData = data.toJSON()
        if(BrandData !== null){
          var z = Object.keys(BrandData)
          let zzz = []
          console.log(z)
          for(var i in z){
            zzz.push({label: z[i]})
          }
          this.setState({NameOptions: zzz})
        }
      })

    }
    else{this.setState({Brand: null,Name:null,NameVal:null,NameOptions:[],Version:null,VersionVal:null,Version:[]});}
  };
  handleChange2 = (newValue) => {
    if(newValue !== null){
      this.setState({Name: newValue.label,NameVal:newValue});
      if(this.state.Name!==newValue.label){
        this.setState({Version:null,VersionVal:null,Version:[]})
      }
      var y = firebase.database().ref('Product/'+this.state.Catagory+'/'+this.state.Brand+'/'+newValue.label).on('value', (data)=>{
        let BrandData = data.toJSON()
        console.log(BrandData)
        if(BrandData !== null && BrandData !== undefined){
          var z = Object.keys(BrandData)
          let zzz = []
          for(var i in z){
            console.log(z[i])
            zzz.push({label: z[i]})
          }
          this.setState({VersionOptions: zzz})
        }
      })
    
    }
    else{this.setState({Name: null,Version:null,VersionVal:null,Version:[]});}
  };
  handleChange3 = (newValue) => {
    if(newValue !== null){this.setState({Version: newValue.label,VersionVal:newValue});}
    else{this.setState({Version: null});}
  }
  Permit(){
    this.setState({show2: !this.state.show2})
  }
  Allow(){
    let path = ''
      if(this.state.Version!==null){
        path = '/'+this.state.Version
      }
      if(this.state.Name!==null){
        path = '/'+this.state.Name+path
      }
      if(this.state.Brand!==null){
        path = '/'+this.state.Brand+path
      }
      path = 'Product/'+this.state.Catagory+path
      console.log(path)
      firebase.database().ref(path).remove();
      this.setState({Catagory: null,CataOptions:[],CatagoryVal:null,BrandVal:null,Brand:null,BrandOptions:[],Name:null,NameVal:null,NameOptions:[],Version:null,VersionVal:null,Version:[]})
      firebase.database().ref('Product').on('value', (data)=>{
        let BrandData = data.toJSON()
        if(BrandData!== null &&BrandData!== undefined){
          console.log(BrandData)
          var z = Object.keys(BrandData)
          let k =[]
          for(var i in z){
            k.push({label: z[i]})
          }
          this.setState({CataOptions:k,show2:false})
      }
      
      })
      
    }
  Submit() {
    if(this.state.Catagory === null){
      this.setState({Show : !this.state.Show})
    }
    else{
      this.setState({warning : 'Do you want '+this.state.Name+' '+this.state.Version+' to be delete?'})
        if(this.state.Version===null){
          this.setState({warning : 'Do you want '+this.state.Name+' and all version of it to be delete?'})
        }
        if(this.state.Name===null){
          this.setState({warning : 'Do you want all item in '+this.state.Brand+' Brand to be delete?'})
        }
        if(this.state.Brand===null){
          this.setState({warning : 'Do you want all item in '+this.state.Catagory+' Catagory to be delete?'})
        }
      console.log(this.state.warning)
      this.setState({show2: true})
    }
  }

  render(){
    let bgcolor = this.props.bgcolor;
    return (
      <center>
        <Modal isOpen={this.state.Show} toggle={this.Submit}>
        <ModalHeader toggle={this.Submit}>Error</ModalHeader>
        <ModalBody>
          You didn't fill Catagory. 
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.Submit}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={this.state.show2} toggle={this.Permit}>
        <ModalHeader toggle={this.Permit}>Permission</ModalHeader>
        <ModalBody>
          {this.state.warning}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.Allow}>Allow</Button>
        </ModalFooter>
      </Modal>
      <div className='DBox'>
        <div className = 'DProductForm'>
          <div className = 'DFormBox'>
            <th className='DInputIm'>
            <div>
              <th><h4 className='DTxt'>Catagory :</h4></th>
              <th><Select onChange={this.handleChange} value={this.state.CatagoryVal} options={this.state.CataOptions} className = 'InS'/>
              </th>
            </div>
            <div className='DTR'>
              <th><h4 className='DTxt'>Brand :</h4></th>
              <th><Select options={this.state.BrandOptions} value={this.state.BrandVal}  onChange={this.handleChange1} className = 'InS'/></th>
            </div>
            <div className='DTR'>
              <th><h4 className='DTxt'>Name :</h4></th>
              <th><Select options={this.state.NameOptions} value={this.state.NameVal} onChange={this.handleChange2} className = 'InS'/></th>
            </div>
            <div className='DTR'>
              <th><h4 className='DTxt'>Version :</h4></th>
              <th><Select options={this.state.VersionOptions} value={this.state.VersionVal} onChange={this.handleChange3} className = 'InS'/></th>
            </div>
            </th>
          </div>
        </div>
      </div>
      <Button className='ButtSub' color ={bgcolor} onClick={this.Submit}>
              Submit
      </Button>
      {/* <h>{this.state.Catagory} {this.state.Brand} {this.state.Name} {this.state.Version}</h> */}
      </center>
    );
  }
}