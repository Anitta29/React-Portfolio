import React from "react";
import { Row, Col, Button, Card, Container } from "react-bootstrap";

function Portfolio() {
    return (

        <Container>
            <Row className="justify-content-center align-item-center h-100 text-center my-5">
                <Col md={12}><h1>Portfolio</h1></Col>
                <Col md={4}>
                    <Card className="my-5">
                        <Card.Img variant="top" src="/images/travelgod.png" />
                        <Card.Body>
                            <Card.Title><a href="https://anitta29.github.io/Travel-God-1-Project/">Travel God</a></Card.Title>
                           
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="my-5">
                        <Card.Img variant="top" src="/images/travelgod.png" />
                        <Card.Body>
                            <Card.Title><a href="https://anitta29.github.io/Travel-God-1-Project/">Travel God</a></Card.Title>
                           
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="my-5">
                        <Card.Img variant="top" src="/images/travelgod.png" />
                        <Card.Body>
                            <Card.Title><a href="https://anitta29.github.io/Travel-God-1-Project/">Travel God</a></Card.Title>
                           
                            
                        </Card.Body>
                    </Card>
                </Col>
               
              
            </Row>
        </Container>
    )
}
export default Portfolio;