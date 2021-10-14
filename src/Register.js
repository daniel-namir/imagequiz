import './Styles/Register.css'
import { Form, FormGroup, Button, Nav, Navbar, Container } from "react-bootstrap";
import { useState } from "react";
import users from "./communication/users";


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let saveUser = (e) => {
        e.preventDefault();
        users.push({username: username, password: password});
    }

    let onUsernameChanged = (e) => {
        setUsername(e.target.value);
    }

    let onPasswordChanged = (e) => {
        setPassword(e.target.value);
    }

    return(
        <>
            <Navbar bg="light" variant="light">
                <Container>
                <Nav className="me-auto">
                    <Nav.Link id="home" href="#/">Home</Nav.Link>
                    <Nav.Link id="login" href="#login">Login</Nav.Link>
                    <Nav.Link id="register" href="#register">Register</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <Form className="login-form" align="center" onSubmit={saveUser}>
                <h1 className="text-center">Welcome New User!</h1>
                <FormGroup>
                    <Form.Label id="first-name">First Name: </Form.Label>
                    <Form.Control type="text" placeholder="First Name"/>
                </FormGroup>
                <FormGroup>
                    <Form.Label id="last-name">Last Name: </Form.Label>
                    <Form.Control type="text" placeholder="Last Name"/>
                </FormGroup>
                <FormGroup>
                    <Form.Label id="email">Email: </Form.Label>
                    <Form.Control type="email" placeholder="Email" value={username} onChange={onUsernameChanged}/>
                </FormGroup>
                <FormGroup>
                    <Form.Label id="password">Password: </Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChanged}/>
                </FormGroup>
                <Button variant="primary" type="submit">Register</Button>
            </Form>
        </>
    );
};

export default Register;