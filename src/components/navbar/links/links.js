import NavLink from "./navLink/navLink";
import styles from "./links.module.css"

const Links = () => {

    const links = [
        {
            title:"Homepage",
            path:"/",

        },
        {
            title:"About",
            path:"/about",

        },
    ];
    const session = true
    const isAdmin = true

    return (
    <div className={styles.links}>
        {links.map((link)=>(
        <NavLink item={link} key={link.title}/>

    ))} 
    {session ? (
            
                <>
                {isAdmin && (
                <NavLink item={{title:"Admin", path: "/admin"}}/>)}
                <button className={styles.logout}>Logout</button>
                </>
    
    ): (
            <NavLink item={{title: "Login", path: "/login"}}/>

        )
    }
    </div>
    )
  }
  
  export default Links