import { Form, FormGroup, Button, Nav } from "react-bootstrap";
import { Input, Label } from "reactstrap";


const Register = () => {
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
                <h1 className="text-center">Welcome New User!</h1>
                <FormGroup>
                    <Label>Frst Name: </Label>
                    <Input type="text" placeholder="First Name"/>
                </FormGroup>
                <FormGroup>
                    <Label>Last Name: </Label>
                    <Input type="text" placeholder="Last Name"/>
                </FormGroup>
                <FormGroup>
                    <Label>User Name: </Label>
                    <Input type="text" placeholder="User Name"/>
                </FormGroup>
                <FormGroup>
                    <Label>Email: </Label>
                    <Input type="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <Label>Password: </Label>
                    <Input type="password" placeholder="Password"/>
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block">Register</Button>
            </Form>
        </>
    );
};

export default Register;