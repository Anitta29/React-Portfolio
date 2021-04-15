import React from "react";
import { Row, Col, Container } from "react-bootstrap";
function Contact() {
return(
    <Container>
        <Row className="justify-content-center text-center my-5">
            <Col md={12}><h1>Contact</h1></Col>
            
            <Col md={3}>
            <a href="mailto:...@gmail.com" target="_blank" class="fa fa-envelope-o"><span class="icons"></span></a>
            </Col>
            <Col md={3}>
            <a href="https://github.com/Anitta29" className="fa fa-github"/>
            </Col>
            <Col md={3}>
            <a href="https://github.com/Anitta29" className="fa fa-download"/>
            </Col>
            
        </Row>
    </Container>
)
}
export default Contact;