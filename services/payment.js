const db = require('../models');


class PaymentService{
    constructor(PaymentModel){
        this.payment = PaymentModel;
    }
}

module.exports = PaymentService;