import userModel from '../modles/user';
import encryptMd5 from '../utils/crypto';
import jwt from 'jsonwebtoken';
import config from '../config/default';

class UserController {
    static async login (req, res){
        let { username, password } = req.body;
        // 后端再验证一遍表单数据
        if(username == '') {
            return res.send({
                code: -1,
                msg: '用户名不能为空'
            });
        }
        if(password == '') {
            return res.send({
                code: -1,
                msg: '密码不能为空'
            });
        }
        let user = await userModel.findUser(username);
        // console.log(user)
        if(user.length == 0) { // 如果在数据库中没有查到数据
            return res.send({
                code: -1,
                msg: '该用户未注册'
            });
        } else {
            let encryDate = encryptMd5(password);
            if(user[0].password == encryDate) {
                // 用户登录成功过后生成token返给前端
                let token = jwt.sign({username: username}, config.secretKey, {
                    expiresIn : 60 * 60 * 24 // 授权时效24小时
                });
                return res.send({
                    code: 0,
                    msg: '登陆成功',
                    token: token
                });
            }
        }
    }

    // 注册
    static async register (req, res){
        let { username, password } = req.body;
        // 后端再验证一遍表单数据
        if(username == '') {
            return res.send({
                code: -1,
                msg: '用户名不能为空'
            });
        }
        if(password == '') {
            return res.send({
                code: -1,
                msg: '密码不能为空'
            });
        }
        let user = await userModel.findUser(username);
        if(user.length > 0) { // 如果在数据库中查到一条用户名相同的数据
            return res.send({
                code: -1,
                msg: '该用户已注册'
            });
        } else {
            let encryDate = encryptMd5(password);
            let result = await userModel.insertUsers([username, encryDate, '', new Date()])
            return res.send({
                code: 0,
                msg: '注册成功'
            });
        }
    }
    static async getLeaveWord(req, res) {
        let result = await userModel.findAllWord();
        res.send({
            code: 0,
            msg: result
        })
    }
};

export default UserController;