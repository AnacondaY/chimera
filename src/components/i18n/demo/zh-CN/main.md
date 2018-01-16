### i18n 国际化
国际化是为不同受众提供语言支持。```chimera```默认使用中文语言包。

### 全局修改
```javascript
    class LocaleDemo extends React.Component {

        render(){
            return (
                <LocaleProvider locale={en}>
                    <YourApp/>
                </LocaleProvider>
            )
        }

    }
```

### 单独修改
> 除在```LocaleProvider```中全局注入国际化对象外, 某些组件如```Pagination```, ```Table```, ```DatePicker```等支持```locale```属性, 其优先级高于全局对象。

### 语言包扩展
由于小弟才疏学浅, 目前只提供了中英文的语言包, 如需修改和扩充, 请参照[locale](https://github.com/AnacondaY/chimera/blob/master/src/components/i18n/lang/en.js)的格式进行定制。

@@--------------@@
### API

#### LocaleProvider
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
locale | 需要注入的语言包对象 | 参考 | 中文

#### 语言包
- 简体中文 'zh-CN'
- 英语 'en'
