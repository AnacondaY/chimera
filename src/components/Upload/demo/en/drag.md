### Drag and drop
Files can be dragged over specific area and dropped to upload by setting attribute ```draggable```.
```javascript
    class Demo extends React.Component{

        constructor(){
            super();
            this.state = {
                hover: false
            }
        }

        handleDragOver(){
            this.setState({
                hover: true
            })
        }

        handleDragLeave(){
            this.setState({
                hover: false
            })
        }

        render(){
            const classList = ['demo-uploader-area'];
            if(this.state.hover){
                classList.push('demo-uploader-area-hover');
            }
            return (
                <Upload name="somekey" action="//jsonplaceholder.typicode.com/posts/" draggable
                    onDragOver={this.handleDragOver.bind(this)}
                    onDragLeave={this.handleDragLeave.bind(this)}
                >
                    <div className={classList.join(' ')}>
                        <div className="demo-uploader-area-wrapper">
                            <Icon type="upload" />                    
                            <div>Drag to this area and drop</div>
                            <div>or click to upload</div>
                        </div>
                    </div>
                </Upload>
            )
        }
    }
```