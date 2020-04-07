import Link from 'next/link'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

// use the as to change the default HTML tag type so we don't end up with anchor tag within an anchor tag
const Header = () => (
  <Navbar bg='dark' variant='dark' expand='lg'>
    <Container bg='dark'>
      <Navbar.Brand as='span'>
        <Link href='/'>
          <a>
            <div className='brandContainer'>
              <img
                src='/images/logo.svg'
                width='40'
                height='40'
                className='d-inline-block align-top'
                alt='logo'
              />
              <div className='brandName'>Brand Name</div>
            </div>
          </a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link as='span'>
            <Link href='/about'><a>About</a></Link>
          </Nav.Link>
          <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

)

export default Header
