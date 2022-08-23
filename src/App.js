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

function App() {
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: "white", //theme.palette.background.paper,
    padding: theme.spacing(1),
    color: "#800020",
    border: "1px",
    borderRadius: "30px",
  }));

  const DivNms = styled("div")(({ theme }) => ({
    ...theme.typography.h6,
    color: "darkslategray",
    backgroundColor: "aliceblue",
    padding: theme.spacing(1),
    border: "4px",
    borderColor: "aquamarine",
    borderStyle: "dashed",
    borderRadius: "30px",
  }));

  const TitleSpan = styled("span")(({ theme }) => ({
    ...theme.typography.h2,
    color: "darkslategray",
    backgroundColor: "transparent",
    fontWeight: "bold",
    padding: theme.spacing(1),
  }));

  let segs = [
    ["Writer/Director/Editor", "SHAUN VIVARIS"],
    ["Producers", "MARK JEROME CRUZ, ALEX DELFIN, GLEN VIVARIS"],
    ["Director of Photography", "GLEN VIVARIS"],
    ["Costume Designer", "KIMY MARTINEZ"],
    ["Original Score", "IAN CHEN"],
    ["Hair/Makeup Dept. Head", "MIKEL SESSIONS"],
    [
      "Starring",
      "ALEX DELFIN, CAROLINA ESPINOSA, JOSHUA FLORES, ANDREW BURSIAGA, VASILISA BADEKA",
    ],
  ];

  let paperStyle = {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "middle",
    backgroundColor: "transparent",
    boxShadow: "unset",
  };

  let appStyle = {
    //backgroundImage: `url(${"thumbnail_Stockbee.png"})`,
    //backgroundPosition: "center",
    //backgroundRepeat: "no-repeat",
    //backgroundSize: "auto",
    backgroundColor: "#B6D0E2",
    height: "1400px",
  };

  let outerPaperStyle = {
    backgroundImage: `url(${"thumbnail_Stockbee.png"})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    backgroundColor: "#B6D0E2",
    height: "1400px",
  };

  return (
    <div className="App" style={appStyle}>
      <Paper style={outerPaperStyle}>
        <Paper
          style={{
            float: "left",
            paddingTop: "60px",
            backgroundColor: "transparent",
          }}
        >
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/737650439?h=cd11c1ccd4"
            width="640"
            height="268"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </Paper>
        <Paper
          style={{
            float: "center",
            paddingLeft: "80px",
            backgroundColor: "transparent",
            boxShadow: "unset",
          }}
        >
          &nbsp; {/* <TitleSpan>Vivarium Film</TitleSpan> */}
        </Paper>

        {segs.map(([role, nms]) => {
          return (
            <Paper style={paperStyle}>
              <Card
                style={{
                  maxWidth: 400,
                  width: 400,
                  backgroundColor: "transparent",
                  opacity: 0.9,
                  paddingLeft: "40px",
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
                  <DivNms>{nms}</DivNms>
                </CardContent>
              </Card>
            </Paper>
          );
        })}
      </Paper>
    </div>
  );
}

export default App;
