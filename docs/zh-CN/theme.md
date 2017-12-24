## 定制主题
```Chimera```所有样式基于```scss```编写, 提供两种方式定制主题。

* 更改源码

在```node_modules```里面找到```chimera-ui/lib/style/theme/default.scss``` , 修改色彩变量可更改默认样式。这种方式比较暴力,项目和库的耦合更高。

* ```style-variables-loader```(**推荐**)

本库提供[style-variables-loader](https://github.com/AnacondaY/style-variables-loader)来定制主题。这种方式可以使主题变得可配置, 使项目与库保持相对独立。

```json
    //你的定制主题文件, json
    {
        "highlight": "#04d8b5",
        "primary": "#1b98f3",
        "error": "#f05a5a",
        "info": "#22ccc2",
        "warning": "#fac525",
        "success": "#20b96d"
    }
```
或者
```js
    //你的定制主题文件, js
    module.exports = {
        highlight: "#04d8b5",
        primary: "#1b98f3",
        error: "#f05a5a",
        info: "#22ccc2",
        warning: "#fac525",
        success: "#20b96d"
    }
```

```javascript
    //webpack.config.js
    module.exports = {
        //other configs
        module:{
            rules: [{
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'scss-loader',
                }, {
                    loader: 'style-variables-loader',
                    options: {
                        files: '/your/theme/path/file.json'
                    }
                }]
            }]
        }
    }
```