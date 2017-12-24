### Layout
There are four subcomponents in pagination, ```pages```, ```total```, ```jumper``` and ```regulator```. The order and visibility of subcomponents can be customized by attribute ```layout```.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-pagination-list">
                    <Pagination totalRecords={1000} layout={['pages', 'regulator']} />
                    <Pagination totalRecords={1000} layout={['jumper', 'pages', 'regulator']} />
                    <Pagination totalRecords={1000} layout={['total', 'jumper', 'pages', 'regulator']} />
                </div>
            )
        }
    }
```