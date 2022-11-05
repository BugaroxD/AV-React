import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";

const JLMCPlaylist = () => {
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
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Wig_wam_Nostop.jpg/220px-Wig_wam_Nostop.jpg"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Wig Wam - Do Ya Wanna Taste It
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2010
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/track/5XW4BwCrfYpci5zMbJxs4N"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar música da série Pacificador
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
            }}
          >
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPF4priOI6anrJ0CyPR0d31AsZGasya8C5fIVl54JfVc1QMGrDGemzOPmtesZFXGF2aq0&usqp=CAU"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Jessie Reyez & Grandson - Rain
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2021
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/track/6gi7qsHSH2JWZsTRHndxqm"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar música da série Pacificador
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
            }}
          >
            <Avatar
              src="https://i.ytimg.com/an/wQvEItnEG-8/2572175645382881732_mq.jpg?v=62042dc4"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Reckless Love - Monster
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2016
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/album/67a6pDoMKQYOKGMnmUQZbq?si=p3PIQfC2R1qE4pQQQSiyRQ"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar música da série Pacificador
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
            }}
          >
            <Avatar
              src="http://images.genius.com/3cb38b1bf923d9470b4b40639896ec3f.500x500x1.jpg"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Faster Pussycat - House of Pain
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              1989
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/track/46Qy1xAr2K7rylRYwdQ6Gw"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar música da série Pacificador
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
            }}
          >
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/en/f/f0/Home_Sweet_Home_cover.jpg"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Mötley Crüe - Home Sweet Home
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              1985
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/track/4zXvB4MoQD8onk0NCZbeHG"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar música da série Pacificador
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
            }}
          >
            <Avatar
              src="https://i.scdn.co/image/ab67616d0000b273ef119ef9de278e187cc6ff12"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Dynazty - The Human Paradox
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              1985
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/track/5aTzDzHFJom3lMA8QFv6PE"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar música da série Pacificador
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
            }}
          >
            <Avatar
              src="https://i.scdn.co/image/ab67616d00001e021d565613412d4b30b278a2a0"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              The Hellacopters - By The Grace Of God
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2002
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/track/5KpYYRnknZ4rKOk6NYLEjZ"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar música da série Pacificador
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
            }}
          >
            <Avatar
              src="https://i.scdn.co/image/ab67616d0000b2737a1ca67982b45f4e3e8387d6"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Sister Sin - Fight Song
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2012
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/track/4YCssdAAHp8VPUzuBZj9i9"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar música da série Pacificador
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
            }}
          >
            <Avatar
              src="https://i.ytimg.com/vi/LjseUt1is-o/hqdefault.jpg"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Bang Camaro - Push Push(Lady Lightning)
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2007
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/track/02YuWD3sBOJa1cnGW1DqCE"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar música da série Pacificador
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
            }}
          >
            <Avatar
              src="https://i.scdn.co/image/ab67616d00001e02104b02ff6994fc74c6c2f1d7"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Santa Cruz - Drag Me Down
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2016
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/track/6UBbdux7eI0m77auUWh4UD"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar música da série Pacificador
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
            }}
          >
            <Avatar
              src="https://i.scdn.co/image/ab67616d0000b2736b8a4138a252b0045270a6bb"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              The Last Vegas - Apologize
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2009
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/track/5CiLtzR9gTnsRBkunsPSJB"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar música da série Pacificador
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
            }}
          >
            <Avatar
              src="https://i.scdn.co/image/ab67616d0000b273bd321e414711b95f33470a38"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              The Poodles - Night of Passion
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2007
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/track/1ianoyRbOK3RXrQIiT2aTk"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar música da série Pacificador
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
            }}
          >
            <Avatar
              src="https://akamai.sscdn.co/uploadfile/letras/albuns/1/6/5/0/1233401643218269.jpg"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Tigertailz - Love Bomb Baby
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2017
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/track/1PqfpW21YPno7nUzlVHyFv"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar música da série Pacificador
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
            }}
          >
            <Avatar
              src="https://m.media-amazon.com/images/I/51+sLO4HHRL._UXNaN_FMjpg_QL85_.jpg"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              The Cruel Intentions - Borderline Crazy
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2015
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/track/6oP5y5Vj1Ppq2an4mBeZXZ"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar música da série Pacificador
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
            }}
          >
            <Avatar
              src="https://i.scdn.co/image/ab67616d0000b2734d62f59176b286d08f01d076"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              The Cruel Intentions - Jawbreaker
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2018
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/track/61TD8ninNPJwRF96Vfzi0i"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar música da série Pacificador
                </Button>
              </Tooltip>
            </CardContent>
          </Card>
        </Box>
      )}
    </Container>
  );
};

export default JLMCPlaylist;
