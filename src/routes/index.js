import express  from 'express';
 //需使用 express.Router 创建模块化、可挂载的路由
const router = express.Router();
//引入控制器
import loginController from '../controllers/login';
// 匹配根路径的请求
/**
 * @api {post} /login 用户登录
 * @apiDescription 用户登录
 * @apiName login
 * @apiGroup User
 * @apiParam {string} username 用户名
 * @apiParam {string} password 密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "0",
 *      "msg" : '登陆成功',
 *      "token": "token"
 *  }
 * @apiSampleRequest http://localhost:3000/login
 * @apiVersion 1.0.0
 */
router.post('/login', loginController.login);
// 匹配 /about 路径的请求

/**
 * @api {post} /register 用户注册
 * @apiDescription 用户注册
 * @apiName register
 * @apiGroup User
 * @apiParam {string} username 用户名
 * @apiParam {string} password 密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "0",
 *      "msg" : "注册成功"
 *  }
 * @apiSampleRequest http://localhost:3000/register
 * @apiVersion 1.0.0
 */
router.post('/register', loginController.register );
/**
 * @api {get} /index 首页
 * @apiDescription 用户注册
 * @apiName index
 * @apiGroup User
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "0",
 *      "msg" :  [
 *            {
 *                 "id": 1,
 *                 "topic_id": 1,
 *                 "topic_type": "哈哈",
 *                 "content": "啥啊",
 *                 "from_uid": 1,
 *                "to_uid": 2
 *            }
 *        ]
 *  }
 * @apiSampleRequest http://localhost:3000/index
 * @apiVersion 1.0.0
 */
router.get('/index', loginController.getLeaveWord )
router.get('/test', (req, res) => {
    res.send('helloworld1');
})

module.exports = router