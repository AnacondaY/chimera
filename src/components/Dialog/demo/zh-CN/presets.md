### 预设
提供几种常用的对话框预设。
```javascript
    class Demo extends React.Component {
        constructor(){
            super();
            this.open = this.open.bind(this);
            this.handleConfirm = this.handleConfirm.bind(this);
        }
        open(type){
            Dialog.confirm({
                title: '确认',
                type,
                content: '是否删除所选项目',
                onConfirm: this.handleConfirm
            });
        }
        handleConfirm(shutdown: Function){
            shutdown();
        }
        render(){
            return (
                <div>
                    <Button type="success" onClick={() => this.open('success')}>success</Button>
                    <Button type="error" onClick={() => this.open('error')}>error</Button>
                    <Button type="info" onClick={() => this.open('info')}>info</Button>
                    <Button type="warning" onClick={() => this.open('warning')}>warning</Button>
                </div>
            )
        }
    }
```