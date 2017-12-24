### 延迟
设置```enterTimeout```和```leaveTimeout```可以控制出现/消失的延时。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-tooltip-group">
                    <Tooltip enterTimeout={2000} trigger="click" content="进入延迟2000ms">
                        <Button type="info">2s后出现</Button>                
                    </Tooltip>
                    <Tooltip leaveTimeout={2000} trigger="click" content="消失延迟2000ms">
                        <Button type="info">2s后消失</Button>
                    </Tooltip>
                </div>
            )
        }
    }
```