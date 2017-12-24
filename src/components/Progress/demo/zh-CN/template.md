### 自定义文字模板
设置```template```属性可以自定义文字模板。
```javascript
    class Demo extends React.Component{

        renderTemplate(progress: Number, status: String): String| React.ReactNode{
            if(status === 'success'){
                return <span className="demo-icon-success"><Icon type="success"/></span>
            }else if(status === 'error'){
                return <span className="demo-icon-error"><Icon type="error"/></span>
            }
            return `${progress}%`;
        }

        render(){
            return (
                <div>
                    <div className="demo-progress-list">
                        <Progress progress={30} outside template={this.renderTemplate.bind(this)} />
                        <Progress progress={50} outside status="paused" template={this.renderTemplate.bind(this)} />
                        <Progress progress={100} outside status="success" template={this.renderTemplate.bind(this)} />
                        <Progress progress={75} outside status="error" template={this.renderTemplate.bind(this)} />
                    </div>
                    <div className="demo-progress-list demo-progress-list-circle">
                        <Progress mode="circle" progress={30} outside template={this.renderTemplate.bind(this)} />
                        <Progress mode="circle" progress={50} outside status="paused" template={this.renderTemplate.bind(this)} />
                        <Progress mode="circle" progress={100} outside status="success" template={this.renderTemplate.bind(this)} />
                        <Progress mode="circle" progress={75} outside status="error" template={this.renderTemplate.bind(this)} />
                    </div>
                </div>
            )
        }

    }
```