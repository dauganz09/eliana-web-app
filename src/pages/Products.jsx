import React from 'react'
import {PageHeader,Space,Table,Button} from 'antd'
import { useNavigate } from 'react-router-dom'

const columns = [
    {
        title : 'Picture',
        dataIndex : 'picture',
        key : 'picture',
        
    },
    {
        title : 'Product Name',
        dataIndex : 'name',
        key : 'name',
        
    },
    {
        title : 'Specifications',
        dataIndex : 'specification',
        key : 'specification',
        
    },
    {
        title : 'Price',
        dataIndex : 'price',
        key : 'price',
        
    },
    {
        title : 'Action',
        key : 'action',
        render : () => (
            <Space>
                <Button>Edit</Button>
                <Button>Delete</Button>
            </Space>
        )
        
    },

]

function Products() {
    const navigate = useNavigate();
  return (
    <>
        <PageHeader
            style={{
                border: '1px solid rgb(220,220,220)',
                marginBottom : 20
            }}
            title='All Products' />

             <Button style={{margin : 10}} onClick={()=> navigate('/addproduct')} size='large' type='primary'>Add Product</Button>
             <Table columns={columns}  />
    </>

   
    

  )
}

export default Products