import { LoremIpsum } from "react-lorem-ipsum";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import "../App.css";

const JLMCAbout = () => {
  return (
    <>
      <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
        <Typography style={{ textAlign: "center" }} variant="h2">
          Sobre o Pacificador
        </Typography>
        <Typography style={{ textAlign: "justify" }} variant="p">
          <LoremIpsum p={4} />
        </Typography>
      </Container>
    </>
  );
};

export default JLMCAbout;
