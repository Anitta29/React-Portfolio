import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
function About() {
return(
    <Container>
        <Row className="justify-content-center">
            <Col md={6}>
            <Image src="images/me.jpg" fluid/>
            </Col>
        </Row>
        <Row className="justify-content-center my-3 text-center">
            <Col md={8}>
                <h1>About Me</h1>
            <p>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem numquam ratione tempora sed magni
                    nostrum, fugit laborum distinctio sapiente incidunt deleniti commodi officia iusto atque sit
                    asperiores
                    aspernatur repellendus molestias!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit laborum tenetur consequuntur ipsum
                    ad veritatis ipsa at tempore nihil placeat eius, perspiciatis culpa deleniti delectus impedit animi.
                    Nisi, eum error.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium aliquam ab ducimus
                    molestiae repellendus nam ad officiis repudiandae nemo? Nostrum accusantium, explicabo quo esse
                    cupiditate consequuntur illo sint assumenda?
                </p>
            </Col>
        </Row>
    </Container>
)
}
export default About;