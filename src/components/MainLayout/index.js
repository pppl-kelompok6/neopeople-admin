import Navbar from "../navbar"

export default function Layout(props) {
    const { children } = props
    return (
        <div>
            <body className="static h-screen">
                <Navbar/>
                <div>{children}</div>
            </body>
        </div>
    )
}


