# kwoh5

#### 2015-06-11
* fix 个人介绍多次换行处理
* fix 分享头像与昵称角色BUG
* fix 打赏次数文案修复

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
#### 相关连接
```
   1、个人主页 http://m.ikaowo.com/h5/share.html#/mine/1
   2、app内嵌个人主页 http://m.ikaowo.com/h5/retina.html#/tumblr?u_id=1&imgw=200
   3、选择打赏金额 http://m.ikaowo.com/h5/share.html#/reward-money/2/1/ask/1
   4、Ta收到的打赏列表 http://m.ikaowo.com/h5/share.html#/reward-list/1
   5、给XX的打赏 http://m.ikaowo.com/h5/share.html#/reward-send/pro/1?isApp=true
   6、来自XX的打赏 http://m.ikaowo.com/h5/share.html#/reward-send/client/2?isApp=true
   7、打赏成功页 http://m.ikaowo.com/h5/share.html#/reward-send/success/3?isApp=true
```