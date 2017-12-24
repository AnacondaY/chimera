### 迷你分页
用于有限空间的分页, 建议不使用其他子组件。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Pagination totalRecords={100} pageSize={10} mini />
            )
        }
    }
```