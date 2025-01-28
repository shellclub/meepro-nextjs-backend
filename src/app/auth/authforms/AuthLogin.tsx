"use client"
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; // ใช้ yupResolver ครั้งเดียว
import * as yup from "yup";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { signIn } from "next-auth/react"

export default function AuthLogin(){
  
  const router = useRouter();

  const schema = yup.object().shape({
    email: yup.string().required("ป้อนข้อมูลอีเมล์ด้วย").email("รูปแบบอีเมล์ไม่ถูกต้อง"),
    password: yup.string().required("ป้อน password ด้วย"),
  })

  const { control, handleSubmit } = useForm({
      resolver: yupResolver(schema),
  });

  const onSubmit = async (myForm: any) => {
      //console.log(data);
      const { email, password } = myForm;

      const result = await signIn("credentials",{
        redirect: false,
        email,
        password
      })

      if(result?.ok){
        router.replace("/")

      }else{
        enqueueSnackbar(result?.error,{variant: "error"})
      }


  };
  return (
    <>
     <SnackbarProvider/>
      <form className="mt-6" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="Username" value="Username" />
          </div>
          
          <Controller
          name="email"
          control={control}
          render={({field: {onChange}, fieldState: {error}}) => (
            <TextInput            
            helperText={error ? error.message : null}
            onChange={onChange}
            id="email"
            type="email"
            sizing="lg"
            color="failure"
            className="form-control"
          />
          )}
          />          
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <Controller
          name="password"
          control={control}
          render={({field: {onChange}, fieldState: {error}}) => (
            <TextInput
            
            helperText={error ? error.message : null}
            onChange={onChange}
            id="password"
            type="password"
            sizing="lg"
            color="failure"
            className="form-control"
          />
          )}
          />
          
        </div>
        <div className="flex justify-between my-5">
          <div className="flex items-center gap-2">
            <Checkbox id="accept" className="checkbox" />
            <Label
              htmlFor="accept"
              className="opacity-90 font-normal cursor-pointer"
            >
              Remeber this Device
            </Label>
          </div>
          <Link href={"/auth/auth1/forgot-password"} className="text-primary text-sm font-medium">
            Forgot Password ?
          </Link>
        </div>
        <Button type="submit" color={"primary"} className="w-full rounded-md">
          Sign in
        </Button>
      </form>
    </>
  );
};



