### Regulator
The options of regulator can be customized.
```javascript
    class Demo extends React.Component {
        render(){
            const pageSpan = [{
                label: '10 / page',
                value:10
            },{
                label: '20 / page',
                value: 20
            }, {
                label: '50 / page',
                value: 50
            }, {
                label: '100 / page',
                value: 100
            }]
            return (
                <Pagination totalRecords={1000} pageSpan={pageSpan} layout={['pages', 'regulator']} />
            )
        }
    }
```