### Footer
Show customized footer.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Panel title="Panel with footer" footer={<div>Footer info</div>} className="demo-panel">
                    <p>Content of panel...</p>
                    <p>Content of panel...</p>
                    <p>Content of panel...</p>
                    <p>Content of panel...</p>
                </Panel>
            )
        }
    }
```