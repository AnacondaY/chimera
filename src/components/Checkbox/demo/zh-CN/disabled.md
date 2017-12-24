### 禁用
设置```disabled```使复选框不可用。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div>
                    <Checkbox>可用</Checkbox>
                    <Checkbox disabled>禁用</Checkbox>
                </div>
            )
        }
    }
```