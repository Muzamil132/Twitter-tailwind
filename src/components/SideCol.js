import React from 'react'
import {
  
 
    DotsHorizontalIcon,
  } from "@heroicons/react/outline";

const SideCol = () => {
    return (
        <div className=" border-b dark:border-gray-700 py-2 px-3   hover:bg-gray-200  dark:hover:bg-gray-700">
              <div className="flex justify-between ">
                <small className="font-light text-sm">
                  Trending . Pakistan
                </small>
                <div className="h-7 w-7  flex  rounded-full items-center  justify-center    hover:bg-gray-300  dark:hover:bg-dark-third">
                  <DotsHorizontalIcon className="w-5   text-tw-blue" />
                </div>
              </div>
              <div>
                <p className="text-sm font-bold p-0 ">NOOC Cancelation Exams</p>
                <small className="font-light  p-0">Trending . Pakistan</small>
              </div>
         
            </div>
    )
}

export default SideCol
