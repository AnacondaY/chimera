### Defined by JSX component
The route items can be defined by component ```Breadcrumb.Item``` instead of attribute ```routes```.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/components/">Components</Breadcrumb.Item>
                    <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>             
                </Breadcrumb>
            )
        }
    }
```