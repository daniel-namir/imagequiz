import {Row, Col, Nav} from "react-bootstrap"
import flowers from "./data"
import Register from "./Register";
const Home = () => {
    return(
        <>
        <Nav defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link id="homepage" href="#home">Home Page</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="registerpage" href="#register">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="loginpage" href="#login">Login</Nav.Link>
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