interface navLink{
    link:string,
    name:string
}

export default function Navabar() {
    const navLink:Array<navLink> = [
        {   
            link: '',
            name: 'Home'
        },
        {   
            link: '',
            name: 'Concert'
        },
        {   
            link: '',
            name: 'Movies'
        },
        {   
            link: '',
            name: 'Theater'
        },
    ]   
  return (
    <>
      <div className='navbar py-5 px-20 bg-[background: linear-gradient(0deg, #1C1C24, #1C1C24),
linear-gradient(0deg, #252D3C, #252D3C);
] text-white'>
        <div className='navbar-start'>
          <a className='btn btn-ghost text-xl'>daisyUI</a>
          <ul className='menu menu-horizontal px-1'>
            {navLink.map((item) =>(
                <li>
                    <a className="p-5">{item.name}</a>
                </li>
            ))}
          </ul>
        </div>
        <div className='navbar-end'>
          <button disabled className='btn mx-3 disabled:text-white'>Login</button>
          <button disabled  className='btn disabled:bg-pink-500 disabled:text-white'>Register</button>
        </div>
      </div>
    </>
  )
}
