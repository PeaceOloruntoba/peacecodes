import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaAngular, FaVuejs, FaPython, FaPhp, FaLaravel, FaAndroid, FaGithub } from 'react-icons/fa';
import {BiLogoGoLang, BiLogoDjango, BiLogoJavascript, BiLogoTypescript, BiLogoFlutter, BiLogoVisualStudio} from "react-icons/bi"
import {TbBrandVscode} from "react-icons/tb"
import {BsGit} from "react-icons/bs"

export default function Lang(){
  return (
      <div className="grid text-slate-800 dark:text-zinc-300 gap-8 mt-10 text-xl items-center justify-center px-0 md:px-72 lg:px-72">
       <div className="flex gap-8 items-center justify-center flex-wrap">
        {/* Web Development Skills */}
        <div className="text-center">
          <FaHtml5 className="text-6xl mx-auto mb-2 text-red-500" /><p>HTML5</p>
        </div>
        <div className="text-center">
          <FaCss3 className="text-6xl mx-auto mb-2 text-blue-500" /><p>CSS3</p>
        </div>
        <div className="text-center">
          <FaReact className="text-6xl mx-auto mb-2 text-sky-400" /><p>React</p>
        </div>
        <div className="text-center">
          <FaAngular className="text-6xl mx-auto mb-2 text-red-700" /><p>Angular</p>
        </div>
        <div className="text-center">
          <FaVuejs className="text-6xl mx-auto mb-2 text-green-800" /><p>VueJS</p>
        </div>
        <div className="text-center">
          <BiLogoJavascript className="text-6xl mx-auto mb-2 text-yellow-500" /><p>JavaScript</p>
        </div>
        </div> 

        <div className='flex gap-8 items-center justify-center flex-wrap'>
        {/* Backend Development Skills */}
        <div className="text-center">
          <FaPhp className="text-6xl mx-auto mb-2 text-purple-700" />
          <p>PHP</p>
        </div>
        <div className="text-center">
          <FaPython className="text-6xl mx-auto mb-2 text-green-900" />
          <p>Python</p>
        </div>
        <div className="text-center">
          <FaLaravel className="text-6xl mx-auto mb-2 text-red-600" />
          <p>Laravel</p>
        </div>
        <div className="text-center">
          <BiLogoDjango className="text-6xl mx-auto mb-2 text-green-900" />
          <p>Django</p>
        </div>
        <div className="text-center">
          <BiLogoGoLang className="text-6xl mx-auto mb-2 text-blue-600" />
          <p>Golang</p>
        </div>
        <div className="text-center">
          <BiLogoTypescript className="text-6xl mx-auto mb-2 text-blue-700" /><p>Typescript</p>
        </div>
        </div>
        
        <div className='flex gap-8 items-center justify-center flex-wrap'>
        {/* Mobile App Development Skills */}
        <div className="text-center">
          <FaAndroid className="text-6xl mx-auto mb-2 text-green-500" />
          <p>Android</p>
        </div>
        <div className="text-center">
          <BiLogoFlutter className="text-6xl mx-auto mb-2 text-sky-400" />
          <p>Flutter</p>
        </div>
        </div>

        <div className='flex gap-8 items-center justify-center flex-wrap'>
        {/* Tools and Platforms */}
        <div className="text-center">
          <BsGit className="text-6xl mx-auto mb-2 text-red-500" />
          <p>Git</p>
        </div>
        <div className="text-center">
          <FaGithub className="text-6xl mx-auto mb-2 text-grey-950" />
          <p>Github</p>
        </div>
        <div className="text-center">
          <TbBrandVscode className="text-6xl mx-auto mb-2 text-sky-600" />
          <p>VSCode</p>
        </div>
        <div className="text-center">
          <BiLogoVisualStudio className="text-6xl mx-auto mb-2 text-sky-600" />
          <p>VSCode</p>
        </div>
        </div>
    </div>
  );
};
