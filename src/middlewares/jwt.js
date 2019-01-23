// jwt.js,token中间件
import expressJwt from "express-jwt";
import config from '../config/default';

// express-jwt中间件帮我们自动做了token的验证以及错误处理，所以一般情况下我们按照格式书写就没问题，其中unless放的就是你想要不检验token的api。
export const jwtAuth = expressJwt({secret: config.secretKey}).unless({path: ["/login", "/register", "/test"]}); 