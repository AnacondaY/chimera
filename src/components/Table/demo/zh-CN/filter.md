### 自定义过滤器
在列定义中设置```filter```方法可实现自定义过滤。
```javascript
    const columns = [{
        label: '姓名',
        key: 'name',
    },{
        label: '性别',
        key: 'gender'

    }, {
        label: '年龄',
        key: 'age'
    }, {
        label: '毕业院校',
        key: 'school',
        filterable: true,
        filterableList: [{
            'label': '非北京大学',
            'value': '北京大学'
        }],
        filter(filterValues: Array, row: Object){
            return filterValues.indexOf(row.school) === -1;
        }
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