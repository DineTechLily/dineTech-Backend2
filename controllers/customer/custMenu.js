// const Meal = require("../../models/mealModel");
const Item = require("../../models/itemModel");

const menu = {
  async getMenu(_, res) {
    try {
      const data_single = await Item.find();
      // const data_combine = await Meal.find();
      
      const data_item = data_single.map((item) => {
        let newData = {
          _id: item.product._id,
          category: item.product.category,
          name: item.product.name,
          price: item.product.price,
          description: item.product.description,
          img: item.product.img,
          stock: item.stock,
          customization: item.product.category === "pasta"
          ?[
            {
                "name": "加麵",
                "price": 20,
                "type": "checkbox",
            },
            {
                "name": "加起司",
                "price": 30,
                "type": "checkbox",
            },
            {
              "name": "辣度",
              "type": "radio",
              "options":[
                {
                  "name":"不辣",
                },{
                  "name":"小辣",
                },{
                  "name":"中辣",
                },{
                  "name":"大辣",
                }
              ]
            },
          ]:null,
        };

        if (item.product.category !== "pasta" ) {
          newData.customization = [];
          for (let i = 0; i < item.product.customization.length; i++) {
            newData.customization.push({
              name: item.product.customization[i].name,
              price: item.product.customization[i].price,
              type: "checkbox",
            });
          }
        }

        return newData;
      })
      

      // const data_meal = data_combined.map((item) => {

      // })

      res.status(200).json({
        success: true,
        data_item: data_item,
        // data_set: data_meal,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async getMenuId(req, res) {
    const id = req.params.id;
    console.log(id);
    try {
      const data_single = await Item.find({ product: id }).lean();
      // const data_combine = await Meal.find();
      console.log(data_single);
      const data_item = data_single.map((item) => {
        let newData = {
          _id: item.product._id,
          category: item.product.category,
          name: item.product.name,
          price: item.product.price,
          description: item.product.description,
          img: item.product.img,
          stock: item.stock,
          customization: item.product.category === "pasta"
          ?[
            {
                "name": "加麵",
                "price": 20,
                "type": "checkbox",
            },
            {
                "name": "加起司",
                "price": 30,
                "type": "checkbox",
            },
            {
              "name": "辣度",
              "type": "radio",
              "options":[
                {
                  "name":"不辣",
                },{
                  "name":"小辣",
                },{
                  "name":"中辣",
                },{
                  "name":"大辣",
                }
              ]
            },
          ]:null,
        };

        if (item.product.category !== "pasta" ) {
          newData.customization = [];
          for (let i = 0; i < item.product.customization.length; i++) {
            newData.customization.push({
              name: item.product.customization[i].name,
              price: item.product.customization[i].price,
              type: "checkbox",
            });
          }
        }

        return newData;
      })
      

      // const data_meal = data_combined.map((item) => {

      // })

      res.status(200).json({
        success: true,
        data_item: data_item,
        // data_set: data_meal,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = menu;
