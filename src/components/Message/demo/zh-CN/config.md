### 全局设置
通过```message.config```可以修改默认设置。利用```message.reset```可以恢复默认设置。
```javascript
    class Demo extends React.Component {

        handleChange(isOn: Boolean){
            if(isOn){
                message.config({
                    offset: 75,
                    gap: 40
                })
            }else{
                message.reset();
            }
        }

        render(){
            return (
                <div className="demo-message">
                    是否修改默认设置:
                    <Toggle onChange={this.handleChange.bind(this)} />
                </div>
            )
        }

    }
```