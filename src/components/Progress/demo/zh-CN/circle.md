### 进度环
设置```mode```属性为```'circle'```切换展示模式为环形。
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <div className="demo-progress-list">
                    <Progress mode="circle" progress={30} />
                    <Progress mode="circle" progress={50} status="paused"/>
                    <Progress mode="circle" progress={100} status="success" />
                    <Progress mode="circle" progress={75} status="error" />
                </div>
            )
        }
    }
```
