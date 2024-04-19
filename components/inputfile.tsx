"use client";
import Image from 'next/image';
import React, { Suspense, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from './ui/button';
import { Textarea } from "@/components/ui/textarea"
import { url } from 'inspector';
import convertor from './covertor';



export default function Inputfile() {
    const imginput = useRef<HTMLInputElement>(null);
    const [url, setImageUrl] = useState<string | null>(null);
    const [texts, setTexts] = useState<Array<string>>([]);

    const openFile = () => {
        imginput.current?.click();
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        let url: string = URL.createObjectURL(e.target.files?.[0]!);
        setImageUrl(url)
        convert(url);
    };

    const convert = async (url: string) => {
        if (url.length) {
            await convertor(url).then((txt: string) => {
                let copyTexts: Array<string> = texts;
                copyTexts.push(txt);
                setTexts(copyTexts);
            });
        }
    };


    const copy = (txt: string) => {
        navigator.clipboard.writeText(txt)
        toast.success('Copied!');
    };

    const loadingJsx = (
        <div>
            <div className="relative flex w-64 animate-pulse gap-2 p-4">
                <div className="h-12 w-12 rounded-full bg-slate-400"></div>
                <div className="flex-1">
                    <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                    <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
                </div>
                <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
            </div>
            <div className=' flex items-center justify-center'>
                <br />
                <hr />
                <div className="animate-pulse flex flex-col items-center gap-4 w-full">
                    <div>
                        <div className="w-48 h-6 bg-slate-400 rounded-md"></div>
                        <div className="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md"></div>
                    </div>
                    <div className="h-7 bg-slate-400 w-full rounded-md"></div>
                    <div className="h-7 bg-slate-400 w-full rounded-md"></div>
                    <div className="h-7 bg-slate-400 w-full rounded-md"></div>
                    <div className="h-7 bg-slate-400 w-1/2 rounded-md"></div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {url &&

                <div className=' group border p-5 pb-10 rounded-md mb-20 flex justify-center h-72 bg-inherit hover:bg-gray-400 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 hover:border hover:border-gray-100'>
                    <Suspense fallback={loadingJsx}>
                        <Image width={500} height={300} className=' group-hover:border-blue-600 border-2 rounded-md border-gray-500' src={url} alt="Selected Image" />
                    </Suspense>
                </div>

            }

            <div className="w-full h-44 flex items-center justify-center">
                <input
                    type="file"
                    ref={imginput}
                    hidden
                    required
                    onChange={handleFileChange}
                />
                <div onDragOver={(e: any) => {
                    e.preventDefault();
                }}
                    onDrop={(e: any) => {
                        e.preventDefault();
                        let url: string = URL.createObjectURL(e.dataTransfer.files?.[0]!);
                        convert(url);
                    }}
                    onClick={openFile} className="border-dashed cursor-pointer border-white border h-full w-full flex items-center justify-center rounded-md">
                    {url ? (
                        <h1>Change</h1>
                    ) : (
                        <h1>Upload</h1>
                    )}

                </div>
            </div>
            <div>
                {url &&
                    <div className='mb-20 mt-10 flex items-center justify-center w-full'>
                        <Drawer>
                            <DrawerTrigger className=' w-full'><Button className=' w-full'>Generate</Button></DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle>Done Generate!</DrawerTitle>
                                    <Textarea value={texts} readOnly />
                                </DrawerHeader>
                                <DrawerFooter>
                                    <Button onClick={() => copy(texts.join('\n'))}>Copy</Button>
                                    <DrawerClose>
                                        <Button className=' w-full' variant="outline">Cancel</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>

                    </div>}
            </div>
        </div>
    );
}


