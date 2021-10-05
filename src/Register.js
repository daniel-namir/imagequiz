import { Form, FormGroup, Button, Nav } from "react-bootstrap";
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
            <Nav>
                <Nav.Item>
                    <Nav.Link id="homepage" href="#/">Home Page</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link id="registerpage" href="#register">Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link id="loginpage" href="#login">Login</Nav.Link>
                </Nav.Item>
            </Nav>
            <Form className="login-form" onSubmit={saveUser}>
                <h1 className="text-center">Welcome New User!</h1>
                <FormGroup>
                    <Form.Label>Frst Name: </Form.Label>
                    <Form.Control type="text" placeholder="First Name"/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control type="text" placeholder="Last Name"/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Email" value={username} onChange={onUsernameChanged}/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChanged}/>
                </FormGroup>
                <Button variant="primary" type="submit">Register</Button>
            </Form>
        </>
    );
};

export default Register;