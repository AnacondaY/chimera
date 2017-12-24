### Customized template
If children elements present in Option, it will be rendered by ```children``` instead if ```label```.
```javascript

    const options = [{
        value: 'Sylvanas',
        label: 'Dark Queen'
    }, {
        value: 'Vol\'jin',
        label: 'Horde Chief'
    }, {
        value: 'Gul\'dan',
        label: 'Legion Agent'
    }]

    class Demo extends React.Component {
        render(){
            return (
                <Select className="demo-select" placeholder="Your idor">
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