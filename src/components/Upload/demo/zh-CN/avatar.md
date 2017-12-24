### 上传头像
设置```beforeUpload```可以限制上传大小和格式, 建议配合```accept```过滤选择文件的格式。
```javascript
    class Demo extends React.Component{
        constructor(){
            super();
            this.state = {
                dataUrl: '',
                progress: 0
            }
        }

        beforeUpload(file: File){
            const reg = /\.(jpg)|(jpeg)|(png)$/;
            if(!reg.test(file.name)){
                message.error('上传图片格式只能是png、jpg或jpeg');
                return false;
            }else if(file.size > 2 * 1024 * 1024){
                message.error('上传图片大小必须小于2MB');                
                return false;
            }
            return file;
        }

        handleSuccess(wrappedFile){
            this.setState({
                dataUrl: URL.createObjectURL(wrappedFile.origin),
                progress:0
            });
        }

        handleProgress(wrappedFile){
            console.log(wrappedFile);
            this.setState({
                progress: wrappedFile.progress
            });
        }

        render(){
            let contentNode;
            if(!this.state.dataUrl){
                if(this.state.progress){
                    contentNode = <Progress mode="circle" progress={this.state.progress} />
                }else{
                    contentNode = <Icon type="plus"/>
                }
            }else{
                contentNode = <img className="demo-uploader-preview" src={this.state.dataUrl}/>
            }
            return (
                <Upload 
                    name="somekey" 
                    action="//jsonplaceholder.typicode.com/posts/"
                    accept="image/png, image/jpeg"
                    showUploadedList={false}
                    onError={this.handleSuccess.bind(this)}
                    onProgress={this.handleProgress.bind(this)}
                    beforeUpload={this.beforeUpload.bind(this)}
                >
                    <div className="demo-uploader-avatar" 
                        style={{
                            borderColor: this.state.dataUrl ? 'transparent' : '#fff'
                        }}
                    >

                        {contentNode}
                    </div>
                </Upload>
            )
        }
    }
```