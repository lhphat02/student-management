import { Label, TextInput, Checkbox, Button, Modal } from "flowbite-react";
import Image from "next/image";
import router from "next/router";
import Link from "next/link";

const ResetPassword = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-slate-300">
      <form className="flex z-10 flex-col gap-4 w-2/5 border p-10 rounded-3xl shadow-xl bg-white">
        <div>
          <p className="text-3xl font-poppins text-gray-600 font-bold flex justify-center">
            Set Password
          </p>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="code" value="Code" />
          </div>
          <TextInput id="code" type="code" required={true} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="New password" />
          </div>
          <TextInput id="password1" type="password" required={true} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Confirm your password" />
          </div>
          <TextInput id="password2" type="password" required={true} />
        </div>
        <Button
          type="submit"
          onClick={() => {
            router.push("/login");
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;
