import { Container} from "@mui/system";
import {Grid} from '@mui/material';
import { Typography } from '@mui/material';
import { Rating } from '@mui/material';
function Product()
{
    return(
        <div>
    <Container sx={{marginY :15}}>
        <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={3}>
                <img className="img"src="https://tse2.mm.bing.net/th?id=OIP.9u3swpB62Xb4SQqCz6rYJAHaE8&pid=Api&P=0"></img>
                <Typography component="legend">Review</Typography>
                <Typography component="legend">5 stars</Typography>
                <Rating name="customized-5" defaultValue={1} max={10} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <img className="img" src="https://tse2.mm.bing.net/th?id=OIP.9u3swpB62Xb4SQqCz6rYJAHaE8&pid=Api&P=0"></img>
                <Typography component="legend">Review</Typography>
                <Typography component="legend">5 stars</Typography>
                <Rating name="customized-5" defaultValue={1} max={10} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <img className="img" src="https://tse2.mm.bing.net/th?id=OIP.9u3swpB62Xb4SQqCz6rYJAHaE8&pid=Api&P=0"></img>
                <Typography component="legend">Review</Typography>
                <Typography component="legend">5 stars</Typography>
                <Rating name="customized-5" defaultValue={1} max={10} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <img className="img"src="https://tse2.mm.bing.net/th?id=OIP.9u3swpB62Xb4SQqCz6rYJAHaE8&pid=Api&P=0"></img>
                <Typography component="legend">Review</Typography>
                <Typography component="legend">5 stars</Typography>
                <Rating name="customized-5" defaultValue={1} max={10} />
            </Grid>
        </Grid>
    </Container>
    </div> 
    );
}
export default Product;