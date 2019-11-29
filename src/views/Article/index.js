import React, { Component } from 'react'
import { Card, Table, Button, Tag, Icon, Spin } from 'antd';
import { getArticles } from '../../services'
import moment from 'moment'
const columnsTitleMap = {
  id: 'id',
  title: '标题',
  authot: '作者',
  amount: '阅读量',
  createAt: '发表时间'
}
const ButtonGroup = Button.Group

window.moment = moment
export default class ArticleList extends Component {
  constructor() {
    super()
    this.state = {
      total: 0,
      dataSource: [],
      columns: [],
      isLoading: false
    }
  }
  // 获取
  getColums = (columnsKeys) => {
    const colums = columnsKeys.map(item => {
      if (item === 'amount') {
        return {
          title: columnsTitleMap[item],
          key: item,
          // dataIndex: item
          render: (text, record) =>
            // 虽然这里是根据数字的大小，做一个条件渲染
            // 同理，可以根据职位做不同的颜色
            //总经理:'001' 经理:'002' 主管:'003'
            // const titleMap ={
            // '001':'red',
            // '002':'skyblue',
            // '003':'yellow'
            // return <Tag color={titleMap[titleKey]}>{record.title}</Tag>
            // }

            <Tag color={record.amount > 220 ? 'red' : 'green'}>{record.amount}</Tag>
        }
      }
      if (item === 'createAt') {
        return {
          title: columnsTitleMap[item],
          key: item,
          render: (text, record) => moment(record.createAt).format('YYYY年MM月DD日 hh:mm:ss')
        }
      }
      return {
        title: columnsTitleMap[item],
        key: item,
        dataIndex: item
      }
    })
    colums.push({
      title: '操作',
      key: 'action',
      render: () => {
        return (
          <ButtonGroup >
            <Button size='small' type='default'>
              <Icon type="edit" />
              编辑
            </Button>
            <Button size='small' type='danger'>
              <Icon type="delete" />
              删除
            </Button>
          </ButtonGroup >
        )
      }
    })
    return colums
  }
  // 获取数据
  getData = () => {
    this.setState({
      isLoading: true,
    })
    // <Spin></Spin>
    getArticles()
      .then(res => {
        const columnsKeys = Object.keys(res.list[0])
        const columns = this.getColums(columnsKeys)
        this.setState({
          total: res.total,
          columns,
          dataSource: res.list
        })
      })
      .catch(err =>{
        // 处理错误
      })
      .finally(()=>{
        this.setState({
          isLoading:false
        })
      })
  }
  componentDidMount() {
    this.getData()
  }
  render() {
    return (
      <Card
        bordered={false}
        title="文章列表"
        extra={<Button>导出Excle</Button>}
      >
        <Table
        loading={this.state.isLoading}
          rowKey={record => record.id}
          dataSource={this.state.dataSource}
          columns={this.state.columns}
          pagination={{
            hideOnSinglePage: true,
            total: this.state.total
          }
          }
        />;
      </Card>
    )
  }
}
