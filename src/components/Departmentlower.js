import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Card from './Card';

const Departmentlower = (props) => {
  let navigate = useNavigate();
  const [url, setUrl] = useState(useLocation());
  const dept = url.pathname.split('/')[2];
  return (
    <div className='flex flex-col md:flex-row w-[98%] justify-around items-center px-2 md:px-4 place-items-center mx-auto'>
      {/* Club */}
      <Card title="Coding Club"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!" />
      {/* HOD */}

      <div className="relative w-full md:w-/2 py-4 px-7 mx-2 border bg-white shadow-lg rounded-lg mt-16 mb-6">
        <div className="absolute right-4 w-32 h-32 flex-grow-0 flex-shrink-0 flex justify-center md:justify-end -mt-20 mb-1 ml-auto mr-0">
          <img src={props?.img} className="w-full h-full object-cover object-left-top rounded-full shadow-xl flex-grow-0 flex-shrink-0" alt='' />
        </div>
        <span className='w-full inline-block h-[180px] overflow-hidden text-justify text-ellipsis mt-2'>
          <h2 className="text-blue-800 text-2xl font-semibold">{props?.name}</h2>
          <h2 className='font-medium'>(Head of Department)</h2>
          <p className="mt-2 text-gray-600 flex-wrap">{props?.message}</p>
        </span>
        <div className="flex justify-end mt-4" onClick={() => navigate(`/dept/${dept}/messageofHOD`)}>
          <span className="text-sm font-medium text-indigo-500 cursor-pointer">Read More &rarr;</span>
        </div>
      </div>
    </div>
  )
}

export default Departmentlower