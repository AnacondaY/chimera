### Avatar
Uploading user's avatars is a common case. You can validate the size and type of file before uploading.
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
                message.error('The type of uploading file is invalid');
                return false;
            }else if(file.size > 2 * 1024 * 1024){
                message.error('The size of uploading must be less than 2 MB');                
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