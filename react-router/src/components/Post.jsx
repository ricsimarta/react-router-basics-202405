import { useParams } from "react-router-dom"

export default function Post() {
  const { postId } = useParams();

  console.log("fetch database.com/posts/", postId)

  return (
    <>
      post {postId}
    </>
  )
}