### 基本用法
```javascript
    class Demo extends React.Component {
        constructor(){
            super();
            this.state = {
                visible: false
            }
            this.show = this.show.bind(this);
        }
        show(){
            this.setState({
                visible: true
            })
        }
        render(){
            return (
                <div>
                    <Button type="primary" onClick={this.show}>显示Dialog</Button>
                    <Dialog visible={this.state.visible} title={'Dialog标题'}>
                        <p>Dialog content ...</p>
                        <p>Dialog content ...</p>
                        <p>Dialog content ...</p>
                        <p>Dialog content ...</p>
                        <p>Dialog content ...</p>
                    </Dialog>
                </div>
            )
        }
    }
```