/*
   Created By ChocoXploit
   Akame-MD 1.2.0
*/

const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@WhiskeySockets/Baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    tanggal,
    jam,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    reSize
} = require('./lib/myfunc')
/* ~~~~~~~~~ FUNTION SYSTEM ~~~~~~~~~ */
let afk = require("./lib/afk");
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
/* ~~~~~~~~~ DATA GAME ~~~~~~~~~ */
let tebaklagu = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let akinator = []
/* ~~~~~~~~~ DATA ~~~~~~~~~ */
let premium = JSON.parse(fs.readFileSync('./src/data/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./src/data/owner.json'))
let _user = JSON.parse(fs.readFileSync('./src/data/user.json'))
let _afk = JSON.parse(fs.readFileSync('./src/data/user/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./src/total-hit-user.json'))
let autosimi = JSON.parse(fs.readFileSync('./src/data/simi.json'))
/* ~~~~~~~~~ DATA MEDIA ~~~~~~~~~ */
const Vnchoco = JSON.parse(fs.readFileSync('./src/media/vn.json'))
const Stickerchoco = JSON.parse(fs.readFileSync('./src/media/sticker.json'))
const Imagechoco = JSON.parse(fs.readFileSync('./src/media/image.json'))
const Videochoco = JSON.parse(fs.readFileSync('./src/media/video.json'))
/* ~~~~~~~~~ WAKTU SETEMPAT ~~~~~~~~~ */
moment.tz.setDefault("Asia/Jakarta").locale("id")

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const waktu = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (waktu < "23:59:00") {
    var ucapanWaktu = 'Selamat Malam 🏙️'
}
if (waktu < "19:00:00") {
    var ucapanWaktu = 'Selamat Petang 🌆'
}
if (waktu < "18:00:00") {
    var ucapanWaktu = 'Selamat Sore 🌇'
}
if (waktu < "15:00:00") {
    var ucapanWaktu = 'Selamat Siang 🌤️'
}
if (waktu < "10:00:00") {
    var ucapanWaktu = 'Selamat Pagi 🌄'
}
if (waktu < "05:00:00") {
    var ucapanWaktu = 'Selamat Subuh 🌆'
}
if (waktu < "03:00:00") {
    var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
/* ~~~~~~~~~ STARTING & MODULE ALL ~~~~~~~~~ */
module.exports = choco = async (choco, m, msg, chatUpdate, store) => {
    try {
        /* ~~~~~~~~~ BASE ChocoXploit ~~~~~~~~~ */
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectnewReply.selectedRowId : (m.mtype == 'templateButtonnewReplyMessage') ? m.message.templateButtonnewReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectnewReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa
        const isCmd = body.startsWith(prefix, '')
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await choco.decodeJid(choco.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isSimi = autosimi.includes(from)
        /* ~~~~~~~~~ MEDIA ALL ~~~~~~~~~ */
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        /* ~~~~~~~~~ PREFIX V2 ~~~~~~~~~ */
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : '.'
        const isAsu = body.startsWith(pric)
        const isCommand = isAsu ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isAdrian = ('6285791346128@s.whatsapp.net').includes(m.sender)
        /* ~~~~~~~~~ GROUP SYSTEM ~~~~~~~~~ */
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await choco.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        /* ~~~~~~~~~ STATUS USERS ~~~~~~~~~ */
        const isCreator = [numberowner, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        expiredCheck(choco, m, premium);
        /* ~~~~~~~~~ REPLY ~~~~~~~~~ */
        async function loading () {
var choz = [
" 20%",
" 30%",
" 50%",
" 80%",
" 100%",
"Getting data, Currently sending"
]
let { key } = await choco.sendMessage(from, {text: "Search for data"})
//Pengalih isu

for (let i = 0; i < choz.length; i++) {
await choco.sendMessage(from, {text: choz[i], edit: key });
//PESAN LEPAS
}}
        async function newReply(teks) {
            const po = {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: global.namabot,
                        body: jam(),
                        previewType: "PHOTO",
                        thumbnail: fs.readFileSync('./media/quoted.jpg'),
                        sourceUrl: global.link
                    }
                },
                text: teks
            };
            return choco.sendMessage(m.chat, po, {
                quoted: m
            });
        };
        /* ~~~~~~~~~ ALL SYSTEM BOT ~~~~~~~~~ */
        if (!choco.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        if (autoread) {
            choco.readMessages([m.key])
        }
        if (autobio) {
            choco.updateProfileStatus(`-`).catch(_ => _)
        }
        if (from === 'status@broadcast') {
            choco.chatRead(from)
        }
        if (isCommand) {
            let titida = ['composing', 'recording']
            yte = titida[Math.floor(titida.length * Math.random())]
            choco.sendPresenceUpdate(yte, from)
        }
        if (m.sender.startsWith('212') && global.autoblok212 === true) {
            return choco.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && global.onlyindo === true) {
            return choco.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
            list.push({
                displayName: choco.getName(i + '@s.whatsapp.net'),
                vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${choco.getName(i + '@s.whatsapp.net')}\n
FN:${choco.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:creator@chocozypy.mymid\n
item2.X-ABLabel:Email\n
item3.URL:https://chocozypy.my.id\n
item3.X-ABLabel:Profile Website\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
            })
        }
        /* ~~~~~~~~~ CONSOLE ~~~~~~~~~ */
        if (isCommand) {
            console.log(`<================>`)
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '<\> MESSAGE </>' : '<\> COMMAND </>')), chalk.black(chalk.bgGreen(hariini)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            console.log(`<================>`)
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./src/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./src/total-hit-user.json'))[0].hit_cmd
        }
        /* ~~~~~~~~~ RESPON DATA MEDIA ~~~~~~~~~ */
        for (let Mwuhehe of Vnchoco) {
            if (budy === Mwuhehe) {
                let audiobuffy = fs.readFileSync(`./media/audio/${Mwuhehe}.mp3`)
                choco.sendMessage(m.chat, {
                    audio: audiobuffy,
                    mimetype: 'audio/mp4',
                    ptt: true
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of Stickerchoco) {
            if (budy === Mwuhehe) {
                let stickerbuffy = fs.readFileSync(`./media/sticker/${Mwuhehe}.webp`)
                choco.sendMessage(m.chat, {
                    sticker: stickerbuffy
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of Imagechoco) {
            if (budy === Mwuhehe) {
                let imagebuffy = fs.readFileSync(`./media/image/${Mwuhehe}.jpg`)
                choco.sendMessage(m.chat, {
                    image: imagebuffy
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of Videochoco) {
            if (budy === Mwuhehe) {
                let videobuffy = fs.readFileSync(`./media/video/${Mwuhehe}.mp4`)
                choco.sendMessage(m.chat, {
                    video: videobuffy
                }, {
                    quoted: m
                })
            }
        }
        /* ~~~~~~~~~ RESPON CMD GAME~~~~~~~~~ */
        if (akinator.hasOwnProperty(m.sender.split('@')[0]) && isCmd && ["0", "1", "2", "3", "4", "5"].includes(body)) {
            kuis = true
            var {
                server,
                frontaddr,
                session,
                signature,
                question,
                step
            } = akinator[m.sender.split('@')[0]]
            if (step == "0" && budy == "5") newReply("Maaf Anda telah mencapai pertanyaan pertama")
            var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
            var get_result = await fetchJson(ini_url)
            var get_result = get_result.result
            if (get_result.hasOwnProperty("name")) {
                var ini_name = get_result.name
                var description = get_result.description
                ini_txt = `${ini_name} - ${description}\n\n`
                ini_txt += "*Terima Kasih*\n*Powered By ChocoXploit & LoL Human*"
                await choco.sendMessage(m.chat, {
                    image: {
                        url: get_result.image
                    },
                    caption: ini_txt
                }).then(() => {
                    delete akinator[m.sender.split('@')[0]]
                    fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
                })
                return
            }
            var {
                question,
                _,
                step
            } = get_result
            ini_txt = `${question}\n\n`
            ini_txt += "0 - Ya\n"
            ini_txt += "1 - Tidak\n"
            ini_txt += "2 - Saya Tidak Tau\n"
            ini_txt += "3 - Mungkin\n"
            ini_txt += "4 - Mungkin Tidak\n"
            ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
            if (args[0] === '5') {
                var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                var get_result = await fetchJson(ini_url)
                var get_result = get_result.result
                var {
                    question,
                    _,
                    step
                } = get_result
                ini_txt = `${question}\n\n`
                ini_txt += "0 - Ya\n"
                ini_txt += "1 - Tidak\n"
                ini_txt += "2 - Saya Tidak Tau\n"
                ini_txt += "3 - Mungkin\n"
                ini_txt += "4 - Mungkin Tidak"
                ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
            }
            choco.sendText(m.chat, ini_txt, m).then(() => {
                const data_ = akinator[m.sender.split('@')[0]]
                data_["question"] = question
                data_["step"] = step
                akinator[m.sender.split('@')[0]] = data_
                fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
            })
        }
        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakgambar[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await choco.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete kuismath[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await newReply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await choco.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakasahotak[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await choco.sendText(m.chat, `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksusunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await choco.sendText(m.chat, `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await choco.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakbendera[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await choco.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakbendera2[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await choco.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await choco.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkimia[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaktekateki[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await choco.sendText(m.chat, `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaktekateki[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaklagu[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await choco.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await choco.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakkalimat[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await choco.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaklirik[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await choco.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaktebakan[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await choco.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // newReply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { // nek wayahku
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                newReply({
                    '-3': 'Game telah berakhir',
                    '-2': 'Invalid',
                    '-1': 'Posisi Invalid',
                    0: 'Posisi Invalid',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['', ''][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
: @${room.game.playerX.split('@')[0]}
: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) choco.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            choco.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        /* ~~~~~~~~~ RESPON USER AFK ~~~~~~~~~ */
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    newReply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./src/data/user/afk-user.json', JSON.stringify(_afk))
                choco.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk`, m)
            }
        }
        switch (isCommand) {
            case 'autosimi':
               if (!isCreator) return newReply(mess.owne)
               if (args.length < 1) return newReply('perilah apa?')
               if (q == 'on') {
                  autosimi.push(from)
                  fs.writeFileSync('./src/data/simi.json', JSON.stringify(autosimi))
                  newReply('Sukses mengaktifkan mode simi')
               } else if (q == 'off') {
                  autosimi.splice(from, 1)
                  fs.writeFileSync('./src/data/simi.json', JSON.stringify(autosimi))
                  newReply('Sukes menonaktifkan mode simi')
               } else {
                  newReply('Agak Laen')
               }
            break
            case 'setimgqouted':
            case 'siq': {
                if (!isCreator) return newReply(mess.owner)
                let delb = await choco.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/quoted.jpg')
                fs.unlinkSync(delb)
                newReply(mess.done)
            }
            break
            case 'setimgmenu':
            case 'sim': {
                if (!isCreator) return newReply(mess.owner)
                let delb = await choco.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/menu.jpg')
                fs.unlinkSync(delb)
                newReply(mess.done)
            }
            break
            case 'setvidmenu':
            case 'svm': {
                if (!isCreator) return newReply(mess.owner)
                let delb = await choco.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/menu.mp4')
                fs.unlinkSync(delb)
                newReply(mess.done)
            }
            break
            case 'setmenu':
                if (!isCreator) return newReplt(mess.owner)
                if (!q) return newReply(`Mau Pilih Yang Mana?\n1. V1\n2. V2\n3. V3`)
                global.typemenu = `'${q}'`
                newReply(mess.done)
                break
            case 'addprem':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 2)
                    return newReply(`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    newReply("Sukses Premium")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    newReply("Sukses Via Nomer")
                }
                break
            case 'delprem':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./src/data/premium.json", JSON.stringify(premium));
                    }
                    newReply("Sukses Delete")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./src/data/premium.json", JSON.stringify(premium));
                    newReply("Sukses Via Nomer")
                }
                break
            case 'listprem': {
                if (!isCreator) return newReply(mess.owner)
                let data = require("./src/data/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Nomer : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                choco.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'delsesi':
            case 'clearsession': {
                if (!isCreator) return newReply(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return newReply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
                    if (filteredArray.length == 0) return newReply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    newReply(teks)
                    await sleep(2000)
                    newReply("Menghapus file sampah...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    newReply("Berhasil menghapus semua sampah di folder session")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return newReply(mess.owner)
                    if (!text) return newReply('Masukkan Link Group!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('Link Invalid!')
                    await loading ()
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await choco.groupAcceptInvite(result).then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                } catch {
                    newReply('Gagal Masuk Ke Group')
                }
                break
            case 'cekapikey':
                if (!isCreator) return newReply(mess.owner)
                let g = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lol}`)
                newReply(g.result)
                break
            case 'ambilsesi':
            case 'getsesi':
                if (!isCreator) return newReply(mess.owner)
                newReply('Tunggu Sebentar, Sedang mengambil file sesi mu')
                let sesi = await fs.readFileSync('./session/creds.json')
                choco.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'myip':
            case 'ipbot':
                if (!isCreator) return newReply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        newReply("🔎 My public IP address is: " + ip);
                    })
                })
                break
            case 'shutdown':
                if (!isCreator) return newReply(mess.owner)
                newReply(`Otsukaresama deshita🖐`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return newReply(mess.owner)
                newReply('Proses....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Contoh ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    newReply(`Berhasil mengubah autoread ke ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    newReply(`Berhasil mengubah autoread ke ${q}`)
                }
                break
            case 'autobio':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    newReply(`Berhasil Mengubah AutoBio Ke ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    newReply(`Berhasil Mengubah AutoBio Ke ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    choco.public = true
                    newReply(mess.done)
                } else if (q == 'self') {
                    choco.public = false
                    newReply(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Contoh : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                newReply(`Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return newReply(mess.owner)
                if (!quoted) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                var medis = await choco.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await choco.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                } else {
                    var memeg = await choco.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return newReply(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await choco.updateBlockStatus(blockw, 'block').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                break
            case 'unblock':
                if (!isCreator) return newReply(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await choco.updateBlockStatus(blockww, 'unblock').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                break
            case 'leave':
                if (!isCreator) return newReply(mess.owner)
                if (!m.isGroup) return newReply(mess.group)
                newReply('Dadah Semuanya 🥺')
                await choco.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return newReply(mess.owner)
                if (m.isGroup) return newReply(mess.private)
                await loading ()
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await choco.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Text mana?\n\nContoh : ${prefix + command} Besok Libur `)
                let getGroups = await choco.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                newReply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    choco.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Owner',
                                body: `Telah Terkirim ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                newReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'getcase':
            case 'ambilcase':
                if (!isCreator) return newReply(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("choco.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                newReply(`${getCase(q)}`)
                break



                /* ~~~~~~~~~ GROUP FEATURES ~~~~~~~~~ */
            case 'delete':
            case 'del': {
                if (!isCreator) return newReply(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                } = m.quoted
                choco.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

            case 'closetime':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return newReply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
                }
                newReply(`Close time ${q} dimulai dari sekarang`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
                    choco.groupSettingUpdate(m.chat, 'announcement')
                    newReply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return newReply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
                }
                newReply(`Open time ${q} dimulai dari sekarang`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
                    choco.groupSettingUpdate(m.chat, 'not_announcement')
                    newReply(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await choco.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                break
            case 'add':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await choco.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await choco.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await choco.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!text) return 'Text ?'
                await choco.groupUpdateSubject(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!text) return 'Text ?'
                await choco.groupUpdateDescription(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!quoted) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                var medis = await choco.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await choco.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                } else {
                    var memeg = await choco.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let teks = `*👥 Tag All By Admin*
 
                 🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                choco.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                choco.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
                if (!m.isGroup) return newReply(mess.group)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!isAdmins) return newReply(mess.admin)
                if (!m.quoted) return newReply(`Reply pesan dengan caption ${prefix + command}`)
                choco.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[0] === 'close') {
                    await choco.groupSettingUpdate(m.chat, 'announcement').then((res) => newReply(`Sukses Menutup Group 🕊️`)).catch((err) => newReply(json(err)))
                } else if (args[0] === 'open') {
                    await choco.groupSettingUpdate(m.chat, 'not_announcement').then((res) => newReply(`Sukses Membuka Group 🕊️`)).catch((err) => newReply(json(err)))
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[0] === 'open') {
                    await choco.groupSettingUpdate(m.chat, 'unlocked').then((res) => newReply(`Sukses Membuka Edit Info Group 🕊️`)).catch((err) => newReply(json(err)))
                } else if (args[0] === 'close') {
                    await choco.groupSettingUpdate(m.chat, 'locked').then((res) => newReply(`Sukses Menutup Edit Info Group 🕊️`)).catch((err) => newReply(json(err)))
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let response = await choco.groupInviteCode(m.chat)
                choco.sendText(m.chat, `👥 *INFO LINK GROUP*\n📛 *Nama :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                await choco.groupRevokeInvite(m.chat)
                    .then(res => {
                        newReply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                    }).catch((err) => newReply(json(err)))
                break


                /* ~~~~~~~~~ MAIN & STATUS BOT ~~~~~~~~~ */
            case 'ping':
            case 'botstatus':
            case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                await choco.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'STATUS SERVER',
                            body: `${latensi.toFixed(4)} Second`,
                            thumbnailUrl: 'https://telegra.ph/file/05c3b67e766b157ca655f.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'sewa':
            case 'sewabot':
                newReply(`Ketik ${prefix}owner Saja`)
                break
            case 'speedtest': {
                newReply('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) choco.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'SPEED TEST',
                                body: `FORGET DONATE`,
                                thumbnailUrl: 'https://telegra.ph/file/ab32e2dba3bcb99dfec6a.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                    if (stderr.trim()) choco.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'SPEED TEST',
                                body: `FORGET DONATE`,
                                thumbnailUrl: 'https://telegra.ph/file/ab32e2dba3bcb99dfec6a.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'runtime':
                let pinga = `Bot Telah Berjalan Selama ${runtime(process.uptime())}`
                choco.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'RUNTIME',
                            body: `FORGET DONATE`,
                            thumbnailUrl: 'https://telegra.ph/file/e293453cd41317e7cf2a4.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'sc':
            case 'script':
            case 'scriptbot':
                uy = `not free`
                choco.sendMessage(m.chat, {
                    text: uy,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'Script',
                            body: `SCRIPT BOT ${namabot} @chocozypy`,
                            thumbnailUrl: 'https://telegra.ph/file/0720685135c68851ca869.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case "owner": {
                choco.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Kontak`,
                        contacts: list
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'call1':
              let preason = text ? text : 'Nothing.'
              choco.relayMessage(from, {
        scheduledCallCreationMessage: {
            callType: "AUDIO",
            scheduledTimestampMs: 5000,
            title: preason
        }
    }, {})
break
 case 'call2':
   let cuki = text ? text : 'Nothing.'
   let sok = new Date()
choco.relayMessage(from, {scheduledCallCreationMessage: {callType: 2, scheduledTimestampMs: sok.getTime(), title: cuki }}, {})
              break
            case 'tqto':
                bbe = `* ${botname} *
                *Big Thanks To*
                 Allah SWT.
                 My Parents 
                 ChocoXploit
                 My Team
                 My Partner
                 Lolhuman
                
                 * � ${botname} *`
                 choco.sendMessage(m.chat, {
                    text: bbe,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'Thanks To',
                            body: ` ${namabot} @chocozypy`,
                            thumbnailUrl: 'https://telegra.ph/file/12e804d687f9a538e6ef6.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
                case 'test':
                await loading ()
                newReply(`Done`)
                break


                /* ~~~~~~~~~ CONVERT FEATURES ~~~~~~~~~ */
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return newReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await choco.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await choco.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            case 'smeme': {
                let respond = `Kirim/Reply image/sticker dengan caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return newReply(respond)
                if (!text) return newReply(respond)
                await loading ()
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await choco.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await choco.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
            case 'swm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return newReply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return newReply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
                await loading ()
                if (/image/.test(mime)) {
                    let media = await choco.downloadMediaMessage(qmsg)
                    let encmedia = await choco.sendImageAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
                    let media = await choco.downloadMediaMessage(qmsg)
                    let encmedia = await choco.sendVideoAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return newReply(`Reply sticker dengan caption *${prefix + command}*`)
                await loading ()
                let media = await choco.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    choco.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return newReply(`newReply stiker dengan caption *${prefix + command}*`)
                await loading ()
                let media = await choco.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await choco.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/newReply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
                await loading ()
                let media = await choco.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                choco.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/newReply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
                await loading ()
                let media = await choco.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                choco.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `choco-MD.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`newReply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
                await loading ()
                let media = await choco.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                choco.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return newReply(`newReply stiker dengan caption *${prefix + command}*`)
                await loading ()
                let media = await choco.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await choco.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
 
            /* ~~~~~~~~~ INFORMATION. FEATURED ~~~~~~~~~ */
            case 'infogempa':
                let k = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lol}`)
                await loading ()
                var caption = `Lokasi : ${k.result.lokasi}\n`
                caption += `Waktu : ${k.result.waktu}\n`
                caption += `Potensi : ${k.result.potensi}\n`
                caption += `Magnitude : ${k.result.magnitude}\n`
                caption += `Kedalaman : ${k.result.kedalaman}\n`
                caption += `Koordinat : ${k.result.koordinat}`
                await choco.sendMessage(m.chat, {
                    image: {
                        url: k.result.map
                    },
                    caption
                }, {
                    quoted: m
                })
                break
                /* ~~~~~~~~~ DATABASE MEDIA ~~~~~~~~~ */
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of Vnchoco) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Vnchoco.length}*`
                newReply(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of Stickerchoco) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Stickerchoco.length}*`
                newReply(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of Imagechoco) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Imagechoco.length}*`
                newReply(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of Videochoco) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Videochoco.length}*`
                newReply(teks)
            }
            break
            case 'addvideo': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Nama Videonya?')
                if (Videochoco.includes(q)) return newReply("Nama Yang Kamu Masukan Sudah Ada")
                let delb = await choco.downloadAndSaveMediaMessage(quoted)
                Videochoco.push(q)
                await fsx.copy(delb, `./media/video/${q}.mp4`)
                fs.writeFileSync('./src/media/video.json', JSON.stringify(Videochoco))
                fs.unlinkSync(delb)
                newReply(`Success Menambahkan Video\nUntuk Melihat Ketik ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Video')
                if (!Videochoco.includes(q)) return newReply("Nama Tidak Ada Di Dalam Database")
                let wanu = Videochoco.indexOf(q)
                Videochoco.splice(wanu, 1)
                fs.writeFileSync('./src/media/video.json', JSON.stringify(Videochoco))
                fs.unlinkSync(`./media/video/${q}.mp4`)
                newReply(`Success Sukses Menghapus Video ${q}`)
            }
            break
            case 'addimage': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Nama Imagenya?')
                if (Imagechoco.includes(q)) return newReply("Nama Yang Kamu Masukan Sudah Terdaftar Di Dalam Database")
                let delb = await choco.downloadAndSaveMediaMessage(quoted)
                Imagechoco.push(q)
                await fsx.copy(delb, `./media/image/${q}.jpg`)
                fs.writeFileSync('./src/media/image.json', JSON.stringify(Imagechoco))
                fs.unlinkSync(delb)
                newReply(`Sukses Menambahkan Image\nUntuk Cek Ketik ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Imagenya')
                if (!Imagechoco.includes(q)) return newReply("Nama Image Yang Kamu Masukan Tidak Terdaftar")
                let wanu = Imagechoco.indexOf(q)
                Imagechoco.splice(wanu, 1)
                fs.writeFileSync('./src/media/image.json', JSON.stringify(Imagechoco))
                fs.unlinkSync(`./media/image/${q}.jpg`)
                newReply(`Suksed Menghapus Image ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Stickernya?')
                if (Stickerchoco.includes(q)) return newReply("Nama Telah Di Pakai")
                let delb = await choco.downloadAndSaveMediaMessage(quoted)
                Stickerchoco.push(q)
                await fsx.copy(delb, `./media/sticker/${q}.webp`)
                fs.writeFileSync('./src/media/sticker.json', JSON.stringify(Stickerchoco))
                fs.unlinkSync(delb)
                newReply(`Sukses Menambahkan Sticker\nUntuk Mengecek Ketik ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Stickernya')
                if (!Stickerchoco.includes(q)) return newReply("Nama Tidak Terdaftar Di Database")
                let wanu = Stickerchoco.indexOf(q)
                Stickerchoco.splice(wanu, 1)
                fs.writeFileSync('./src/media/sticker.json', JSON.stringify(Stickerchoco))
                fs.unlinkSync(`./media/sticker/${q}.webp`)
                newReply(`Sukses Menghapus Sticker ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Namanya?')
                if (Vnchoco.includes(q)) return newReply("Nama Telah Di Pakai")
                let delb = await choco.downloadAndSaveMediaMessage(quoted)
                Vnchoco.push(q)
                await fsx.copy(delb, `./media/audio/${q}.mp3`)
                fs.writeFileSync('./src/media/vn.json', JSON.stringify(Vnchoco))
                fs.unlinkSync(delb)
                newReply(`Sukses Menambahkan Audio\nUntuk Mengecek Ketik ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Namanya')
                if (!Vnchoco.includes(q)) return newReply("Nama Tidak Terdaftar Di Database")
                let wanu = Vnchoco.indexOf(q)
                Vnchoco.splice(wanu, 1)
                fs.writeFileSync('./src/media/vn.json', JSON.stringify(Vnchoco))
                fs.unlinkSync(`./media/audio/${q}.mp3`)
                newReply(`Sukses Menghapus Audio ${q}`)
            }
            break




            /* ~~~~~~~~~ GAME FEATURES ~~~~~~~~~ */
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return newReply('Kamu masih didalam game')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    newReply('Partner ditemukan!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
                    if (room.x !== room.o) await choco.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await choco.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    newReply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        choco.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        newReply(`Session TicTacToe🎮 tidak ada`)
                    } else mewReply('?')
                } catch (e) {
                    newReply('rusak')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) newReply(`Selesaikan suit mu yang sebelumnya`)
                if (m.mentionedJid[0] === m.sender) return newReply(`Tidak bisa bermain dengan diri sendiri !`)
                if (!m.mentionedJid[0]) return newReply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${_owner[1]}`, m.chat, {
                    mentions: [_owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return newReply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
                this.suit[id] = {
                    chat: await choco.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) choco.sendText(m.chat, `_Waktu suit habis_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'kuismath':
            case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let {
                    genMath,
                    modes
                } = require('./lib/math')
                if (!text) return newReply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                choco.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    newReply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'tebak': {
                if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    choco.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        choco.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m)
                        delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    choco.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        choco.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`, m)
                        delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    choco.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        choco.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`, m)
                        delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    choco.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        choco.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`, m)
                        delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tebakan') {
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    choco.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        choco.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m)
                        delete tebaktebakan[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera') {
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    choco.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        choco.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
                        delete tebakbendera[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera2') {
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    choco.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        choco.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[m.sender.split('@')[0]]}`, m)
                        delete tebakbendera2[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kabupaten') {
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    choco.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, m).then(() => {
                        tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.title)
                        choco.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m)
                        delete tebakkabupaten[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kimia') {
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    choco.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`, m).then(() => {
                        tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.lambang)
                        choco.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m)
                        delete tebakkimia[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'asahotak') {
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    choco.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        choco.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m)
                        delete tebakasahotak[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'siapakahaku') {
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    choco.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebaksiapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        choco.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[m.sender.split('@')[0]]}`, m)
                        delete tebaksiapakahaku[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'susunkata') {
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    choco.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, m).then(() => {
                        tebaksusunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        choco.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[m.sender.split('@')[0]]}`, m)
                        delete tebaksusunkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tekateki') {
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    choco.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebaktekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        choco.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[m.sender.split('@')[0]]}`, m)
                        delete tebaktekateki[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'akinator':
                newReply(`Akinator adalah sebuah permainan dan aplikasi perangkat bergerak yang berupaya menebak secara rinci dan pasti isi pikiran pengguna permainan ini melalui serentetan pertanyaan.\n\n~> ${prefix}akinatorstart : Untuk memulai\n~> ${prefix}akinatorstop : Untuk berhenti`)
                break
            case 'akinatorstart':
                if (!isPremium) return newReply(mess.prem)
                if (m.isGroup) return newReply(mess.private)
                if (akinator.hasOwnProperty(m.sender.split('@')[0])) return newReply("Selesein yg sebelumnya dulu atuh")
                get_result = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lol}`)
                let {
                    server, frontaddr, session, signature, question, step
                } = get_result.result
                const data = {}
                data["server"] = server
                data["frontaddr"] = frontaddr
                data["session"] = session
                data["signature"] = signature
                data["question"] = question
                data["step"] = step
                imi_txt = `${question}\n\n`
                imi_txt += "0 - Ya\n"
                imi_txt += "1 - Tidak\n"
                imi_txt += "2 - Saya Tidak Tau\n"
                imi_txt += "3 - Mungkin\n"
                imi_txt += "4 - Mungkin Tidak"
                choco.sendText(m.chat, imi_txt, m).then(() => {
                    akinator[m.sender.split('@')[0]] = data
                    fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
                })
                break
            case 'akinatorstop':
                if (!akinator.hasOwnProperty(m.sender.split('@')[0])) return newReply("Anda tidak memiliki akinator sebelumnya")
                delete akinator[m.sender.split('@')[0]]
                fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
                newReply("Success mengcancel akinator sebelumnya")
                break

            case 'afk':
                if (!m.isGroup) return newReply(mess.group)
                if (isAfkOn) return newReply("Kakak Sudah Afk Sebelumnya")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                newReply(`@${m.sender.split('@')[0]} Sedang AFK\nDengan Alasan : ${reason}`)
                break
            case 'ask':
            case 'openai': {
                if (!isPremium) return newReply(mess.prem)
                if (!full_args) return newReply('What are you looking for in this bot')
                let d = await fetchJson(`https://api.lolhuman.xyz/api/openai?text=${full_args}&apikey=haikalgans`)                
                await choco.sendMessage(from, {
                    text: d.result
                }, { quoted: m})
            }
            break
            /*
            case 'ytplay':
            case 'play':{
               if (!isPremium) return newReply(mess.prem)
               if (!q) return newReply('Search?')
               let h = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${lol}&query=${q}`)
               let { audio, title, thumbnail, description, duration, view, uploader} = h.result
               let mono = '```'
               let tks = `*YT PLAY*\n\n${mono}Title: ${title}\nDuration: ${duration}\nViews: ${view}\nFrom Channel: ${uploader}\nDescription: ${description}${mono}`
               await choco.sendMessage(m.chat, {
                        document: {
                           url: audio.link
                        },
                        mimetype: 'audio/mp3',
                        fileName: title + ".mp3",
                        caption: tks,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: title,
                                body: '',
                                thumbnailUrl: thumbnail,
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                       
                    }, {
                        quoted: m
                    })
            }
            break
            */
            case 'tiktok':
            case 'ttdl':
                if (!q) return newReply('where is the link')
                let e = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lol}&url=${q}`)
                let ee = `*DOWNLOADER TIKTOK*\n\n_Creator:_ ${e.result.author.username} / (${e.result.author.nickname}\n_Title:_ ${e.result.title}\n_Durasi:_ ${e.result.duration}\n_Views:_ ${e.result.statistic.play_count}_Likes:_ ${e.result.statistic.like_count}\n`
                await choco.sendMessage(m.chat, {
                    video: {
                        url: e.result.link
                    },
                    caption: ee
                }, {
                    quoted: m
                })
                break

            case 'tiktokaudio':
            case 'ttaudio': {
                if (!q) return newReply('where is the link')
                let i = await fetchJson(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lol}&url=${q}`)
                choco.sendMessage(m.chat, {
                    audio: {
                        url: i.result
                    },
                    mimetype: 'audio/mp4'
                }, {
                    quoted: m
                })
            }
            break
            case 'cocofun':
                if (!q) return newReply('where is the link')
                let j = await fetchJson(`https://api.lolhuman.xyz/api/cocofun?apikey=${lol}&url=${q}`)
                choco.sendMessage(m.chat, {
                    video: {
                        url: j.result.nowm
                    },
                    caption: j.result.tag
                }, {
                    quoted: m
                })
                break
            case 'mediafire':
                if (!q) return newReply('where is the link')
                let ha = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=${lol}&url=${q}`)
                choco.sendMessage(m.chat, {
                    document: {
                        url: ha.result.link
                    },
                    minetype: '*/*'
                }, {
                    quoted: m
                })
                break
            case 'pin':
            case 'pindl':
                if (!q) return newReply('where is the link')
                let l = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${lol}&url=${q}`)
                await choco.sendMessage(m.chat, {
                    video: {
                        url: l.result
                    }
                }, {
                    quoted: m
                })
                break
            case 'snackvideo':
            case 'sv':
                if (!q) return newReply('where is the link')
                let ma = await fetchJson(`https://api.lolhuman.xyz/api/snackvideo?apikey=${lol}&url=${q}`)
                choco.sendMessage(m.chat, {
                    video: {
                        url: ma.result.url
                    },
                    caption: ma.result.caption
                }, {
                    quoted: m
                })
                break
            case 'ytmp4': {
                if (!q) return newReply('where is the link')
                let n = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${lol}&url=${q}`)
                let mono = '```'
                let ytmp4p = `${mono}Downloader Youtube\n\nTitle: ${n.result.title}\nDiUpload Oleh: ${n.result.uploader}\nLinkChannel: ${n.result.channel}\nDurasi Video: ${n.result.duration}\nDitonton Sebanyak: ${n.result.view}${mono}`
                await choco.sendMessage(m.chat, {
                    document: {
                        url: n.result.link.link
                    },
                    mimetype: 'video/mp4',
                    fileName: "Downloader Ytmp4 By ChocoXploit.mp4",
                    caption: ytmp4p,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: n.result.title,
                            body: '',
                            thumbnailUrl: n.result.thumbnail,
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                }
                break
            case 'ytmp3': {
                if (!q) return newReply('where is the link')
                let n = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${lol}&url=${q}`)
                let mono = '```'
                let ytmp4p = `${mono}Downloader Youtube\n\nTitle: ${n.result.title}\nDiUpload Oleh: ${n.result.uploader}\nLinkChannel: ${n.result.channel}\nDurasi Video: ${n.result.duration}\nDitonton Sebanyak: ${n.result.view}${mono}`
                await choco.sendMessage(m.chat, {
                    document: {
                        url: n.result.link.link
                    },
                    mimetype: 'audio/mp3',
                    fileName: "Downloader Ytmp3 By ChocoXploit.mp3",
                    caption: ytmp4p,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: n.result.title,
                            body: '',
                            thumbnailUrl: n.result.thumbnail,
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                }
                break
            case 'igdl': {
                if (!q) return newReply("Link?")
                let ag = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${lol}&url=${q}`)
                for (var i = 0; i < ag.result.length; i++) {
                    let pap = ag.result[i].includes('.jpg') ? 'image' : 'video'
                    await choco.sendMessage(m.chat, {
                        [pap]: {
                            url: ag.result[i]
                        },
                        caption: ''
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'igdlh':
            case 'highlights': {
                if (!q) return newReply('Link?')
                let ap = await fetchJson(`https://api.lolhuman.xyz/api/ig-highlights?apikey=${lol}&url=${q}`)
                for (var oa = 0; oa < ap.result.length; oa++) {
                    let pap = ap.result[oa].includes('.jpg') ? 'image' : 'video'
                    await choco.sendMessage(m.chat, {
                        [pap]: {
                            url: ap.result[oa]
                        },
                        caption: ''
                    }, {
                        quoted: m
                    })
                }
            }
            break


            case 'qc': {
                const {
                    quote
                } = require('./lib/quote.js')
                if (!q) return newReply('Masukan Text')
                let ppnyauser = await await choco.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                const rest = await quote(q, pushname, ppnyauser)
                await loading ()
                choco.sendImageAsSticker(m.chat, rest.result, m, {
                    packname: `${global.packname}`,
                    author: `${global.author}`
                })
            }
            break
            case 'ttp':
                if (!q) return newReply('Masukan Text')
                await loading ()
                choco.sendMessage(m.chat, {
                    sticker: {
                        url: `https://api.lolhuman.xyz/api/ttp?apikey=${lol}&text=${q}`
                    }
                }, {
                    quoted: m
                })
                break
            case 'attp':
                if (!q) return newReply('Masukan Text')
                await loading ()
                choco.sendMessage(m.chat, {
                    sticker: {
                        url: `https://api.lolhuman.xyz/api/attp?apikey=${lol}&text=${q}`
                    }
                }, {
                    quoted: m
                })
                break

            case 'remini':
            case 'hd': {
                // if (!isPremium) return newReply(mess.prem)
                if (!isMedia) return newReply("Where The A Image")
                let media = await choco.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                choco.sendMessage(m.chat, {
                    image: {
                        url: `https://api.lolhuman.xyz/api/upscale?apikey=${lol}&img=${anu}`
                    },
                    caption: mess.done
                }, {
                    quoted: m
                })
            }
            break
            case 'reminiv2': {
                if (!isPremium) return newReply(mess.prem)
                if (!isMedia) return newReply("Where The A Image")
                let media = await choco.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                await choco.sendMessage(m.chat, {
                    image: {
                        url: `https://api.lolhuman.xyz/api/torch-srgan?url=${anu}&apikey=${lol}`
                    },
                    caption: mess.done
                }, {
                    quoted: m
                })
            }
            break
            case 'removebg':
            case 'nobg': {
                if (!isMedia) return newReply("Where The A Image")
                let media = await choco.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                choco.sendMessage(m.chat, {
                    image: {
                        url: `https://api.lolhuman.xyz/api/removebg?apikey=${lol}&img=${anu}`
                    },
                    caption: mess.done
                }, {
                    quoted: m
                })
            }
            break

            case 'tele':
            case 'telestick': {
                if (!isPremium) return newReply(mess.prem)
                if (!q) return newReply("Link?")
                let agg = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lol}&url=${q}`)
                for (var ki = 0; ki < agg.result.sticker.length; ki++) {
                    await choco.sendImageAsSticker(m.chat, agg.result.sticker[ki], m, {
                        packname: packname,
                        author: author
                    })
                }
            }
            break

            case 'menu':
            case 'help':
            await loading ()
                let mono = '```'
                let menunya = `${mono}
Hello ${pushname} 
 INFO BOT & USER
 TotalUser: ${Object.keys(_user).length} User
 TotalHit : ${JSON.parse(fs.readFileSync('./src/total-hit-user.json'))[0].hit_cmd} Hit
 RoleUser : ${isPremium ? "Premiun" : "Freemiun"}

 INFO WAKTU SETEMPAT
 Date: ${hariini}
 Time: ${wib} WIB
${readmore}
▷ ᴏᴡɴᴇʀ ᴍᴇɴᴜ
${prefix}delsesi
${prefix}setimgqouted
${prefix}setimgmenu
${prefix}setvidmenu
${prefix}cekapikey
${prefix}join
${prefix}ipserver
${prefix}shutdown  
${prefix}restart
${prefix}autoread *[option]*
${prefix}autobio *[option]*
${prefix}mode *[option]*
${prefix}setwm 
${prefix}setppbot
${prefix}block
${prefix}unblock 
${prefix}backup
${prefix}getcase

▷ ᴘʀᴇᴍɪᴜᴍ ᴍᴇɴᴜ
${prefix}reminiv2
${prefix}openai
${prefix}telestick

▷ ɢʀᴏᴜᴘ ᴍᴇɴᴜ
${prefix}closetime
${prefix}opentime
${prefix}kick
${prefix}add
${prefix}promote
${prefix}demote
${prefix}setdecs
${prefix}setppgc
${prefix}tagall
${prefix}hidetag
${prefix}totag
${prefix}gruop *[option]*
${prefix}editinfo
${prefix}linkgc
${prefix}revoke

▷ ᴍᴀɪɴ ᴍᴇɴᴜ
${prefix}botstatus 
${prefix}sewabot
${prefix}speedtest
${prefix}runtime
${prefix}script
${prefix}owner
${prefix}tqto

▷ ɪɴғᴏʀᴍᴀᴛɪᴏᴍ
${prefix}infogempa

▷ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ
${prefix}sticker
${prefix}smeme
${prefix}swm
${prefix}snobg
${prefix}toimage
${prefix}tovideo
${prefix}toaudio
${prefix}tomp3
${prefix}tovn
${prefix}togif

▷ ᴅᴀᴛᴀʙᴀsᴇ ᴍᴇɴᴜ
${prefix}addvideo
${prefix}addimage
${prefix}addsticker
${prefix}addvn
${prefix}delvideo
${prefix}delimage
${prefix}delsticker
${prefix}delvn
${prefix}listvideo
${prefix}listimage
${prefix}liststicker
${prefix}listvn

▷ ɢᴀᴍᴇ ᴍᴇɴᴜ
${prefix}tictactoe
${prefix}suitpvp
${prefix}kuismath
${prefix}tebak gambar
${prefix}tebak kata
${prefix}tebak kalimat
${prefix}tebak lirik
${prefix}tebak tebakan
${prefix}tebak bendera
${prefix}tebak bendera2
${prefix}tebak kabupaten
${prefix}tebak kimia
${prefix}tebak asahotak
${prefix}tebak siapakahaku
${prefix}tebak susunkata
${prefix}tebak tekateki

▷ ᴅᴏᴡɴ ᴍᴇɴᴜ
${prefix}ttdl
${prefix}ttaudio
${prefix}cocofun
${prefix}mediafire
${prefix}snackvideo
${prefix}ytmp3
${prefix}ytmp4
${prefix}igdl
${prefix}igdlh
${prefix}pindl

▷ ᴏᴛʜᴇʀ ᴍᴇɴᴜ
${prefix}qc
${prefix}ttp
${prefix}attp
${prefix}removebg
${prefix}ytplay
${prefix}remini${mono}`
                if (typemenu === 'v1') {
                    choco.sendMessage(m.chat, {
                        image: fs.readFileSync('./media/menu.jpg'),
                        caption: menunya
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    choco.sendMessage(m.chat, {
                        text: menunya,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `Bot Created By ${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    choco.sendMessage(m.chat, {
                        video: fs.readFileSync('./media/menu.mp4'),
                        caption: menunya,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    choco.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: menunya
                        }
                    }, {})
                }
                break
            default:
                  if (isSimi && body != undefined) {
                     // res = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lol}&text=${body}&badword=true`)
                     // res = await fetchJson(`https://api.simsimi.net/v2/?text=${body}&lc=id`)
                     // m.reply(res.success)
                  }
                if (budy.startsWith('=>')) {
                    if (!isCreator) return newReply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return newReply(bang)
                    }
                    try {
                        newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        newReply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return newReply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await newReply(evaled)
                    } catch (err) {
                        await newReply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return newReply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return newReply(err)
                        if (stdout) return newReply(stdout)
                    })
                }
        }
    } catch (err) {
        choco.sendText(numberowner + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
