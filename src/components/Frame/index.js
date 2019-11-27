import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import logo from './logo.png'
import './frame.less'
import { withRouter } from 'react-router-dom'
const { Header, Content, Sider } = Layout;
@withRouter
class frame extends Component {
  onMenuClick = ({ key }) => {
    this.props.history.push(key)
    console.log(this.props);
    
  }
  render() {
    return (
      <Layout className='bigjing'>
        <Header className="header dw-header" >
          <div className="logo dw-logo" >
            <img src={logo} alt="DaiRobe" />
          </div>
        
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              onClick={this.onMenuClick}
              mode="inline"
              selectedKeys={this.props.location.pathname}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {
                this.props.menus.map(item => {
                  return (
                    <Menu.Item
                      key={item.pathname}>
                      <Icon type={item.icon}></Icon>
                      {item.title}
                    </Menu.Item>
                  )

                })
              }
            </Menu>
          </Sider>
          <Layout style={{ padding: '16px' }}>
           
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
export default frame