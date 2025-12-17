import React from 'react'

const Pricing = ({pricingplan}) => {
  return (
    <div className="pt-6 bg-white text-center">
       <h2> Pricing Plans</h2>
       <p>Choose the Best plan for your needs</p>
       <div className="mt-5 grid grid-cols-3 text-center">
        {pricingplan.map((plans,index)=>
          (
            <div key={index} className="mt-3 pt-5 border pb-6 rounded-md border-gray-200">
              <h1 className="text-gray-900 text-lg font-medium p-5">{plans.title}</h1>
               <h5 className="text-gray-500 text-sm  rounded-md border inline p-2">{plans.cost}</h5>
               
            </div>
          ))}
          </div>
    </div>
  )
}

export default Pricing