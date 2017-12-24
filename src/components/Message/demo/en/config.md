### Global settings
The default options can be modified by function ```message.config``` and reset by function ```message.reset``` conversely.
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
                    Change default options:
                    <Toggle onChange={this.handleChange.bind(this)} />
                </div>
            )
        }

    }
```