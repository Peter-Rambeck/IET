import data from "../pages/data.json";

function TopBody({ id }) {
  return (
    <>
      {data &&
        data.map((item) => {
          if (id === item.id) {
            return (
              item.subHeadline &&
              item.subText && (
                <>
                  <h3 key={item.id} className={["spacing", "center"].join(" ")}>
                    {item.subHeadline}
                  </h3>
                  <p
                    key={item.id}
                    className={["", "top-body-padding"].join(" ")}
                    style={{
                      whiteSpace: "pre-wrap",
                      verticalAlign: "bottom",
                    }}
                  >
                    {item.subText}
                  </p>
                </>
              )
            );
          } else {
            return null;
          }
        })}
    </>
  );
}

export default TopBody;

/*{data &&
          data.map((item, key) => {
            return (
              <>
                <div key={item.id}>
                  {key}
                  <div>
                 
                    {item.isVisible ? (
                      <>
                        <h3 className={["spacing", "center"].join(" ")}>
                          {item.subHeadline}
                        </h3>
                      </>
                    ) : null}
                  </div>
                  <div>
                    {item.isVisible ? (
                      <>
                        {" "}
                        <p
                          style={{
                            whiteSpace: "pre-wrap",
                            verticalAlign: "bottom",
                          }}
                        >
                          {item.subText}
                        </p>
                      </>
                    ) : null}
                  </div>
                </div>
              </>
            );
          })}
          */
