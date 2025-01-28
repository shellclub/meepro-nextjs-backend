import prisma from "@/lib/db"
import { Prisma } from "@prisma/client";
import { genSalt, hash } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";


//เพิ่ม user ในระบบ
export async function POST(request: NextRequest){
    const jsonBody = await request.json() as Prisma.UserCreateInput;
    
    const user = await prisma.user.findUnique({
        where: {email: jsonBody.email}
    })
    if(user){
        return NextResponse.json({message: "มีอีเมล์นี้ในะรบบแล้ว"},{status: 400})
    }   
    // hash password
    const salt = await genSalt(10)
    const hashedPassword = await hash(jsonBody.password,salt)
 
    await prisma.user.create({
        data: {
            fname: jsonBody.fname,
            lname: jsonBody.lname,
            email: jsonBody.email,
            password: hashedPassword
            
        }
    })
    
    return NextResponse.json({message: "ลงทะเบียนสำเร็จ"})
}
