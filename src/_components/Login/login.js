import React, { Component } from "react";
import { Card,Form, Button } from 'react-bootstrap';
// import bg from './assets/img/bg-login.jpg'
// import './assets/css/Login.css';

class Login extends Component {
    constructor() {
        super();
        this.State = {
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
          [event.target.name]: event.target.value
        } );
        console.log(event.target.value);
      }

    handleSubmit = (event) =>{
        event.preventDefault();
        if(this.state.uname == 'DANS' && this.state.pass == '123'){
            this.props.history.replace('/');
            this.setUname(this.state.uname);
            this.setPass(this.state.pass);
        } else{
            alert('Username dan password salah')
        }
    }

    getUname(){
		return localStorage.getItem('');	
    }
    
	setUname(Uname){
		return localStorage.setItem('uname',Uname);
    }
    
    getPass(){
		return localStorage.getItem('');	
    }
    
	setPass(Pass){
		return localStorage.setItem('pass',Pass);
	}

    

    render() {
        return (
            <div >
                <div className="login">
                    {/* <img src={bg} alt="" /> */}
                </div>
                <div >
                    <Card id= "card-login">
                        <Card.Text>
                            <div className="title-login">
                            <Card.Title> Login </Card.Title>
                            </div>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail" className="uName">
                                    <Form.Control type="text" required placeholder="Enter Username" name="uname" onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword" className="password">
                                    <Form.Control type="password" required placeholder="Enter Password" name="pass" onChange={this.handleChange}/>
                                </Form.Group>
                                <Button className="submitLogin" type="submit" onSubmit={this.handleSubmit}>
                                    Submit
                                </Button>
                            </Form>
                        </Card.Text>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;