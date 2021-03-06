/**
 * Discord Debate Timer
 * @copyright 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io/
 * @license MIT
 */

const {Message} = require("./utils/mockDiscord")
const handleMessage = require("../lib/handleMessage")
const testHelpers = require("./utils/helpers")


module.exports = () => {
    it("Should show help message on !help", () => {
        const message = new Message("!help")

        handleMessage.default(message)

        const returnMsg = message.newMessage.content

        testHelpers.includes(returnMsg, "!start")
        testHelpers.includes(returnMsg, "!getMotion")
        testHelpers.includes(returnMsg, "!makeTeams")
    })

    it("Should show help message on !man", () => {
        const message = new Message("!man")

        handleMessage.default(message)

        const returnMsg = message.newMessage.content

        testHelpers.includes(returnMsg, "!start")
        testHelpers.includes(returnMsg, "!getMotion")
        testHelpers.includes(returnMsg, "!makeTeams")
    })

    it("Should have a manual entry for bruh", () => {
        const message = new Message("!help bruh")

        handleMessage.default(message)

        const returnMsg = message.newMessage.content

        testHelpers.includes(returnMsg, "Otis")
    })

    it("Should have a manual entry for coinflip", () => {
        const message = new Message("!help coinflip")

        handleMessage.default(message)

        const returnMsg = message.newMessage.content

        testHelpers.includes(returnMsg, "Flip a coin")
    })

    it("Should have a manual entry for epic", () => {
        const message = new Message("!man !epic")

        handleMessage.default(message)

        const returnMsg = message.newMessage.content

        testHelpers.includes(returnMsg, "Shen Bapiro")
    })

    it("Should have a manual entry for start", () => {
        const message = new Message("!man start")

        handleMessage.default(message)

        const returnMsg = message.newMessage.content

        testHelpers.includes(returnMsg, "Starts a 5 minute timer")
    })


    it("Should have a manual entry for kill", () => {
        const message = new Message("!man !kill")

        handleMessage.default(message)

        const returnMsg = message.newMessage.content

        testHelpers.includes(returnMsg, "Kills a timer")
    })

    it("Should have a manual entry for kill", () => {
        const message = new Message("!man !kill")

        handleMessage.default(message)

        const returnMsg = message.newMessage.content

        testHelpers.includes(returnMsg, "Kills a timer")
    })

    it("Should have a manual entry for getMotion", () => {
        const message = new Message("!help getMotion")

        handleMessage.default(message)

        const returnMsg = message.newMessage.content

        testHelpers.includes(returnMsg, "random motion")
    })

    it("Should have a manual entry for getMotions", () => {
        const message = new Message("!help getMotions")

        handleMessage.default(message)

        const returnMsg = message.newMessage.content

        testHelpers.includes(returnMsg, "multiple motions")
    })

    it("Should have a manual entry for makePartners", () => {
        const message = new Message("!help makePartners")

        handleMessage.default(message)

        const returnMsg = message.newMessage.content

        testHelpers.includes(returnMsg, "random partners")
    })

    it("Should have a manual entry for makeRound", () => {
        const message = new Message("!help makeRound")

        handleMessage.default(message)

        const returnMsg = message.newMessage.content

        testHelpers.includes(returnMsg, "random teams")
        testHelpers.includes(returnMsg, "random partners")
        testHelpers.includes(returnMsg, "random motion")
    })

    it("Should not have a manual entry for unknown command", () => {
        const message = new Message("!help notACommand")

        handleMessage.default(message)

        const returnMsg = message.newMessage.content

        testHelpers.includes(returnMsg, "No manual entry for notACommand")
    })
}
