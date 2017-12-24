### 带列表框的表格
设置```bordered```使表格显示外边框, 单元格显示列表框。
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
                key: 'age'
            }, {
                label: '毕业院校',
                key: 'school'
            }]

            this.dataRow = {
                name: '张无忌',
                age: 18,
                gender: '男',
                school: '华南理工大学'
            }
        }

        render(){
            const data = new Array(20).fill(this.dataRow);
            return <Table maxHeight={240} columns={this.columns} data={data} bordered />
        }

    }
```