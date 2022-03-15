import React from 'react'
import AllOutIcon from '@mui/icons-material/AllOut';
import DoneIcon from '@mui/icons-material/Done';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import LockIcon from '@mui/icons-material/Lock';

const Style = "text-white text-xs"

const arrayIcon = [<AllOutIcon fontSize="small" className={Style} />,
<DoneIcon fontSize="small" className={Style} />,
<EnergySavingsLeafIcon fontSize="small" className={Style} />,
<LockIcon fontSize="small" className={Style} />];
const Color = ["from-indigo-500 to-blue-500", "from-blue-400 to-blue-300", "from-green-500 to-green-400", "from-yellow-600 to-yellow-500"];

export const Card = (props) => {
    let balance = props.balance;
    balance = balance * 9.5;


    return (
        <div className={`traavsform hover:scale-110 cursor-pointer transition delay-100 w-3/12 p-2 py-4 shadow-xl border rounded-xl bg-gradient-to-r ${Color[props.icon]}`}>
            <div className='flex justify-between'>
                <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-xl m-1 bg-opacity-30">
                    {arrayIcon[props.icon]}
                </div>
            </div>
            <p className="text-gray-200 text-xs">
                {props.title}
            </p>
            <p className="text-gray-50 text-3xl font-semibold">
                {props.balance} EGLD
            </p>
            <p className="text-gray-300 text-sm ">
                ${balance}
            </p>


        </div>
    )
}
