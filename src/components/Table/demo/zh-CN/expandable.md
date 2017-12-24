### 可展开行
当单行信息过多时, 启用展开行可以显示额外的信息。
```javascript
    const columns = [{
        label: '姓名',
        key: 'name',
    },{
        label: '性别',
        key: 'gender',
    }, {
        label: '年龄',
        key: 'age'
    }, {
        label: '毕业院校',
        key: 'school'
    }];

    const data = new Array(5).fill(0).map(() => {
        return {
            name: '张无忌',
            age: 20,
            gender: '男',
            school: '华南理工大学',
            introduce: '我是张无忌, 明教教主'
        }
    });

    class Demo extends React.Component{
        render(){
            return <Table maxHeight={240} columns={columns} data={data} expandedRowRender={row => <p>{row.introduce}</p>} />
        }
    }
```