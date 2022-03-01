import { NextRequest, NextResponse } from 'next/server'
import {setUserCookie} from '../common/auth'
export function middleware(req, res) {
    // console.log(req, res)
    return setUserCookie(req, NextResponse.next())
    return NextResponse.next()
    return new Response('Hello, world!')
}