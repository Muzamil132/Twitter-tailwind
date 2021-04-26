import React, { useState, useEffect, useRef } from "react";
import {
  SearchIcon,
  PhotographIcon,
  GiftIcon,
  EmojiHappyIcon,
  CalendarIcon,
  HomeIcon,
  HashtagIcon,
  BellIcon,
  BookmarkAltIcon,
  ClipboardIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  CogIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import moonIcon from "./assets/images/moon.svg";
import sunIcon from "./assets/images/sun.svg";
import TwitterIcon from "@material-ui/icons/Twitter";

import Tweet from "./Tweet";
import SideManu from "./components/SideManu";
import { MessageOutlined } from "@material-ui/icons";
import { ChatAlt2Icon } from "@heroicons/react/solid";
import SideCol from "./components/SideCol";
import { BasicUsage } from "./components/Modal";
const Layout = ({ darkTheme, setDarkTheme }) => {
  const [focus, setFocus] = useState(false);
  const ref = useRef("");
   console.log(ref)
  useEffect(() => {
      if(ref.current){
        document.addEventListener("click", (event) => {
            if (!ref.current.contains(event.target)) {
              setFocus(false);
            }
          });
      }
   
  }, []);

  return (
    <div className="sm:grid grid-cols-12  ">
      <div className="sm:col-span-3 h-screen sticky top-0 hidden lg:block">
        <div className=" lg:ml-40 md:ml-16 py-1   ">
          <div className="h-14 w-14 flex  rounded-full items-center  justify-center   hover:bg-gray-300  dark:hover:bg-dark-third">
            <TwitterIcon
              style={{ fontSize: 40, color: darkTheme ? "white" : "#1DA1F2" }}
              className=" text-tw-blue"
            />
          </div>

          <SideManu name="Home" Icon={HomeIcon} />
          <SideManu name="Explore" Icon={HashtagIcon} />
          <SideManu name="Messages" Icon={ChatAlt2Icon} />
          <SideManu name="Notification" Icon={BellIcon} />
          <SideManu name="Lists" Icon={ClipboardIcon} />
          <SideManu name="Profile" Icon={UserIcon} />
          <SideManu name="More" Icon={DotsCircleHorizontalIcon} />

          <div>
            <button class=" bg-tw-blue focus:outline-none w-5/6 text-white font-semibold py-2 px-4 rounded-full">
              Tweet
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12   lg:col-span-5 border dark:border-gray-700">
        <div className="flex items-center  px-3 sm:py-3 py-2  sm:hidden ">
          <div
            onClick={() => setFocus(true)}
            ref={ref}
            className={`flex flex-1 bg-gray-100 py-1  sm:py-1  dark:bg-dark-third   item-center  ${
              focus && "border-tw-blue border"
            } px-3 rounded-full `}
          >
            <SearchIcon
              className={`  w-5  sm:w-7 ${focus && "text-tw-blue"}`}
            />
            <input
              type="text"
              autofocus
              id="username"
              class="rounded-full focus: outline-none  h-4 sm:h-6  px-4 bg-transparent w-full"
              placeholder="Search Twitter"
            />
          </div>
          <div className="px-2" onClick={() => setDarkTheme(!darkTheme)}>
            <img
              className=" w-5"
              src={darkTheme ? sunIcon : moonIcon}
              alt="icon"
            />
          </div>
        </div>
        <div className="py-2 px-3 border-t  dark:border-gray-700 w-full flex items-start ">
          <img
            className="inline-block  h-11 w-11 rounded-full "
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="flex flex-col px-3 w-full ">
            <div className="h-20">
              <input
                type="text"
                autofocus
                id="username"
                class=" px-2 rounded-full focus: outline-none  h-4 sm:h-6  bg-transparent w-full"
                placeholder="Whats happening?..."
              />
            </div>

            <div className="flex flex-1">
              <div className="flex space-x-1 flex-1">
                <div className="h-10 w-10 flex  rounded-full items-center  justify-center  hover:bg-gray-300   dark:hover:bg-dark-third">
                  <PhotographIcon className="w-6  text-tw-blue" />
                </div>
                <div className="h-10 w-10 flex  rounded-full items-center  justify-center   hover:bg-gray-300 dark:hover:bg-dark-third ">
                  <GiftIcon className="w-6  text-tw-blue " />
                </div>
                <div className="h-10 w-10 flex  rounded-full items-center  justify-center    hover:bg-gray-300  dark:hover:bg-dark-third ">
                  <EmojiHappyIcon className="w-6 text-tw-blue  " />
                </div>
                <div className="h-10 w-10 flex  rounded-full items-center  justify-center    hover:bg-gray-300  dark:hover:bg-dark-third">
                  <CalendarIcon className="w-6   text-tw-blue" />
                </div>
              </div>

              <button class=" bg-tw-blue focus:outline-none  text-white font-semibold py-2 px-4 rounded-full">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <Tweet
          name="Fawad Chaoudry"
          avatar="https://imagevars.gulfnews.com/2019/09/17/Fawad-Chaudhry-Hussain_16d3f581942_large.jpg"
        />
        <Tweet
          name="Imran Khan"
          avatar="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/11/08/936300-870383-imrankhan-reuters-083019.jpg"
          img="https://www.thenews.com.pk/assets/uploads/updates/2021-02-01/783394_3061501_332403_346113_updates_updates.jpg"
        />
        <Tweet
          name="Amir Mirza"
          img="https://img.etimg.com/thumb/width-1200,height-900,imgsize-650196,resizemode-1,msid-70395925/news/sports/muhammad-amir-quits-test-cricket-will-continue-limited-overs-career.jpg"
          avatar="https://media.gqindia.com/wp-content/uploads/2019/05/Mohammad-Amir.jpg"
        />
        <Tweet
          name="Waheed"
          img=""
          avatar="data:image/jpeg;base64,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"
        />
      </div>

      <div className="sm:col-span-4 col-span-12 hidden lg:block ">
        <div className="flex items-center  px-3 sm:py-3 py-2 w-5/6">
      
          <div
            onClick={() => setFocus(true)}
            ref={ref}
            className={`flex flex-1 ${
              focus ? "bg-white" : "bg-gray-100"
            } py-1  sm:py-2  dark:bg-dark-third   item-center  ${
              focus && " border-tw-blue border"
            } px-3 rounded-full `}
          >
            <SearchIcon
              className={`  w-5  sm:w-7 ${focus && "text-tw-blue"}`}
            />
            <input
              type="text"
              autofocus
              id="username"
              class="rounded-full focus: outline-none  h-4 sm:h-6  px-4 bg-transparent w-full"
              placeholder="Search Twitter"
            />
          </div>
          <div className="px-2" onClick={() => setDarkTheme(!darkTheme)}>
            <img
              className=" w-5"
              src={darkTheme ? sunIcon : moonIcon}
              alt="icon"
            />
          </div>
        </div>
        <div className="pl-3 pr-14 ">
          <div className="bg-gray-100 w-5/6  rounded-xl  dark:bg-dark-third">
            <div className="flex justify-between border-b dark:border-gray-700 py-2 px-3">
              <h1 className="text-lg font-bold">Trends for you</h1>
              <div className="h-7 w-7  flex  rounded-full items-center  justify-center    hover:bg-gray-300  dark:hover:bg-dark-third">
                <CogIcon className="w-5   text-tw-blue" />
              </div>
            </div>
           <SideCol/>
           <SideCol/>
           <SideCol/>
           <div className="flex justify-between  py-2 px-3">
              <h1 className="text-sm text-tw-blue font-bold">Show more</h1>
          
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
