import {UserContext} from "../Contexts/UserContext"
import {useContext} from "react"

export default function Header() {
  const {currentUser} = useContext(UserContext)
  return <><span><h1>NC-News</h1>
  User: {currentUser}</span></>
}