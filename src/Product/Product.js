import React from 'react';
import './Product.css';
import NavBar from '../Theme/Tool/navBar';
import TableProduct from './TableProduct';
import { Row, Col } from 'reactstrap';
import { Table } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Axios from 'axios';

function callbackFunction (childData)  {
    this.setState({message: childData})
}

function Product({match:{params}}){
    const BGcolor = useSelector(state => state.BGcolor);
    const TXcolor = useSelector(state => state.TXcolor);
    

    
    return (
        <div>
            <NavBar logo="BetterExhibition" log={"log in"} bgcolor={BGcolor} txColor={TXcolor} />
            <div className='page'>
                <div><TableProduct Catagory={params.iaun}/></div>
            </div>
        </div>
    );
}

export { Product };