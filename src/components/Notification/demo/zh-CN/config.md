### 全局设置
通过```notification.config```方法可以改变默认设置; 通过```notification.reset```方法可以恢复默认设置。
```javascript
    class Demo extends React.Component {

        handleChange(isOn: Boolean){
            if(isOn){
                notification.config({
                    offset: 100,
                    gap: 50
                });
            }else{
                notification.reset();
            }
        }

        render(){
            return (
                <div className="demo-notification-list">
                    是否修改默认设置: <Toggle onChange={this.handleChange.bind(this)} />
                </div>
            )
        }
    }
```