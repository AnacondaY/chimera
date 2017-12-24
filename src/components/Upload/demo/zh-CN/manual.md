### 手动上传
设置```autoUpload```为```false```可以阻止文件自动上传。
```javascript
    class Demo extends React.Component{
        constructor(){
            super();
            this.state = {
                fetching: false,
                files: []
            }
        }

        handleRemove(file){
            this.setState(({files}) => {
                return {
                    files: files.filter(f => f.uuid !== file.uuid)
                }
            });
        }

        request(){
            const xhr = new XMLHttpRequest();
            const formData = new FormData();
            this.state.files.forEach(f => {
                formData.append('someKey', f);
            });
            xhr.open('post', '//jsonplaceholder.typicode.com/posts/', true);
            xhr.send(formData);
            this.setState({
                fetching: true
            })
            xhr.onload = evt => {
                if(evt.status >= 200 && evt.status < 300){
                    message.success('上传成功');
                    this.setState({
                        files: []
                    });
                }else{
                    message.error('上传失败');
                }
                this.setState({
                    fetching: false
                })
            }
        }

        render(){
            const { files, fetching } = this.state;
            return (
                <div className="demo-uploader-manual">
                    <Upload        
                        files={files} 
                        name="somekey"                                          action="//jsonplaceholder.typicode.com/posts/"
                        autoUpload={false}
                        onRemove={this.handleRemove.bind(this)}
                    >
                        <Button icon="document" type="info">选择文件</Button>
                    </Upload>
                    <Button loading={fetching} type="primary" onClick={this.request.bind(this)}>
                        {fetching ? '正在上传' : '开始上传'}
                    </Button>
                </div>
            )
        }
    }
```