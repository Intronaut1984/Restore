import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import type { Product } from "../../app/models/product";
import { Link as RouterLink } from 'react-router-dom';

type Props = {
  product: Product
}

export default function ProductCard({product}: Props) {
  return (
    <Card 
        elevation={3}
        sx={{
            width: 280, 
            display: 'flex', 
            flexDirection: 'column', 
            borderRadius: 2,
            justifyContent: 'space-between',
        }}
    > 
        <CardMedia 
            sx={{height: 240, backgroundSize: 'cover'}}
            image={product.pictureUrl}
            title={product.name}
        />
        <CardContent>
            <Typography
                gutterBottom
                sx={{color: 'secondary.main'}}
                variant = 'subtitle2'>
                    {product.name}
            </Typography>
            <Typography 
                variant='h6'
                sx={{color: 'secondary.main'}}
            >
                ${(product.price/100).toFixed(2)}
            </Typography>
        </CardContent>
        <CardActions
            sx={{justifyContent: 'space-between'}}
            >
                <Button>Add To Cart</Button>
                <Button component={RouterLink} to={`/catalog/${product.id}`}>View</Button>
        </CardActions>
    </Card>
  )
}