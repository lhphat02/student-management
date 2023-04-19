import React from "react";
import { Label, TextInput, Checkbox, Button, Modal } from "flowbite-react";
import Image from "next/image";
import router from "next/router";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-slate-300">
      <form className="flex z-10 flex-col gap-4 w-2/5 border p-10 rounded-3xl shadow-xl bg-white">
        <div>
          <p className="text-3xl font-poppins text-gray-600 font-bold flex justify-center">
            Forgot Password
          </p>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="Email"
            required={true}
          />
        </div>
        {/* <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" type="password" required={true} />
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Link href="/forgotpassword">
                <Label htmlFor="forgotpassword">Forgot Password</Label>
              </Link>
            </div> */}
        <Button
          type="submit"
          onClick={() => {
            router.push("/resetpassword");
          }}
        >
          Send Code
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
