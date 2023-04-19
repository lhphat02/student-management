import { Label, TextInput, Checkbox, Button, Modal } from "flowbite-react";
import Image from "next/image";
import router from "next/router";
import Link from "next/link";

import assets from "@/assets";
import { useState } from "react";
import MyModal from "@/components/Modal";

const LoginPage = () => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div className="w-full">
      <div className="flex h-screen justify-center items-center bg-slate-300">
        <form className="flex z-10 flex-col gap-4 w-2/5 border p-10 rounded-3xl shadow-xl bg-white">
          <div>
            <p className="text-3xl font-poppins text-gray-600 font-bold flex justify-center">
              Login Page
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
          <div>
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
              <Label htmlFor="forgotpassword" className="hover:cursor-pointer">Forgot Password</Label>
            </Link>
          </div>
          <Button
            type="submit"
            onClick={() => {
              router.push("/");
            }}
          >
            Submit
          </Button>
        </form>

        {/* <Button onClick={() => {setToggleModal(true)}}>Toggle modal</Button>
        <Modal show={toggleModal} onClose={() => {setToggleModal(false)}}>
          <Modal.Header>Terms of Service</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => {setToggleModal(true)}}>I accept</Button>
            <Button color="gray" onClick={() => {setToggleModal(false)}}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal> */}
      </div>
    </div>
  );
};

export default LoginPage;
