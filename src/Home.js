import {Row, Col, Nav, Navbar} from "react-bootstrap"
import flowers from './flowers';
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Home = () => {
    const [username] = useState('')
    const location = useLocation();
    
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
            <Nav.Item>
                {(location.state && location.state.username) ?
                <Navbar.Text>
                    Signed in as: <a href="#login">{location.state.username}</a>
                </Navbar.Text>
                : ''}   
            </Nav.Item>
        </Nav>
        <Row>
            <h1>imagequiz - Home Page</h1>
        </Row>
        <Row>
            {flowers.map((flower) => (
                <Col>
                <img src={flower.picture} />
                    <h3>{flower.name}</h3>
                </Col>
            ))}
        </Row>
        </>
    );
};

export default Home;