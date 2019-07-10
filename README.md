# webpack-structure

# vueWebpackStructure

## 运行

### 启动后端服务器, 模拟proxy功能实现

```
cd backend
yarn
yarn server
```

### 启动开发编译

```
    cd..
    yarn
    yarn dev // 开发编译
    yarn build // 生产编译
```

## 1. 公共
0. 起步
``` bash
yarn add -D webpack webpack-cli
```
建立文件 src/index.js
package.json添加命令`"build": "webpack"`
运行`yarn build`

分离开发和生产编译配置
分开三个文件, 利用webpack-merge合并选项对象, webpack选项对象暴露为函数, 方便与命令行交互
1. 打包文件在html里面自动引入
设置 [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/#root)
2. ts编译, babel编译, polyfill, 
3. 加入 css编译, scss less等预处理编译, css module处理
4. 加入后缀解析和别名
5. 指定html上面的publicPath
6. 引入dll优化编译性能

## 2. 开发

2.1 开发server: devServer: 

### 2.1.1

- 配置dev-server,
- proxy
- 热更新-局部更新
<details>
<summary>CLICK ME</summary>
<p>

[webpack官方文档 Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/)
搭配
[react-hot-loader](https://github.com/gaearon/react-hot-loader)

```javascript
// build/webpack.config.dev.js
devServer: {
    // ...
    hot: true
}
```

```javascript
// 入口文件index.tsx
import {
    hot
} from 'react-hot-loader/root';
import * as React from 'react'
import * as ReactDOM from 'react-dom'
// ...

const HotApp = hot(App)
ReactDOM.render( <
    HotApp / > ,
    document.getElementById('root')
)
```

  </p>
</details>
2. 配置source-map, 方便开发debug

### 生产

1. 压缩: 压缩js和css文件
2. 提取: 提取css出来到指定文件
3. 抽离: 抽离公共的chunk, 比如node_modules里面的包单独打包

### 优化

1. 去除多余的编译信息
<!-- 2. 分离开发和生产的配置文件 -->
2. 提高编译速度, 
    - 设置cache为true

## 优化

热更新-局部更新

