### 表单验证
```Form```和```Form.Field```都是无状态组件, 本身不具有表单验证功能。采用```enhanceForm```和强化表单项可实现表单验证功能。
```javascript
    const { enhanceForm, Field, Schema, CheckboxGroupField, RadioGroupField, SelectField, DatePickerField, InputField, ToggleField, SliderField, NumberInputField, UploadField } = Form;
    const schema = {
        username: Schema.string().minLength(8).required('必填'),
        password: Schema.string().minLength(6).maxLength(16).required('必填'),
        idNumber: Schema.string().ChineseID().required('必填'),
        age: Schema.number().greaterThan(17).required(),
        major: Schema.string().required('必填'),
        date: Schema.object().date().required('必填'),
        gender: Schema.string().oneOf(['male', 'female']),
        hobbies: Schema.array(),
        public: Schema.boolean(),
        salary: Schema.number().rangeOf(1000, 100000),
        introduction: Schema.string().minLength(5)
    };

    class DemoForm extends React.Component {

        handleSubmit(){
            this.props.cmrForm.validateForm();
        }

        handleReset(){
            this.props.cmrForm.resetForm();
        }

        render(){
            return (
                <Form labelWidth={84} style={{width: 480}}>
                    <InputField name="username" label="用户名:" placeholder="由6-14位字符、数字及下划线组成" autoComplete="off" required />
                    <InputField name="password" placeholder="8到16位密码" label="密码:" htmlType="password" autoComplete="off" required />
                    <InputField name="idNumber" placeholder="二代身份证号码" label="身份证号:" autoComplete="off" required 
                        extra={<div className="demo-field-extra">系统会严格保密您的身份证信息</div>}
                    />
                    <NumberInputField name="age" minimum={18} label="年龄:" required />
                    <SelectField name="major" label="专业方向:" placeholder="请选择一项开发技能" required>
                        <Select.Option label="Web前端开发" value="1" />
                        <Select.Option label="后端开发" value="2" />
                        <Select.Option label="Android开发" value="3" />
                        <Select.Option label="IOS开发" value="4" />
                        <Select.Option label="DBA" value="5" />
                    </SelectField>
                    <DatePickerField name="date" label="毕业日期:" placeholder="格式如: 2017-06-30" required />
                    <SliderField name="salary" label="期望月薪:" minimum={1000} maximum={100000} step={1000}/>
                    <RadioGroupField name="gender" label="性别:" >
                        <Radio value="male">帅哥</Radio>
                        <Radio value="female">美女</Radio>
                    </RadioGroupField>
                    <CheckboxGroupField name="hobbies" label="爱好:">
                        <Checkbox value="football">足球</Checkbox>
                        <Checkbox value="basketball">篮球</Checkbox>
                        <Checkbox value="painting">画画</Checkbox>
                        <Checkbox value="photograph">摄影</Checkbox>
                    </CheckboxGroupField>
                    <ToggleField name="public" label="公开资料:" onText="开" offText="关" name="public" />
                    <InputField name="introduction" label="自我介绍:" placeholder="说两句吧..."
                        textarea
                    />
                    <UploadField name="file" label="附件:" action="//jsonplaceholder.typicode.com/posts/">
                        <Button type="primary">点击上传</Button>
                    </UploadField>
                    <Field>
                        <Button type="success" style={{marginRight: 12}} onClick={this.handleSubmit.bind(this)}>注册</Button>
                        <Button type="error" onClick={this.handleReset.bind(this)}>重置</Button>
                    </Field>
                </Form>
            )
        }
    }

    const Demo = enhanceForm(schema)(DemoForm);
```