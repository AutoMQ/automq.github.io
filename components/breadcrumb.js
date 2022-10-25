import { useEffect } from "react"

const Breadcrumb = (props) => {
    useEffect(() => {
        console.log(props);
    },[])
    return (
        <div>
            Test For Breadcrumb
        </div>
    )
}

export default Breadcrumb