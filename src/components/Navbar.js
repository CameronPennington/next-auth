import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function AppNavbar() {
	const navbarStyle = { marginBottom: "25px" };
	return (
		<Navbar bg="light" expand="lg" style={navbarStyle}>
			<Container>
				<Navbar.Brand>
					<Link href="/">
						<a>Thoughts!</a>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link href="/share-thought">
							<a className="nav-link">New Thought</a>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
