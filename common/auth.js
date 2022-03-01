import conf from '../conf'
import jwt from 'jsonwebtoken'
import {jsonResponse} from './utils'

export async function verifyAuth(req, res) {
    const token = req.cookies[conf.USER_TOKEN] || ''
    console.log(token, 'token')
    if (!token) {
        return null;
    }
    const {err, decoded} = await jwt.verify(token, 'shhhhh')
    if (!err) return decoded
}

export function setUserCookie(req, res) {
    const cookie = req.cookies[conf.USER_TOKEN] || ''
    if (!cookie) {
        const token = jwt.sign({ foo: 'bar' }, 'shhhhh', {expiresIn: '1h'})
        res.cookie(conf.USER_TOKEN, token, {httpOnly: true})
    }
    return res;
}