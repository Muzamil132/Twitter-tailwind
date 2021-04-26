import React from 'react'


const SideManu = ({name,Icon}) => {
    return (
     
        <div className=" inline-flex space-x-3 dark:hover:bg-dark-third hover:text-tw-blue py-3 px-4 mb-3 hover:bg-blue-100 rounded-full">
            <Icon className="w-7"/>
             <h2 className="text-lg font-bold">{name}</h2>
             
        </div>
            
       
    )
}

export default SideManu
