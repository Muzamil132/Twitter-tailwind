import React from 'react'
import {CheckCircleIcon ,DotsHorizontalIcon } from '@heroicons/react/solid'
import {HeartIcon,ShareIcon,UploadIcon,ChatAlt2Icon} from '@heroicons/react/outline'
import Icons from './components/Icons'
const Tweet = ({name,img,avatar}) => {
    return (
        <div className="border-t dark:border-gray-700 px-3 py-2">
            <div className="flex">
            <img className="inline-block  h-11 w-11 rounded-full " src={avatar} alt=""/>
            <div className="flex flex-col w-full pl-2">

            <div className="flex space-x-1 justify-between items-center">
            <div className="flex ">
            <h1 className="text-sm font-bold  truncate">{name}</h1>
            <CheckCircleIcon className="w-5  text-tw-blue "/>
           
            </div>
            <div className="h-10 w-10 flex  rounded-full items-center  justify-center  hover:bg-gray-300   dark:hover:bg-dark-third">
            <DotsHorizontalIcon  className="w-6  text-tw-blue"/>
            </div>
           
            </div>
            <p className="text-right"  >
            کرونا کی صورتحال سے نبٹنے کیلئے شہریوں کی ذمہ داری ہے کہ وہ کرونا SOP’s کی پابندی کریں حکومت کے صحت سےمنسلک محکمے اس ضمن میں تمام ممکن اقدامات لے رہے ہیں SOP’s پر عمدرآمد کیلئے فوج کی مدد طلب کی گئ ہے لیکن بنیادی طور پر شہری اورسول انتظامیہ کرونا SOP,s پرعملدرآمد کی ذمہ دار ہے
            </p>

            <div className="py-3  overflow-hidden">
            
            {
              img &&  <img className="rounded-xl border" src={img} alt="" />
            }    
            </div>
            <div  className="flex justify-between py-2">
              <Icons Icon={ChatAlt2Icon} color="text-tw-blue"/>
              <Icons Icon={HeartIcon} color="text-red-400" />
              <Icons Icon={ShareIcon} color="text-green-400"/>
              <Icons Icon={UploadIcon} color="text-tw-blue"/>
              
            </div>
            </div>
           


          

           
  
            </div>
        </div>
    )
}

export default Tweet
