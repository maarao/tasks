import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript. My name is Maanav.
            </header>
            <header className="App-header" role="heading">
                So here is another header
            </header>
            <img
                src="https://w.wallha.com/ws/9/JYjveKLu.jpg"
                alt="This looks cool"
            />
            Unordered List:
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <Container>
                <Row>
                    <Col>
                        First Column
                        <div className="Red-rectangle"></div>
                    </Col>
                    <Col>
                        Second column. Tada 2-column layout
                        <div className="Red-rectangle"></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World.
            </p>
        </div>
    );
}

export default App;
