### Basic
A simple breadcrumb.
```javascript
    class Demo extends React.Component {
        render(){
            const routes = [{
                label: 'Home',
                href: '/'
            }, {
                label: 'Components',
                href: '/components/'
            }, {
                label: 'Breadcrumb'
            }]
            return (
                <Breadcrumb routes={routes}/>
            )
        }
    }
```