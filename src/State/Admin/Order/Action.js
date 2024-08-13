import { api } from "../../../config/ApiConfig";
import {
  CONFIRM_ORDERS_FAILURE,
  CONFIRM_ORDERS_REQUEST,
  CONFIRM_ORDERS_SUCCESS,
  DELETE_ORDERS_FAILURE,
  DELETE_ORDERS_REQUEST,
  DELETE_ORDERS_SUCCESS,
  DELIVERED_ORDERS_FAILURE,
  DELIVERED_ORDERS_REQUEST,
  DELIVERED_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  SHIP_ORDERS_FAILURE,
  SHIP_ORDERS_REQUEST,
  SHIP_ORDERS_SUCCESS,
} from "./ActionType";

// export const getOrders = () => {
//   // console.log("get all orders", );
//   return async (dispatch) => {
//     dispatch({ type: GET_ORDERS_REQUEST });
//     try {
//       const response = await api.get(`/api/admin/orders/`);
//       console.log("get all orders", response.data);
//       dispatch({ GET_ORDERS_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.log("catch error", error);
//       dispatch({ GET_ORDERS_FAILURE, payload: error.message });
//     }
//   };
// };

export const getOrders = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ORDERS_REQUEST });
    try {
      const response = await api.get(`/api/admin/orders/`);
      console.log("get all orders", response.data);
      dispatch({ type: GET_ORDERS_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("catch error", error);
      dispatch({ type: GET_ORDERS_FAILURE, payload: error.message });
    }
  };
};

export const confirmOrder = (orderId) => async (dispatch) => {
  dispatch({ type: CONFIRM_ORDERS_REQUEST });
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
    const data = response.data;
    console.log("confirm order", data);
    dispatch({ CONFIRM_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ CONFIRM_ORDERS_FAILURE, payload: error.message });
  }
};

export const shipOrder = (orderId) => {
  return async (dispatch) => {
    try {
      dispatch({ SHIP_ORDERS_REQUEST });
      const { data } = await api.put(`/api/admin/orders/${orderId}/ship`);
      console.log("shipped order", data);
      dispatch({ type: SHIP_ORDERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ SHIP_ORDERS_FAILURE, payload: error.message });
    }
  };
};

export const deliveredOrder = (orderId) => async (dispatch) => {
  dispatch({ type: DELIVERED_ORDERS_REQUEST });
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/deliver`);
    const data = response.data;
    console.log("dilivered order ", data);
    dispatch({ type: DELIVERED_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELIVERED_ORDERS_FAILURE, payload: error.message });
  }
};

// export const cancelOrder = (orderId) => async (dispatch) => {
//   dispatch(canceledOrderRequest());

//   try {
//       const response = await api.put(`/api/admin/orders/${orderId}/cancel`);
//       const data = response.data;
//       dispatch(canceledOrderSuccess(data));
//   } catch (error) {
//       dispatch(canceledOrderFailure(error.message));

//   }
// };

export const deleteOrder = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_ORDERS_REQUEST });
    try {
      const { data } = await api.delete(`/api/admin/orders/${orderId}/delete`);
      console.log("delete order ", data);
      dispatch({ type: DELETE_ORDERS_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: DELETE_ORDERS_FAILURE, payload: error.message });
    }
  };
};
