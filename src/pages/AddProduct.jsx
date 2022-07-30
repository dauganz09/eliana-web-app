import React,{useState} from 'react'
import {PageHeader,Form,Input,InputNumber,Upload,Button,notification} from 'antd'
import { useNavigate } from 'react-router-dom'

import Dropzone from '../components/Dropzone';
import axios from 'axios'
const BASE_URL = 'http://localhost:4000/api/'

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

function AddProduct() {
  const [file,setFile] = useState(null);
  const [form] = Form.useForm();
    const navigate = useNavigate()

    const onFinish = async (values)=>{
      console.log(values);

      const formData = new FormData();
      formData.append("name",values.name);
      formData.append("picture",file);
      formData.append("specification",values.specification);
      formData.append("price",values.price);

      const {data} = await axios.post(`${BASE_URL}products`,
        formData,{
          headers : {
            "Content-type":"multipart/form-data"
          }
        })

        if(data.status){
            form.resetFields();
            setFile(null);

            notification.success({
              message: 'Product successfully added!',
              placement : 'top',
              duration : 2,
              
            })
        }
      
      
    }

  return (
    <>
    <PageHeader
        style={{
            border: '1px solid rgb(220,220,220)',
            marginBottom : 20
        }}
        onBack={()=>navigate('/')}
        title='Add Product' />
    <Form
      // style={{border : '1px solid black'}}
      form={form}
      name="add_product"
      labelCol={{span : 4}}
      wrapperCol={{span : 8}}
      onFinish={onFinish}
    >
      <Form.Item
        label="Product Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input product name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Product Picture">
          <Dropzone setFile={setFile} />
      </Form.Item>
      <Form.Item
        label="Product Specifications"
        name="specifications"
        rules={[
          {
            required: true,
            message: 'Please input product specifications!',
          },
        ]}
      >
        <Input.TextArea rows={6} />
      </Form.Item>
      <Form.Item
        label="Product Price"
        name="price"
        rules={[
          {
            required: true,
            message: 'Please input product price!',
          },
        ]}
      >
        <InputNumber addonBefore="PHP" min={1} style={{
          width : 200
        }}/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 8,
        }}
      >
        <Button style={{width:'100%'}} size="large" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>


    </Form>
        
</>
  )
}

export default AddProduct