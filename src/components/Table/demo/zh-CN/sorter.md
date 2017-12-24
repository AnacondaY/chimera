### 自定义排序器
设置```sorter```方法可实现自定义排序。
```javascript
    const columns = [{
        label: '姓名',
        key: 'name',
        sortable: true,
        sorter(value1, value2, isAscend){
            return value1.name.length < value2.name.length;
        }
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
    const data = [{
        name: '赵敏',
        age: 18,
        gender: '女',
        school: '华南理工大学'
    }, {
        name: '张无忌',
        age: 20,
        gender: '男',
        school: '华南理工大学'
    }, {
        name: '耶律洪基',
        age: 40,
        gender: '男',
        school: '华南理工大学'
    }];
    class Demo extends React.Component{
        render(){
            return <Table maxHeight={240} columns={columns} data={data} />
        }
    }
```