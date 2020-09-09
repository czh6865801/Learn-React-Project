import React, { Fragment } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  SettingOutlined,
  NotificationOutlined
} from '@ant-design/icons';
import './index.less';
// import logo from '/Images/logo.svg';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class Layouts extends React.Component {
  constructor() {
    super()
    this.state = {
      style: {
        width: '208px',
        display: 'block'
      }
    }
  }
  onCollapse(collapsed, type) {
    console.log(collapsed, type)
    if (collapsed) {
      this.setState({
        style: { width: '80px', display: 'none' }
      })
    } else {
      this.setState({
        style: { width: '208px', display: 'block' }
      })
    }
  }
  render() {
    return (
      <Fragment>
        <Layout style={{ height: '100%' }}>
          <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%', height: '48px', padding: 0, paddingLeft: this.state.style.width }}>
            <div className="logo" style={{ width: this.state.style.width }}>
              <img src="/Images/logo.svg" alt="logo" style={{ width: '32px' }} />
              <h1 style={{
                color: '#fff', margin: 0,
                fontSize: '18px',
                display: this.state.style.display
              }}>Ant Design Pro</h1>
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{
              height: '48px',
              lineHeight: '48px'
            }}>
              <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
              <Menu.Item key="4">nav 1</Menu.Item>
              <Menu.Item key="5">nav 2</Menu.Item>
              <Menu.Item key="6">nav 3</Menu.Item>
              <Menu.Item key="7">nav 1</Menu.Item>
              <Menu.Item key="8">nav 2</Menu.Item>
              <Menu.Item key="9">nav 3</Menu.Item>
              <Menu.Item key="10">nav 1</Menu.Item>
              <Menu.Item key="11">nav 2</Menu.Item>
              <Menu.Item key="13">nav 3</Menu.Item>
              <Menu.Item key="14">nav 1</Menu.Item>
              <Menu.Item key="15">nav 2</Menu.Item>
              <Menu.Item key="16">nav 3</Menu.Item>
              <Menu.Item key="17">nav 1</Menu.Item>
              <Menu.Item key="18">nav 2</Menu.Item>
              <Menu.Item key="19">nav 3</Menu.Item>
              <Menu.Item key="20">nav 3</Menu.Item>
              <Menu.Item key="21">nav 3</Menu.Item>


            </Menu>
          </Header>
          <Sider width={this.state.style.width} collapsible={true} onCollapse={(collapsed, type) => { this.onCollapse(collapsed, type) }} className="site-layout-background" style={{
            overflow: 'hidden',
            height: '100vh',
            position: 'fixed',
            left: 0,
            paddingTop: '48px',
          }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0, overflow: 'hidden auto' }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '48px 0 0 210px', paddingLeft: this.state.style.width, overflow: 'hidden' }}>
            <div style={{ overflow: 'auto' }}>
              <Breadcrumb style={{ margin: '5px' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 0,
                  margin: 5,
                  minHeight: 280,
                  overflow: 'auto'
                }}
              >
                Content <br></br>
                Content <br></br>
                Content <br></br>
                Content <br></br>
                Content <br></br>
                Content <br></br>
                Content <br></br>
                Content <br></br>
                Content <br></br>
                Content <br></br>
                Content <br></br>
                Content <br></br>
                Content <br></br>Content <br></br>
                Content <br></br>
                Content <br></br>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </div>
          </Layout>
        </Layout>
      </Fragment >
    )
  }
}

export default Layouts;