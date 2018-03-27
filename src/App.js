import React, { Component } from 'react';
import './App.css';
import Example from './Example';
import logo2 from './csk-logo-transparent.png'
import { Grid, Image, Header } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div>
          <div className="heads">
              <Grid container columns={1}>
                  <Grid.Column>
                      <Image src={logo2} href='http://cskonopka.com' size='medium' centered/>
                  </Grid.Column>
              </Grid>
              <Grid container columns={1}>
                  <Grid.Column>
                      <Header size='huge'>VIDEO TITLE SEARCH</Header>
                  </Grid.Column>
              </Grid>
              <Grid container columns={1}>
                  <Grid.Column>
                      <Example/>
                  </Grid.Column>
              </Grid>
          </div>
      </div>
    );
  }
}

export default App;