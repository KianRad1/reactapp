import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import "popper.js";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container, Row, Col, FormLabel } from 'react-bootstrap';
import * as Ant from 'antd';
import * as AntIcon from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';
import 'antd/dist/antd.min.css';
// import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';

function NavBar() {
  const myNav = <Navbar className="NavigationBar" bg="dark" expand="lg">
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
  return myNav;
}
function NewEditClick() {
  if (document.getElementById("NewEdit") != null) document.getElementById("NewEdit").hidden = true;
}
function ActionDiv() {
  const actionmenu = (
    <Ant.Menu className="ActionMenu">
      <Ant.Menu.Item>
        <a rel="noopener noreferrer" href="#New" onClick={NewEditClick()}>
          جدید
        </a>
      </Ant.Menu.Item>
      <Ant.Menu.Item>
        <a rel="noopener noreferrer" href="#Edit">
          ویرایش
        </a>
      </Ant.Menu.Item>
      <Ant.Menu.Item danger>
        <a rel="noopener noreferrer" href="#Delete">
          حذف
        </a>
      </Ant.Menu.Item>
    </Ant.Menu>
  );
  return <div className="ActionContainer" style={{ display: "inline-flex", marginTop: "10px", float: "right" }}>
    <Button id="NewBtn" className="Newbtn">جدید</Button>
    <Ant.Dropdown overlay={actionmenu}>
      <Ant.Button>عملیات&nbsp;&nbsp;&nbsp;<AntIcon.DownOutlined />
      </Ant.Button>
    </Ant.Dropdown>
  </div>;
}
function PageTable() {
  return <div>Here is table place!!</div>;
}
function TabldeDiv() {
  const tblComp = <Ant.Row justify="start">
    <Ant.Col span={4}></Ant.Col>
    <Ant.Col span={16}>
      <div className="TablePart">
        <Ant.Row justify="start"><ActionDiv /></Ant.Row>
        <Ant.Row justify="center"><PageTable /></Ant.Row>
      </div>
    </Ant.Col>
    <Ant.Col span={4}></Ant.Col>
  </Ant.Row>;

  return tblComp;
}
function NewEdit() {
  const NewEditDiv =
    <Ant.Row id="NewEdit" justify="start">
      <Ant.Col span={4}></Ant.Col>
      <Ant.Col span={16}>
        <div className="TablePart">
          <Ant.Row justify="center">New Edit Place</Ant.Row>
        </div>
      </Ant.Col>
      <Ant.Col span={4}></Ant.Col>
    </Ant.Row>;
  return NewEditDiv;
}

ReactDOM.render(
  NavBar(),
  document.getElementById('root')
);
ReactDOM.render(
  <div>
    <TabldeDiv />
    <br />
    <NewEdit />
  </div>
  ,
  document.getElementById('TableBody')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
