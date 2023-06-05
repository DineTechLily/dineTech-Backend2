// const eOrder = require("../../models/empOrderModel");

// const table = {
//   async getOrderTicket(_, res) {
//     try {
//       const data = await eOrder.find({finished: false});

//       res.status(200).json({
//         success: true,
//         data: data,
//       });
//     } catch (error) {
//       res.status(400).json({
//         message: error,
//       });
//     }
//   },
//   async getOrderDoneTicket(_, res) {
//     try {
//       const data = await eOrder.find({ finished: true});

//       res.status(200).json({
//         success: true,
//         data: data,
//       });
//     } catch (error) {
//       res.status(400).json({
//         message: error,
//       });
//     }
//   },
//   // 現在沒用到
// //   async getAllOrder(req, res) {
// //     const table_id = req.params.table_id;

// //     try {
// //       const all_order = await Guest.find({table_id: table_id});
// //       const order_list = all_order[0].order_id;
// //       const data = [];

// //       for (let i = 0; i < order_list.length; i++) {
// //         let order = await Order.find({order_id: order_list[i]})
// //         data.push(order)
// //       }
// //       res.status(200).json({
// //         success: true,
// //         data: data,
// //       });
// //     } catch (error) {
// //       res.status(400).json({
// //         message: error,
// //       });
// //     }
// //   },
// };
// module.exports = table;
