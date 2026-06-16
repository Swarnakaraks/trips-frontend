import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import useAuth from '@/hooks/useAuth'
import { toast } from "sonner";
import api from '@/api/axios';
import { Navigate, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const formSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email().min(5, "Email must be at least 5 characters"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine(
    (data) => {
     return data.password === data.confirmPassword;
    },
    {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    },
  );
const Register = () => {
  const navigate = useNavigate();

  const {token} = useAuth();
  if(token){
    return(
      <Navigate to="/dashboard"/>
    )
  }


  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

   const onSubmit = async (data) => {
        console.log(data)
        const newData = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        try{
            const response = await api.post("/auth/register", newData);
            console.log(response);  

            if(response.status === 201){
                toast.success("Registration Successful!")
                navigate("/login");
            }else{
                toast.error("Registration failed. Please try again.")
            }
        }catch (error){
            console.error("Registration failed:", error);
            toast.error("Registration failed. Please try again.")
        }
    }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
       style={{backgroundImage:"url('/beautiful.jpg')"}}
      className="min-h-screen flex items-center justify-center bg-center bg-cover bg-linear-to-br from-blue-100 via-white to-blue-200"
    >
      <Card className="w-100 p-7 rounded-2xl shadow-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl">
        {/* HEADER */}
        <CardHeader className="text-center space-y-2 relative">
          <CardTitle >
            <div className="absolute top-0 left-0">
                <a href="/"><ArrowLeft className="text-gray-500"/></a>
            </div>
            <div className="flex items-center justify-center h-12">
        <img src="/logo.png" className="h-13 w-auto object-contain" />

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Trip
          <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Bridge
          </span>
        </h1>
      </div>
          </CardTitle>
          <CardDescription className="text-gray-500 text-sm">
            Start your journey with us — create your account.
          </CardDescription>
        </CardHeader>

        {/* FORM */}
        <CardContent className="space-y-5 mt-5">
          {/* NAME */}
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input
                  {...field}
                  placeholder="John Doe"
                  className="transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:scale-[1.02] hover:border-blue-400"
                />
                {fieldState.error && (
                  <p className="text-red-500 text-xs">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          {/* EMAIL */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  type="email"
                  {...field}
                  placeholder="you@example.com"
                  className="transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:scale-[1.02] hover:border-blue-400"
                />
                {fieldState.error && (
                  <p className="text-red-500 text-xs">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          {/* PASSWORD */}
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Create Password
                </label>
                <Input
                  type="password"
                  {...field}
                  placeholder="At least 8 characters"
                  className="transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:scale-[1.02] hover:border-blue-400"
                />
                <p className="text-xs text-gray-400">
                  Use a mix of letters, numbers & symbols.
                </p>
                {fieldState.error && (
                  <p className="text-red-500 text-xs">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          {/* CONFIRM PASSWORD */}
          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  {...field}
                  placeholder="Re-enter your password"
                  className="transition-all duration-300 focus:scale-[1.02] hover:border-blue-400"
                />
                {fieldState.error && (
                  <p className="text-red-500 text-xs">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-4 py-2.5 rounded-xl bg-linear-to-r from-blue-600 to-blue-400 text-white font-semibold tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-lg active:scale-95"
          >
            Create Your Account
          </button>

          {/* FOOTER */}
          <p className="text-center text-sm text-gray-500 mt-3">
            Already have an account?{" "}
           <a href="/login" className="text-orange-600 font-medium cursor-pointer hover:underline">Signin</a>
          </p>
        </CardContent>
      </Card>
    </form>
  );
};

export default Register;
