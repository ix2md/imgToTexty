import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Nav() {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <Link href="/">
                        <h1 className=' sm:text-2xl hover:bg-gradient-to-r bg-clip-text text-white hover:text-transparent from-sky-500 to-indigo-500 font-bold'>imgToTexty</h1>
                    </Link>
                </div>
                <Link href="https://linktr.ee/muhannad_alattas" className=' group border p-3 pl-10 rounded-md flex items-center justify-between bg-inherit hover:bg-gray-400 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 hover:border hover:border-gray-100'>
                    <div>
                        <h1>By---------</h1>
                    </div>
                    <div className=' border group-hover:border-blue-600 rounded-full'>
                        <Avatar>
                            <AvatarImage src="https://ugc.production.linktr.ee/fa1b3766-47a4-47ad-9c82-2cee7e32b666_admin.jpeg?io=true&size=avatar-v3_0" />
                            <AvatarFallback>ix</AvatarFallback>
                        </Avatar>
                    </div>
                </Link>
            </div>
        </div>

    )
}
