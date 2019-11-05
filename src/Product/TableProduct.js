import React from 'react';
import './TableProduct.css';
import GridList from './GridList/GridList'

class TableProduct extends React.Component{
    render(){
        return(
            <div className='tableproduct'>
                <div className='category'>
                    <span className = 'textspan'>Surface Tension</span>
                    <div className='product'><GridList /></div>
                </div>
                <div className='category'>
                    <span  className = 'textspan'>Contact Angle</span>
                    <div className='product'><GridList /></div>
                </div>
                <div className='category'>
                    <span className = 'textspan'>Nichaporn parn</span>
                    <div className='product'><GridList /></div>
                </div>
            </div>
        );  
    }
}

export default TableProduct;