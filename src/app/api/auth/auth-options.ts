import {compare} from "bcrypt"
import prisma from "@/lib/db"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    useSecureCookies: false, // if usproduction set ture ใช้กรณี https://
    session:{
      strategy: "jwt",
      maxAge: 1 * 24 * 60 * 60
    },
    pages: {
      signIn: "/singin"
    },
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. 'Sign in with...')
         credentials: { },
          async authorize(credentials, req) {
          const {email, password} = credentials as {email: string, password: string}

          const user = await prisma.user.findUnique({
            where: {email: email}
          })
          if(!user){
              throw new Error("ไม่พบอีเมล์ในระบบ")
          }

          //compare password
            const isValid = await compare(password,user.password)
            if(!isValid){
                throw new Error("รหัสผ่านไม่ถูกต้อง")
            }
            return{
              id: user.id.toString(),
              name: user.fname + " " + user.lname,
              role: user.role,
              email: user.email
            }
          }
        })
      ]
})

