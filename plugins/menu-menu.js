import fetch from 'node-fetch'
import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss') 
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let pp = hwaifu.getRandom()
    let thum = thumbnailUrl.getRandom()
    let name = await conn.getName(who)
    let pepe = await conn.resize(pp, 350, 400)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    
    let totalf = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     
  let cap = `☰ ━━━━〘 𝙼𝙴𝙽𝚄 𝙸𝙽𝙵𝙾 〙━━━━ ☰
  
☞ *𝙸𝙽𝙵𝙾 𝙼𝚄*
  ◉ 𝙽𝚊𝚖𝚊 : ${name}
  ◉ 𝚂𝚝𝚊𝚝𝚞𝚜 : ${who.premiumTime > 0 ? 'Premium' : 'Free'}
  ◉ 𝙻𝚒𝚖𝚒𝚝 : ${limit}
  ◉ 𝚂𝚊𝚕𝚍𝚘 : R𝐩 ${money}
  ◉ 𝙴𝚡𝚙 : ${exp}
  ◉ 𝚁𝚘𝚕𝚎 : ${role}
  ◉ 𝚄𝚖𝚞𝚛: ${age}

☞ *𝙸𝙽𝙵𝙾 𝙱𝙾𝚃*
  ◉ 𝚁𝚞𝚗𝚗𝚒𝚗𝚐 𝙾𝚗 : 𝙻𝚒𝚗𝚞𝚡
  ◉ 𝙼𝚘𝚍𝚎 : Public
  ◉ 𝚃𝚒𝚖𝚎 : ${time}
  `
await conn.sendButton(m.chat, cap, '◉ 𝙾𝚏𝚏𝚌𝚒𝚊𝚕 𝙱𝚘𝚝 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙', Buffer.alloc(0), [['List Menu', '.tesm'], ['All Menu', '/allmenu']], fkontak, { mimetype: "text/rtf", fileName: '𝑺𝒊𝒎𝒑𝒍𝒆 𝑩𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 𝑩𝒚Andre' + nameown1, pageCount: 90000, fileLength: 90000, seconds: 90000, jpegThumbnail: pepe,
          contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '◉ 𝙺𝚎𝚗-𝙱𝚘𝚝',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '◉ 𝙺𝚎𝚗-𝙱𝚘𝚝',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: 'Hai, ' + name
				}
	  }
})
}

handler.command = /^(menu|help)$/i

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }