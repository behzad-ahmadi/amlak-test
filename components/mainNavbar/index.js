import Link from 'next/link';
import { Container, Offcanvas } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import NavLink from 'react-bootstrap/NavLink';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as config from '../../config';
import { useState } from 'react';
import { Person, Plus } from 'react-bootstrap-icons';

const MenuItem = ({ id, title, path, subMenu, divider, depth }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const showDropdown = e => {
    setShow(!show);
  };

  const hideDropdown = e => {
    setShow(false);
  };

  if (divider) return <NavDropdown.Divider />;

  if (subMenu) {
    const activeChild = subMenu.find(item => router.pathname === item.path);
    depth = depth + 1;
    return (
      <NavDropdown
        title={title}
        id={`dropdDwn${id}`}
        align="end"
        drop={depth > 1 ? 'end' : 'down'}
        active={activeChild}
        show={show}
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        {subMenu.map((item, index) => (
          <MenuItem {...item} depth={depth} key={index} />
        ))}
      </NavDropdown>
    );
  }

  return (
    <>
      {depth > 0 ? (
        <Link href={path} passHref legacyBehavior>
          <NavDropdown.Item active={router.pathname === path}>
            {title}
          </NavDropdown.Item>
        </Link>
      ) : (
        <Link href={path} passHref legacyBehavior>
          <NavLink active={router.pathname === path}>{title}</NavLink>
        </Link>
      )}
    </>
  );
};

const brand = () => {
  return (
    <Stack direction="horizontal" gap={3}>
      <Image
        alt="favicon"
        width={40}
        height={45}
        src="/images/header-logo2.png"
      ></Image>
      {config.site.title}
    </Stack>
  );
};

const MaiNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="p-3 shadow-sm">
      <Container fluid>
        <Navbar.Brand>{brand()}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas
          id={'offcanvasNavbar-expand'}
          aria-labelledby={'offcanvasNavbarLabel-expand'}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={'offcanvasNavbarLabel-expand'}>
              {brand()}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto">
              {config.mainMenuItems.map((item, index) => {
                const depth = 0;
                return <MenuItem {...item} depth={depth} key={index} />;
              })}

              {/* Loging/Register lg> */}
              <Navbar className="mx-1 opacity-25 d-none d-lg-block">|</Navbar>
              <Navbar className="d-none d-lg-block">
                <Person />
              </Navbar>
              <NavLink
                className="d-none d-lg-block"
                onClick={e => {
                  e.preventDefault();
                }}
              >
                Login/Register
              </NavLink>

              {/* Loging/Register lg< */}
              <NavLink
                className="d-lg-none"
                onClick={e => {
                  e.preventDefault();
                }}
              >
                Login
              </NavLink>
              <NavLink
                className="d-lg-none"
                onClick={e => {
                  e.preventDefault();
                }}
              >
                Register
              </NavLink>

              <Button
                className="border-0 rounded-5 fs-6"
                style={{ backgroundColor: '#ff5a5f' }}
              >
                <Plus size={26} />
                Create Listing
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        {/* <Navbar.Collapse id="basic-navbar-nav">
          
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default MaiNavbar;
