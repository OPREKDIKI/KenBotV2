import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix }) => {
let pp = 'https://telegra.ph/file/16770368c41f32cf80883.jpg'
let name = await conn.getName(m.sender)
let but1 = '𝙾𝚠𝚗𝚎𝚛'
let bit = usedPrefix + 'owner'
let donasi = `[ ▣ ] 𝚂𝚑𝚘𝚙𝚎 = 𝙸𝚗 𝙲𝚘𝚖𝚖𝚒𝚗𝚐
[ ▣ ] 𝙳𝚊𝚗𝚊 = 6281260730830
[ ▣ ] 𝙶𝚘𝚙𝚊𝚢 = 𝙸𝚗 𝙲𝚘𝚖𝚖𝚒𝚗𝚐
[ ▣ ] 𝚂𝚊𝚠𝚎𝚛𝚒𝚊 = saweria.co/DikiSimarmata

𝙽𝚘𝚝𝚎 : 𝚂𝚞𝚍𝚊𝚑 𝙳𝚘𝚗𝚊𝚜𝚒 𝙹𝚊𝚗 𝙻𝚞𝚙𝚊 𝙺𝚒𝚛𝚒𝚖 𝙱𝚞𝚔𝚝𝚒`
await conn.sendButtonDoc(m.chat, ucapan + name, donasi, but1, bit, fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '◈ 𝙺𝚎𝚗-𝙱𝚘𝚝',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '◈ 𝙺𝚎𝚗-𝙱𝚘𝚝',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: '𝙳𝚘𝚗𝚊𝚜𝚒 𝙳𝚘𝚗𝚐 𝙹𝚊𝚗 𝙳𝚒 𝙻𝚒𝚊𝚝𝚒𝚗'  
				}
			}
})
}
handler.tags = ['donasi', 'donate']
handler.help = ['info']
handler.command = /^(donate|donasi)$/i

export default handler