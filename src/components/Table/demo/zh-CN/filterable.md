### 可过滤列
列定义中设置```sortable```实现过滤。
```javascript
    const columns = [{
        label: '姓名',
        key: 'name',
    },{
        label: '性别',
        key: 'gender',
        filterableList: [{
            label: '男',
            value: '男'
        }, {
            label: '女',
            value: '女'
        }],
        filterable: true
    }, {
        label: '年龄',
        key: 'age'
    }, {
        label: '毕业院校',
        key: 'school'
    }];
    const data = [{
        name: '寇仲',
        gender: '男',
        age: 22,
        school: '清华大学'
    }, {
        name: '徐子陵',
        gender: '男',
        age: 22,
        school: '北京大学'
    }, {
        name: '师妃暄',
        gender: '女',
        age: 18,
        school: '北京大学'
    }, {
        name: '婠婠',
        gender: '女',
        age:18,
        school: '上海交通大学'
    }];
    class Demo extends React.Component{
        render(){
            return <Table data={data} columns={columns} />
        }
    }
```