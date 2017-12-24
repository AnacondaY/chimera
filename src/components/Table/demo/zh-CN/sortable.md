### 可排序列
在列定义中设置```sortable```可使该列能够用进行排序。此外, 设置```sorter```属性可实现自定义排序。
```javascript
    class Demo extends React.Component{
        constructor(){
            super();
            this.columns = [{
                label: '姓名',
                key: 'name',
            },{
                label: '性别',
                key: 'gender',
            }, {
                label: '年龄',
                key: 'age',
                sortable: true
            }, {
                label: '毕业院校',
                key: 'school'
            }]

            this.dataRow = {
                name: '张无忌',
                gender: '男',
                school: '华南理工大学'
            }
        }

        render(){
            const data = new Array(20).fill(0).map(row => {
                row = {
                    name: '张无忌',
                    gender: '男',
                    school: '华南理工大学'
                };
                row.age = Math.round(Math.random() * 100);
                return row;
            });
            return <Table maxHeight={240} columns={this.columns} data={data} />
        }

    }
```