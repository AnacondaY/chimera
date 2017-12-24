### 异步验证
异步校验一般用于请求服务器校验, 例如验证用户名重复或者验证码。一般通过Blur事件或者手动触发。
```javascript
    const { enhanceForm, Schema, InputField } = Form;

    const mockRequest = () => new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject();
            clearTimeout(timer);
        }, Math.random() * 2000);
    });

    const schema = {
        username: Schema.string().async(mockRequest, '用户名已被注册').required('必填')
    }

    class DemoForm extends React.Component {
        render(){
            return (
                <Form style={{ width: 480 }} labelWidth={84}>
                    <InputField name="username" label="用户名:" required validateTrigger="blur" placeholder="输入任意用户名" />
                </Form>
            )
        }    
    }

    const Demo = enhanceForm(schema)(DemoForm);
```