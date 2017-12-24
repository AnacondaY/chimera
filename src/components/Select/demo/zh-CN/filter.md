### 过滤
根据输入内容动态过滤选项。
```javascript
    const  data = [{
                    value: '1',
                    label: '阿尔萨斯'
                }, {
                    value: '2',
                    label: '伊利丹'
                }, {
                    value: '3',
                    label: '希尔瓦娜斯'
                }, {
                    value: '4',
                    label: '萨尔'
                }, {
                    value: '5',
                    label: '吉安娜'
                }, {
                    value: '6',
                    label: '阿克蒙德'
                }];
    class Demo extends React.Component {
        
        constructor(props){
            super(props);
            this.state = {
                options: data,
            }
        }

        handleSearch(val){
            const options = data.filter(item => item.label.includes(val));
            this.setState({
                options
            });
        }

        render(){
            return (
                <Select className="demo-select" filterable onSearch={val => this.handleSearch(val)} placeholder="你喜欢的英雄">
                    {this.state.options.map((item, i) => {
                        return (
                            <Select.Option key={`option-${i}`} 
                                value={item.value}
                                label={item.label}    
                            />
                        )
                    })}
                </Select>
            )
        }
    }
```