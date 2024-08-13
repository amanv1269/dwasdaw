import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import OrderCard from "./OrderCard";
import { getUserOrderHistory } from "../../../State/order/Action";
import { useDispatch, useSelector } from "react-redux";

const orderStatus = [
  { lable: "On The Way", value: "on_the_way" },
  { lable: "Delivered", value: "delivered" },
  { lable: "Cancelled", value: "canceled" },
  { lable: "Return", value: "returned" },
];
// const Order = () => {
//   return (
//     <div className="px:5 lg:px-20">
//       <Grid container sx={{ justifyContent: "space-between" }}>
//         <Grid item xs={2.5}>
//           <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
//             <h1 className="font-bold text-lg">Filter</h1>
//             <div className="space-y-4 mt-10">
//               <h1 className="font font-semibold">ORDER STATUS</h1>
//               {orderStatus.map((option) => (
//                 <div className="flex items-center">
//                   <input
//                     defaultValue={option.value}
//                     type="checkbox"
//                     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                   />
//                   <label
//                     className="ml-3 text-sm text-gray-500"
//                     htmlFor={option.value}
//                   >
//                     {option.lable}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Grid>
//         <Grid item xs={9}>
//           <div className="space-y-0">
//             {[1, 1, 1, 1, 1, 1].map((item) => (
//               <OrderCard />
//             ))}
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

const Order = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);
  console.log("Orders--------->", order);
  useEffect(() => {
    dispatch(getUserOrderHistory());
  }, []);
  return (
    <div className="px-5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>

              {orderStatus.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-5">
            {order.orders?.map((order) =>
              order.orderItems?.map((item) => (
                <OrderCard
                  key={item.id}
                  item={item}
                  date={order.deliveryDate}
                  address={order.shippingAddress}
                  status={order.orderStatus}
                />
              ))
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
