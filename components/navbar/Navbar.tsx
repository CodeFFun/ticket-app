interface navLink{
    link:string,
    name:string
}

export default function Navabar() {
    const navLink:Array<navLink> = [
        {   
            link: '/',
            name: 'Home'
        },
        {   
            link: '/concert',
            name: 'Concert'
        },
        {   
            link: '/movie',
            name: 'Movies'
        },
        {   
            link: '/theater',
            name: 'Theater'
        },
    ]   
  return (
    <>
      <div className='navbar py-5 px-20 text-white'>
        <div className='navbar-start'>
          <a className='btn btn-ghost text-xl' href="/">BookTicket</a>
          <ul className='menu menu-horizontal px-1'>
            {navLink.map((item, i) =>(
                <li key={i}>
                    <a className="p-5" href={item.link}>{item.name}</a>
                </li>
            ))}
          </ul>
        </div>
        <div className='navbar-end'>
          <button disabled className='btn mx-3 disabled:text-white'>Login</button>
          <button disabled  className='btn disabled:bg-rose-500 disabled:text-white'>Register</button>
        </div>
      </div>
    </>
  )
}
