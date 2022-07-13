export default function Home() {
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title="Error 404"
        meta={[
          { name: "description", content: "Daniel Conteh" },
          {
            name: "keywords",
            content:
              "danico, daniel conteh, sierra leone, programmer, developer, coder, coding",
          },
          { name: "author", content: "Daniel Conteh" },
        ]}
      ></Helmet>
      <div className="grid_container">
        <div>ERROR!!</div>
      </div>
    </>
  )
}
