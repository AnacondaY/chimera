### 多层级表头
设置```ColumnProps```中的```children```属性可实现表头的层级嵌套。
```javascript
    const columns = [{
        key: 'name',
        label: '姓名',
    }, {
        label: '基本信息',
        children: [{
            key: 'age',
            label: '年龄',
            sortable: true
        }, {
            key: 'gender',
            label: '性别'
        }, {
            label: '学校信息',
            children: [{
                key: 'school',
                label: '学校'
            }, {
                label: '学院信息',
                children: [{
                    key: 'college',
                    label: '学院'
                }, {
                    key: 'major',
                    label: '专业'
                }]
            }]
        }]
    }];

    const data = new Array(10).fill({
        name: '张无忌',
        age: 20,
        gender: 'male',
        school: '华南理工大学',
        college: '环境与能源学院',
        major: '环境工程'
    }).map(row => {
        return Object.assign({}, row, {
            age: Math.round(Math.random() * 100)
        });
    });

    class Demo extends React.Component {
        render(){
            return (
                <Table bordered data={data} columns={columns} maxHeight={360}/>
            )
        }
    }

```