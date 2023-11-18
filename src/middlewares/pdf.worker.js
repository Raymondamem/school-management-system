import { makeStyles, Box, Grid } from "@material-ui/core";
import React, { useState } from "react";
import Header from "./header";
import contractPdf from "../../sample.pdf";
import { Document, Page } from "react-pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "32px 24px 14px 24px",
  },
  pdfArea: {
    borderRight: "1px solid #DDDDDD",
    height: "calc(100vh - 195px)",
  },
}));


const BasicComponent = (props) => {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <Box className={classes.root}>
      <Header />
      <Grid container>
        <Grid item xs={8}>
          <Box className={classes.pdfArea}>
            <Document
              file={contractPdf}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
            >
              <Page pageNumber={1} />
            </Document>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box className={classes.inputArea}>User input</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasicComponent;