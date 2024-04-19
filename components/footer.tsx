import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FaFilePdf } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";
import Link from "next/link";
export default function Footer() {
    const time = new Date();
    const year = time.getFullYear();
    return (
        <footer className=" border-t-[0.5px] py-10 flex items-center justify-between gap-5">
            <h1 className="text-sm">
                &copy; {year} ix2md. All right reserved
            </h1>
            <div className="flex items-center gap-2">
                <Link href="https://github.com/ix2md" target="_blank">
                    <GitHubLogoIcon className="w-5 h-5 hover:scale-125 transition-all" />
                </Link>
                <Link
                    href="/"
                    target="_blank"
                >
                    <LinkedInLogoIcon className="w-5 h-5 hover:scale-125 transition-all" />
                </Link>
                <Link
                    href="https://www.youtube.com/channel/UCvJ_ntQTxK64rkzSD5hoiwQ"
                    target="_blank"
                >
                    <SiYoutube className="w-5 h-5 hover:scale-125 transition-all" />
                </Link>
                <Link
                    href="/"
                    target="_blank"
                >
                    <FaFilePdf className="w-5 h-5 hover:scale-125 transition-all" />
                </Link>
            </div>
            {/* <Link href="/" target="_blank">
                <h1 className=" text-sm">Term of Use
                    Privacy Policy</h1>
            </Link> */}
        </footer>
    );
}
