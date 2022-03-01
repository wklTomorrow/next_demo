import { NextRequest, NextResponse } from 'next/server'
import {verifyAuth} from '../../common/auth'
export async function middleware(req, res) {
    const code = verifyAuth(req, NextResponse.next())
    console.log(code, 'code')
    if (code) {
        return NextResponse.next()
    }
    return new Response(JSON.stringify({error: { message: 'Missing user token' }}))
}