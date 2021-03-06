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
    context("Should start a timer properly", () => {
        const message = new Message("!start @Tester")

        handleMessage.default(message)

        let returnMsg = message.newMessage.content,
            id

        it("Should have started a timer", () => {
            testHelpers.includes(returnMsg, "Starting timer")
        })

        it("Should show id", (done) => {
            setTimeout(() => {
                returnMsg = message.newMessage.content

                testHelpers.includes(returnMsg, "Id")
                testHelpers.includes(returnMsg, "Current time:")

                done()
            }, 500)
        })

        it("Should have ticked to 5 seconds", (done) => {
            setTimeout(() => {
                // eslint-disable-next-line
                id = returnMsg.split(" ")[3]

                returnMsg = message.newMessage.content

                testHelpers.includes(returnMsg, "Current time: 5")

                done()
            }, 4600)
        })

        it("Should kill the timer properly", (done) => {
            setTimeout(() => {
                const message2 = new Message(`!kill ${id}`)

                handleMessage.default(message2)

                const returnMsg2 = message.newMessage.content

                testHelpers.includes(returnMsg2, "Killed timer")

                done()
            }, 100)
        })
    })

    context("the kill command", () => {
        it("Should send message if id is not provided", () => {
            const message = new Message("!kill")

            handleMessage.default(message)

            const returnMsg = message.newMessage.content

            testHelpers.includes(returnMsg, "not provided")
        })

        it("Should send message if id is not number", () => {
            const message = new Message("!kill notanumber")

            handleMessage.default(message)

            const returnMsg = message.newMessage.content

            testHelpers.includes(returnMsg, "Learn to count")
        })

        it("Should send a message if no timer with id is found", () => {
            const message = new Message("!kill 420")

            handleMessage.default(message)

            const returnMsg = message.newMessage.content

            testHelpers.includes(returnMsg, "Could not find timer")
        })
    })
}
