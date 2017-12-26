## Customized theme
All style of ```Chimera``` are coded via ```scss```. There are two ways to customize theme as follows:

* Modify source code

The theme variables defined in ```node_modules/chimera-ui/lib/style/theme/default.scss```, which can be modified to customize theme. It is more violent and more associated in this way.

* ```sass-loader```

[sass-loader](https://github.com/webpack-contrib/sass-loader) provides the option ```data``` to modify global variables. It's less configurable because the attribute only receives string.

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
                    options: {
                        data: '$highlight: #04d8b5;$primary: #1b98f3;'
                    }
                }]
            }]
        }
    }
```

* ```style-variables-loader```(**Recommended**)

We provide a webpack loader [style-variables-loader](https://github.com/AnacondaY/style-variables-loader) to customize theme. It can make your project configurable and isolated in theming.

```json
    //theme.json
    {
        "highlight": "#04d8b5",
        "primary": "#1b98f3",
        "error": "#f05a5a",
        "info": "#22ccc2",
        "warning": "#fac525",
        "success": "#20b96d"
    }
```
Or
```js
    //theme.js
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