# Chimera
Chimera(/kaɪˈmɪrə/, A monster in Warcraft), which is a basic components library made by React. There are 30+ components that can achieve most of the conventional business scenarios with Continuous updating and maintenance, aiming at more efficient development.

## Install
```shell
    npm install chimera-ui -S
    //or
    yarn add chimera-ui
```

## Features

* Abundant basic components to meet regular business
* Customizable theme.
* Component and style can load on demand
* Static type checking by Flow
* webpack + babel + sass workflow.

## Usage

### Via browser 

Chimera provides the released script, css and its compression. You can load the by ```<script/>``` and ```<link/>``` directly.

```html
    <link rel="stylesheet" href="node_modules/chimera-ui/release/chimera-ui.css" />
    <script type="text/javascript" src="node_modules/chimera-ui/release/chimera-ui.js"></script>
    <!-- compression -->
    <link rel="stylesheet" href="node_modules/chimera-ui/release/chimera-ui.min.css" />
    <script type="text/javascript" src="node_modules/chimera-ui/release/chimera-ui.min.js"></script>
```

### Via code

```javascript
    import { Button } from 'chimera-ui';
    ReactDOM.render(<Button />, mountNode);
```

### Load on demand

The above ways will load all components at once, which is inefficient network transmission. It is recommended to load the component on demand.

* Manual loads

```javascript
    import Button from 'chimera-ui/lib/button';
    //load scss
    import Button from 'chimera-ui/lib/button/style'
    //or load css
    import Button from 'chimera-ui/lib/button/style/css';
```

* [babel-plugin-chimeraui](https://github.com/AnacondaY/babel-plugin-chimeraui)(**Recommended**)

In your ```.babelrc``` file:
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

After babel configuration, the syntax ```import { Button } from 'chimera-ui'``` are already loaded on demand.

```javascript
    import { Button } from 'chimera-ui';
    //after babel transformation
    import Button from 'chimera-ui/lib/button';
    import Button from 'chimera-ui/lib/button/style/index.scss'
```
