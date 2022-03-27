import * as React from 'react';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Transactions = () => {
  return (
    <Card sx={{ minWidth: 400 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.primary">
          Transactions
        </Typography>
        <Typography variant="h5">
          Most Recent
        </Typography>
        <Divider />
      </CardContent>
      <CardActions>
        <Button size="small">View More</Button>
      </CardActions>
    </Card>
  );
};

export default Transactions;