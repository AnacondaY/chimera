### 自定义单元格模板
在列定义中设置```render```方法可渲染自定义模板。
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
            }, {
                label: '操作',
                render(row, col, rowIndex, colIndex){
                    return (
                        <div className="demo-table-control">
                            <Button link type="primary">私聊</Button>
                            <Button link type="primary">加好友</Button>
                        </div>
                    )
                }
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
            return <Table maxHeight={240} columns={this.columns} data={data} />
        }
    }
```