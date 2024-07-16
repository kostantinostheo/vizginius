import React from "react"
import './index.css'

export default function Team()
{
    return(
    <div className="bg-[#111827] h-screen">
        <h1 className='text-blue text-[40px] p-5 text-left font-bold text-white flex justify-center'>
            MEET THE TEAM
        </h1>
        <div className="flex justify-center items-center gap-x-5">
            
            <div className="w-[250px] h-[380px] bg-white rounded-xl flex items-start relative overflow-hidden dropsample">
                <div className="w-auto h-full">
                    <img
                    alt="logo" 
                    src="https://media.licdn.com/dms/image/D4D03AQEpKNPcChZmRw/profile-displayphoto-shrink_200_200/0/1665389845681?e=2147483647&v=beta&t=tb_ecuhYJ_tY_19TWhabg2vpnRD_34aQZLdK0DbeV-c" 
                    width="250"/>
                    <div className="p-3">
                        <h1 className="text-[24px] text-center font-bold text-black">Smaragda Reppa </h1>
                        <h2 className="text-[17px] text-center text-black">Software Development</h2>
                    </div>
                    
                </div>
            </div>
            <div className="w-[250px] h-[380px] bg-white rounded-xl flex items-start relative overflow-hidden dropsample">
                <div className="w-auto h-full">
                    <img 
                    alt="logo"
                    src="https://media.licdn.com/dms/image/C4D03AQE_a6HV67g5tw/profile-displayphoto-shrink_400_400/0/1626858276297?e=1724889600&v=beta&t=ubr8yrcajhPB6osCigEWoyTpeSM4tFgVK1EmEWSMRMY" 
                    width="250"/>
                    <div className="p-3">
                        <h1 className="text-[24px] text-center font-bold text-black">Konstantinos Theofilis</h1>
                        <h2 className="text-[17px] text-center text-black">Software Development</h2>
                    </div>
                    
                </div>
            </div>
            <div className="w-[250px] h-[380px] bg-white rounded-xl flex items-start relative overflow-hidden dropsample">
                <div className="w-auto h-full">
                    <img 
                    alt="logo"
                    src="https://media.licdn.com/dms/image/D4D03AQEQ7TZQQywJUw/profile-displayphoto-shrink_800_800/0/1713005351596?e=1724889600&v=beta&t=YSMxkaU1YSo1AYpmy5M1pQgm_SKKshlOGGLFzno5zIw" 
                    width="250"/>
                    <div className="p-3">
                        <h1 className="text-[24px] text-center font-bold text-black">George Ganias</h1>
                        <h2 className="text-[17px] text-center text-black">Software Development</h2>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>  
    )
}