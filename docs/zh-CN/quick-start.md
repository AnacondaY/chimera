# Chimera
Chimera(/kaɪˈmɪrə/, 魔兽争霸中的双头飞龙), 是一套基于React实现的基础组件库。目前已有30+个组件, 可实现大部分常规业务场景, 并且会持续更新和维护, 旨在让开发更高效、简洁。

## 安装
```shell
    npm install chimera-ui -S
    //or
    yarn add chimera-ui
```

## 特点

* 丰富的基础组件, 满足常规业务
* 支持自定义主题
* 组件及样式(css和sass)支持按需加载
* Flow静态代码检测
* webpack + babel + sass工作流

## 使用

### 浏览器载入

Chimera提供已经构建完成的脚本、样式及对应的压缩版本, 可直接用```<script/>```和```<link/>```标签引入。

```html
    <link rel="stylesheet" href="node_modules/chimera-ui/release/chimera-ui.css" />
    <script type="text/javascript" src="node_modules/chimera-ui/release/chimera-ui.js"></script>
    <!-- 压缩版本 -->
    <link rel="stylesheet" href="node_modules/chimera-ui/release/chimera-ui.min.css" />
    <script type="text/javascript" src="node_modules/chimera-ui/release/chimera-ui.min.js"></script>
```

### 代码载入

```javascript
    import { Button } from 'chimera-ui';
    ReactDOM.render(<Button />, mountNode);
```

### 按需加载

上述方法会一次加载所有组件, 影响网络传输性能, 推荐使用按需加载的方式载入组件。
下面两种方式均可实现按需加载。

* 手工载入

```javascript
    import Button from 'chimera-ui/lib/button';
    //引入scss文件
    import Button from 'chimera-ui/lib/button/style'
    //或者引入css文件
    import Button from 'chimera-ui/lib/button/style/css';
```

* [babel-plugin-chimeraui]()(**推荐**)

在```.babelrc```中配置:
```json
    {
        //other babel options
        "plugins": [
            ["chimeraui", { 
                "style": "scss",
                "libDirectory": "lib"
            }]
        ]
    }
```

配置完成之后可使用```import { Button } from 'chimera-ui'```的方式导入, 这时```babel```转译后已经实现按需加载从而减少冗余代码。

```javascript
    import { Button } from 'chimera-ui';
    //经过babel转译后
    import Button from 'chimera-ui/lib/button';
    import Button from 'chimera-ui/lib/button/style/index.scss'
```
