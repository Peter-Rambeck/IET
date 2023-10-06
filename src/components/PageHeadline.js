import { Container } from "react-bootstrap";
//import data from "../assets/json/allData.json";

function PageHeadline({ data, id }) {
  return (
    <>
      <Container className={["spacing-headline"].join(" ")}>
        {data &&
          data.map((item) => {
            if (id === item.id) {
              return (
                item.pageHeadline &&
                item.pageTagline && (
                  <div className="center" key={item.id}>
                    <div
                      className="h1"
                      dangerouslySetInnerHTML={{ __html: item["pageHeadline"] }}
                    ></div>
                    {/*<h2>{item.pageHeadline}</h2>*/}
                    {/*<h3>{item.pageTagline}</h3>*/}
                    <div
                      className="h3"
                      dangerouslySetInnerHTML={{ __html: item["pageTagline"] }}
                    ></div>
                  </div>
                )
              );
            } else {
              return null;
            }
          })}
      </Container>
    </>
  );
}

export default PageHeadline;
