import React, { useEffect, useState } from "react";
import PageHome from "./styles";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { ContactFilterResponse, filterContacts } from "../../services/Contacts";

interface Column {
  id: 'url' | 'name' | 'details';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'url', label: 'Nome', minWidth: 10 },
  { id: 'name', label: 'Telefone', minWidth: 10 },
  { id: 'details', label: 'Ações', minWidth: 10 },
];

const Listing: React.FC = () => {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState<ContactFilterResponse[]>();

  useEffect(() => {

    const find = async () => {
      const contacts = await filterContacts();
      setContacts(contacts);
    };

    find();
  }, []);

  return (
    <PageHome>
      <Container>

        <Grid container spacing={2} sx={{ paddingBottom: '20px' }} >
          <Grid item xs={12} sx={{ paddingTop: '50px', display: 'flex', justifyContent: 'right' }}>
            <Button
              variant="contained"
              sx={{ padding: '10px 80px' }}
              onClick={() => {
                navigate('/criacao')
              }}>Criar contato</Button>
          </Grid>
        </Grid>
        <Card>
          <Grid container
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            sx={{ p: "2rem" }}
          >
            <Grid item textAlign="center" xs={12}>
              <Typography variant="h1">Contatos</Typography>
            </Grid>

            <Grid item xs={12} sx={{ pt: "2rem" }}>
              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ minHeight: 440, maxHeight: 600 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {contacts?.map((contact) =>
                        <TableRow hover role="checkbox" tabIndex={-1} key={contact.id}>
                          <TableCell>{contact.name}</TableCell>
                          <TableCell>{contact.phoneNumber}</TableCell>
                          <TableCell>
                            <Button onClick={() => {
                              navigate('/edicao', {
                                state: {
                                  id: contact.id
                                },
                              })
                            }}>
                              Editar
                            </Button>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </PageHome >
  );
};

export default Listing;
