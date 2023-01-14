import { DishesDal } from "../dal/dishes.dal";

export class DishesService {
  public async getDishes() {
    const dal = new DishesDal();
    const res = await dal.findAll();
    return res;
  }

  public async createDish(dish: any) {
    const dal = new DishesDal();
    const res = dal.createDish(dish);
    return res;
  }

  public async getDish(param: { [key: string]: string }) {
    const dal = new DishesDal();
    const res = await dal.getDish(param);
    return res;
  }
  public async getDishByID(param: { [key: string]: string }) {
    const dal = new DishesDal();
    const res = await dal.getDishByID(param);
    return res;
  }
}
