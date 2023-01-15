import { Request, Response } from "express";
import { DishesService } from "../services/dishes.service";

export class DishesController {
  public static async getDishes(req: Request, res: Response) {
    const service = new DishesService();
    const dishes = await service.getDishes();
    return res.send(dishes);
  }

  public static async createDishes(req: Request, res: Response) {
    const params = req.body;
    const service = new DishesService();
    const dish = await service.createDish(params);
    return res.send(dish);
  }


  public static async getDish(req: Request, res: Response) {
    try {
      const service = new DishesService();
      const param = req.body;
      const dish = await service.getDish(param);
      return res.send(dish);
    } catch (error) {
      return res.send(error);
    }
  }
  public static async getDishByID(req: Request, res: Response) {
    try {
      const service = new DishesService();
      const param = req.body;
      const dish = await service.getDishByID(param);
      return res.send(dish);
    } catch (error) {
      return res.send(error);
    }
  }
}
