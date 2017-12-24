### 子组件布局
支持4种子组件, ```'pages'```为页码列表, ```'total'```为总页数, ```'jumper'```为跳转器, ```'regulator'```为页容量调节器。
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