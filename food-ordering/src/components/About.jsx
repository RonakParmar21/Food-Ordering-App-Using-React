import User from "./User"
import UserClass from "./UserClass"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const About = () => {
    const onlineStatus = useOnlineStatus();
    const loggedinuser = useContext(UserContext);
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is namaste javascript web series</h2>
            <User name={"Ronak Parmar (Function)"} />
            <UserClass name={"Ronak Parmar (class)"} />
            <h3>Online Status is : {onlineStatus ? "online" : "offline."}</h3>
            <h3>{loggedinuser}</h3>
        </div>
    )
}

export default About