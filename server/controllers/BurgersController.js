import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class BurgersController extends BaseController {
    constructor() {
        super('api')

        this.router
        .get('/burgers', this.getBurgers)
        .get('/burgers/:burgerId', this.getBurgerById)
        .post('/burgers', this.createBurger)
    }



    getBurgers(req, res, next) {
        try {
            let burgers = burgersService.getBurgers()

            res.send(burgers)
        } catch (error) {
            next(error)
        }
    }


    getBurgerById(req, res, next) {
        try {
            let burgerId = req.params.burgerId
            logger.log(burgerId)

            const burger = burgersService.getBurgerById(burgerId)
            
            res.send(burger)

        } catch (error) {
            next(error)
        }
    }

    createBurger(req, res, next) {
        try {
            let rawBurgerData = req.body

            let newBurger = burgersService.createBurger(rawBurgerData)

            res.send(newBurger)

        } catch (error) {
            next(error)
        }
    }
}