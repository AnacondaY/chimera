### Global settings
The default options can be modified by function ```notification.config``` and reset by function ```notification.reset``` conversely.
```javascript
    class Demo extends React.Component {
        handleChange(isOn: Boolean){
            if(isOn){
                notification.config({
                    offset: 75,
                    gap: 40
                })
            }else{
                notification.reset();
            }
        }

        render(){
            return (
                <div className="demo-notification">
                    Change default options:
                    <Toggle onChange={this.handleChange.bind(this)} />
                </div>
            )
        }
    }
```