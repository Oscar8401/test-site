/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroBackground from './assest/images/HeroBackground.png';

function App() {
	const images = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	return (
		<div className="App">
			<section>
				<div className="style-one">
					<div className="style-two">
						<img src={HeroBackground} className="Hero-background" alt="HeroBackground" />
					</div>
					<div className="style-three">
						<Row>
							<Col sm={6}>
								<div className="title">
									Hello, and <b>welcome</b>
								</div>
								<div className="sub-title">This is test site</div>
							</Col>
						</Row>
						<Row className="image-over-button">
							<Col><Button id="button">Learn more</Button></Col>
						</Row>
					</div>
				</div>
			</section>

			<section>
				<Row>
					<Col className="text-center mt-3">
						<div className="about-us">About us</div>
					</Col>
				</Row>
				<Row>
					<div className="about-us-container">
						<Col sm={8}>
							<img
								src={require(`./assest/images/circle.png`)}
								className="about-us-img"
								alt="HeroBackground"
							/>
						</Col>
						<Col sm={8}>
							<p className="about-us-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare
								diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo
								nec ornare diam commodo nibh.
							</p>
						</Col>
						<Col sm={8}>
							<p className="about-us-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare
								diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo
								nec ornare.
							</p>
						</Col>
					</div>
				</Row>
			</section>

			<section className="section-three">
				<Row>
					<Col>
						<div className="about-us">Projects</div>
					</Col>
				</Row>
				<Row>
					{images.map((num, index) => {
						return (
							<Col sm={3} key={index} className="row-image">
								<img src={require(`./assest/images/Image${num}.png`)} className="project-img" alt="project image" />
							</Col>
						);
					})}
				</Row>
			</section>
			<section className="section-Four">
				<Row>
					<Col>
						<div className="about-cotact-us">Contact</div>
					</Col>
				</Row>
				<Row>
					<Col sm={6}>
						<input type="text" className="form-control input-name" placeholder="Name" />
					</Col>
					<Col sm={6}>
            <input type="text" className="form-control input-name" placeholder="Email"/>
					</Col>
				</Row>
				<Row>
					<Col>
          <textarea type="text" className="form-control input-message" placeholder="Message"></textarea>
					</Col>
				</Row>
				<Row>
					<Col>
          <Button id="normal-button">Send message</Button>
					</Col>
				</Row>
			</section>
		</div>
	);
}
export default App;
