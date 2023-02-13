import { fakeDb } from "../db/FakeDB.js";
import { BadRequest } from "../utils/Errors.js";



class BurgersService {

createBurger(rawBurgerData) {
    if (!rawBurgerData.name || rawBurgerData.emoji != '🍔' && rawBurgerData.emoji != '🥓' && rawBurgerData.emoji != '🥬') {
        throw new BadRequest("Invalid Burger Data")
    }

    rawBurgerData.id = (Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000))

    fakeDb.burgers.push(rawBurgerData)

    return rawBurgerData
}   


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