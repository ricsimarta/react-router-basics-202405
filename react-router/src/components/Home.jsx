import Layout from "./Layout";

export default function Home({ setData, array }) {
  return (
    <Layout>
      <button onClick={() => setData("kismacska")}>change data</button>
      {array.map((elem, index) => <p key={index}>{elem}</p>)}
    </Layout>
  )
}