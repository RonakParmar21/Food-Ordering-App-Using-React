import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is namaste javascript web series</h2>
            <User name={"Ronak Parmar (Function)"} />
            <UserClass name={"Ronak Parmar (class)"} />
        </div>
    )
}

export default About