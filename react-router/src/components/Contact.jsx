import Layout from "./Layout";

export default function Contact({ array }) {
  return (
    <Layout>
      contact page
      {array.map((elem, index) => <p key={index}>{elem}</p>)}
    </Layout>
  )
}