import { Container } from "react-bootstrap";
import data from "../pages/data.json";

function Headline({ id }) {
  return (
    <>
      <Container className={["spacing-headline"].join(" ")}>
        {data &&
          data.map((item) => {
            if (id === item.id) {
              return (
                item.headline &&
                item.tagline && (
                  <div className="center">
                    <h1 key={item.id}>{item.headline}</h1>
                    <h3 key={item.id}>{item.tagline}</h3>
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

export default Headline;

/*
{data &&
          data.map((item, key) => {
            return (
              <>
                test 1
                <div key={item.id}>
                  <div className="center">
                    {item.isVisible ? (
                      <>
                        <h1>{item.headline}</h1>
                        <h3>{item.tagline}</h3>
                      </>
                    ) : null}
                  </div>
                </div>
              </>
            );
          })}
    */

/*

export default function Headline() {
  return (
    <>
      <h3 className="d-flex justify-content-center align-items-center">
        Indochina Explorers Traveller
      </h3>

      <div className="d-flex justify-content-center align-items-center">
        <p1> Explore the charm and wonders of South East Asia</p1>
      </div>
    </>
  );
}
*/
