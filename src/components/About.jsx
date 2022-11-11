import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";

const JLMCAbout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
      {isLoading ? (
        <div>Carregando</div>
      ) : (
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Card
            style={{
              marginTop: "8%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "119%",
              backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/580px-Flag_of_the_United_States.svg.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Avatar
              src="https://c.tenor.com/R7Aasqd5aFQAAAAC/peacemaker-john-cena.gif"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              <h5>Pacificador</h5>
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              Anti-Herói
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://br.ign.com/pacificador/95828/feature/pacificador-origem-habilidades-serie-john-cena-dc-comics#:~:text=Origem%20do%20Pacificador,e%20Smith%20viu%20isso%20acontecer."
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar história do personagem
                </Button>
              </Tooltip>
            </CardContent>
          </Card>

          <Card
            style={{
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "119%",
              backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/580px-Flag_of_the_United_States.svg.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Avatar
              src="https://c.tenor.com/eNrJcMwpoU4AAAAC/vigilante-vigilante-dc.gif"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              <h5>Vigilante</h5>
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              Anti-Herói
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://www.adorocinema.com/noticias/series/noticia-161612/"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar história do personagem
                </Button>
              </Tooltip>
            </CardContent>
          </Card>

          <Card
            style={{
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "119%",
              backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/580px-Flag_of_the_United_States.svg.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Avatar
              src="https://ovicio.com.br/wp-content/uploads/2022/02/20220213-ovicio-pacificador-dragao-branco-hbo-max-555x555.jpg"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              <h5>Dragão Branco</h5>
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              Vilão
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://www.legiaodosherois.com.br/2022/pacificador-dragao-branco-tudo-sobre.html"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar história do personagem
                </Button>
              </Tooltip>
            </CardContent>
          </Card>

          <Card
            style={{
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "119%",
              backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/580px-Flag_of_the_United_States.svg.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Avatar
              src="https://c.tenor.com/zRS2ht2dTegAAAAC/judomaster-thumbs-up.gif"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              <h5>Mestre Judoca</h5>
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              Anti-Herói
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://feededigno.com.br/quadrinhos/mestre-judoca-conheca-o-novo-personagem-de-pacificador/"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar história do personagem
                </Button>
              </Tooltip>
            </CardContent>
          </Card>
        </Box>
      )}
    </Container>
  );
};
export default JLMCAbout;
