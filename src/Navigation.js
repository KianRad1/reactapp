import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container, Row, Col, FormLabel } from 'react-bootstrap';


function NaviBar(){
    const myNav =   <Navbar className="NavigationBar" bg="dark" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Nav.Link href="#home"> <span className="SecondaryColor">(</span>admin<span className="SecondaryColor">)</span> اتوماسیون اداری اینتک</Nav.Link>
    <NavDropdown title="امنیت" id="basic-nav-dropdown">
      <NavDropdown.Item href="#Users">کاربران</NavDropdown.Item>
      <NavDropdown.Item href="#Levels">سطوح</NavDropdown.Item>
      <NavDropdown.Item href="#Roles">نقش ها</NavDropdown.Item>
      <NavDropdown.Item href="#ChangePassword">تغییر رمز</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="وسایل" id="basic-nav-dropdown">
      <NavDropdown.Item href="#Users">انواع اموال</NavDropdown.Item>
      <NavDropdown.Item href="#Levels">لیست اموال</NavDropdown.Item>
      <NavDropdown.Item href="#Roles">وسایل پرسنل</NavDropdown.Item>
      <NavDropdown.Item href="#Roles">وسایل مصرفی</NavDropdown.Item>
      <NavDropdown.Item href="#Roles">گزارش اموال شرکت</NavDropdown.Item>
    </NavDropdown>
  </Navbar>;
    return  myNav;
}

export default Navbar;