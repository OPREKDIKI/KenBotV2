let handler = async(m, { conn, text, usedPrefix, command }) => {
let krtu = `╭───────────────
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *JenisKelamin :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
│ *Status     :* 
╰───────────────`
conn.reply(m.chat, krtu, fkontak)
}
handler.command = /^(intro)$/i

export default handler