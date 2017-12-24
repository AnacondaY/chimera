### 带脚部
```javascript
    class Demo extends React.Component {
        constructor(){
            super();
            this.state = {
                visible: false
            }
            this.show = this.show.bind(this);
            this.hide = this.hide.bind(this);
        }
        show(){
            this.setState({
                visible: true
            });
        }
        hide(evt){
            evt.preventDefault();
            this.setState({
                visible: false
            });
        }
        render(){
            const footer = (
                <div className="demo-dialog-footer">
                    <Button onClick={this.hiden}>取消</Button>
                    <Button type="primary" onClick={this.hide}>确定</Button>
                </div>
            )
            return (
                <div>
                    <Button type="primary" onClick={this.show}>显示Dialog</Button>
                    <Dialog visible={this.state.visible} title={'Dialog标题'} footer={footer}>
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