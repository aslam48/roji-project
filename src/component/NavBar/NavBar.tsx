import React from 'react'

const NavBar: React.FC = () => {
    return (
        <div>
            <div className="sticky top-0 z-20 bg-white shadow-sm p-3 px-5">
                <div className="flex gap-1 items-center justify-center">
                    <div className="w-1.5 h-4 bg-secondaryColor rounded"></div>
                    <p className='font-semibold text-lg'>Welcome Back</p>
                </div>

                {/* <UserMenu /> */}
            </div>
        </div>

    )
}

export default NavBar