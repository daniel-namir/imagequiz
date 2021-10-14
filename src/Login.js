import './Styles/Login.css'
import { Nav, Navbar, Container, Form, FormGroup, Button } from "react-bootstrap";
import users from "./communication/users";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    let login = (e) => {
        e.preventDefault();
        let found = users.find( x => x.username === username & x.password === password);
        if (found) {
            console.log(found);
            history.push({pathname: '/', state: {username: username}});
        }
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
            <Form className="login-form" align="center" onSubmit={login}>
                <h1 className="text-center">Welcome back!</h1>
                <FormGroup>
                    <Form.Label  id="email">Email: </Form.Label>
                    <Form.Control type="email" id="input" placeholder="Email" value={username} onChange={onUsernameChanged}/>
                </FormGroup>
                <FormGroup>
                    <Form.Label  id="password">Password: </Form.Label>
                    <Form.Control type="password" id="input" placeholder="Password" value={password} onChange={onPasswordChanged}/>
                </FormGroup>
                <Button id="button" variant="primary" type="submit">Log In</Button>
            </Form>
        </>
    );
}

export default Login;