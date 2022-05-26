import { Container, Grid, Box, Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import {
  ImFacebook2, ImYoutube,
} from 'react-icons/im';
import styles from './styles/footer.module.css';
import appstorelogo from '../../../assets/img/appstorelogo.png'
import playstorelogo from '../../../assets/img/playstorelogo.png'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ButtonComponent from '../../atoms/Button';
import HomeIcon from '@mui/icons-material/Home';
function Footer() {
  return (
    <>

      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Stack direction="row" alignItems="center" gap={1}>
                <EmailIcon />
                <Typography variant="body1">hello@discovery.com</Typography>

              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <PhoneIcon />
                <Typography variant="body1">022-43491100 +91-8433774761 (Mon-Fri, excluding Holidays 11am-4pm)</Typography>

              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>

                <HomeIcon />
                <Typography variant="body1">
     
                  Discovery India, 5th Floor, WeWork BKC, C20 G Block, Bandra Kurla Complex, Mumbai 400051
                </Typography>
              </Stack>

              <div>
                <ButtonComponent title='Online Advertising Order'></ButtonComponent>
                <ButtonComponent title="FAQ's"> </ButtonComponent>
                <ButtonComponent title='Support'></ButtonComponent>
              </div>
            </Grid>
            <Grid item xs={2}>
              <h4 >Follow us</h4>
              <ImYoutube className={styles.icons} />
              <ImFacebook2 className={styles.icons} />
            </Grid>
            <Grid item xs={2}>
              <h4 >discovery + App</h4>
              <div className={styles.store}>
                <a href="#" >
                  <img className={styles.imglogo} src={appstorelogo} />
                </a>
                <a href="#" >
                  <img className={styles.imglogo} src={playstorelogo} />
                </a>
              </div>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <Grid container>
            <Grid item xs={6}>
              <ButtonComponent title='Privacy Policy'></ButtonComponent>
              <ButtonComponent title='Terms of Use'></ButtonComponent>
              <ButtonComponent title="FAQ's"> </ButtonComponent>
              <ButtonComponent title='Privacy Policy'></ButtonComponent>
            </Grid>
            <Grid item xs={6}>
              Copyright © 2020 Discovery, Inc. or its subsidiaries and affiliates. All rights reserved.
            </Grid>
          </Grid>

        </Box>
      </Container>
    </>
  );
}

export default Footer;





