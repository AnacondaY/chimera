### jsx风格
除了通过```routes```属性, 还可以采用```Breadcrumb.Item```自定义导航项。

```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Breadcrumb>
                    <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
                    <Breadcrumb.Item href="/components/">组件</Breadcrumb.Item>
                    <Breadcrumb.Item>面包屑</Breadcrumb.Item>             
                </Breadcrumb>
            )
        }
    }
```