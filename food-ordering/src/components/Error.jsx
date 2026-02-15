import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    console.log(err);
    
    return (
        <div>
            <h1>Opps!!</h1>
            <h2>Something went wrong.</h2>
            <h3>State code : {err.status}</h3>
            <h3>State text : {err.statusText}</h3>
            <h3>State data : {err.data}</h3>
        </div>
    )
}

export default Error