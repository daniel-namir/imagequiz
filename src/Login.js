import { Nav, Form, FormGroup, Button } from "react-bootstrap";
import { Input, Label } from "reactstrap";

const Login = () => {
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
            <Form className="login-form">
                <h1 className="text-center">Welcome Back!</h1>
                <FormGroup>
                    <Label>Email: </Label>
                    <Input type="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <Label>Password: </Label>
                    <Input type="password" placeholder="Password"/>
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block">Log In</Button>
            </Form>
        </>
    );
}

export default Login;