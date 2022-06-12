import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageDescription from "./styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Card, Container, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { ContactCreateRequest, createContact } from "../../services/Contacts";

const Creation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const create = async (request: ContactCreateRequest) => {
    await createContact(request);
    navigate('/listagem');
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
    },
    onSubmit: async (values) => {
      create(values);
    },
  });

  return (
    <PageDescription>

      <Container>
        <Card>
          <Grid container alignItems="center">

            <Grid item sx={{ pt: "2rem", pl: "1.5rem" }} xs={12}>
              <Button style={{ color: "black" }} onClick={() => navigate('/listagem')} >
                <ArrowBackIcon fontSize="medium" />
                <Typography variant="h3" sx={{ pl: "0.5rem" }}>Voltar</Typography>
              </Button>
            </Grid>

            <Grid container
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              sx={{ p: "2rem" }}
            >
              <Grid item textAlign="center" xs={12}>
                <Typography variant="h1">Criação de contato</Typography>
              </Grid>

              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} sx={{ paddingTop: '50px' }} >
                  <Grid item xs={6}>
                    <TextField
                      id="name"
                      label="Nome"
                      variant="standard"
                      name='name'
                      sx={{ display: 'flex', flex: '1' }}
                      value={formik.values.name}
                      onChange={formik.handleChange} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="phone-number"
                      label="Telefone"
                      variant="standard"
                      name='phoneNumber'
                      sx={{ display: 'flex', flex: '1' }}
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange} />
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ paddingTop: '50px' }} >
                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" sx={{ padding: '10px 80px' }} type='submit'>Salvar</Button>
                  </Grid>
                </Grid>
              </form>

            </Grid>
          </Grid>
        </Card>
      </Container>
    </PageDescription>
  );
};

export default Creation;
