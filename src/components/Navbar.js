import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import logo from './Img/logo.png'
function Navbar({menu,setMenu}) {
    let navigate = useNavigate();
    const dept = useLocation().pathname.split('/')[2];
    var id = useLocation().pathname.split('/').at(-1);
    const { data, loading, error, reFetch } = useFetch(`/dept/${dept}/Faculty`);
    const [isLogin, setIsLogin] = useState(false);
    const departments = {
        "it": "Information Technology",
        "cse": "Computer Science and Engineering",
        "bt": "Bio Technology",
        "ce": "Civil Engineering",
        "ch": "Chemical Engineering",
        "ece": "Electronics and Communication Engineering",
        "ee": "Electrical and Electronics Engineering",
        "ice": "Instrumentation and Control Engineering",
        "me": "Mechanical Engineering",
        "ipe": "Industrial and Production Enginnering",
        "math": "Mathematics",
        "phy": "Physics",
        "tt": "Textile Technology",
        "hum": "Humaniyies",
        "cy": "Chemistry"
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(data)
        setIsLogin(data?.validation?.status?.login);
    }, [data])
    return (
        <div>
            <nav className="scroll-smooth z-50 w-full bg-white lg:flex lg:items-center lg:justify-between max-h-[5rem] lg:p-5 font-['Poppins'] shadow lg:shadow-md">
                <div className="flex justify-between p-1 items-center ">
                    <div className='flex items-center justify-center'>
                        <img className="w-[3.5rem] inline mx-2 cursor-pointer" src={logo} alt="logo" />
                        <div className="text-lg sm:text-xl ml-2 leading-5 text-[#0054A6]  cursor-pointer font-bold">
                            <a href="#"> {departments[dept]}</a>
                        </div>
                    </div>

                    <div className="cursor-pointer text-black mx-2 mr-3 lg:hidden block" onClick={()=>setMenu(!menu)}>
                        <i class="fa-xl fa-solid fa-bars text-blue-700"></i>
                    </div>
                </div>

                <ul className="lg:flex lg:items-center z-50 lg:z-auto lg:relative absolute bg-white w-full lg:h-[5rem] lg:top-0 lg:w-auto lg:py-0 py-4 pl-7 lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">

                    <li className="m-4 lg:mr-4 xl:m-4 my-6 lg:my-0">
                        <a href="" className="text-xs xl:text-base w-auto h-[1rem] text-[#0054A6] hover:text-[#D3D3D3] duration-500 ">
                            <i className="fa-xl fa-solid fa-house"></i>
                        </a>
                    </li>


                    {/* <li className="m-4 lg:mr-4 xl:m-4 my-6 lg:my-0">
                        <a href="givingback.html" className="text-xs xl:text-base w-auto h-[1rem] text-black hover:text-[#D3D3D3] duration-500 ">GIVING BACK</a>
                    </li>
                    <li className="m-4 lg:mr-4 xl:m-4 my-6 lg:my-0">
                        <a href="#" className="text-xs xl:text-base w-auto h-[1rem] text-black hover:text-[#D3D3D3] duration-500 ">
                            CHAPTERS</a>
                    </li> */}

                    {/* <li className="m-4 lg:mr-4 xl:m-4 my-6 lg:my-0">
                        <a href="" className="text-xs xl:text-base w-auto h-[1rem] text-black font-bold hover:text-[#D3D3D3] duration-500 ">LOGIN</a>
                    </li> */}

                    


                </ul>
            </nav>
        </div>
    )
}

export default Navbar
