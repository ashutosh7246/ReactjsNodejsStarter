import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './overlayStyle.css';

export default class Overlay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='mysidenavOverlay' className='sidenavOverlay'></div>
        )
    }
}