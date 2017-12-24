### Appended element
Append extra element on the right side of panel header.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Panel title="Panel title" append={<a href="/#/panel">more...</a>} className="demo-panel">
                    <p>Content of panel...</p>
                    <p>Content of panel...</p>
                    <p>Content of panel...</p>
                    <p>Content of panel...</p>
                </Panel>
            )
        }
    }
```