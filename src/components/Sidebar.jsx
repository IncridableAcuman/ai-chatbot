import { Info, LayoutDashboard, Settings, UserRound } from 'lucide-react';

const Sidebar = () => {

    const menu = [
        {name: 'Dashboard',icon: <LayoutDashboard/>},
        {name: 'Users',icon:<UserRound/>},
        {name: 'About',icon: <Info/>},
        {name: 'Settings',icon:<Settings/>},
    ]

  return (
    <div className={`h-full`}>
        <div className="flex flex-col items-center justify-center py-4 space-y-3 border-b border-dashed border-gray-700">
            <img src="./coding.jpg" alt="profile" className='w-16 h-16 rounded-full object-cover border-2 border-white' />
            <h1 className='text-lg font-semibold'>Izzatbek Abdusharipov</h1>
        </div>
        <div className="space-y-6 px-3 py-3">
            {menu.map((item,index) => (
                <ul key={index}>
                    <li className='flex items-center gap-4 hover:bg-linear-to-r from-gray-800 to-gray-700 transition duration-300 
                    hover:text-blue-500 w-full p-3 rounded-md'>
                        {item.icon}
                        {item.name}
                    </li>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default Sidebar