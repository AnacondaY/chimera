### 自定义模板
设置```onText```和```offText```可以自定义开启或关闭时的文字或图标。
```javascript
    class Demo extends React.Component {

        render(){
            return (
                <div>
                    <Toggle onText="开" offText="关"/>
                    <Toggle onText={<Icon type="success"/>} offText={<Icon type="error"/>}/>
                </div>
            )
        }

    }
```