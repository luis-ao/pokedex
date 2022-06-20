import logo from '../resources/logo.png';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import styles from "../styles/Styles.module.css";

export default function Nav() {
  
  return (
    <div className="App">
      <Navbar className={styles.nav}>
        <Container className="justify-content-center">
          <Navbar.Brand /* href="#home" */>
            <img
              src={logo}
              width="180"
              className="d-inline-block align-top"
              alt="logo de pokemon"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
