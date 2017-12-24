### Manual uploading
Setting attribute ```autoUpload``` to ```false``` will prevent automatical uploading.
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
                    message.success('Upload successfully');
                    this.setState({
                        files: []
                    });
                }else{
                    message.error('Upload mistakenly');
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
                        <Button icon="document" type="info">Pick files</Button>
                    </Upload>
                    <Button loading={fetching} type="primary" onClick={this.request.bind(this)}>
                        {fetching ? 'Uploading' : 'Start upload'}
                    </Button>
                </div>
            )
        }
    }
```