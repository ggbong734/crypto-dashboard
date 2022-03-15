import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CropLandscapeIcon from '@mui/icons-material/CropLandscape';
import AppsIcon from '@mui/icons-material/Apps';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


export const Header = () => {
    return (
        <div className='flex shadow-sm bg-gray-50 p-4 justify-between'>
            <div className="flex space-x-3">
                <p className="text-gray-400">Address</p>
                <p>0xc112DD2hedsadadsaddf243423r234fdfdwfwf</p>
                <CropLandscapeIcon className="text-gray-300" />
                <DashboardIcon className="text-gray-300" />
            </div>
            <div className='flex space-x-4 text-gray-400 mr-3'>
                <ExitToAppIcon />
                <AppsIcon />
                <p className="text-gray-700 font-semibold">Close</p>
            </div>
        </div>
    )
}
