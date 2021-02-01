const chalk = require('chalk')
const faker = require('faker')

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log((chalk.green(
    randomName +
    chalk.blue.underline.bold(randomEmail) +
    randomCard.phone
)))