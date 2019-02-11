#### 目录结构
- controllers/ - 定义你应用的路由和其他的逻辑
- config/ - 配置信息，如数据库密码
- utils/ - 可以被项目各部分所调用的功能函数和代码
- middlewares/ - Express 中间件，将要处理在进入路由之前的请求
- models/ - 表示数据，实现业务逻辑和处理存储，和sql相关
- public/ - 包含所有的静态文件，像图片、样式和脚本
- tests/ - 测试在其他文件夹的的代码
- app.js - 初始化应用
- package.json - 你应用所依赖的特定版本的包
- .gitignore忽略上传到git的文件
#### API 接口服务化的设计哲学
>所谓万物皆有套路，API 接口服务层的基础服务，在不考虑重量级分布式架构的前提下，离不开下面罗列的核心技术点：
- 调试工具与技巧
- 后端基础打底框架
- 脱离版本库的环境参数配置
- 一致化的 HTTP response 返回
- 入参校验
- API 文档化 apidoc
- 数据库 ORM（采用原生sql）
- 基于 JWT 的用户身份验证
- 数据缓存
- 日志系统
- 单元测试
#### 业务需求分析
>概而言之，用户权鉴与 业务的增删改查（CURD）。
- 用户身份的建立
- 服务接口针对用户的验证
- 获取列表类数据
- 分页列表数据
- 获取单条数据详情
- 提交业务数据
#### 依赖包作用
- dotenv:来读取 .env 配置文件，加载后的环境配置参数,可通过process.env来读取
- cross-env能跨平台地设置及使用环境变量cross-env NODE_ENV=production 
- babel-cli 将es6语法转换成es5语法
- morgan可以尝试一天写入一个日志文件
- body-parser Express 获取Get和Post请求的参数:参考https://www.jianshu.com/p/f219ff84c5e5
- compression 降低响应主体的大小
- validator：nodejs的后端字符串验证器
- pm2 生产环境下使用
- nodemon 开发环境刷新保存的代码不用重启，热加载
#### 已完成
- 在Node中使用ES6语法，并且实时刷新保存的代码不用重启，热加载，nodemon类似gulp：https://segmentfault.com/a/1190000006707756
- 数据库model，路由routes，控制层controllers层封装
- 生成apidoc文档：
  - 生成命令： apidoc -i src/routes/ -o public/apidoc/
  - 查看： http://localhost:3000/public/apidoc/
  - 参考：https://www.jianshu.com/p/7e1b057b047c
- 数据库表创建
- jwt身份验证设计：参考： https://juejin.im/post/5b06c6baf265da0db4791805#heading-3
- 密码md5加密
- postman测试接口使用：post请求，参数选择body下面的x-www-form-urlencoded
- 捕获错误
- nginx -t 查看nginx.conf配置文件目录，chmod 777 文件名读写权限；nginx.conf地址etc/nginx，nginx命令文件地址/usr/sbin
- pm2启动命令：https://www.jianshu.com/p/6b3b506f7d0a
- 代码上传到github
- github推送权限：https://www.jianshu.com/p/d136dee10561,https://blog.csdn.net/qq_35246620/article/details/69061355
#### 待完成
- 参考制作页面：https://juejin.im/post/5badc172e51d450e9704fc7a?utm_source=gold_browser_extension