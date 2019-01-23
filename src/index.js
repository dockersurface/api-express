import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import { jwtAuth } from './middlewares/jwt';
import {handleError} from './middlewares/handleError';
import bodyParser from 'body-parser';
import compression from 'compression';

const app = express();
// 可以访问静态文件
app.use('/public',express.static('public'));
// gzip压缩
app.use(compression());
// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// 允许所有的请求形式
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// 日志
app.use(morgan('combined'));
// 所有请求过来都会进行身份验证
app.use(jwtAuth);
// 路由系统
app.use('/', routes);
// 异常处理
handleError(app);
// 监听端口
app.listen(3000, () => {
    console.log('listening on 3000');
})

