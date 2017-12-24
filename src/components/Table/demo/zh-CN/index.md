### 行序列
在列定义中设置```index```属性该列将以行序号渲染。
```javascript
    const columns = [{
        index: true
    },{
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

    const data = new Array(20).fill(0).map(() => {
        return {
            name: '张无忌',
            age: 20,
            gender: '男',
            school: '华南理工大学'
        }
    });

    class Demo extends React.Component{
        render(){
            return <Table maxHeight={240} columns={columns} data={data} />
        }
    }
```