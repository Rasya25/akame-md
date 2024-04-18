/*
   Created By ChocoXploit
   Akame-MD V1.2.0
*/

const fs = require('fs')
const chalk = require('chalk')

/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.lol = 'IchanZX' // https://api.lolhuman.xyz
global.kii = 'chocozy' // https://api.kiicodeit.me
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = '6285791346128' // Owner Utama
global.owner = ['6285791346128', '6285791346128'] // Owner Lainnya
global.namaowner = 'ChocoXploit' // Nama Owner
global.premium = ["6285791346128"] // Premium User
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = 'Akame-MD' // NickBot
global.typemenu = 'v2' 
// 'v1' > 'v2' > 'v3' > 'v4'
// 'v1' Image ORI!
// 'v2' Image Kece!
// 'v3' Video GIF!
// 'v4' CallVideo!
global.autoread = false // ReadChat
global.autobio = false // AutoBio
global.autoblok212 = false // AutoBlock Nomer +212
global.onlyindo = false  // AutoBlock Selain Nomer Indo
global.packname = 'Akame-MD' // Watermark Sticker
global.author = 'ChocoXploit ダ' // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
    done: 'Finished 👌',
    prem: 'Feature Only For User _*PREMIUM*_',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'This command can only be used when the bot is a group admin!',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Private Chat*_',
    wait: 'Wait a Moment, for Process',    
    error: '_*Sorry Features Error*_',
}
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync('./media/quoted.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = 'https://chocozypy.my.id'
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})