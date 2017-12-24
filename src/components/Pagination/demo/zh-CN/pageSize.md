### 调节器
你可以自定义调节器中的选项。
```javascript
    class Demo extends React.Component {
        render(){
            const pageSpan = [{
                label: '每页10条',
                value:10
            },{
                label: '每页20条',
                value: 20
            }, {
                label: '每页50条',
                value: 50
            }, {
                label: '每页100条',
                value: 100
            }]
            return (
                <Pagination totalRecords={1000} pageSpan={pageSpan} layout={['pages', 'regulator']} />
            )
        }
    }
```