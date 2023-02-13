import { fakeDb } from "../db/FakeDB.js";
import { BadRequest } from "../utils/Errors.js";



class BurgersService {

getBurgerById(burgerId) {
    const burger = fakeDb.burgers.find(b => b.id == burgerId)

    if (!burger) {
        throw new BadRequest('Bad Burger Id')   
    }
    return burger
}



getBurgers() {
    return fakeDb.burgers
}
}

export const burgersService = new BurgersService()