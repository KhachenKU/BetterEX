import React,{Component} from 'react';
import './TableProduct.css';
import GridList from './GridList/GridList';
import {firebase} from '../edit_homepage/firebase';
class TableProduct extends Component{
    constructor( props ){
        super(props);
        this.state = {
          List: [],
          startState: true,
          OldVal: null
    };
    this.start = this.start.bind(this)
    }
    start=()=>{
        
        let y = this.props.Catagory.slice(1)
        if(this.state.startState===true){
        let x = firebase.database().ref('Product/'+y).on('value', (data)=>{
            this.setState({startState:false})
            this.setState({List:[],OldVal:this.props.Catagory})
            let BrandData = data.toJSON()
            let z = Object.keys(BrandData)
            let k = []
            for(var i in z){
                console.log(BrandData[z[i]])
                k.push(<div className='category'>
                    <span className = 'textspan'>{z[i]}</span>
                    <div className='product'><GridList Val={BrandData[z[i]]} /></div>
                </div>)
            }
            this.setState({List:k})
        })
        
        //window.location.reload();
    }
    }
    render(){
        this.start()
        // if(this.state.OldVal!==this.props.Catagory){
        //     this.setState({startState:true})
        // }
        return(
            <div className='tableproduct'>

                {/* <div className='category'>
                    <span className = 'textspan'>{this.state.brand[0]}</span>
                    <div className='product'><GridList Val={this.state.Val[0]}/></div>
                </div> */}
                {this.state.List}
                {/* <div className='category'>
                    <span  className = 'textspan'>{this.state.Version[0]}</span>
                    <div className='product'><GridList Brand={this.state.Version[0]} Val={this.state.Val}/></div>
                </div>
                <div className='category'>
                    <span className = 'textspan'>{this.state.Version[0]}</span>
                    <div className='product'><GridList Brand={this.state.Version[0]} Val={this.state.Val}/></div>
                </div> */}
            </div>
        );  
    }
}

export default TableProduct;