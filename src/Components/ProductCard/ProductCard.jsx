import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../Contexts/productsContext";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useContext(productsContext);
  const navigate = useNavigate();
  // console.log(item);
  return (
    <Card sx={{ maxWidth: 300, margin: "10px" }}>
      <CardMedia
        onClick={() => navigate(`/products/${item.id}`)}
        component="img"
        alt="green iguana"
        height="200"
        image={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {item.price}$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description.length > 20
            ? `${item.description.slice(0, 20)}...`
            : item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="error"
          onClick={() => deleteProduct(item.id)}
          size="small">
          <DeleteIcon />
        </Button>
        <Button
          onClick={() => navigate(`/edit/${item.id}`)}
          color="warning"
          size="small">
          <EditIcon />
        </Button>
        <Button size="small">
          <ShoppingCartIcon />
        </Button>
        <Button onClick={() => navigate(`/products/${item.id}`)} size="small">
          <MoreVertIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
