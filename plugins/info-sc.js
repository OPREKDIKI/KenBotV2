import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
let imgr = fla.getRandom()
let pp = imgr + 'Info Script'
let name = await conn.getName(m.sender)
let cap = `Hai ${name} ${ucapan}

[ ! ] π΄πππ π±ππ πΌππππππ’π

Mau Tanya Sama Owner ?
[ Click Link Di Bawah ! ]
`
await conn.sendButtonDoc(m.chat, cap, author, 'Owner', usedPrefix + 'owner', fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: 'β πΊππ-π±ππ',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: 'β πΊππ-π±ππ',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await (await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: 'π·ππ'  
				}
			}
})
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|script|sckenbot)$/i

export default handler
