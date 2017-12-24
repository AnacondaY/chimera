### 距离控制
设置```offset```属性可以控制首个通知与顶部的距离, ```gap```属性可以控制多个通知之间的间隙。
```javascript
    class Demo extends React.Component {
        
        show(){
            notification({
                'title': '通知标题',
                'content': '通知内容',
                'offset': 100,
                'gap': 50
            })
        }

        render(){
            return (
                <Button onClick={this.show.bind(this)}>控制起始位置</Button>
            )
        }

    }
```