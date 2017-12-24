### 可选择列
列定义中设置```selectable```属性, 改列将以复选框的形式渲染。
```javascript
    const columns = [{
        selectable: true
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
            return <Table bordered maxHeight={240} columns={columns} data={data} />
        }
    }
```