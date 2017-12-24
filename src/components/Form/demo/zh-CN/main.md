## Form 表单
具有收集、校验和提交数据功能的组件, 可包含单选框、复选框、输入框和选择器等。

@@----------------@@
### API

#### Form
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
mode | 表单的布局方式 | ```'horizontal'丨'vertical'丨'inline'``` | ```'horizontal'```
labelWidth | 标签的宽度 | ```Number``` | ```84```
labelAlign | 标签的对齐方式 | ```'left'丨'center'丨'right'``` | ```right```
onSubmit | 提交表单时触发 | ```Function``` | -

#### Form.Field
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
mode | 表单的布局方式 | ```'horizontal'丨'vertical'丨'inline'``` | ```'horizontal'```
labelWidth | 标签的宽度, 若设置, 将覆盖Form组件的定义 | ```Number``` | -
labelAlign | 标签的对齐方式, , 若设置, 将覆盖Form组件的定义 | ```'left'丨'center'丨'right'``` | -
label | 标签的文本 | ```String丨ReactNode``` | -
required | 是否在标签前显示红色星号 | ```Boolean``` | ```false```
status | 表单项的状态, 可用于自定义表单验证 | ```'success'丨'error'丨'warning' 丨'normal'``` | ```'normal'```
feedback | 表单项的反馈文本, 用于错误提示 | ```String丨ReactNode``` | -
extra | 表单项的额外信息文本, 用于显示额外提示信息 | ```String丨ReactNode``` | -

#### Form.enhanceForm(schema: Object, options: Object)(WrappedForm: ReactElement) => (EnhancedForm: ReactElement)
> 高阶组件, 用于提升form元素或封装form元素的组件, 提升后的组件具有表单验证功能。

属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
schema | 数据的模型提要, 用于定义字段的类型和验证规则, 必填。 详细用法见本库的配套表单验证工具[validate-promisify](https://github.com/AnacondaY/validate-promisify) | ```Object``` | -
options.model | 数据实体对象, 可用于实现外层的数据双向绑定。 例如利用```Redux```的```mapStateToProps```注入数据。 | ```Object``` | -
options.validateTrigger | 验证触发的时机, 为```null```时将禁用验证 | ```'change'丨'blur'丨null``` | - 
options.onModelChange | 数据对象改变时触发, 可用于外层数据的双向绑定。 | ```(values: Object) => {}``` | -
options.onError | 表单项有错误时触发 | ```(errors: Object) => {}``` | -

#### WrappedForm
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
props.cmrForm.model | 当前数据对象 | ```Object``` | -
props.cmrForm.errors | 当前错误信息集合 | ```Object``` | -
props.cmrForm.validateForm | 验证整个表单 | ```Function``` | -
props.cmrForm.resetForm | 重置整个表单数据和错误信息 | ```Function``` | -

#### Form.enhanceControl(Control: ReactElemnt) => (EnhancedControl: ReactElement)
> 用于提升表单控件, 提升后可以实现与EnhancedForm中的数据对象和错误信息进行双向绑定。Control可以是```Input```, ```Select```, ```Upload```等表单组件, 也可以是原生HTML控件甚至其他库组件，前提是Control能够支持onChange、onBlur、onFocus和value等属性。

属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
name | 字段名称, 与schema中的key对应, 必填 | ```String``` | -
validateTrigger | 校验时机, 若设置, 将覆盖enhanceForm中的设置 | ```'change'丨'blur'丨null``` | -

#### Form.wrapField(Control: ReactElement) => (WrappedField: ReactElement)
> 用于将控件包裹到```Field```中, 使其能够自动接收错误信息并改变表单项状态和显示错误信息。wrapField只是为避免重复代码所提供的快捷包装函数, 所有预置的强化表单项均基于此包装, 若不满足你的需求可自行封装。

#### EnhancedField
系统预置一系列强化表单项, 可直接使用。 所有强化表单项可接收```Field```和对应表单控件的所有参数。
* Form.InputField
* Form.SelectField
* Form.CheckboxGroupField
* Form.RadioGroupField
* Form.DatePickerField
* Form.NumberInputField
* Form.ToggleField
* Form.SliderField
* Form.UplodaField






