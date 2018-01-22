### i18n
Internalization is aiming to provide lauguage supports for different contries. zh-CN by default.
### Global configuration
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

### Single configuration
Center components such as ```Pagination```, ```Table```, ```DatePicker``` and so on have property ```locale``` to config internationalization. It's prior to global configuration.
### Expandation
Your can customize your own locale configuration file. See [locale](https://github.com/AnacondaY/chimera/blob/master/src/components/i18n/lang/en.js).
@@--------------@@
### API

#### LocaleProvider
property | description | type | default
-----|------| ---- | ---
locale | object of locale configuration | ```Object``` | -

#### Configuration
- Simplified Chinese 'zh-CN'
- English 'en'
