import React,{useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { UploadOutlined } from '@ant-design/icons';

const Dropzone = ({setFile}) => {
const onDrop = useCallback((acceptedFile)=>{
  console.log(acceptedFile)
  setFile(acceptedFile[0])
},[])

const {getRootProps,getInputProps,isDragAccept,isDragReject} = useDropzone({
  onDrop,
  multiple : false,
  accept : {
    'image/jpeg': [],
    'image/png': []
  }
});

  return (
    <div>
        <div {...getRootProps()} style={{padding: 10,height : 150,width: '100%',border : '1px solid rgb(220,220,220)',cursor :'pointer'}}>
            <input {...getInputProps()} />
            <div style={{display : 'flex',flexDirection : 'column' ,alignItems: 'center',justifyContent: 'center',height:'100%', border: isDragReject ? '2px dashed rgba(255,0,0,.7)' : '2px dashed rgb(60, 60, 60)'}}> 
              <UploadOutlined style={{fontSize : 52}} />
              {
              isDragReject ? <p>Sorry, not supported file type</p> : (
            <>
            <p>Drag & Drop File here</p>
           
            <p style={{marginTop : 2,fontWeight : 400}}>Only jpeg, jpg and png files are supported</p>
            </>
            )}
            </div>
            
        </div>
    </div>
  )
}

export default Dropzone