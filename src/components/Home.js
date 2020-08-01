import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Button } from 'antd';
import { 
  HomeOutlined, 
  ReadOutlined, 
  ExperimentOutlined, 
  MedicineBoxOutlined, 
  HighlightOutlined, 
  CopyOutlined, 
  UserOutlined,
  CloseCircleOutlined,
  MenuUnfoldOutlined, 
  MenuFoldOutlined } from '@ant-design/icons';
import './Home.css';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Login from './auth/Login';
import { logoutUser } from '../actions/auth';

const Home = (props) => {
  const [navStatus, setNavStatus] = useState({
    collapsed: false
  })
  const [currentComp, setCurrentComp] = useState({
    comp: [<Dashboard key="dashboard" />]
  })

  const toggleCollapsed = () => {
    setNavStatus({collapsed: !navStatus.collapsed})
  }

  const handleLogout = (e) => {
    props.logoutUser()
  }

  const { Header, Sider, Content } = Layout

  if (props.currentUser.isLoggedIn) {
    return (
      <Layout>
      <Sider trigger={null} collapsible collapsed={navStatus.collapsed}>
        <div className="logo"></div>
        <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark">
          <Menu.Item className="menu-item" key="1" icon={<HomeOutlined />}>
            <a onClick={(event) => setCurrentComp({comp: [<Dashboard key="dashboard" />]})}>Home</a>
          </Menu.Item>
          <Menu.Item className="menu-item" key="2" icon={<ReadOutlined />}>
            {/* <a onClick={(event) => setCurrentComp({comp: [<Courses />]})} /> */}
            Courses
          </Menu.Item>
          <Menu.Item className="menu-item" key="3" icon={<ExperimentOutlined />}>
            {/* <a onClick={(event) => setCurrentComp({comp: [<Extracurriculars />]})} /> */}
            Extracurriculars
          </Menu.Item>
          <Menu.Item className="menu-item" key="4" icon={<HighlightOutlined />}>
            {/* <a onClick={(event) => setCurrentComp({comp: [<MCAT />]})} /> */}
            MCAT
          </Menu.Item>
          <Menu.Item className="menu-item" key="5" icon={<MedicineBoxOutlined />}>
            {/* <a onClick={(event) => setCurrentComp({comp: [<Schools />]})} /> */}
            Schools
          </Menu.Item>
          <Menu.Item className="menu-item" key="6" icon={<CopyOutlined />}>
            {/* <a onClick={(event) => setCurrentComp({comp: [<Documents />]})} /> */}
            App Documents
          </Menu.Item>
          <Menu.Item className="menu-item" key="7" icon={<UserOutlined />}>
            <a onClick={(event) => setCurrentComp({comp: [<Profile key="profile" />]})}>Profile</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item className="menu-item" key="8" style={{backgroundColor: 'teal'}} icon={<CloseCircleOutlined />}>
            <a onClick={handleLogout}>Logout</a>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ paddingLeft: '24px', marginLeft: '16px' }}>
          <Button className="trigger" onClick={toggleCollapsed}>
            {navStatus.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {currentComp.comp}
        </Content>
      </Layout>
    </Layout>
    )
  } else {
    return (
      <div key="login">
        <Login />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth
  }
}

export default connect(mapStateToProps, {logoutUser} )(Home);