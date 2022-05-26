import {Link, Outlet} from 'react-router-dom'

export const Layout = () => {
return (
    <>
    <header>
<Link to ='/'>Home</Link>
<Link to ='/blog' >Blog</Link>
    </header>
    <main>
    <Outlet />
    </main>
    <footer>
GB2022
    </footer>
    </>
)
}