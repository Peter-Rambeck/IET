import { Container } from "react-bootstrap";
import data from "../pages/homePage/data.json";

function HeroImage() {
  return (
    <>
      {data &&
        data.map((item, key) => {
          return (
            <>
              <div key={item.id}>
                <Container
                  fluid
                  //style={{ paddingLeft: "0", paddingRight: "0" }}
                  className="heroPix"
                >
                  {item.isVisible ? (
                    <>
                      <img
                        src={item.heroImage}
                        alt="Beach wedding"
                        //width="100%"
                        //height="auto"
                        //className="d-inline-block align-top"
                      />
                    </>
                  ) : null}
                </Container>
              </div>
            </>
          );
        })}
    </>
  );
}

export default HeroImage;
