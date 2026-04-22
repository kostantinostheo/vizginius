import React, { useState } from "react"

const members = [
    {
        name: "Smaragda Reppa",
        role: "Software Development",
        initials: "SR",
        img: "https://media.licdn.com/dms/image/D4D03AQEpKNPcChZmRw/profile-displayphoto-shrink_200_200/0/1665389845681?e=2147483647&v=beta&t=tb_ecuhYJ_tY_19TWhabg2vpnRD_34aQZLdK0DbeV-c",
        color: "from-violet-600 to-indigo-500",
    },
    {
        name: "Konstantinos Theofilis",
        role: "Software Development",
        initials: "KT",
        img: "https://media.licdn.com/dms/image/C4D03AQE_a6HV67g5tw/profile-displayphoto-shrink_400_400/0/1626858276297?e=1724889600&v=beta&t=ubr8yrcajhPB6osCigEWoyTpeSM4tFgVK1EmEWSMRMY",
        color: "from-blue-600 to-cyan-500",
    },
    {
        name: "George Ganias",
        role: "Software Development",
        initials: "GG",
        img: "https://media.licdn.com/dms/image/D4D03AQEQ7TZQQywJUw/profile-displayphoto-shrink_800_800/0/1713005351596?e=1724889600&v=beta&t=YSMxkaU1YSo1AYpmy5M1pQgm_SKKshlOGGLFzno5zIw",
        color: "from-emerald-600 to-teal-500",
    },
];

function MemberCard({ member }) {
    const [imgFailed, setImgFailed] = useState(false);
    return (
        <div className="w-64 bg-[#1f2937] rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-blue-500/40 hover:shadow-blue-900/30 hover:shadow-xl transition-all duration-300 flex flex-col">
            {!imgFailed ? (
                <img
                    alt={member.name}
                    src={member.img}
                    className="w-full h-56 object-cover object-top"
                    onError={() => setImgFailed(true)}
                />
            ) : (
                <div className={`w-full h-56 bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                    <span className="text-5xl font-bold text-white/90">{member.initials}</span>
                </div>
            )}
            <div className="p-5 text-center flex-1 flex flex-col justify-center">
                <h2 className="text-base font-bold text-white">{member.name}</h2>
                <p className="text-sm text-blue-400 mt-1">{member.role}</p>
            </div>
        </div>
    );
}

export default function Team() {
    return (
        <div className="bg-[#111827] min-h-screen py-14 px-4">
            <h1 className="text-[38px] font-bold text-white text-center mb-12 tracking-tight">
                Meet the Team
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
                {members.map((m) => <MemberCard key={m.name} member={m} />)}
            </div>
        </div>
    );
}
