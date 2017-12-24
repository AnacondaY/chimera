### 状态控制
属性```status```可以控制当前步骤条的状态。
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <div className="demo-steps">
                    <Steps currentIndex={1} status="error">
                        <Steps.Step icon="user" title="注册信息" description="请填写基本用户信息" />
                        <Steps.Step icon="setting" title="个人资料" description="请完善个人资料" />
                        <Steps.Step icon="picture" title="上传照片" description="上传个人证件照" />
                    </Steps>
                    <Steps currentIndex={2} status="success">
                        <Steps.Step icon="user" title="注册信息" description="请填写基本用户信息" />
                        <Steps.Step icon="setting" title="个人资料" description="请完善个人资料" />
                        <Steps.Step icon="picture" title="上传照片" description="上传个人证件照" />
                    </Steps>
                </div>
            )
        }
    }
```