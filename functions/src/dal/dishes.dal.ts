import Restaurants from "../db/models/restaurants";
import Dishes from "../db/models/dishes";
import { alreadyExistsError, notFoundError } from "../assets/consts";

export class DishesDal {
  public async createDish(dish: any) {
    dish = new Dishes({
      name: dish.name,
      restaurant: dish.restaurant,
      describtion: dish.describtion,
      img: dish.img,
      price: dish.price,
      dishType: dish.dishType,
      category: dish.category,
    });
    const findResult = await Restaurants.findOne({ name: dish.restaurant})
    if(findResult){
      const findResult3 = await Dishes.findOne({ name: dish.name})
      if (findResult3?.restaurant == dish.restaurant){
        return alreadyExistsError
      }
      const response = await Dishes.create(dish);
      await Restaurants.findOne({ name: dish.restaurant}).updateOne({
        $push: { dishes: dish._id },
      });
      return response;
    }
    return notFoundError
  }

  public findAll() {
    return Dishes.find();
  }


  public async getDish(param: { [key: string]: string }) {
    const data = await Dishes.aggregate([
      { $match: { name: `${param.name}` } },
    ]);
    return data;
  }
  public async getDishByID(param: { [key: string]: string }) {
    const data = await Dishes.aggregate([
      { $match: { _id: `${param.name}` } },
    ]);
    return data;
  }
}
