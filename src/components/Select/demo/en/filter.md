### Filter
Options are filtered according to the search content.
```javascript
    const  data = [{
                    value: '1',
                    label: 'Arthas'
                }, {
                    value: '2',
                    label: 'Illidan'
                }, {
                    value: '3',
                    label: 'Sylvanas'
                }, {
                    value: '4',
                    label: 'Thrall'
                }, {
                    value: '5',
                    label: 'Jaina'
                }, {
                    value: '6',
                    label: 'Archimonde'
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
                <Select className="demo-select" filterable onSearch={val => this.handleSearch(val)} placeholder="Your Idor">
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