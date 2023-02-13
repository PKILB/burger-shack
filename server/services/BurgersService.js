import { fakeDb } from "../db/FakeDB.js";



class BurgersService {
getBurgers() {
    return fakeDb.burgers
}
}

export const burgersService = new BurgersService()