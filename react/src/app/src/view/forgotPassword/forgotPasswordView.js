import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './forgotPasswordStyle.css';
import Loader from '../loader/loader.js';
import Message from '../message/message.js';
import ErrorTag from '../errorTag/errorTag.js';

export default class ForgotPasswordView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="LoginFormCon">
            <div className='LoginForm'>
                <div>
                    <label className='loginLabel'>
                        Forgot Password
                    </label>
                </div>
                <div>
                    <input
                        type="text"
                        className='loginInput'
                        id="fp-email"
                        placeholder='Email'
                        onChange={this.props.setEmail.bind(this)} />
                </div>
                <div>
                    <button
                        type="button"
                        className='loginBt'
                        onClick={this.props.submit.bind(this)}>
                        Submit
                    </button>
                    <button
                        type="button"
                        className='loginBt'
                        onClick={this.props.login.bind(this)}>
                        Login
                    </button>
        </div>
            </div>
            <Loader value={this.props.value.isLoading} />
            <Message clearMessage={this.props.clearMessage.bind(this)} apiReaspose={this.props.value.apiReaspose} messageContent={this.props.value.message} />
            </div>
        )
    }
}