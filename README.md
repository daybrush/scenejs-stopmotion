# scenejs-stopmotion

## Usage
```js
    StopMotion({
        0: {"background":"rgb(100, 100, 100)", left: "0px"},
        5: {"background":"rgb(255, 100, 100)", left: "300px"}
    }, {
        selector: ".circle",
        count: 5,
    }).play();
```
## Example
* [StopMotion](//daybrush.github.io/scenejs-stopmotion/example/stopmotion.html)

## How To Use

### Installation with npm

```bash
$ npm install scenejs-stopmotion
```

### Import Library
#### ES5
```html

<script src="//daybrush.github.io/scenejs-stopmotion/release/latest/stopmotion.min.js">
```
#### ES6
```js
import StopMotion from "scenejs-stopmotion";
```

### Go

```js
scene.setStopMotion({count: 5});

scene.play();
```


### API

|name|type|description|
|---|---|---|
|target|Scene or SceneItem or object| The instance to apply stop-motion|
|options|object| The options to apply to stop-motion|


* target is object, retrun value's type is SceneItem.

> #### options
> * count : Number of times to apply stop motion.

