### 可伸缩列
设置```resizable```时, 鼠标悬浮在表头右侧拖动可拓宽或缩小该列, 仅在```bordered```模式下可用, 最后一列无效。
```javascript
    class Demo extends React.Component{

        constructor(){
            super();
            this.columns = [{
                label: '姓名',
                key: 'name'
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
            return <Table maxHeight={240} columns={this.columns} data={data} bordered resizable />
        }

    }
```