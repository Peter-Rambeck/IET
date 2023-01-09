import { Container } from "react-bootstrap";

function PageHeadline2({ props }) {
  const data = props.data;
  const id = props.id;

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
                    <h1>{item.pageHeadline}</h1>
                    <h3>{item.pageTagline}</h3>
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

export default PageHeadline2;
