import React, { Component } from 'react';
import './noConnectionStyle.css';

export default class NoConnection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (       
            <div className='notFoundCon'>
               <div className='notFoundLink'>No connection</div>
             </div> 
        )
  }
}