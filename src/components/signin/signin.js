import React, { Component } from 'react';
import signinStyle from './signin.module.scss';
import FormField from '../widgets/FormFields/formfields';
import { firebase } from '../../firebase';

class SignIn extends Component {
    state = {
        registerError: '',
        loading: false, 
        formdata: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },

                validation: {
                    required: true,
                    email: true
                },

                valid: false,
                touched: false,
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },

                validation: {
                    required: true,
                    password: true
                },

                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }

    updateForm = (element) => {
        //console.log(element)
        const newFormdata = {

            //copy of previous state
            ...this.state.formdata
        }

        const newElement = {
            //access the element and id
            ...newFormdata[element.id]

        }

        newElement.value = element.event.target.value;
        //data is valid or not
        if(element.blur) {

            //if true
            //running a function
            let validData = this.validate(newElement);

           newElement.valid = validData[0];
           newElement.validationMessage = validData[1];
        }

        newElement.touched = element.blur;
        newFormdata[element.id] = newElement;

        console.log(newFormdata)

        this.setState({
            formdata:newFormdata
        })
    }

    validate = (element) => {
        //receive element
        //returning array - true or false and error msg
        //if error contain true and nthing and moves forward

        let error = [true, '']
        //if no error it passes this

        //email

        if(element.validation.email){
            const regExp = RegExp(
                /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
            );

            const valid = regExp.test(element.value);
            const message = `${!valid ? 'Must be a valid email' : ''}`;
            error = !valid ? [valid, message] : error
        }

        //password

        if(element.validation.password){
            const valid = element.value.length >= 5;
            const message = `${!valid ? 'Must be greater than 5' : ''}`;
            error = !valid ? [valid, message] : error
        }


        if(element.validation.required) {
            const valid = element.value.trim() !== ''; //not equal to is true
            const message = `${!valid ? 'This field is required' : ''}`;
            //not valid return required

            error = ! valid ? [valid, message] : error
            //error msg is false and pass msg
            //if error passes this

            //false, This field is required
        }

        return error;
    }


    submitForm = (event, type) => {
        event.preventDefault();
        if(type !== null) {
            //compile all values and check input are valid

            let dataToSubmit = {};
            let formIsValid = true;

            for(let key in this.state.formdata) {
                dataToSubmit[key] = this.state.formdata[key].value
                //email and assign value
                //password and value of password
            }


            for(let key in this.state.formdata){
                formIsValid = this.state.formdata[key].valid && formIsValid;
            }

            if(formIsValid) {
                //register/login

                this.setState({
                    loading: true,
                    registerError:'' 
                })

                if(type){
                    firebase.auth()
                    .createUserWithEmailAndPassword(
                        dataToSubmit.email, 
                        dataToSubmit.password
                    ) 

                    .then (() => {
                        this.props.history.push('/')
                        //redirect user to home
                    })
                    
                    //error msg
                    .catch( error => {
                        this.setState({
                            loading: false,
                            registerError: error.message
                        })
                    })
                }

                else {
                    
                    firebase.auth()
                    .createUserWithEmailAndPassword(
                        dataToSubmit.email, 
                        dataToSubmit.password
                    ) 

                    .then (() => {
                        this.props.history.push('/')
                        //redirect user to home
                    })
                    
                    //error msg
                    .catch( error => {
                        this.setState({
                            loading: false,
                            registerError: error.message
                        })
                    })
                }
            }
        }
    }

    submitButton = () => (

        //jsx
        this.state.loading 
        ? 
        'loading . . .'
        :
        <div>
            <button onClick={(event) => this.submitForm(event, false)}>Register Now</button>
            <button onClick={(event) => this.submitForm(event, true)}>Log In</button>
        </div>
    )


    showError = () => (
        this.state.registerError !== '' ?
        <div className={signinStyle.error}>{this.state.registerError}</div>

        : ''
    )

    render() {
        return(
            <div className={signinStyle.logContainer}>
                <form onSubmit = {(event) => this.submitForm(event, null)}>
                <h2> Register / Login</h2>
                {/* sending data to formfields */}
                    <FormField 
                        id={'email'}
                        formdata={this.state.formdata.email}
                        change={(element) => this.updateForm(element)}

                    />


                    <FormField 
                        id={'password'}
                        formdata={this.state.formdata.password}
                        change={(element) => this.updateForm(element)}

                    />
                    

                    { this.submitButton() }
                    { this.showError()}
                </form>
            </div>
        )
    }
}

export default SignIn;