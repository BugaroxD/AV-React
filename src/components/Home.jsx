import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import "../App.css";

const JLMCHome = () => {
  return (
    <>
      <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
        <Typography style={{ textAlign: "center" }} variant="p">
          <img
            src="https://thumbs.gfycat.com/EmptyVeneratedFritillarybutterfly-size_restricted.gif"
            alt="gif"
            style={{ width: "100%" }}
          />
        </Typography>
        <Typography
          style={{ textAlign: "center", color: "white" }}
          variant="h2"
        >
          Bem-vindo ao Peaceworld!
        </Typography>
      </Container>
    </>
  );
};

export default JLMCHome;
