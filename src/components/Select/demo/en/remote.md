### 远程搜索
通过输入关键字从服务器搜索。
```javascript
    const provinces = [
        {id:1, name: '新疆'}, 
        {id:2, name: '西藏'}, 
        {id:3, name: '内蒙古'},
        {id:4, name: '青海'},
        {id:5, name: '四川'},
        {id:6, name: '黑龙江'},
        {id:7, name: '甘肃'},
        {id:8, name: '云南'},
        {id:9, name: '广西'},
        {id:10, name: '湖南'},
        {id:11, name:'陕西'},
        {id:12, name: '广东'},
        {id:13, name: '吉林'},
        {id:14, name: '河北'},
        {id:15, name: '湖北'},
        {id:16, name: '贵州'},
        {id:17, name: '山东'},
        {id:18, name: '江西'},
        {id:19, name: '河南'},
        {id:20, name: '辽宁'},
        {id:21, name: '山西'},
        {id:22, name: '安徽'},
        {id:23, name: '福建'},
        {id:24, name: '浙江'},
        {id:25, name: '江苏'},
        {id:26, name: '重庆'},
        {id:27, name: '宁夏'},
        {id:28, name: '海南'},
        {id:29, name: '台湾'},
        {id:30, name: '北京'},
        {id:31, name: '天津'},
        {id:32, name: '上海'},
        {id:33, name: '香港'},
        {id:34, name: '澳门'},
    ]
    class Demo extends React.Component {
        constructor(){
            super();
            this.state = {
                fetching: false,
                options: []
            }
        }
        fetch(keyword: String): Promise{
            return new Promise(resolve => {
                const timer = setTimeout(() => {
                    const options = provinces.filter(p => {
                        return p.name.includes(keyword);
                    });
                    resolve(options);
                    clearTimeout(timer);
                }, Math.random() * 3000);
            });
        }
        handleSearch(val: String){
            console.log(val);
            this.setState({
                fetching:true
            }, () => {
                this.fetch(val).then(options => {
                    this.setState({
                        options,
                        fetching: false
                    })
                });
            });
        }
        handleChange(value: Array){
            console.log(value);
            this.setState({
                options: [],
                fetching: false
            });
        }
        render(){
            const { options, fetching } = this.state;
            return (
                <Select onSearch={val => this.handleSearch(val)} placeholder="Remote search"
                    remote filterable multiple fetching={fetching}
                > 
                    {options.map((op, i) => {
                        return <Select.Option key={op.id} value={op.id} label={op.name} />
                    })}
                </Select>
            )
        }
    }
```