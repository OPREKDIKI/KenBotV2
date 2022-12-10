import fs from 'fs'

let handler = async (m, { conn, usedPrefix, command }) => {
if (db.data.users[m.sender].premiumTime < 1) return m.reply('KHUSUS PREMIUM USER')
let hentai = JSON.parse(fs.readFileSync('./json/hentai.json'))
let res =  hentai[Math.floor(Math.random() * hentai.length)]
conn.sendButtonImg(m.chat, res, '❏  *H E N T A I*\n\nTch, Dasar Sange', author, 'Next', usedPrefix + 'hentai', m)
}
handler.help = ['hentai']
handler.tags = ['nsfw', 'premium']
handler.command = ['hentai']

export default handler