import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function AdminExperience() {
    const dispatch=useDispatch();
    const {portfolioData}= useSelector((state)=>state.root);
    const {experiences} = portfolioData; 
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {experiences.map((experience)=>(
            <div className="shadow border border-gray-400 p-5 font-semibold flex flex-col">
                <h1 className="text-primary text-xl font-extrabold">{experience.period}</h1>
                <h1>Company : {experience.company}</h1>
                <h1>Role : {experience.title}</h1>
                <h1>{experience.description}</h1>
                <div className="flex justify-end gap-5 mt-5">
                <button className="bg-red-500 text-white px-5 py-2 ">Delete</button>
                <button className="bg-primary text-white px-5 py-2 ">Edit</button>

                </div>

            </div>
        ))}
      </div>
    </div>
  )
}

export default AdminExperience
