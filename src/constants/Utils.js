import { IoLogoFirebase,IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { DiMysql} from "react-icons/di";
import { FaHtml5,FaNodeJs ,FaReact,FaPython,FaPhp,FaJava,FaCss3} from "react-icons/fa";
import { BiLogoFlask } from "react-icons/bi";


const SkillArray = [
    {
        icon :<FaHtml5/>,
        title : "HTML",
        category : "Frontend"
    },
    {
        icon : <FaCss3/>,
        title : "CSS",
        category : "Frontend"
    },
    {
        icon : <IoLogoJavascript/>,
        title : "Javascript",
        category : "Frontend"
    },
    {
        icon : <FaReact/>,
        title : "React",
        category : "Frontend"
    },
    {
        icon : <FaPython/>,
        title : "Python",
        category : "Programming"
    },
    {
        icon : <FaJava/>,
        title : "Java",
        category : "Programming"
    },
    {
        icon : <FaNodeJs/>,
        title : "Node JS",
        category : "Backend"

    },
    {
        icon : <FaPhp/>,
        title : "Php",
        category : "Backend"

    }
    ,
    {
        icon : <BiLogoFlask/>,
        title : "Flask",
        category : "Backend"

    },
    {
        icon : <DiMysql/>,
        title : "My Sql",
        category : "Database"

    },
    {
        icon : <SiMongodb />        ,
        title : "MongoDB",
        category : "Database"

    },
    {
        icon : <IoLogoFirebase />,
        title : "Firebase",
        category : "Database"
    },
  
]



export {SkillArray};