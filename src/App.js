import logo from "./logo.svg";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { styled } from "@mui/material/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";

import { useEffect, useRef } from "react";

function App() {
  const iframeRef = useRef();

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      if (iframeRef.current) {
        let iW = window.innerWidth - 400;
        if (iW > 800) {
          iW = 800;
        }
        iframeRef.current.width = iW + 'px';
        iframeRef.current.height = (iW * (268/640)) + 'px'; 
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: "transparent", //theme.palette.background.paper,
    padding: theme.spacing(1),
    color: "white",
    border: "1px",
    borderRadius: "30px",
  }));

  const DivNms = styled("div")(({ theme }) => ({
    ...theme.typography.h6,
    color: "white",
    backgroundColor: "transparent",
    padding: theme.spacing(1),
    border: "0px",
    borderColor: "white",
    borderStyle: "dashed",
    borderRadius: "30px",
  }));

  const TitleSpan = styled("span")(({ theme }) => ({
    ...theme.typography.h6,
    color: "white",
    backgroundColor: "transparent",
    fontWeight: "bold",
    textAlign: "left",
    border: "1px solid white",
    padding: "8px",
  }));

  let segs = [
    ["Writer/Director/Editor", ["SHAUN VIVARIS"]],
    ["Producers", ["MARK JEROME CRUZ", "ALEX DELFIN", "GLEN VIVARIS"]],
    ["Director of Photography", ["GLEN VIVARIS"]],
    ["Costume Designer", ["KIMY MARTINEZ"]],
    ["Original Score", ["IAN CHEN"]],
    ["Hair/Makeup Dept. Head", ["MIKEL SESSIONS"]],
    [
      "Starring",
      [
        "ALEX DELFIN",
        "CAROLINA ESPINOSA",
        "JOSHUA FLORES",
        "ANDREW BURSIAGA",
        "VASILISA BADEKA",
      ],
    ],
  ];

  let paperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    verticalAlign: "middle",
    backgroundColor: "transparent",
    boxShadow: "unset",
  };

  let appStyle = {
    //backgroundImage: `url(${"thumbnail_Stockbee.png"})`,
    //backgroundPosition: "center",
    //backgroundRepeat: "no-repeat",
    //backgroundSize: "auto",
    backgroundColor: "black",
    height: "1400px",
  };

  let outerPaperStyle = {
    backgroundImage: `url(${"conquistador_bg.png"})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    backgroundColor: "black",
    height: "1400px",
  };

  return (
    <div className="App" style={appStyle}>
      <Paper style={outerPaperStyle}>
        <Paper
          style={{
            //float: "left",
            paddingTop: "60px",
            backgroundColor: "transparent",
          }}
        >
          <iframe
            ref={iframeRef}
            title="vimeo-player"
            src="https://player.vimeo.com/video/737650439?h=cd11c1ccd4"
            frameborder="0"
            marginWidth="0"
            marginHeight="0"
            allowfullscreen
          ></iframe>
        </Paper>
        <Paper
          style={{
            marginLeft: "-340px",
            paddingLeft: "0px",
            paddingTop: "30px",
            paddingBottom: "20px",
            backgroundColor: "transparent",
            boxShadow: "unset",
          }}
        >
          <TitleSpan>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="mailto:name@email.com"
            >
              Email Vivarium Film
            </a>
          </TitleSpan>
        </Paper>

        <Paper
          className="credit-scroll"
          style={{
            height: "70vh",
            overflowY: "scroll",
            overflowX: "hidden",
            backgroundColor: "transparent",
          }}
        >
          {segs.map(([role, nms]) => {
            return (
              <Paper style={paperStyle}>
                <Card
                  style={{
                    maxWidth: 600,
                    width: 600,
                    backgroundColor: "transparent",
                    opacity: 0.9,
                    paddingLeft: "10px",
                    boxShadow: "unset",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  <CardContent
                    style={{
                      width: 360,
                      opacity: 0.9,
                      backgroundColor: "transparent",
                    }}
                  >
                    <Div>{role}</Div>
                    {nms.map((nm) => {
                      return (
                        <a
                          href={"http://www.google.com"}
                          style={{ textDecoration: "none" }}
                        >
                          <DivNms>{nm}</DivNms>
                        </a>
                      );
                    })}
                  </CardContent>
                </Card>
              </Paper>
            );
          })}
        </Paper>
      </Paper>
    </div>
  );
}

export default App;
