### 图片展示
展示图片及其相关信息。
```javascript
    class Demo extends React.Component {
        render(){
            const footer = (
                <div>
                    <strong>Sylvanas Windrunner</strong>
                    <div>Dark Lady</div>
                </div>
            )
            return (
                <Panel full showHeader={false} footer={footer} className="demo-panel-image">
                    <img src="http://pic.baike.soso.com/p/20131121/20131121172919-537142327.jpg" style={{width: '100%'}}/>
                </Panel>
            )
        }
    }
```