import React from "react"

import Button from "../components/Button"

const TeacherManage = () => {
    return (
        <div>
          <Button 
            btnName="Sign in"
            classStyles={`mx-2 rounded-xl flex justify-center active:scale-110 duration-100`}
            handleClick={() => {
              router.push('/signin')
            }}
          />
        </div>
    )
}

export default TeacherManage