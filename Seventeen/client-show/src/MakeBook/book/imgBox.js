import React, { Component } from 'react'
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'

function getBase64(img, callback) {
    console.log("getBase64");
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));//文件上传触发回调函数
    reader.readAsDataURL(img);//读取第一个文件
}

//上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传
function beforeUpload(file) {
    //判断文件类型
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/webp';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    // 判断文件大小,小于2MB  file.size单位为字节
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    //如果返回false文件不上传,返回true文件上传
    return isJpgOrPng && isLt2M;
}

class ImgUpload extends Component {

    constructor() {
        super();
        this.state = {
            loading: false,
            storeMyFun: "",
            flag: 0,
            imageUrl:sessionStorage.getItem("bookimg")?sessionStorage.getItem("bookimg"):""
        };
    }

    handleChange = info => {
        let flag = beforeUpload(info.file);
        if (flag) {
            const reader = new FileReader()
            reader.readAsDataURL(info.file.originFileObj) // input.files[0]为第一个文件
            reader.onload = () => {
                this.setState({
                    imageUrl: reader.result,
                    file: info.file.originFileObj
                })
                this.props.sendAction('setFile', this.state.file);
            }
            if (info.file.status === 'uploading') {
                this.setState({ loading: true });
                return;
            }
            if (info.file.status === 'done') {
                getBase64(info.file.originFileObj, imageUrl =>
                    this.setState({
                        imageUrl,
                        loading: false,
                    }),
                );
            }
        }
    };

    fun = (i) => {
    }

    render() {
        const { loading, imageUrl } = this.state;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>选择你的图片</div>
            </div>
        );

        return (
            <>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    customRequest={//手动上传
                        this.fun
                    }
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange}
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
            </>
        )
    }
}

//dispatch是一个函数
function mapDispatchToProps(dispatch) {
    return {
        sendAction: (type, file) => {
            //发送数据, 会触发reducer函数的执行
            dispatch({ type: type, file: file });
        }
    }
}
//参数1：取数据
//参数2：改数据
export default connect(null, mapDispatchToProps)(ImgUpload)