### Gallery
To upload multiple pictures with a grid of thumbnail. And the picture in each item can be removed and previewed.
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
                        title="Preview"
                        width={300}
                    >
                        <img style={{width: '100%'}} src={this.state.previewUrl} />
                    </Dialog>
                </div>
            )
        }
    }
```