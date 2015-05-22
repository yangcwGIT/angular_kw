# kwoh5

### 生产目录结构

```
 ├── README.md
 ├── bower.json
 ├── Gruntfile.js
 ├── package.json
 ├── .gitignore
 ├── index.html
 ├── retina.html
 ├── share.html
 ├── simple.html
 ├── bower_components
 ├── node_modules
 │
 ├── tasks                     //grunt配置文件
 │   ├── createFolderGlobs.js
 │   ├── config                //脚本
 │   └── register              //build&run
 │
 ├── src                       //公用静态文件
 │   ├── scripts
 │   └── styles
 │
 ├── app                       //app项目（主要包含引入jQuery文件）
 │   ├── directive             //angular指令
 │   ├── partial               //页面
 │   ├── services              //angular服务
 │   └── ngApp.js              //angular路由
 │
 ├── spApp                     //spApp项目
 │   ├── directive             //angular指令
 │   ├── partial               //页面
 │   ├── services              //angular服务
 │   └── spApp.js              //angular路由
 │
 └── share                     //share项目
     ├── directive             //angular指令
     ├── partial               //页面
     ├── services              //angular服务
     └── app.coffee            //angular路由
```

### 发布目录结构（dist文件）

```
 ├── index.html
 ├── retina.html
 ├── share.html
 ├── simple.html
 ├── bower_components
 │
 ├── src                       //公用静态文件
 │   ├── scripts
 │   └── styles
 │
 ├── app                       //app项目（主要包含引入jQuery文件）
 │   ├── directive             //angular指令
 │   ├── partial               //页面
 │   ├── services              //angular服务
 │   ├── src                   //合并压缩后的静态文件
 │   └── ngApp.js              //angular路由
 │
 ├── spApp                     //spApp项目
 │   ├── directive             //angular指令
 │   ├── partial               //页面
 │   ├── services              //angular服务
 │   ├── src                   //合并压缩后的静态文件
 │   └── spApp.js              //angular路由
 │
 └── share                     //share项目
     ├── directive             //angular指令
     ├── partial               //页面
     ├── services              //angular服务
     ├── src                   //合并压缩后的静态文件
     └── app.coffee            //angular路由
```