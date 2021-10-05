import { Nav, Form, FormGroup, Button } from "react-bootstrap";
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
            <Form className="login-form" onSubmit={login}>
                <h1 className="text-center">Welcome back!</h1>
                <FormGroup>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Email" value={username} onChange={onUsernameChanged}/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChanged}/>
                </FormGroup>
                <Button variant="primary" type="submit">Log In</Button>
            </Form>
        </>
    );
}

export default Login;