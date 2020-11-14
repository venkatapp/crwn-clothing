import React, {Component} from 'react';

import './sign-in.styles.scss';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends Component{
constructor(props){
    super(props);
    this.state={
       email:'',
       password:'' 
    }
}

handleSubmit = event =>{
    event.preventDefault();
    this.setState({email:'', password:''})
}



handleChange = event =>{
    const {name, value} = event.target;
    this.setState({[name]:value})
}




render(){
 return(   
    <div className="sign-in">
        <h2>Already have an acount</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
            <FormInput 
            type="email" 
            name="email" 
            label="email"
            value={this.state.email} 
            handleChange={this.handleChange} 
            required
            />
            <FormInput 
            type="password" 
            name="password" 
            label="password"
            value={this.state.password} 
            handleChange={this.handleChange} 
            required
            />
            <div className="buttons">
                <CustomButton type="submit" value="Sign In">Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} IsGoogleSignIn>
                {''} 
                    Sign In With Google
            {''}

                </CustomButton>
            </div>

        </form>
    </div>
 )}
}

export default SignIn;