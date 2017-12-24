<InputField name="username" label="用户名:" placeholder="由6-14位字符、数字及下划线组成" autoComplete="off" required />
<InputField name="password" placeholder="8到16位密码" label="密码:" htmlType="password" autoComplete="off" required />
<InputField name="idNumber" placeholder="二代身份证号码" label="身份证号:" autoComplete="off" required />
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
<CheckboxGroupField name="hobbies" label="爱好:" values={this.state.model.hobbies}>
    <Checkbox value="football">足球</Checkbox>
    <Checkbox value="basketball">篮球</Checkbox>
    <Checkbox value="painting">画画</Checkbox>
    <Checkbox value="photograph">摄影</Checkbox>
</CheckboxGroupField>
<ToggleField name="public" label="公开资料:" onText="开" offText="关" name="public" checked={this.state.model.public} />
<InputField name="introduction" label="自我介绍:" placeholder="说两句吧..."
    textarea
/>