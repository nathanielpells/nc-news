import {UserContext} from "../Contexts/UserContext"
import {useContext} from "react"

export default function Header() {
  const {currentUser} = useContext(UserContext)
  return <><h1>NC-News</h1>
 <span id="user"> User: {currentUser}</span></>
}