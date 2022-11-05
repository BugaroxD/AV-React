import { Box, Grid, Typography } from "@mui/material";
import img from "../image/pacificadorjpeg.jpg";

const JLMCAbout = () => {
  return (
    <Box
      style={{
        minHeight: "calc(100vh - 60px)",
        backgroundPosition: "9% 20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid container style={{ backgroundColor: "black" }}>
        <Grid item sm={12} md={6}>
          <img src={img} alt="Pacificador" className="img-fluid" />
        </Grid>
        <Grid item sm={12} md={6}>
          <Box
            align="right"
            style={{
              color: "#FFF",
              padding: "2rem",
              lineHeight: "1.8rem",
              fontFamily: "Roboto",
            }}
          >
            <Typography variant="h1">Origem do Pacificador</Typography>
            <Typography variant="p">
              Nascido Christopher Schmidt, o Pacificador é filho único. Seu pai,
              um ex-comandante de um campo de concentração nazista, valorizava a
              força e o poder acima de tudo. Ele cometeu suicídio quando Smith
              tinha apenas cinco anos de idade, e Smith viu isso acontecer.
            </Typography>
            <Typography variant="p">
              O menino problemático iria para o exército depois de concluir o
              ensino médio, onde ficou cara a cara com as terríveis realidades
              da guerra.
            </Typography>
            <Typography variant="p">
              Acusado de massacrar pessoas inocentes, Smith foi preso e julgado
              pelos crimes de guerra.
            </Typography>
            <Typography variant="p">
              Enquanto cumpria sua sentença, ele concordou em participar de um
              programa secreto antiterrorismo do Pentágono chamado Projeto:
              Pacificador.
            </Typography>
            <Typography variant="p">
              Os agentes do programa treinaram em uma base militar de alta
              tecnologia, mas nunca foram mobilizados, e Smith acabou sendo
              libertado em sua prometida liberdade condicional.
            </Typography>
            <Typography variant="p">
              A ideia mais tarde inspirou Smith a se tornar um combatente do
              crime fantasiado como uma forma de penitência pelos crimes
              terríveis que ele e seu pai cometeram.
            </Typography>
            <Typography variant="p">
              Enquanto ele desencadeava sua forma de justiça, Smith
              frequentemente ouvia a voz de seu pai em sua cabeça. Isso
              continuou a atormentá-lo em sua furiosa cruzada pela paz.
            </Typography>
            <Typography variant="p">
              O vigilante sofria de delírios de que não apenas o espírito de seu
              pai o assombrava, mas também que as vozes daqueles que ele havia
              matado estavam presas dentro de seu capacete excêntrico.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default JLMCAbout;
