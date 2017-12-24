### 基础用法
带状态的进度条。
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <div className="demo-progress-list">
                    <Progress progress={30} />
                    <Progress progress={50} status="paused"/>
                    <Progress progress={100} status="success" />
                    <Progress progress={75} status="error" />
                </div>
            )
        }
    }
```