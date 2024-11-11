import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ErrorPage () {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 10000)
  }, [navigate])

  return (
    <>
      not available page, dumbass
      <Link to="/">home</Link>
      this is not a valid link, redirecting to home page in 10 seconds
    </>
  )
}