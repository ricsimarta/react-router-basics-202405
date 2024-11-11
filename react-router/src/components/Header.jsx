import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      {/* <a href="" /> */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </header>
  )
}