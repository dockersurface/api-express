import crypto from 'crypto';

/** 
* md5加密 
* @param str 需要加密的字符串 
* @returns {*} 
*/
function encryptMd5(str) {
    const md5 = crypto.createHash('md5');
    return md5.update(str).digest('hex').toLowerCase();
}

export default encryptMd5;