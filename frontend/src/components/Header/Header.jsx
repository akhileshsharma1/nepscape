import React from 'react'
import { Container, Row, Button} from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'

const nav__links=[
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '#',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    },
]

export const Header = () => {
  return <header className="header">
    <Container>
        <Row>
            <Button>
                
            </Button>
        </Row>
    </Container>
  </header>
}

export default Header;
