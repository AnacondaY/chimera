### 拖放上传
设置```draggable```属性可支持拖放上传, 将文件拖拽至目标区域释放即可。
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
                            <div>拖拽至此释放可上传</div>
                            <div>或点击上传</div>
                        </div>
                    </div>
                </Upload>
            )
        }
    }
```