import Chefs from "../db/models/chefs";
import Restaurants from "../db/models/restaurants";

export class RestaurantsDal {
  public async createRestaurant(restaurant: any) {
    restaurant = new Restaurants({
      name: restaurant.name,
      establishedAt: restaurant.establishedAt,
      chef: restaurant.chef,
      openedAt: restaurant.openedAt,
      dishes: restaurant.dishes,
      img: restaurant.img,
    });

    const response = await Restaurants.create(restaurant);
    const result = await Chefs.findOne({ name: response.chef }).updateOne({
      $push: { restaurants: response._id },
    });
    return response;
  }

  public findAll() {
    return Restaurants.find();
  }

  public async getRestaurant(param: { [key: string]: string }) {
    const data = await Restaurants.aggregate([
      { $match: { name: `${param.name}` } },
    ]);
    return data;
  }
}
