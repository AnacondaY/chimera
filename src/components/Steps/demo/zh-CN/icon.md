### 自定义图标
设置```icon```属性可以控制步骤的图标, 支持```String```和```ReactNode```, 为```String```时将采用[Icon](/#/icon)对应的图标。
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <Steps>
                    <Steps.Step icon="user" title="注册信息" description="请填写基本用户信息" />
                    <Steps.Step icon="setting" title="个人资料" description="请完善个人资料" />
                    <Steps.Step icon="picture" title="上传照片" description="上传个人证件照" />      
                </Steps>
            )
        }
    }
```   