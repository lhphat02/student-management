import React from "react"

import Topbar from "@/components/Topbar"
import Button from "../components/Button"

const TeacherManage = () => {
    return (
      <div>
        <Topbar NamePage='Teacher Management'/>
        <div className="flex justify-center item-center">
          <Button 
            btnName="Sign in"
            classStyles={`mx-2 rounded-xl active:scale-110 duration-100`}
            handleClick={() => {
              router.push('/signin')
            }}
          />
        </div>
      </div>
    )
}

export default TeacherManage