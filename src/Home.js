import './Styles/Home.css'
import {Row, Col, Nav, Navbar, Image, Container} from "react-bootstrap"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Home = () => {
    const [username] = useState('')
    const location = useLocation();
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        setCustomer(localStorage.getItem("customer"));
        if (flowers.length === 0) {
            api.getFlowers().then((x) => {
                console.log("log", x);
                setFlowers(x);
            });
        }
    });
    
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
        <Row>
            <h1>imagequiz - Home Page</h1>
        </Row>
        <Row>
            {flowers.map((flower) => (
                <Col key={flower.name}>
                    <Link to={`/quiz/${flower.name}`}>
                        <Image id="image"src={flower.picture}/>
                    </Link>
                    <h3>{flower.name}</h3>
                </Col>
            ))}
        </Row>
        </>
    );
};

export default Home;