let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;𝙳𝚒𝚔𝚒𝚂𝚒𝚖𝚊𝚛𝚖𝚊𝚝𝚊\nNICKNAME:👑 𝙾𝚠𝚗𝚎𝚛 𝙺𝚎𝚗𝙱𝚘𝚝\nORG:𝙳𝚒𝚔𝚒\nTITLE:soft\nitem1.TEL;waid=${nomorown}:+62 812-6073-0830\nitem1.X-ABLabel:📞 𝙽𝚘𝚖𝚘𝚛 𝙾𝚠𝚗𝚎𝚛\nitem2.URL:dikisimarmata.tk\nitem2.X-ABLabel:◉𝚆𝚎𝚋𝚜𝚒𝚝𝚎\nitem3.EMAIL;type=INTERNET:diki@kenbot.tk\nitem3.X-ABLabel:✉️𝙺𝚎𝚗 𝙱𝚘𝚝 𝙾𝚠𝚗𝚎𝚛 𝙼𝚊𝚒𝚕\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:𝙰𝚗𝚍𝚊 𝚃𝚎𝚛𝚕𝚊𝚕𝚞 𝙿𝚒𝚗𝚐𝚒𝚗 𝙼𝚎𝚗𝚐𝚎𝚝𝚊𝚑𝚞𝚒𝚗𝚢𝚊\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `𝙷𝚊𝚕𝚘 *${name} @${who.split("@")[0]}*, 𝚃𝚞𝚑 𝙽𝚘𝚖𝚘𝚛 𝙽𝚢𝚊 𝙹𝚊𝚗 𝙳𝚒 𝚂𝚙𝚊𝚖 𝚂𝚙𝚊𝚖 𝙱𝚊𝚗`
await conn.reply(m.chat, caption, m, { quoted: tag_own, mentions: conn.parseMention(caption) })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler