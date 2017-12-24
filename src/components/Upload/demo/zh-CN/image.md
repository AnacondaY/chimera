### 图片列表
上传图片可生成对应的缩略图列表。
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <Upload name="somekey" listMode="image-list"                                          action="//jsonplaceholder.typicode.com/posts/">
                    <Button type="primary">点击上传</Button>
                </Upload>
            )
        }
    }
```