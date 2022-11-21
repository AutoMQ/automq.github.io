export function Contributors({children}) {
    console.log(children)
    return (
        <div className='flex flex-row space-x-4 items-center'>
            <div className='flex flex-row'>
                {children}
            </div>
            <div className='cursor-pointer text-blue-400 duration-300 hover:bg-blue-400 hover:bg-opacity-10 px-6'>
                {children.length} Contributors
            </div>
        </div>
    )
}


export function Contributor({name, email}) {
    return (
        <div
            className='cursor-pointer ml-[-8px] rounded-[50%] w-[1.5rem] h-[1.5rem] bg-gray-400 text-center text-white leading-[1.5rem] border-white border'>
            {name[0]}
        </div>
    )
}