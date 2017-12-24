### 基本用法
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
            school: '华南理工大学'
        }
    });

    class Demo extends React.Component{
        render(){
            return <Table maxHeight={240} columns={columns} data={data} />
        }
    }
```