### 外侧文字
设置```outside```属性可以使文字置于外侧。
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <div className="demo-progress-list">
                    <Progress progress={30} outside/>
                    <Progress progress={50} outside status="paused"/>
                    <Progress progress={100} outside status="success" />
                    <Progress progress={75} outside status="error" />
                </div>
            )
        }
    }
```