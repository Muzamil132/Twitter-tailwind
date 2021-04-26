import React from 'react'

const Icons = ({Icon,color}) => {
    return (
            <div className="h-8 w-8 flex  rounded-full items-center  justify-center mb-2  hover:bg-gray-300   dark:hover:bg-dark-third">
            <Icon  className={`  hover:${color} w-5`}/>
            </div>
    )
}

export default Icons
