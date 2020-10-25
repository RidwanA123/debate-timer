/**
 * Discord Debate Timer
 * @copyright 2020 Luke Zhang, Ridwan Alam
 * @author Luke Zhang luke-zhang-04.github.io/
 * @license MIT
 */

import type {Message} from "discord.js"

// Object with all the manual entries
const manual: {[key: string]: string} = {
    bruh: `> **\`!bruh\`**
> Otis.`,
    coinflip: `> **\`!coinflip\`**
> Flip a coin`,
    epic: `> **\`!epic\`**
> Shen Bapiro.`,
    start: `> **\`!start [@mention?]\`**
> Starts a 5 minute timer with 30 seconds protected time at the start and end.
> Parameters:
>     \`[@mention?]\` - optional - @mention for current speaker
> Will ping \`[@mention]\` for important times if included
> Will also mute \`[@mention]\` after 5:15
> E.g \`!start @debate-timer\``,
    kill: `> **\`!kill [id]\`**
> Kills a timer with id of \`[id]\`
> Parameters:
>     \`[id]\` - required - integer value for timer id. Should be displayed under a timer.
> E.g \`!kill 254\``,
    getMotion: `> **\`getMotion\`**
> Gets a random motion from the hellomotions spreadsheet
> <https://docs.google.com/spreadsheets/d/1qQlqFeJ3iYbzXYrLBMgbmT6LcJLj6JcG3LJyZSbkAJY/edit?usp=sharing>`,
    getMotions: `> **\`getMotions [count?]\`**
> Gets multiple motions from the hellomotions spreadsheet
> <https://docs.google.com/spreadsheets/d/1qQlqFeJ3iYbzXYrLBMgbmT6LcJLj6JcG3LJyZSbkAJY/edit?usp=sharing>
> Parameters:
>     \`[count?]\` - optional - integer value for number of motions to get. Default is 5. Won't do more than 20.
> E.g \`!getMotions 6\``,
    makeTeams: `> **\`!makeTeams\`**
> Makes random teams with \`Team A\` \`Team B\` \`Team C\` and \`Team D\``,
    makePartners: `> **\`!makePartners [debater1] [debater2] ... [debater8]\`**
> Makes random partners
> Parameters:
>      \`[debater1]\` - required - @mention of debater 1
>      \`[debater2]\` - required - @mention of debater 2
>      ...
>      \`[debater8]\` - required - @mention of debater 8
> A total of 8 debaters are required
> E.g \`!makePartners @debate-timer debater2 debater3 debater4 debater5 debater6 debater7 debater8\``,
    makeRound: `> **\`!makeRound [debater1] [debater2] ... [debater8]\`**
> Creates random teams, random partners, and chooses a random motion
> Similar to \`makePartners\`, 8 debater names are required.`,
}

// Default help message
const defaultMsg = `**Debate Timer Bot**

This project is open source.
You can contribute to it at <https://github.com/Luke-zhang-04/debate-timer>
For a web timer, you can go to <https://luke-zhang-04.github.io/debate-timer/>.

> :book: **\`!help [command?]\`**
> Get some help
> Parameters:
>     [command?] - optional - name of command to get more detailed help with. Doesn't have to include \`!\`.
> E.g !help getMotion
> E.g !man !start

> :book: **\`!man [command?]\`**
> Stands for manual
> Functionally equivalent to \`help\`

**Commands:**
> **\`!bruh\`**
> **\`!coinfilp\`**
> **\`!epic\`**

> :timer:
> **\`!start [@mention?]\`**
> **\`!kill [id]\`**

> :newspaper:
> **\`getMotion\`**
> **\`getMotions [count?]\`**

> :speaking_head:
> **\`!makeTeams\`**
> **\`!makePartners [debater1] [debater2] ... [debater8]\`**
> **\`!makeRound\`**
`

/**
 * Help command invoked with !help
 * @returns string
 */
export default (message: Message) => {
    const arg = message.content.split(" ")[1]

    if (arg === undefined) {
        message.channel.send(defaultMsg)
    } else if (arg in manual) {
        message.channel.send(`:book: **Debate Timer Bot**\n${manual[arg]}`)
    } else if (arg.slice(1) in manual) {
        message.channel.send(`:book: **Debate Timer Bot**\n${manual[arg.slice(1)]}`)
    } else {
        message.channel.send(`:book: No manual entry for ${arg}`)
    }
}
