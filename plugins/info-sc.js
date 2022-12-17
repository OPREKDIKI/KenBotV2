import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
let imgr = fla.getRandom()
let pp = imgr + 'Info Script'
let name = await conn.getName(m.sender)
let cap = `Hai ${name} ${ucapan}

[ ! ] 𝙴𝚗𝚊𝚔 𝙱𝚎𝚝 𝙼𝚒𝚗𝚝𝚊𝚗𝚢𝚊

Mau Tanya Sama Owner ?
[ Click Link Di Bawah ! ]
`
await conn.sendButtonDoc(m.chat, cap, author, 'Owner', usedPrefix + 'owner', fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '◕ 𝙺𝚎𝚗-𝙱𝚘𝚝',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '◕ 𝙺𝚎𝚗-𝙱𝚘𝚝',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await (await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: '𝙷𝚖𝚖'  
				}
			}
})
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|script|sckenbot)$/i

export default handler
