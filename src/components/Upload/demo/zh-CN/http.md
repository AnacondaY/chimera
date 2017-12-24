### 请求信息
设置```headers```可以自定义请求头;设置```data```可以添加除```name```以外的请求体。
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <Upload 
                    action="//jsonplaceholder.typicode.com/posts/"
                    headers={{
                        'customized-header': 'some content'
                    }}
                    data={{
                        x: 1,
                        y: 'qqq'
                    }}
                >
                    <Button type="primary">点击上传</Button>
                </Upload>
            )
        }
    }
```