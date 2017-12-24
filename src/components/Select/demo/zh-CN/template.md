### 自定义模板
如果选项包含子元素, 则选项将展示子元素, 否则展示```label```。
```javascript

    const options = [{
        value: 'Sylvanas',
        label: '希尔瓦娜斯'
    }, {
        value: 'Vol\'jin',
        label: '沃金'
    }, {
        value: 'Gul\'dan',
        label: '古尔丹'
    }]

    class Demo extends React.Component {
        render(){
            return (
                <Select className="demo-select" placeholder="请选择你喜欢的英雄">
                    {options.map(op => {
                        return (
                            <Select.Option key={op.value} value={op.value} label={op.label}>
                                <div className="demo-option">
                                    <span className="demo-option-main">{op.label}</span>
                                    <span className="demo-option-sub">{op.value}</span>
                                </div>
                            </Select.Option>
                        )
                    })}
                </Select>
            )
        }
    }
```