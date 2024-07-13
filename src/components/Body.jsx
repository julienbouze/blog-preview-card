import Image from "next/image";
import Illustration from '/public/images/illustration-article.svg'
import Avatar from '/public/images/image-avatar.webp'
export default function Body() {
    return (
        <div className="flex flex-col justify-center items-start bg-white text-black rounded-box border border-black shadow-[8px_8px_0px_0px_rgb(0,0,0)] md:shadow-[16px_16px_0px_0px_rgb(0,0,0)] gap-4 max-w-80 md:max-w-96 p-6">
            <Image className="rounded-image" src={Illustration} alt='' />
            <div className="bg-lemon w-fit rounded px-2 py-1 font-bold">Learning</div>
            <div className="flex flex-col gap-3">
                <p className=" text-xs md:text-sm">Published 21 Dec 2023</p>
                <h1 className=" text-xl md:text-2xl font-bold cursor-pointer hover:text-lemon">HTML & CSS foundations</h1>
                <p className="text-grey  text-sm md:text-base">These languages are the backbone of every website, defining structure, content, and presentation.</p>
            </div>
            <div className="flex items-center gap-2">
                <Image className="w-8" src={Avatar} alt='' />
                <p className="font-bold text-xs md:text-sm">Greg Hooper</p>
            </div>
        </div >
    );
}  