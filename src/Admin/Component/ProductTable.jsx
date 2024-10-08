import {
  Avatar,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, findProducts } from "../../State/product/Action";
import { Button } from "@headlessui/react";

const ProductTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  const handleProductDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };
  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10000000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 2000,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [products.deletedProduct]);
  return (
    <div className="p-5 text-white">
      <Card className="mt-2">
        <CardHeader title="All Products" />
        <TableContainer sx={{ color: "white" }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {products?.products?.products?.content?.map((item) => ( */}
              {products?.products?.content?.map((item) => (
                <TableRow
                  key={item?.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell align="left" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="left">{item.category.name}</TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => handleProductDelete(item.id)}
                      variant="outlined"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default ProductTable;
