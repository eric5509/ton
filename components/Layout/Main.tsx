'use client'

import BottomNav from "@/components/Layout/BottomNav"
import Body from "@/components/Layout/Body"
import Top from "@/components/Layout/Top"
import { useAppSelector } from "@/redux/store/hook"
import { motion } from "framer-motion"
import { variant } from "@/lib/framer"

type Props = {
    children: React.ReactNode
}




export default function Main({ children }: Props) {


    const darkmode = useAppSelector(store => store.darkmode.value)

  
    return (
        <motion.div variants={variant} animate="animate" initial="initial" className={`h-screen overflow-y-auto relative duration-500 ${darkmode ? "bg-mainDark" : "bg-gray-100"}`}>
            <div className="transition-none z-30 relative h-screen flex flex-col overflow-y-auto">
                <Top />
                <Body children={children} />
                <BottomNav />
            </div>
        </motion.div>
    )
}
