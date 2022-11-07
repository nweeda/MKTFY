import React from "react";

import {Grid} from "@mui/material";
import {ThemeProvider, styled} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";

const StyledApp = styled("div")(() => ({
  ['& .grid']: {marginBottom: "-10px"}
}))

function Item (props){
  return (
    <div>{props.children}</div>
  )
}

function Page(){
  return (
    <ThemeProvider>
      <Grid container spacing={2}>
      <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
          <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Page;