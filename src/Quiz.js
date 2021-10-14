import './Styles/Quiz.css'
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Container, Button } from 'react-bootstrap';
import quizzes from './data.js';
import { useState } from 'react';

let Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const {quizName} = useParams();
  const questions = quizzes.find(x => x.find(y => y.answer === quizName));
  let nextQuestion = (selectedChoice) => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    else {
      setGameOver(true);
    }
    if (questions[currentIndex].answer === selectedChoice) {
      setScore(score + 1);
    }
  }

  let restartQuiz = () => {
    console.log(currentIndex);
    setCurrentIndex(0);
    setGameOver(false);
    setScore(0);
  }

  function shuffle(array) {
    let places = array.map((item, index) => index);
    return array.map((item, index, array) => {
      const random_index = Math.floor(Math.random() * places.length);
      const places_value = places[random_index];
      places.splice(random_index, 1);
      return array[places_value];
    })
}
  return (
    <Container>
      {!gameOver ?
      <Row>
        <Col id="question-number">
          Question {currentIndex + 1} / 6
        </Col>
        <Col>
          <Image id="image" src={questions[currentIndex].picture}></Image>
        </Col>
        <Col>
          <ListGroup>
            {shuffle(questions[currentIndex].choices).map(choice => 
              <ListGroup.Item id="choices" key={choice} onClick={() => nextQuestion(choice)} action variant="light">
              {choice}
            </ListGroup.Item>
              )}
          </ListGroup>
        </Col>
      </Row>
      : ''}
      <Row>
        <Col id="score">
          Score: {score}    
        </Col>
      </Row>
      {gameOver ?
      <Row>
        <Col id="restart-button">
          <Button onClick={restartQuiz}>Restart</Button>
        </Col>
        <Col id="home-button">
          <Link to="/"><Button>Go Home</Button></Link>
        </Col>
      </Row>
      : ''}
    </Container>
  );
}

export default Quiz;