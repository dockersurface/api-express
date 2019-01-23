import base from './base';

class UserModel extends base {
    constructor() {
        super()
    }

    findAllWord() {
        let sql = 'SELECT * FROM leaveword';
        return super.query(sql)
    }

    insertUsers(values) {
        let sql = 'INSERT INTO users(id, username, password, mobile, create_time) VALUES(0, ?, ?, ?, ?)';
        return super.query(sql, values);
    }

    findUser(values) {
        let sql = 'SELECT * FROM users WHERE username = ?';
        return super.query(sql, values);
    }
}

export default new UserModel();