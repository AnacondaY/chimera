### 异步关闭
常用于表单提交。
```javascript
    class Demo extends React.Component {
        constructor(){
            super();
            this.state = {
                visible: false,
                fetching: false
            }
            this.show = this.show.bind(this);
            this.submit = this.submit.bind(this);
        }
        show(){
            this.setState({
                visible: true
            })
        }
        request(){
            return new Promise(resolve => {
                const timer = setTimeout(() => {
                    resolve();
                }, 3000);
            });
        }
        submit(){
            if(this.state.fetching) return;
            this.setState({
                fetching: true
            }, () => {
                this.request().then(() => {
                    this.setState({
                        visible: false,
                        fetching: false
                    })
                });
            })
        }
        render(){
            const { fetching, visible } = this.state;
            return (
                <div>
                    <Button type="primary" onClick={this.show}>显示Dialog</Button>
                    <Dialog 
                        visible={visible} 
                        title={'Dialog标题'} 
                        footer={
                            <div className="demo-dialog-footer">
                                <Button loading={fetching} type="primary" onClick={this.submit}>提交</Button>                            </div>
                        }
                    >
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