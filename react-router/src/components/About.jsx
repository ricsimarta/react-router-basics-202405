import Layout from "./Layout";

export default function About({ array }) {
  return (
    <Layout>
      about page
      {array.map((elem, index) => <p key={index}>{elem}</p>)}
    </Layout>
  )
}