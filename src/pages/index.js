/**
 * title: 首页
 */
import React from 'react'
import {Button, Popconfirm, Message, Table} from "antd";
import {Link} from 'umi'
import {connect} from 'dva'

import styles from './index.scss'

const Index = () => {
  const onDelete = (record) => {
  }

  const columns = [
    {
      title: '表单名',
      dataIndex: 'name',
      key: 'name',
      width: '20%'
    }, {
      title: '表单链接',
      dataIndex: 'url',
      key: 'url',
      width: '60%',
      render: text => <a href={text} target='_blank'>{text}</a>
    }, {
      title: '操作',
      key: 'operation',
      render: (text, record) => (
        <div>
          <Button type='primary' style={{marginRight: 8}}>
            <Link to={`/edit/${record.id}`}>编辑</Link>
          </Button>
          <Popconfirm title='确定要删除该表单吗？' onConfirm={() => onDelete(record)}>
            <Button type='danger'>删除</Button>
          </Popconfirm>
        </div>
      )
    }
  ]

  return (
    <div className={styles['content-wrapper']}>
      <div style={{marginBottom: 20}}>
        <Button type='primary'><Link to='/edit'>创建新表单</Link></Button>
      </div>
      <Table columns={columns} rowKey={d => d.id}/>
    </div>
  )
}

export default connect(({index}) => ({...index}))(Index)
