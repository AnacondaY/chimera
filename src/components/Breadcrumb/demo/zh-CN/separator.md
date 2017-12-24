### 自定义分隔符
默认样式。
```javascript
    class Demo extends React.Component {

        render(){
            return (
                <Breadcrumb separator="|">
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>栏目1</Breadcrumb.Item>
                    <Breadcrumb.Item>栏目2</Breadcrumb.Item>
                    <Breadcrumb.Item>当前栏</Breadcrumb.Item>                
                </Breadcrumb>
            )
        }

    }
```