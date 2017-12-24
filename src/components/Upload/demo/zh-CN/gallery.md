### 相册
用于上传多个图片,用户可以看到图片缩略图列表并且可以预览大图。
```javascript
    class Demo extends React.Component{
        constructor(){
            super();
            this.state = {
                previewVisible: false,
                previewUrl: ''
            }
        }

        handlePreview(file){
            this.setState({
                previewVisible: true,
                previewUrl: file.dataUrl
            });            
        }

        render(){
            return (
                <div className="demo-uploader-gallery">
                    <Upload 
                        accept="image/*" 
                        action="//jsonplaceholder.typicode.com/posts/"
                        listMode="gallery"
                        onPreview={this.handlePreview.bind(this)}                         
                    />
                    <Dialog 
                        visible={this.state.previewVisible} 
                        title="预览图片"
                        width={300}
                    >
                        <img style={{width: '100%'}} src={this.state.previewUrl} />
                    </Dialog>
                </div>
            )
        }
    }
```