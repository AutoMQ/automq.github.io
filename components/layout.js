import GlobalFooter from "./footer"
import GlobalHeader from "./header"

const Layout = ({ children }) => {
    return (
        <div className="page-wrapper absolute w-full h-screen overflow-hidden overflow-y-auto">

            <GlobalHeader />
            <div id="content-container" className="w-full pt-8 h-auto overflow-y-auto overflow-x-hidden">
                {children}
                <GlobalFooter />
            </div>
        </div>
    )
}

export default Layout