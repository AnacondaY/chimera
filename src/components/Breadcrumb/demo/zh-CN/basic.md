### 基础用法
简单的面包屑导航。
```javascript
    class Demo extends React.Component {
        render(){
            const routes = [{
                label: '首页',
                href: '/'
            }, {
                label: '组件',
                href: '/components/'
            }, {
                label: '面包屑'
            }]
            return (
                <Breadcrumb routes={routes}/>
            )
        }
    }
```