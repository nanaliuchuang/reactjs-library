import React from "react";
import Footer from "../Footer/footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import my from '../../my.jpg'
export default function App() {
	return (
		<div className="App">
			<Container className="bg-info">
				<Row>
					<Col className="col-3 bg-dark p-0"><img src={my} /></Col>
					<Col className="bg-light c">
						<Row className="my-3">
							<Col><span className="pb-1 m-3 border-2 fw-bold text-dark border-bottom border-info text-uppercase">Profile</span></Col>
						</Row>
						<Row>
							<Col className="my-2 mx-3"><p>I'm a logical, process-focused person with a pragmatic approach to problem-solving and motivated to get things done, even in stressful environments.<span className="d-none d-xxl-block"> I have more than 2 years of experience in managing and leading teams across many fields with many different projects.In addition, I am also an inquisitive person, like to overcome challenges and really interested in Business Management and how to help organizations succeed. In the long term, I want to try new situations and increase my skills and experience.</span></p></Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col className="col-4 py-1 my-4">
						<Row className=""><span className="p-1 fs-5 text-center text-light fw-semibold bg-dark border border-dark border-start-0 rounded-end">Professinal Title</span></Row>
					</Col>
					<Col className="py-4"><h2 className="fs-1 text-dark">Nanaliu Chuang</h2></Col>
				</Row>
				<Row>
					<Col className="bg-dark col-3 text-light">
						<Row>
							<Col><h4 className="p-4">Contact</h4></Col>
						</Row>
						<Row>
							<Col ><p className="text-center"><i class="bi bi-geo-alt ms-1"></i><span className="ms-4">01 Hoa Minh Street, Lien Chieu District, Da Nang City</span></p></Col>
						</Row>
						<Row>
							<Col><p><i class="bi bi-telephone-fill ms-4"></i><span className="ms-4 ">0702564669</span></p></Col>
						</Row>
						<Row>
							<Col><p><i class="bi bi-envelope-fill ms-4"></i><span className="ms-4 ">nanaliuchuang@gmail.com</span></p></Col>
						</Row>
						<Row>
							<Col><h4 className="py-3 px-4">Exxpertise</h4></Col>
						</Row>
						<Row>
							<Col className="col-4"><p className="ms-4">Boostrap</p></Col>
							<Col className="me-3 mt-1">
								<ProgressBar variant="info" now={70} />
							</Col>
						</Row>
						<Row>
							<Col className="col-4"><p className="ms-4">Angular</p></Col>
							<Col className="me-3 mt-1">
								<ProgressBar variant="warning" now={60} />
							</Col>
						</Row>
						<Row>
							<Col className="col-4"><p className="ms-4">ReactJS</p></Col>
							<Col className="me-3 mt-1">
								<ProgressBar variant="danger" now={50} />
							</Col>
						</Row>
					</Col>
					<Col className="bg-light c">
						<Row className="my-3">
							<Col><span className="pb-1 m-3 border-2 fw-bold text-dark border-bottom border-info text-uppercase">Work Experience</span></Col>
						</Row>
						<Row>
							<Col className="my-0 mx-2"><div class="d-flex justify-content-between fw-bold">
								<div class="p-2">Job-Tilte</div>
								<div class="p-2">Company name</div>
								<div class="p-2">2022-Present</div>
							</div></Col>
						</Row>
						<Row className="my-2 mx-3">
							<ul>
								<li>Monitor, manage, control websites, mobile apps and landing pages deployed from development plan</li>
								<li>Optimize all jobs; Control the output quality when implementing the strategy. Discuss and present new approaches; research responsive market fit for user intent and stability level for devices (mobile preferred)</li>
								<li>Discuss, review UX and UI designs; technical feasibility assessment and feedback</li>
								<li>Perform standard and ad-hoc reports in graphical format as required by management</li>
								<li>Track the implementation process, product operation for direction improve, upgrade to add new features </li>
							</ul>
						</Row>
						<Row className="my-1">
							<Col><span className="pb-1 m-3 border-2 fw-bold text-dark border-bottom border-info text-uppercase">Skill</span></Col>
						</Row>
						<Row>
							<Col className="my-2 mx-3">
								<ul>
									<li>Website design</li>
									<li>HTML, CSS, JS</li>
									<li>Performance testing, load testing and debugging</li>
								</ul>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
			<Footer></Footer>
		</div>
	)
}