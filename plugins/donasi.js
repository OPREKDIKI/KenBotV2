import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix }) => {
let pp = 'https://telegra.ph/file/16770368c41f32cf80883.jpg'
let name = await conn.getName(m.sender)
let but1 = 'πΎπ πππ'
let bit = usedPrefix + 'owner'
let donasi = `[ β£ ] πππππ = πΈπ π²ππππππ
[ β£ ] π³πππ = 6281260730830
[ β£ ] πΆππππ’ = πΈπ π²ππππππ
[ β£ ] πππ ππππ = saweria.co/DikiSimarmata

π½πππ : πππππ π³πππππ πΉππ π»πππ πΊππππ π±ππππ`
await conn.sendButtonDoc(m.chat, ucapan + name, donasi, but1, bit, fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: 'β πΊππ-π±ππ',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: 'β πΊππ-π±ππ',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: 'π³πππππ π³πππ πΉππ π³π π»πππππ'  
				}
			}
})
}
handler.tags = ['donasi', 'donate']
handler.help = ['info']
handler.command = /^(donate|donasi)$/i

export default handler