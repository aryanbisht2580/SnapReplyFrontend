import React from 'react';
import { Button, Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import x from "../assets/logo.png";

function StepsToAddExtension() {
  const steps = [
    "Download the extension zip file.",
    "Unzip the extension.",
    "Go to Chrome -> Manage Extensions -> Turn on Developer Mode.",
    "Click on 'Load unpacked' and select the unzipped folder.",
    "The extension will now be installed and ready to use."
  ];

  return (
    <Card sx={{  padding: 2, boxShadow: 3, borderRadius: 2,marginTop:"4rem",color:"rgb(94,16,38,1)",backgroundColor:"#f2f0dc",marginBottom:"4rem"}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Steps to Add Chrome Extension
        </Typography>
        <List>
          {steps.map((step, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${index + 1}. ${step}`} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default StepsToAddExtension;
