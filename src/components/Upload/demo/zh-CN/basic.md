### 基础用法
简单的上传, 属性```action```必选。
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <Upload action="//jsonplaceholder.typicode.com/posts/">
                    <Button type="primary">点击上传</Button>
                </Upload>
            )
        }
    }
```