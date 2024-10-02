//｡☆✼★━━━━━━ATENÇÃO━━━━━━━━━━★✼☆｡
//.        SANDRO BOT DOMINA BB
//｡☆✼★━━━━━━ATENÇÃO━━━━━━━━━━★✼☆｡

//Créditos Por ajudar
//YURI MODZ
require("./dono.js")

const { 
default:
makeWASocket, 
downloadContentFromMessage,
generateWAMessageContent,
generateWAMessageFromContent,
makeCacheableSignalKeyStore,
StylePrivWaFromMessage,
delay,
useMultiFileAuthState,
BufferJSON,
proto,
close,
prepareWAMessageMedia, 
MediaType,
MessageType,
ChatModification,
DisconnectReason,
relayWAMessage,
fetchLatestBaileysVersion,
WASocket,
Browsers,
EyeWaSocket,
makeInMemoryStore,
} = require('@WhiskeySockets/baileys');

// ──────┤MODULOS├────── //

const webp_mp4 = require("./arquivos/lib/webp_mp4.js");

const { getRandom} = require('./arquivos/funções/myfunc.js');

const { exec } = require("child_process")

const totalcmd = "787"

const chalk = require('chalk');

const { runtime } = require("./arquivos/myfunc")

const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };

let pino = require('pino')

const { init, askAI } = require('bard-ai');

const fs = require('fs')

const PhoneNumber = require('awesome-phonenumber')

const cfonts = require('cfonts')

const axios = require('axios');

const infoSystem = require('os')

const NodeCache = require('node-cache')

const readline = require('readline')

const util = require("util")

const path = require("path")

const fetch = require('node-fetch');

const speed = require('performance-now')

const moment = require('moment-timezone');

const ffmpeg = require('fluent-ffmpeg');

const mimetype = require("mime-types")

const BodyForm = require("form-data")

const { Boom }  = require('@hapi/boom');

const crypto = require('crypto');

const encodeUrl = require('encodeurl');

const cheerio = require('cheerio');

const { getBuffer, getGroupAdmins,} = require('./datab/myfunc')

const { Configuration, OpenAIApi } = require("openai");

const { menu } = require('./menus/menu.js')

const { logos } = require('./menus/logos.js')

const { criado } = require('./menus/criador.js')

const { menuvip } = require('./menus/menuvip.js')

const { menutravazap } = require('./menus/menutravazap.js')

const { menu1 } = require('./menus/menu1.js')

const { alugar } = require('./menus/alugar.js')

const { emoji2 } = require ('./settings.json')

const { menudono } = require('./menus/menudono.js')

const { menujogos } = require('./menus/menujogos.js')

const antilink = JSON.parse(fs.readFileSync('./loli/seguranca/antilink.json'))

const samih = JSON.parse(fs.readFileSync('./arquivos/usuarios/simi.json'));

const samih2 = JSON.parse(fs.readFileSync('./arquivos/funções/simi.json'));

const antilinkgp = JSON.parse(fs.readFileSync('./arquivos/antis/antilinkgp.json'))

const premium = JSON.parse(fs.readFileSync('./Premiums/usuarios/premium.json'));

const antiporn = JSON.parse(fs.readFileSync('./arquivos/antis/antiporn.json'))

const antidoc = JSON.parse(fs.readFileSync('./arquivos/antis/antidoc.json'))

const { conselhob } = require('./arquivos/funções/conselhob.js');

const antictt = JSON.parse(fs.readFileSync('./arquivos/antis/antictt.json'))

const casa = JSON.parse(fs.readFileSync('./funções_rpg/casa/casa.json'));

const modobn = JSON.parse(fs.readFileSync('./arquivos/grupos/brincadeiras.json'));

const antiflood = JSON.parse(fs.readFileSync('./arquivos/usuarios/antiflood.json'));

const limitefll = JSON.parse(fs.readFileSync('./arquivos/usuarios/flood.json'));

const registros = JSON.parse(fs.readFileSync('./arquivos/registro/registros.json'));

const antiloc = JSON.parse(fs.readFileSync('./arquivos/antis/antiloc.json'))

const antifake = JSON.parse(fs.readFileSync('./arquivos/antis/antifake.json'))

const carab = JSON.parse(fs.readFileSync('./funções_rpg/carab/carab.json'));

const nescessario = JSON.parse(fs.readFileSync('./arquivos/nescessario.json'));

const antiaudio = JSON.parse(fs.readFileSync('./arquivos/antis/antiaudio.json'))

const caussa = JSON.parse(fs.readFileSync('./funções_rpg/caussa/caussa.json'));

const anotar = JSON.parse(fs.readFileSync('./database/func/tabela/anotar.json'));

const tagrico = JSON.parse(fs.readFileSync('./funções_rpg/tagrico/tagrico.json'));

const sapato = JSON.parse(fs.readFileSync('./funções_rpg/sapato/sapato.json'));

const palitor = JSON.parse(fs.readFileSync('./funções_rpg/palitor/palitor.json'));

const antisticker = JSON.parse(fs.readFileSync('./arquivos/antis/antisticker.json'))

const countMessage = JSON.parse(fs.readFileSync('./arquivos/grupos/countmsg.json'));

const antinotas = JSON.parse(fs.readFileSync('./arquivos/antis/antinotas.json'))

const antipv = JSON.parse(fs.readFileSync('./arquivos/usuarios/antipv.json'))

const adeuscara = JSON.parse(fs.readFileSync('./arquivos/grupos/adeuscara.json'));

const espada = JSON.parse(fs.readFileSync('./funções_rpg/espada/espada.json'));

const anticatalogo = JSON.parse(fs.readFileSync('./arquivos/antis/anticatalogo.json'))

const autoreact = JSON.parse(fs.readFileSync('./arquivos/funções/autoreact.json'))

const muted = JSON.parse(fs.readFileSync('./database/usuarios/muted.json'))

const antivid = JSON.parse(fs.readFileSync('./arquivos/antis/antivideo.json'))

const aguacoco = JSON.parse(fs.readFileSync('./funções_rpg/agua/aguacoco.json'));

const roupab = JSON.parse(fs.readFileSync('./funções_rpg/roupa/roupab.json'));

const dindin = JSON.parse(fs.readFileSync("./funções_rpg/dinheiro/dindin.json"));

const antiimg = JSON.parse(fs.readFileSync('./arquivos/antis/antiimg.json'))

const { menu18 } = require("./menus/menu18.js")

const { tabela } = require('./arquivos/grupos/tabela');


var { verificado } = require("./settings/nescessario.json")


//COLOCA OS JSON AKI

const API_KEY_SHADOW = "apikey-do-flexa"
const API_KEY_SABRINA = "api-do_flexa"
const API_KEY_DANIEL = "daniel-api3";

//ARQUIVOS JS
const { banner } = require('./loli/browser/browser.js');
const { 
getExtension, Random, 
getFileBuffer,
} = require("./loli/browser/get.js")
const { fetchJson } = require('./arquivos/funções.js');
const { addFlod , isFlod } = require('./spam.js')
const { isFiltered, addFilter } = require('./spam.js')
const { palavras } = require('./arquivos/lib/conselhos.js');

//ARQUIVOS PARA SUAS CARACTERES TRAVAZAP CASO VOCÊ NÃO FOR TRAVAZAP IGNORE😆
const { carrinho } = require('./loli/travas/carrinho')
const { ctt } = require('./loli/travas/ctt')
const { txt } = require('./loli/travas/txt')
const { ios } = require('./loli/travas/ios')
const { ui } = require('./loli/travas/ui')
//ARQUIVOS DA CONFIG PREFIX DONO E NOME BOT CASO NÃO SAIBA MEXE NÃO MEXA NISSO DEIXA ASSIM OU VAI CAUSAR ERRO
donoName = global.donoName
botName = global.botName
donoNumber = global.donoNumber
prefix = global.prefix
// IGNORE //
function kyun(seconds){
function pad(s){ return (s < 10 ? '0' : '') + s;}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

//// DATA E HORA PIKEMON

data = moment.tz("America/Sao_Paulo").format("DD/MM/YY");

hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const msgRetryCounterCache = new NodeCache();


async function ligarbot() {
let phoneNumber = "553172595934"
const store = makeInMemoryStore({ logger: pino().child({ level: 'debug', stream: 'store' }) })
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")


const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))


//// DATA E HORA PIKEMON

data = moment.tz("America/Sao_Paulo").format("DD/MM/YY");

hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const { state, saveCreds } = await useMultiFileAuthState('./datab/qr-code')
const { version, isLatest} = await fetchLatestBaileysVersion();

const loli = makeWASocket({
  logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode,
      mobile: useMobile,
      browser: ['Chrome (Linux)'],
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      browser: ['Chrome (Linux)', '', ''],
      markOnlineOnConnect: true,
      generateHighQualityLinkPreview: true,
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache,
      defaultQueryTimeoutMs: undefined,
   })
//==========================================\\

if (pairingCode && !loli.authState.creds.registered) {
console.log(`${chalk.redBright("Coloque o número de whatsapp. Exemplo: +553172595934")}:`);
let phoneNumber = await question(`   ${chalk.cyan("- Número")}: `);
phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

let code = await loli.requestPairingCode(phoneNumber);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(` 🥶 ${chalk.redBright("Seu código")}:`);
console.log(`   ${chalk.cyan("- Código")}: ${code}`);
rl.close();
}

const banner = cfonts.render(("SANDRO|MD"), {
font: "block",
align: "center",
colors: [`cyan`,`white`,`cyan`],
})

loli.ev.on('creds.update', saveCreds);
store.bind(loli.ev)
loli.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})
loli.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})
loli.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);
if(shouldReconnect) {
startBase()
}
} else if(connection === "open") {
console.log(banner.string)
console.log(`${color(`${botName} Conectado com sucesso ✓ `,'cyan')}`)
}
})

loli.ev.on('contacts.set', () => {
console.log('setando contatos...')
})

loli.ev.on('creds.update', saveCreds)

loli.ev.on('messages.upsert', async ({ messages }) => {
try {
//=============funções
const info = m = messages[0]
if (!info.message) return 

const key = {
    remoteJid: info.key.remoteJid,
    id: info.key.id, 
    participant: info.key.participant 
}
await loli.readMessages([key])

if (info.key && info.key.remoteJid == 'status@broadcast') return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]

type_message = JSON.stringify(info.message)

const isQuotedImage = type === "extendedTextMessage" && type_message.includes("imageMessage")
const from = m.chat = info.key.remoteJid


/// ==============budy
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

///============body
var body = (type === 'conversation') ?
info.message.conversation : (type == 'imageMessage') ?
info.message.imageMessage.caption : (type == 'videoMessage') ?
info.message.videoMessage.caption : (type == 'extendedTextMessage') ?
info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ?
info.message.buttonsResponseMessage.selectedButtonId : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectenviar.selectedRowId.startsWith(prefix) && info.message.listResponseMessage.singleSelectenviar.selectedRowId) ? info.message.listResponseMessage.singleSelectenviar.selectedRowId : (type == 'templateButtonenviarMessage') ?
info.message.templateButtonenviarMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectenviar.selectedRowId || info.text) : ''
////========
const content = JSON.stringify(info.message);
const isCmd = body.startsWith(prefix)

const isGroup = from.endsWith("@g.us")


// Render de Jogos
gayzin = gayzão
fein = feião 
matei = mateii
cornin = cornão
vesgin = vesgão
bebin = bebão
gadin = gadão
gostosin = gostosão
gostosinha = gostosona 
hitler = nazista
tapinha = tapão
beijin = beijão
chutin = chutão
dancinha = dança 
casalzin = casar
soquin = socão 
By = "SANDRO-BOT"

//================= Funções de Grupo 🥋 =============//

const dirGroup = `./arquivos/grupos/${from}.json`;

const nescj = "./dono/nescessario.json";

const data_IDGP = [{
groupId: from, x9: false, 
antiimg: false, antivideo: false,
antiaudio: false, antisticker: false,
antidoc: false, antictt: false,
antiloc: false, antilinkgp: false,
antilinkhard: false,
Odelete: false, antispam: false, 
antinotas: false, anticatalogo: false,
sistemGold: false, visuUnica: false, 
registrarFIGUS: false, soadm: false,
rg_aluguel: false,
listanegra: [], advertir: [], prefixos: ["!"],
advertir2: [], legenda_estrangeiro: "0",
legenda_documento: "0", legenda_video: "0",
legenda_imagem: "0", multiprefix: false, 
forca_ofc: [{acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0}],
minerar_gold: [], ausentes: [], forca_inc: false, 
antipalavrao: {
active: false,
palavras: []
},
limitec: {
active: false,
quantidade: null
},
wellcome: [{
bemvindo1: false,
legendabv: "Olá #numerodele#, seja bem vindo (a)",
legendasaiu: 0
},
{
bemvindo2: false,
legendabv: "Olá #numerodele#, seja bem vindo (a)",
legendasaiu: 0
}],
simi1: false, simi2: false,
autosticker: false, autoresposta: false,
jogos: false, level: false,
bangp: false, nsfw: false
}];

if(isGroup && !fs.existsSync(dirGroup)){
fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP, null, 2) + '\n');
}

try {
var dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined;
} catch (e){
fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP));
}

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2))}

/////=================
const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
const sender = isGroup ? info.key.participant: from
const command = comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const nome = pushName = info.pushName ? info.pushName: botName 
const pushname = info.pushName ? info.pushName : ""
const groupMetadata = isGroup ? await loli.groupMetadata(from): ""
const participants = isGroup ? await groupMetadata.participants : ''
const groupName = isGroup  ? groupMetadata.subject: ""
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const args = body.trim().split(/ +/).splice(1)
const q = text = args.join(' ')
const So_Adm = isGroup ? dataGp[0].soadm: undefined
const IS_sistemGold = isGroup ? dataGp[0].sistemGold : undefined
const criador = `${donoNumber}@s.whatsapp.net`
const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined
const numeroBot = loli.user.id.split(":")[0]+"@s.whatsapp.net"
const isCreator = criador.includes(sender)
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotAdmins = groupAdmins.includes(numeroBot) || false
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const isPremium = premium.includes(sender)
const TOKEN_GPT = nescessario.TOKEN_GPT


    loli.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await loli.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }
   
//********************************************//

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./arquivos/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./arquivos/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./arquivos/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}


const { mensagens } = require('./arquivos/funções/aleatoria.js');

var texto_exato = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 

const texto = texto_exato.slice(0).trim().split(/ +/).shift().toLowerCase()

async function escrever (texto) {
await loli.sendPresenceUpdate('composing', from) 
await esperar(1000)   
loli.sendMessage(from, { text: texto }, {quoted: info})
}

const min = JSON.parse(fs.readFileSync('./sandroft/edite/fotos.json'))
megu = min.megumax

const reply = (texto) => {
mimi = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
 loli.sendMessage(from, {
document: fs.readFileSync('./arquivos/lib/arquivo.xlsx'),
mimetype: mimi,
jpegThumbnail: null,
mentions: null,
fileName: `${botName}`,
fileLength: 9999999999999999999999999999,
caption: texto,
footer: `Usuario:${pushname}`, 
contextInfo:{"externalAdReply": {"title": `${botName}`,"body": `Nome: ${pushname} `, "previewType": "PHOTO","thumbnailUrl": `${megu}`,"thumbnail":  Buffer,"sourceUrl": "https://wa.me/553172595934?text=Slv%20sandro"}}}, { quoted: info})}
          
const esperar = sleep = async (tempo) => {
    return new Promise(funcao => setTimeout(funcao, tempo));
}

const checkATMuser = (sender) => {

let position = false
Object.keys(dindin).forEach((i) => {
if (dindin[i].id === sender) {
position = i
}
})
if (position !== false) {
return dindin[position].dindin
}
}

const confirmATM = (sender, amount) => {

let position = false
Object.keys(dindin).forEach((i) => {
if (dindin[i].id === sender) {
position = i
}
})
if (position !== false) {
dindin[position].dindin -= amount
fs.writeFileSync('./funções_rpg/dinheiro/dindin.json', JSON.stringify(dindin))
}
}


const addKoinUser = (sender, amount) => {

let position = false
Object.keys(dindin).forEach((i) => {
if (dindin[i].id === sender) {
position = i
}
})
if (position !== false) {
dindin[position].dindin += amount
fs.writeFileSync('./funções_rpg/dinheiro/dindin.json', JSON.stringify(dindin))
}
}

const addATM = (sender) => {

const obj = {
 id: sender,
 dindin: 0
};
dindin.push(obj)
fs.writeFileSync('./funções_rpg/dinheiro/dindin.json', JSON.stringify(dindin))
}

const msgSemQuoted = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return loli.sendMessage(from, options, {quoted: info}).catch(e => {
reply("Erro ao enviar a mensagem..");
})
}

// PRA LIMPAR DO CONTADOR QUEM NÃO ESTÁ NO GRUPO
async function LIMPARDOCNT_QUEMJASAIU() {
var RD_CNT = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
CNT1 = []; for ( i of groupMembers) {CNT1.push(i.id)} 
CNT = []; for ( i of RD_CNT) {
if(!CNT1.includes(i.id)) CNT.push(i)}
for ( i of CNT) {
RD_CNT.splice(RD_CNT.map(i => i.id).indexOf(i.id), 1)}
fs.writeFileSync("./arquivos/countmsg.json", JSON.stringify(countMessage, null, 2))
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
loli.sendMessage(idgp, reactionMessage)
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
loli.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: info}) 
}

// MUTAR USUÁRIO 
const GroupsMutedActived = []
for(let obj of muted) {
    GroupsMutedActived.push(obj.jid)
}
const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
if(isMuted && NumbersMuted.indexOf(sender) >= 0){
reply(`🐤😡 *Você deu um piu?* - Agora prepare-se para o seu julgamento!`)
setTimeout(async () => {
    loli.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
return
}

if (isCmd) {
if (isFiltered(sender)) {
return reply(mess.floodCommands())
} else {
addFilter(sender)
}
} 

const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
loli.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: info}) 
}
//--------------//

//SISTEMA RPG\\


const isRoupab = roupab.includes(sender)

const iscasa = casa.includes(sender)

const isaguacoco = aguacoco.includes(sender)

const isCarab = carab.includes(sender) 

const isCaussa = caussa.includes(sender)

const istagrico = tagrico.includes(sender)

const isSapato = sapato.includes(sender)

const isPalitor = palitor.includes(sender) 

const isespada = espada.includes(sender)




//sistema banco//



const checkATM = checkATMuser(sender)
             try {
                 if (checkATM === undefined) addATM(sender)
                 const dinheirosaku = Math.floor(Math.random() * 0) + 0//GANHA ENTRA 10 * 50 POR CADA MSG
                  addKoinUser(from, dinheirosaku)
              } catch (err) {
                 console.error(err)
             }

//================//isquoted/const
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
 
const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const exportion = JSON.parse(fs.readFileSync('./exportion.json'))

const isAntiImg = isGroup ? antiimg.includes(from) : false

const isAntiVid = isGroup ? antivid.includes(from) : false	

const isAutoReact = isGroup ? autoreact.includes(from) : false

const isAntiLink = isGroup ? antilink.includes(from) : false

const isAntiNotas = isGroup ? antinotas.includes(from) : false

const isAntiCtt = isGroup ? antictt.includes(from) : false

const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	

const isAntiAudio = isGroup ? antiaudio.includes(from) : false

const isModobn =  isGroup ? modobn.includes(from) : true

const Antidoc = isGroup ? antidoc.includes(from) : false

const isAntiFlood = isGroup ? antiflood.includes(from) : false	

const isAnticatalogo = isGroup ? anticatalogo.includes(from) : false

const isSimi2 = isGroup ? samih2.includes(from) : false

const isAntifake = isGroup ? antifake.includes(from) : false

const Antiloc = isGroup ? antiloc.includes(from) : false

const isAntiSticker = isGroup ? antisticker.includes(from) : false

const isAntiPorn = isGroup ? antiporn.includes(from) : true

const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"

const isSimi = isGroup ? samih.includes(from) : false

const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false
        
const sender_ou_n = q.includes("@") ? menc_jid : sender


const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? loli.sendMessage(from, {text: teks.trim(), mentions: memberr}) : loli.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'ʙᴏᴀ ᴍᴀᴅʀᴜɢᴀᴅᴀ 🌒'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'ʙᴏᴀ ᴅɪᴀ 🌕'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'ʙᴏᴀ ᴛᴀʀᴅᴇ 🌗'
} if(time2 > "18:00:00"){
var tempo = 'ʙᴏᴀ ɴᴏɪᴛᴇ 🌑'
}

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

// VERIFICADOS ⭐️
const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}
const may = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': `${botName}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',  forwardingScore: 508, isForwarded: true,'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('./loli/image/menu.jpg')} } }
const selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${botName}`, 'jpegThumbnail': fs.readFileSync('./loli/image/menu.jpg')}}}

const menc_os2 = q.includes("@") ? menc_jid : menc_prt 


 if (!isGroup && isCmd) console.log(
color(`𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐍𝐎 𝐏𝐑𝐈𝐕𝐀𝐃𝐎`,'red'),'\n',
color('⪼ NOME DO BOT:','red'),color(botName, 'cyan'),'\n',
color('⪼ USUÁRIO:','red'),color(pushname,'cyan'),'\n',
color('⪼ COMANDO:','red'),color(budy, 'cyan'),'\n',
color('⪼ HORÁRIO:','red'),color(hora,'cyan'),'\n',
color('⪼ DAТA:','red'),color(data,'cyan'),'\n')

if (!isCmd && !isGroup) console.log(
color(`𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐍𝐎 𝐏𝐑𝐈𝐕𝐀𝐃𝐎`,'red'),'\n',
color('⪼ NOME DO BOT:','red'),color(botName, 'cyan'),'\n',
color('⪼ USUÁRIO:','red'),color(pushname,'cyan'),'\n',
color('⪼ MENSAGEM:','red'),color(budy,'cyan'),'\n',
color('⪼ HORÁRIO:','red'),color(hora,'cyan'),'\n',
color('⪼ DATA:','red'),color(data,'cyan'),'\n')

if (isCmd && isGroup) console.log(
color(`𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎`,'red'),'\n',
color('⪼ NOME DO BOT:','red'),color(botName, 'cyan'),'\n',
color('⪼ NOME DO GRUPO:','red'),color(groupName,'cyan'),'\n',
color('⪼ USUÁRIO:','red'),color(pushname,'cyan'),'\n',
color('⪼ COMANDO:','red'),color(budy,'cyan'),'\n',
color('⪼ HORÁRIO:','red'),color(hora,'cyan'),'\n',
color('⪼ DATA:','red'),color(data,'cyan'),'\n')

if (!isCmd && isGroup) console.log(
color(`𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎`,'red'),'\n',
color('⪼ NOME DO BOT:','red'),color(botName, 'cyan'),'\n',
color('⪼ NOME DO GRUPO:','red'),color(groupName,'cyan'),'\n',
color('⪼ USUÁRIO:','red'),color(pushname,'cyan'),'\n',
color('⪼ MENSAGEM:','red'),color(budy,'cyan'),'\n',
color('⪼ HORÁRIO:','red'),color(hora,'cyan'),'\n',
color('⪼ DATA:','red'),color(data,'cyan'),'\n')

//
msg = {
registro: "_[❗] Para ver o menu você precisa se registrar use /login_",
botadm: "[❗] bot precisa ser adm",
aguarde: "[❗] aguarde uns minutinho estou processado👨‍🦯",
dono: "[❗] este comando so podera ser usado pelo meu dono💣",
grupo: "[❗] este comando so pode ser usado em grupo🫂",
private: "[❗] este comando so pode ser usado no privado👀",
premium: "[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*",
adm: "este comando so pode ser usado por um adm",
botadm: "[❗] bot precisa ser adm pra executar esse comando",
erro: "[❗] ocorreu uma falha no comando por favor aguarde ate meu dono ajeitar", 
dono: "[❗] Esse comando so pode ser usado pelo meu dono!!!",
abrindomenu: "_[❗]Carregando menu aguarde..._",
}

const foto = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"imageMessage": {
"caption": ' •𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂• ',
"jpegThumbnail": fs.readFileSync('./loli/image/menu.jpg')
}}}

const order = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"orderMessage": {
"thumbnail": fs.readFileSync('./loli/image/menu.jpg'),
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `👁 •𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂• 👁`,
}}}


switch(comando) {

case 'comprarbot': case 'comprabot':
await delay(5000)
reply(`Ok vou te mandar a chave pix para você efetuar o pagamento, aguarde...`)
await delay(8000)
reply(`Qual forma você quer efetuar o pagamento?

/email
/telefone
/chavealeatoria`)
break

case 'email':
await delay(3000)
reply(`Ok enviando email`)
await delay(4000)
reply(`aqui esta a chave para você efetuar o pagamento`)
await delay(4000)
reply(`kiritomoderxxx@gmail.com`)
await delay(110000)
reply(`❌_Não identifiquei o seu pagamento_❌
Entre em contato com o desenvolvedor 👉🏻 Wa.me/553172595934`) 
break

case 'telefone': case 'tell':
await delay(3000)
reply(`Ok enviando chave...`)
await delay(4000)
reply(`aqui esta a chave para você efetuar o pagamento`)
await delay(5000)
reply(`+5531998630187`)
await delay(110000)
reply(`❌_Não identifiquei o seu pagamento_❌
Entre em contato com o desenvolvedor 👉🏻 Wa.me/553172595934`) 
break

case 'chavealeatoria': case 'chavealeatória':
await delay(3000)
reply(`Ok enviando chavealeatoria...`)
await delay(4000)
reply(`2d616b1e-f9bf-4831-8420-c0633e3310ac`)
await delay(110000)
reply(`❌_Não identifiquei o seu pagamento_❌
Entre em contato com o desenvolvedor 👉🏻 Wa.me/553172595934`) 
break
//Todos os comandos estão funcionando normalmente mas estao tudo embaralhado 😅😅 e isso boa sorte.\\

case 'figurinha': case 's': case 'stickergifp': case 'figura': case 'f': case 'figu': case 'st': case 'stk': case 'fgif':

{
(async function () {
var legenda = q ? q?.split("/")[0] : `╼⊳⊰ Solicitado Por:
╼⊳⊰ Bot:
╼⊳⊰ Dono:`
var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `${pushname}
${botName}
${donoName}`
if (isMedia && !info.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(rane)
// "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
var json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
var exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)+".temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
loli.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
await ffmpeg(`./${rane}`)
.inputFormat(rane.split('.')[1])
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(rane)
let json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
let exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = "temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
loli.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
})().catch(e => {
console.log(e)
reply("Hmm deu erro")
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
if (fs.existsSync(media)) fs.unlinkSync(media);
} catch {}
})
}
break

//============MENUS AQUI===========\\
case 'menu': case 'ajuda': case 'help':
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/menu.jpg'),
caption: menu(comando, prefix, hora, data, pushname, totalcmd),
gifPlayback: true},
{quoted: info})
break

case 'logos': case 'menulogos': case 'lg':
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/logos.jpg'),
caption: logos(comando, prefix, hora, data, pushname, totalcmd),
gifPlayback: true},
{quoted: info})
break

case 'menuvip':
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/menu.jpg'),
caption: menuvip(comando, prefix, hora, data, pushname, totalcmd),
gifPlayback: true},
{quoted: info})
break

case 'menutravazap':
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/menu.jpg'),
caption: menutravazap(comando, prefix, hora, data, pushname, totalcmd),
gifPlayback: true},
{quoted: info})
break

case 'menuadm':
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
if (!isGroupAdmins) return reply(msg.adm)
if (!isGroup) return reply(msg.grupo)
audiomenu = await fs.readFileSync("./loli/audio/adm.mp3")
loli.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await delay(4000)
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/menu.jpg'),
caption: menu1(comando, prefix, hora, data, pushname, totalcmd),
gifPlayback: true},
{quoted: info})
break

case 'criador':
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/menu.jpg'),
caption: criado(comando, prefix, hora, data, pushname, totalcmd),
gifPlayback: true},
{quoted: info})
break

case 'alugar':
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
await loli.sendMessage(from, { react: { text: `🍃`, key: info.key }})
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/menu.jpg'),
caption: alugar(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case 'menudono':
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
if(!isCreator) return reply(msg.dono)
await loli.sendMessage(from, { react: { text: `🍃`, key: info.key }})
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/menu.jpg'),
caption: menudono(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case 'menujogos':
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
if(!isGroup) return reply(msg.grupo)
await loli.sendMessage(from, { react: { text: `🎮`, key: info.key }})
audiomenu = await fs.readFileSync("./loli/audio/jogos.mp3")
loli.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await delay(4000)
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/menu.jpg'),
caption: menujogos(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case "menu18":
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
templateMassage = {
image: {url:"./loli/image/menu.jpg",
quoted: info},
caption: menu18(prefix, hora, data, pushname),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
loli.sendMessage(from, templateMassage)
break

case 'documento':
reply(`enviando...`)
if(!isCreator) return reply(msg.dono)
loli.sendMessage(from, {
document: fs.readFileSync('./loli/image/menu.jpg'),
mimetype: 'application/zip',
fileName: '🤬${botName}🤬'
},
{quoted: info
})
break

case 'txt-desativar9': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá , eu perdi todos meus documentos junto com meu celular e preciso imediatamente que desativem meu número:
+55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar8': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\n偷⾛了我的⼿机和我所有的宝⻉，请⽴即禁⽌我的帐⼾
+55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar7': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá , eu gostaria de desativar meu número do WhatsApp porque eu estou migrando para o telegram , Meu número:
+55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar4': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nPerdido/Roubado: Por favor, desative minha conta
+55 11 11111-11111`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desban3': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu numero foi banido, utilizo ele para falar com meus amigos e familia. Além de falar com meus clientes, e estou sendo prejudicado perdendo vendas +55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desban4': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n?? • Texto: \n\nOla suporte do whatsapp , meu numero ,(numero) foi banido injustamente do whatsapp , estou solicitando o desbanimento imediato de meu número `
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-sair-1-2': // by: loli-MD
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n?? • Texto: \n\nEu nao consigo entrar no whatsapp , meu número esta -1 , solicito que resetem minha verificação de número!
Número: +55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-sair-1-1': // by: loli-MD
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu número está no suporte alguém solicitou meu código por engano meu número é usado para conversas com familiares que estão com convite por favor reinicie o meu código de verificação via SMS!
Número: +55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar7': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá , eu gostaria de desativar meu número do WhatsApp porque eu estou migrando para o telegram , Meu número:
+55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar6': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá fui assaltado a uns 30 minutos e roubaram todos meus pertences , quero que desativem minha conta do whatsapp.
Número: +55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar5': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu numero do whatsapp foi roubado , desativem minha conta imensamente , desde já agradeço! meu numero :
+55 99999-99999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar3': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nEstou solicitando a desativação temporária de minha conta no whatsapp , meu numero:
+55 11 11111-1111`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar2': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nPlease Deactivate The My Account Number (número*) Immediately Because The Number Has Been Lost`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar1': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá,perdi todos os meus documentos e o meu chip foi roubado. Peço que desativem
minha conta imediatamente,no chip há dados sobre mim por isso peço que desativem,meu  número imediatamente (número)`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desban1': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu número (Número) foi banido indevidamente isto foi um engano . Fui clonado e roubaram meu número preciso ativar minha conta tenho uma empresa de eletrodomésticos e tenho pedidos pendentes.`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desban2': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu número (Numero) , foi banido do whatsapp injustamente e tenho provas pra mostrar que o banimento foi um erro do sistema.`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desban4': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n?? • Texto: \n\nOla suporte do whatsapp , meu numero ,(numero) foi banido injustamente do whatsapp , estou solicitando o desbanimento imediato de meu número `
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desban5': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOla eu sou roberto silva, eu comprei um número número para meu filho fazer os trabalhos da escola em qual ele estuda , porém quando fui tentar entrar , estava dizendo que o número foi banido e eu nem sequer entrei no número, não fiz nada eu ja comprei o número e ele ja estava assim , ele precisa urgentemente desse número para fazer os trabalhos da escola.
Verifiquem o maís rápido possível!
NÚMERO: 55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-sair-1-2': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n?? • Texto: \n\nEu nao consigo entrar no whatsapp , meu número esta -1 , solicito que resetem minha verificação de número!
Número: +55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-sair-1-1': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu número está no suporte alguém solicitou meu código por engano meu número é usado para conversas com familiares que estão com convite por favor reinicie o meu código de verificação via SMS!
Número: +55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

//===============FIM CMD TRAVA=================\\

//===============MENU ADM==============\\

case 'ban': case 'kick':
if (!isBotAdmins) return reply(msg.botadm)
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
{
audiomenu = await fs.readFileSync("./loli/audio/ban.mp3")
loli.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque a mensagem da pessoa que deseja banir')
if(info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responseb = await loli.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") return reply(`*Usuário removido do grupo com sucesso🙍🏻‍♂️*`)
else if (responseb[0].status === "406") return reply('Como vc quer que eu remova o adm supremacy????')
else if (responseb[0].status === "404") return reply('*Este usuário ja foi removido ou saiu do grupo')
else return reply('tenta dnv')
} else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return reply(`Vai arquivar msm??`)
sexocomrato = 0
for (let banned of mentioned) {
await sleep(100)
let responseb2 = await loli.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
return reply(``)
} else {
let responseb3 = await loli.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") return reply(`*Usuário removido do grupo com sucesso🙍🏻‍♂️*`)
else if (responseb3[0].status === "406") return reply('Como vc quer que eu remova o adm supremacy????')
else if (responseb3[0].status === "404") return reply('Este usuário já foi removido ou saiu')
else return reply('Tenta dnv')
}
}
}
break

case 'nomegp':
if (!isBotAdmins) return reply(msg.botadm)
if (!isCreator) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isCreator) nadm = fs.readFileSync('./loli/audio/soadm')

if (!isGroupAdmins) if (!isCreator) return loli.sendMessage(from, nadm, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
if (!isGroup) return reply(`Este comando so pode ser usado em grupo`);
if (!q) return reply(` `);
loli.groupUpdateSubject(from, `${q}`)
loli.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'})
break

case 'descgp':
case 'descriçãogp': 
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotAdmins) return reply(msg.botadm)
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
if (!isGroup) return reply(`Este comando so pode ser usado em grupo`);
if (!q) return reply(` `);
loli.groupUpdateDescription(from, `${q}`)
loli.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: loc})
break

case 'promover': case 'promote':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Vai colocar o vento como adm???')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsedm = await loli.groupParticipantsUpdate(from, [mentioned], 'promote')
if (responsedm[0].status === "200") return reply('Temos um novo admir')
else if (responsedm[0].status === "404") return reply('Esse maluco nem ta no grupo 🤔')
else return reply('Tenta dnv '-'')
break

case "grupo":
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
try {
if (q == "a") {
await loli.groupSettingUpdate(from, "not_announcement")
reply("Grupo aberto com sucesso")
}
if (q == "f") {
await loli.groupSettingUpdate(from, "announcement")
reply("Grupo fechado com sucesso ")
}
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case 'rebaixar': case 'rebaixa':
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotAdmins) return reply(msg.botadm)
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply('nao e adm...')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque ou responda a mensagem de quem você quer tirar de admin')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsepm = await loli.groupParticipantsUpdate(from, [mentioned], 'demote')
if (responsepm[0].status === "406") return reply('Como vc quer que eu remova o adm supremacy????')
else if (responsepm[0].status === "200") return reply('Voce perdeu o cargo de adm por motivos justo, Lamento voce nao e mais adm do grupo 😂😂')
else if (responsepm[0].status === "404") return reply('Esse cara nem ta no grupo')
else return reply('tente dnv')
break

case 'reviver': case 'add':
reply(`Desculpe esse comando esta dando ban no número nao e possível usar`)
break

case 'marcarwa':
try {
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isGroupAdmins && !isCreator) return reply('Você precisa ser ADM pra utilizar este comando')  
if(q.includes(`.`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
 let metadata = await loli.groupMetadata(from)
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += `〘 *👥 MARCANDO TODOS 🙂* 〙\n\n*〘👥〙MEMBROS:* ${metadata.participants.length ? metadata.participants.length : "undefined"}\n\n`
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
loli.sendMessage(from, {text: teks}, {quoted: info})
} catch {
reply('ERROR!!')
}
break

case 'resetarlink':
if (!isBotAdmins) return reply(msg.botadm)
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
try {
await loli.groupRevokeInvite(from)
reply("*LINK DO GRUPO RESETADO COM SUCESSO✅*")
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case 'antiimg':
if (!isBotAdmins) return reply(msg.botadm)
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiImg) return reply('Já Esta ativo')
antiimg.push(from)
fs.writeFileSync('./arquivos/antis/antiimg.json', JSON.stringify(antiimg))
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return reply('Ja esta Desativado.')
antiimg.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antiimg.json', JSON.stringify(antiimg))
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'saibot':
if (!isGroup) return reply(mag.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
reply(`ok ${pushname} me desculpe se eu nao pude ajudá-lo(a) com o que vc precisava....adeus😔`)
await delay(1000)
try {
await loli.groupLeave(from)
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

//============FIM DOS CMD ADM=============\\

//============CMD DONO===========\\
case 'sairgp':
if (!isCreator) return loli.sendMessage(from, {text: 'somente dono'})
try {
loli.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'reiniciar':
if (!isCreator) return reply(msg.dono)
loli.sendMessage(from,{text: `_Ok Reiniciando Isso vai levar alguns segundos..._`}, {quoted: info})
setTimeout(() => {process.exit(0)}, 3000)
break

case 'foto':
if (!isCreator) return loli.sendMessage(from, {text: 'somente dono'})
loli.sendMessage(from, {image: fs.readFileSync('./loli/image/menu.jpg'), caption: '𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂'},{quoted: info})
break

case 'video':
if (!isCreator) return loli.sendMessage(from, {text: 'somente dono'})
loli.sendMessage(from, {video: fs.readFileSync('./loli/video/cantada brabakkkkk.mp4'), caption: '𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂'},{quoted: info})
break

case 'audio':
if (!isCreator) return loli.sendMessage(from, {text: 'somente dono'})
loli.sendMessage(from, {audio: fs.readFileSync('./loli/audio/sim.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'dado':
const dadus = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./arquivos/funções/dado/' + dadu + '.webp')
loli.sendMessage(from, {
sticker: dador
}, {
quoted: info
})
break

case 'limpeza':
if (!isCreator) return loli.sendMessage(from, {text: 'somente dono'})
loli.sendMessage(m.chat, {text: `krl lixo pra kct\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Limpo com sucesso ✅`},{quoted: m})
break

case 'hentai':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'hentai2':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'ero':{
if(!isPremium) return reply(msg.premium)
reply(`enviando no seu pv...`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'fotopraperfil':{
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`Enviando a foto no seu perfil...`)
bla = await fetchJson("https://fine-gold-squid-yoke.cyclic.app/18/travazap?username=Sandroq&key=Sandroq")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'memepv':{
if(!isPremium) return reply(msg.premium)
reply(`o meme esta sendo enviado no seu privado..`)
bla = await fetchJson("https://clover-t-bot.onrender.com/memes?username=Sandro999&key=287268")

loli.sendMessage(sender, {video: {url: bla.url}})
}break

case 'meme':{
if(!isPremium) return reply(msg.premium)
reply(`enviando meme aguarde...`)
bla = await fetchJson("https://clover-t-bot.onrender.com/memes?username=Sandro999&key=287268")

loli.sendMessage(from, {video: {url: bla.url}})
}break

case 'foto18':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://happy-red-hummingbird.cyclic.app/18/foto_18?username=Sandrox&key=Sandrox")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'pussy':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'neko2':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'achego':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'manga':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'foot':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'vídeo18':
case 'video18':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/18/video?username=Sandro999&key=287268")

loli.sendMessage(sender, {video: {url: bla.url}})
}break

case 'gif':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://fine-gold-squid-yoke.cyclic.app/nsfw/hentai?username=Sandroq&key=Sandroq")

loli.sendMessage(sender, {video: {url: bla.url}})
}break

case 'trava2':
if(!isCreator) return replu(msg.dono)
reply(`🤬By Sandro-bor🤬 ${venomiphone1}`) 
break

case 'lbc':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'hentai4':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'hentai3':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break


case 'zettai':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image:  {url: bla.url}}) 
}break

case 'bdsm':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image:  {url: bla.url}}) 
}break

case 'glasses':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image:  {url: bla.url}}) 
}break

case 'orgy':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image:  {url: bla.url}}) 
}break

case 'plaq':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq2':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/BUNDA1.jpg?text.0.text=${teks}&text.0.position.x=-20%25&text.0.position.y=-20%25&text.0.size=18&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.background.opacity=65`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq3':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/bunda3.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=-25%25&text.0.position.y=-17%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.font.style=italic`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq4':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-48%25&text.0.position.y=-68%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq5':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/9152e7a9-7d49-48ef-b8ac-2e6149fda0b2.jpg?text.0.text=${teks}&text.0.position.x=-70%25&text.0.position.y=-23%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=300`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq6':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq7':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'loli' :{
if(!isPremium) return reply(msg.premium)
reply("aguarde um momento, eu vou enviar no seu pv se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'vc e um(a) lolicon?🤔!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await loli.sendMessage(sender, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'only1': //${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only1 = `
Luiz russo (mansão maromba)
⌠🌐⌡> https://t.me/+8cJ7yGnq5fI2YjYx
`
loli.sendMessage(sender, {text: only1}, {quoted: info})
break

case 'only2': //${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only2 = `
Luiza blue 
⌠🌐⌡> https://t.me/+JaX8wY_45843ZTBh
`
loli.sendMessage(sender, {text: only2}, {quoted: info})
break

case 'only3': //${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only3 = `
Isadora vale 
⌠🌐⌡> https://t.me/+smb4i0bxRl41ZjRh
`
loli.sendMessage(sender, {text: only3}, {quoted: info})
break

case 'only4': //${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only4 = `
Ingrid bianchi
⌠🌐⌡> https://t.me/+RJtf2TqTQ8NjZjlh
`
loli.sendMessage(sender, {text: only4}, {quoted: info})
break

case 'only5'://${botName}  
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only5 = `
Lizy Donato 
⌠🌐⌡> https://t.me/+gmSjm2WZnb41OGEx
`
loli.sendMessage(sender, {text: only5}, {quoted: info})
break

case 'only6': //${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only6 = ` 
Feh Galvão
⌠🌐⌡> https://t.me/+naeQ1pp8ajswMjgx
`
loli.sendMessage(sender, {text: only6}, {quoted: info})
break

case 'only7': //${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only7 = `
Tatyzack
⌠🌐⌡> https://t.me/+NvglGFhOLSY5NmZ
`
loli.sendMessage(sender, {text: only7}, {quoted: info})
break

case 'only8'://${botName}  
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only8 = `
Ayrla Souza 
⌠🌐⌡> https://t.me/+XLziPd47MWo2N2Y
`
loli.sendMessage(sender, {text: only8}, {quoted: info})
break

case 'only9'://${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only9 = `
ALINE FARIA
⌠🌐⌡> https://t.me/+j1xp_hmXrx5lZWMx
`
loli.sendMessage(sender, {text: only9}, {quoted: info})
break

case 'limpar':
if(!isGroup) return reply(msg.grupo)
if(!isGroupAdmins) return reply(msg.adm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
if(verificado === true) {
loli.sendMessage(from, {text: clear}, {quoted: info, contextInfo : { forwardingScore: 500, isForwarded:true}})
} else {
loli.sendMessage(from, {text: clear}, {quoted: info, contextInfo : { forwardingScore: 500, isForwarded:true}})  
}
break

case 'only10'://${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only10 = `
KINE CHAN 
⌠🌐⌡> https://t.me/+YIVax4IQ9aFlMDgx
`
loli.sendMessage(sender, {text: only10}, {quoted: info})
break

case 'only11': //${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only11 = `
DJ NATHI
⌠🌐⌡> https://t.me/+6Z5vuVApT-1lYjEx
`
loli.sendMessage(sender, {text: only11}, {quoted: info})
break

case 'only12': //${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviando no seu pv`)
only12 = `
BELE KAFFER
⌠🌐⌡> https://t.me/+70DMw3iTzb0yMzEx
`
loli.sendMessage(sender, {text: only12}, {quoted: info})
break

case 'creditos': //Deixa os meus créditos mn pufafavorrr🥺
await loli.sendMessage(from, { react: { text: `❤️`, key: info.key }})
await delay(5000)
            menu8 = `
┏━━━━━━━━━━━━━━━━
┃ZAP: Wa.me/553172595934
┣━━━━━━━━━━━━━━━━
┃insta
┣━━━━━━━━━━━━━━━━
┣━━━━━━━━━━━━━━━━
┃canal Yt: https://youtube.com/@sandro_mg1?si=jT0xhaif4brqCWHs
┣━━━━━━━━━━━━━━━━
┗━━━〔‼️〕━━━━

Créditos por criar a base 😁❤️ @sandro

            `            
           await loli.sendMessage(from, {image: fs.readFileSync('./loli/image/menu.jpg'), caption: menu8, contextInfo: {
            externalAdReply: {
            title:"‼️INFO DO CRIADOR ‼️",
            body: "",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/350558660dc20aa7299d6.jpg`,
            sourceUrl: `https://instagram.com/mg_sandro_`, 
            mediaType: 2
            }}})
             
            
            break
            
case 'taon?':
reply(`Sim!!`)
break

case 'enquete':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var enquete = generateWAMessageFromContent(from, proto.Message.fromObject({
"messageContextInfo": {
"messageloli": "QEwFogrlUlBtJgIiRuBYBjXD7VZwmpu/8rGXYb2MuaA="},
"pollCreationMessage": {
"name": "pokemon?",
"options": [
{ "optionName": 'Sim' },
{ "optionName": 'Não'}],
"selectableOptionsCount": 2
}}), { userJid: from, quoted: info})
loli.relayMessage(from, enquete.message, { messageId: enquete.key.id })
break

case 'marcar': {
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
if (!isGroup) return reply(msg.grupo)
 let metadata = await loli.groupMetadata(from)
let teks = `Hora de acordar rapaziada...‼️\n•\n`
for (let mem of participants) {
teks += `💫 @${mem.id.split('@')[0]}\n`
}
loli.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: info })
}
break

case 'aplaca':{
    if (args.length < 1) return reply(`${prefix}aplaca e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 20) return reply('O texto é longo, até 20 caracteres') //maximo de caracteres
    buffer =(`https://553555.sirv.com/Images/IMG-20231205-WA0153.jpg?text.0.text=${q}%24%7Bq%7D&text.0.position.x=-34%25&text.0.position.y=-4%25&text.0.size=37&text.0.color=f00000`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🤩`, key: info.key }})
    }
    reply (`olha seu pv hehe`)
    break
    
case 'criador': case 'criado': //deixa meus créditos mn.
reply(`╭━─━───༺[🙇🏻‍♀️]༻────━─━╮
┃[☆]╭
┃[☆]  ⎙  INFORMAÇÕES DO CRIADOR
┃[☆]╰
╰━─━───༺[🙇🏻‍♀️]༻────━─━╯
┏━━━━━━━━ ✓
┃[☆] -➤ Criador: Sandro
┃[☆] -➤ Canal: SANDRO-BOT
┃[☆] -➤ [ wa.me/5531972595934]
┗━━━━━━━━ ✓
┏━━━━━━━━ ✓
┃[☆] -➤ Prefixo : ${prefix}
┃[☆] -➤ ${botName}
┗━━━━━━━━ ✓`)
break

case 'dono':
reply(`
╭━─━───༺👑️༻────━─━╮
┃[☆]╭
┃[☆]  ⎙  INFORMAÇÕES DO DONO
┃[☆]╰
╰━─━───༺👑️༻────━─━╯
[Informações do meu dono]

┏━━━━━━━━ ✓
┃nome: ${donoName}
┃número: ${donoNumber}
┗━━━━━━━━ ✓
`)
break

case 'sla':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var extendedTextMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"extendedTextMessage": {
"text": ` •${botName}• \nhttps://Wa.me/stickerpack/whatsappcuppy`,
"matchedText": `opa`,
"description": "Convite para grupo do WhatsApp",
"title": `${botName}`,
"previewType": "NONE",
"jpegThumbnail": fs.readFileSync('./loli/image/menu.jpg'),
}
}), { userJid: from, quoted: info})
loli.relayMessage(from, extendedTextMessage.message, { messageId: extendedTextMessage.key.id })
break

case 'carrinho':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var orderMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "235714359395213",
"thumbnail": fs.readFileSync('./loli/image/menu.jpg'),
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botName}`,
"orderTitle": "ᚷ𝐒𝐀𝐍𝐃𝐑𝐎ᚷ",
"sellerJid": "558388741307@s.whatsapp.net",
"token": "AR5Wfq0kwTRxgMuziAWteLeROO/rP/3z9fRPpLSb+o8tfA=="
}
}), { userJid: from, quoted: info})
loli.relayMessage(from, orderMessage.message, { messageId: orderMessage.key.id })
break

case 'catalogo':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"thumbnail": fs.readFileSync('./loli/image/menu.jpg'),
"productId": " ",
"title": `${botName}`,
"fileLength": "161349999999999",
"description": `sandrk`,
"footerText": ` •${botName}• `,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `© Hirox`,
"url": "wa.me/558388741307"
},
"businessOwnerJid": "558388741307@s.whatsapp.net",
}
}), { userJid: from, quoted: info})
loli.relayMessage(from, catalog.message, { messageId: catalog.key.id })
break

case 'loc':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var locationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": 99,
"degreesLongitude": 99,
"name": " •𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂• ",
"jpegThumbnail": messa.imageMessage
}
}), { userJid: from, quoted: info})
loli.relayMessage(from, locationMessage.message, { messageId: locationMessage.key.id })
break

case 'doc':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var documentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7119-24/29949057_1673439003134136_8717143220188456473_n.enc?ccb=11-4&oh=01_AdQKvXFOKFVqb0bq6t6cD1AT8YA1lUmzCh6BmjRufONBTg&oe=64D30429&mms3=true",
"mimetype": " ",
"title": "👀 𔕱𝐓𝐑𝐀𝐕𝐀𝐙𝐀𝐏𝐈𔕱 💨.exct",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 999999999,
"index": 0,
"mediaKey": "fcxyCLIN2AubiCHSqdykEzQdvmIYdzZJHGeTz1UoFlY=",
"fileName": "👀 𔕱𝐓𝐑𝐀𝐕𝐀𝐙𝐀𝐏𝐈𔕱 💨",
"fileEncSha256": "vaEk8nmpa8fera+p5GTdtjaHNw34HrcF+rXLe3tG9/M=",
"directPath": "/v/t62.7119-24/29949057_1673439003134136_8717143220188456473_n.enc?ccb=11-4&oh=01_AdQKvXFOKFVqb0bq6t6cD1AT8YA1lUmzCh6BmjRufONBTg&oe=64D30429",
"mediaKeyTimestamp": "1688964255"
}
}), { userJid: from, quoted: info})
loli.relayMessage(from, documentMessage.message, { messageId: documentMessage.key.id })
break

case 'vcard':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var contactMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"contactMessage": {
"displayName": " •𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂• ",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;; •𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂• ;\nFN: •𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂• \nitem1.TEL:553172595934\nitem1.X-ABLabel:Celular\nEND:VCARD"
}}), { userJid: from, quoted: info})
loli.relayMessage(from, contactMessage.message, { messageId: contactMessage.key.id })
break

case 'payment2':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `•𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂•`,
}
}}), { userJid: from, quoted: info})
loli.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
break
//==============JOGOS===========\\

case 'nazista1':
if(!isGroup) return reply(msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
async function nazistaMsg() {
random = `${Math.floor(Math.random() * 110)}`
nazistakjk = random
nazista = random
if(nazista <= 15 ) {var trai = 'hmm, parece q você não é nazista'}
else if(nazista == 16 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 17 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 18 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 19 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 20 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 21 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 22 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 23 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 24 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 25 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 26 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 27 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 28 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 29 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 30 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 31 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 32 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 33 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 34 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 35 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 36 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 37 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 38 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 39 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 40 ) {var nazi = '🫣'}
else if(nazista == 41 ) {var nazi = '🫣'}
else if(nazista == 42 ) {var nazi = '🫣'}
else if(nazista == 43 ) {var nazi = '🫣'}
else if(nazista == 44 ) {var nazi = '🫣'}
else if(nazista == 45 ) {var nazi = '🫣'}
else if(nazista == 46 ) {var nazi = '🫣'}
else if(nazista == 47 ) {var nazi = '🫣'}
else if(nazista == 48 ) {var nazi = '🫣'}
else if(nazista == 49 ) {var nazi = '🫣'}
else if(nazista == 50 ) {var nazi = '🫣'}
else if(nazista == 51 ) {var nazi = '🫣'}
else if(nazista == 52 ) {var nazi = '🫣'}
else if(nazista == 53 ) {var nazi = '🫣'}
else if(nazista == 54 ) {var nazi = '🫣'}
else if(nazista == 55 ) {var nazi = '🫣'}
else if(nazista == 56 ) {var nazi = '🫣'}
else if(nazista == 57 ) {var nazi = '🫣'}
else if(nazista == 58 ) {var nazi = '🫣'}
else if(nazista == 59 ) {var nazi = '🫣'}
else if(nazista == 60 ) {var nazi = '😳'}
else if(nazista == 61 ) {var nazi = '😳'}
else if(nazista == 62 ) {var nazi = '😳'}
else if(nazista == 63 ) {var nazi = '😳'}
else if(nazista == 64 ) {var nazi = '😳'}
else if(nazista == 65 ) {var nazi = '😳'}
else if(nazista == 66 ) {var nazi = '😳'}
else if(nazista == 67 ) {var nazi = '😳'}     
else if(nazista == 68 ) {var nazi = '😳'}     
else if(nazista == 69 ) {var nazi = '😳'}     
else if(nazista == 70 ) {var nazi = '😳'}    
else if(nazista == 71 ) {var nazi = '😳'}    
else if(nazista == 72 ) {var nazi = '😳'}     
else if(nazista == 73 ) {var nazi = '😳'}     
else if(nazista == 74 ) {var nazi = '😳'}     
else if(nazista == 75 ) {var nazi = '😳'}
else if(nazista == 76 ) {var nazi = '😳'}
else if(nazista == 77 ) {var nazi = '😳'}
else if(nazista == 78 ) {var nazi = '😳'}
else if(nazista == 79 ) {var nazi = '😳'}
else if(nazista == 80 ) {var nazi = '😳'}
else if(nazista == 81 ) {var nazi = '😳'}
else if(nazista == 82 ) {var nazi = '😳'}
else if(nazista == 83 ) {var nazi = '😳'}
else if(nazista == 84 ) {var nazi = '😳'}
else if(nazista >= 85 ) {var nazi = '...'}
var sandrokjk = [
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ▒▒▒▒▒▒▒▒▒▒》0%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █▒▒▒▒▒▒▒▒▒》10%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██▒▒▒▒▒▒▒▒》20%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███▒▒▒▒▒▒▒》30%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████▒▒▒▒▒▒》40%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████▒▒▒▒▒》50%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██████▒▒▒▒》60%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███████▒▒▒》70%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████████▒▒》80%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████████▒》90%*`,
`*𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘*\n*《 ██████████》100%*`,
`*O quanto você é nazista?*\n\n*「 @${sender_ou_n.split("@")[0]} 」seu nível de nazista é: ❰ ${random}% ❱*\n\n*${nazi}*`
]
let { key } = await loli.sendMessage(from, {text: `*❰Pesquisando a sua ficha de nazista: 「 @${sender_ou_n.split("@")[0]} 」 aguarde...  ❱*`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
for (let i = 0; i < sandrokjk.length; i++) 
await loli.sendMessage(from, {text: sandrokjk[i], mentions: [sender_ou_n], edit: key });
}, 1500)
}
nazistaMsg()
break

case 'chifre':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
await loli.sendMessage(from, { react: { text: `🐂`, key: info.key }})
random2 = `${Math.floor(Math.random() * 35)}`
const tamanho2 = random2
if (tamanho2 < 13 ) {pp = 'muito corno🤟'} else if (tamanho2 == 13 ) {pp = 'meio corno😬'} else if (tamanho2 == 14 ) {pp = 'muito corno😳'} else if (tamanho2 == 15 ) {pp = 'cuidado com o poste'} else if (tamanho2 == 16 ) {pp = 'vai pegar manga com esse chifre?'} else if (tamanho2 == 17 ) {pp = 'eita poha, levou muita galha em😳'} else if (tamanho2 == 18 ) {pp = 'cuidado com os fios de energia😳'} else if (tamanho2 == 19 ) {pp = 'como você aguenta esse peso todo😳'} else if (tamanho2 == 20 ) {pp = 'recorde de maior chifre, parabéns'} else if (tamanho2 == 21 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 22 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 23 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 24 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 > 25 ) {pp = 'vai construir uma torre com isso?'
}
hasil = `╭═════════════════ ⪩
╰╮ू ፝͜❥⃟💡𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐃𝐎 𝐂𝐇𝐈𝐅𝐑𝐄👁⃟ू ፝͜❥
╭┤➢☃️ 「𝘖𝘓𝘈: ${pushName}」
╭┤➢🤟 「𝘚𝘌𝘜 𝘊𝘏𝘐𝘍𝘙𝘌 𝘛𝘌𝘔: ${random2}𝘊𝘔
╭┤➢✉️ 「${pp}」
┃╰══ ⪨
╰═════════════════ ⪨`
reply(hasil)
break

case 'cassino':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (!isGroup) return reply('Você só pode jogar em grupos')
 const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const mining = Math.ceil(Math.random() * 200) +1
const somtoy2 = exportion[Math.floor(Math.random() * exportion.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : ?? : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►  Você ganhou🔮  ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`

} else {
var Vitória = `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►    Você perdeu...    ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`
}
	const cassino = `
   ۣۜۜ͜͡☆ ☲ ► 𝐂𝐀𝐒𝐒𝐈𝐍𝐎 ◄☲  ☆ۣۜۜ͜͡
┏━━━━━━━━━━━━━━━━━┓
 ۣۜۜ͜͡☆ ☲ ► ${somtoy2} ◄☲ ☆ۣۜۜ͜͡   
┗━━━━━━━━━━━━━━━━━┛

*${Vitória}*`
reply(cassino)
if (Vitória == `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►   Você ganhou..🎊   ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`) {

reply('Parabéns')
}
await (sender)
break

case 'gay2':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (!isGroup) return reply(msg.grupo)
rate = body.slice(7)
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

zxzz = 
random = `${Math.floor(Math.random() * 110)}`
random2 = `${Math.floor(Math.random() * 110)}`
loli.sendMessage(from, {text: `➮ Pesquisando a ficha de ${comando} :  @${blamention_id.split("@")[0]}, aguarde...\n\n _Você é: ❰ ${random},${random2}% ❱  ${comando}_ `, mentions: [blamention_id]})
break

case 'gay':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

loli.sendMessage(from, {text: `❰ Pesquisando a sua ficha de gay : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${gayzin}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if (boiola < 20 ) {var bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {var bo = '+/- boiola'} else if (boiola == 23 ) {var bo = '+/- boiola'} else if (boiola == 24 ) {var bo = '+/- boiola'} else if (boiola == 25 ) {var bo = '+/- boiola'} else if (boiola == 26 ) {var bo = '+/- boiola'} else if (boiola == 27 ) {var bo = '+/- boiola'} else if (boiola == 2 ) {var bo = '+/- boiola'} else if (boiola == 29 ) {var bo = '+/- boiola'} else if (boiola == 30 ) {var bo = '+/- boiola'} else if (boiola == 31 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 3 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {var bo = 'você é né?😏'} else if (boiola == 42 ) {var bo = 'você é né?😏'} else if (boiola == 43 ) {var bo = 'você é né?😏'} else if (boiola == 44 ) {var bo = 'você é né?😏'} else if (boiola == 45 ) {var bo = 'você é né?😏'} else if (boiola == 46 ) {var bo = 'você é né?😏'} else if (boiola == 47 ) {var bo = 'você é né?😏'} else if (boiola == 4 ) {var bo = 'você é né?😏'} else if (boiola == 49 ) {var bo = 'você é né?😏'} else if (boiola == 50 ) {var bo = 'você é ou não?🧐'} else if (boiola > 51) {var bo = 'você é gay🙈'
}
await loli.sendMessage(from, {image: wew, caption: `  O quanto você é gay? \n\n 「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ gay 🏳️‍🌈\n\n${bo}`, mentions: [blamention_id], thumbnail:null}, {quoted: info})
}, 7000)
break

case "ppt":
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (!isGroup) return reply(msg.grupo)
if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Você ganhou -_-"
}
if (vit == "derrota") {
var tes = "Eu ganhei pobre kkkkkk"
}
if (vit == "empate") {
var tes = "Deu empate 😐"
}
reply(`${botName} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case 'sn':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (!isGroup) return reply(msg.grupo)
const sn = ['sim', 'não']
gosto = body.slice(3)
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break

case 'chance':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (!isGroup) return reply(msg.grupo)
rate = body.slice(7)
zxzz = 
random = `${Math.floor(Math.random() * 200)}`
reply(' ➥ A chance disso que você falou vai acontecer e de:❰ '+random+'% ❱ ✧ ')
break

case 'corno': case 'corna':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (!isGroup) return reply(msg.grupo)
rate = body.slice(7)
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

zxzz = 
random = `${Math.floor(Math.random() * 200)}`
random2 = `${Math.floor(Math.random() * 200)}`
loli.sendMessage(from, {text: ` Pesquisando o quanto você e ${comando} :  @${pushname}},\n\n _Você é: ❰ ${random},${random2}% ❱  ${comando}_ muito corno(a) kkkkkkkk🐂`, mentions: [blamention_id]})
break

case 'gado':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
loli.sendMessage(from, {text:`❰ Pesquisando a ficha de gado : @${blamention_id.split("@")[0]}, aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${gadin}`)
random = `${Math.floor(Math.random() * 110)}`
await loli.sendMessage(from, {image: wew, caption: `O quanto você é gado? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱  gado(a) 🐂`, mentions: [blamention_id]}, {quoted: info})
}, 7000)
break 

case 'nazista':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
loli.sendMessage(from, {text: ` ❰ Pesquisando a sua ficha de nazista : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${hitle}`)
random = `${Math.floor(Math.random() * 110)}`
await loli.sendMessage(from, {image: wew, caption: `O quanto você é nazista? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱  nazista 卐`, mentions: [blamention_id]}, {quoted: info})
}, 7000)
break 

//========FIM DOS CMD JOGOS=========\\

case 'metadinha':{
                await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
                let anu = await axios.get(`https://tohsaka.onrender.com/api/ferramenta/metadinha?apikey=Dkp2ubeJP6`)
                loli.sendMessage(sender, {image: {url: anu.data.masculina}, caption: `𝑴𝑨𝑺𝑪𝑼𝑳𝑰𝑵𝑶`})
                loli.sendMessage(sender, {image: {url: anu.data.feminina}, caption: `𝑭𝑬𝑴𝑰𝑵𝑰𝑵𝑶`})
                reply(`a metadinha esta sendo enviado no seu privado...`)
                }
                break
case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break

case 'figurinhas':
                if(!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 7`)
                if(q >= 100) return reply("Coloque abaixo de 100...")
                if (isGroup) reply(`As figurinhas estão sendo enviadas em seu pv olha la😁.`)
                async function figuss() {
                var rnd = Math.floor(Math.random() * 8051)
                loli.sendMessage(sender, { sticker: { url: `https://raw.githubusercontent.com/badDevelopper/Testfigu/main/fig (${rnd}).webp` } })}
                for (i = 0; i < q; i++) {
                await sleep(680)
                figuss()
                }
                break

case "perfil":
if (!isGroup) return reply(msg.grupo)
const migi = `${Math.floor(Math.random() * 105)}`
const russo = `${Math.floor(Math.random() * 105)}`
const valor = `${Math.floor(Math.random() * 5000)}`
{loli.sendMessage(
from, {audio: fs.readFileSync('./loli/audio/perfil.mp3'), mimetype: 'audio/mp4', ptt: true 
},
{quoted: info}
)
}
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
try {
ppimg = await loli.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
} catch(e) {
ppimg = logo
}
perfil = await getBuffer(ppimg)
await delay(4000)
try {
loli.sendMessage(from, {
image: perfil,
caption: `
*Nome: ${pushname}

*Número: ${sender.split("@")[0]}*

*Grupo: ${groupName}*

*🐂Nivel de gado: ${migi}%*

*😈nível de puta: ${russo}%*

*💵valor do programa: ${valor}$*

*concelho* ${conselho}
`
}, {quoted: info})
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case 'onlines':  //case by: ᬊ͜͡𝑩𝑰𝑬𝑳𝒁𝑰𝑵𝑯𝑶.𝑬𝑿𝑬ᵒᶠᶜ
if (!isGroup) return reply(enviar.msg.grupo)
if (!isCreator && !isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.Badmin)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[ido]), loli.user.id]
loli.sendMessage(from, {text: 'Pessoas online do gp:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`}, {quoted: info})
break

case 'report':
case 'bug':
if (!q) return reply('Exemplo: /report bug no menu 18... por favor fale o nome so comando que esta com bugs, obrigado.')
reply(`${pushname} Obrigado pela colaboração, o bug foi reportado ao meu criador...

<♨️>bugs falsos nao serão respondidos`)
let templateMesssage = {
image: {url: './loli/image/menu.jpg',
quoted: info},
caption: `♨️𝗨𝗺 𝗕𝘂𝗴♨️\nDo Número: @${sender.split('@')[0]},\nReportou:\n${q}`,
footer: 'Noelle_md'
}
loli.sendMessage("553172595934@s.whatsapp.net",templateMesssage)
break

case 'novocmd':
if (!q) return reply('Exemplo: /novocmd coloca antilink ou a case do novo cmd que quer que adicione no bot.')
reply(`${pushname} Obrigado pela colaboração, a sua idea foi reportada ao meu criador.😊`)
const qp = args.join(" ")
let templateMessage = {
image: {url: './loli/image/menu.jpg',
quoted: info},
caption: `♨️IDEIA DE CMD♨️\nDo Número: @${sender.split('@')[0]},\nA Ideia É:\n ${q}`,
footer: 'Noelle_md'
}
loli.sendMessage("553172595934@s.whatsapp.net",templateMessage)
break

case 'teste':
if(!isCreator) return reply(msg.dono)
reply(`Seila bla bla bla`)
break

case 'teste2':
if(!isPremium) return reply(msg.premium)
reply(`Teste bla bla bla`)
break


case 'sermembro':
if (!isCreator) return reply(msg.dono)
reply(`Agora vc não é mais adm do grupo.`)
kicee = sender
await loli.groupParticipantsUpdate(from, [kicee], 'demote')
break

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if (!isGroup) return reply(msg.grupo)
if(!isGroupAdmins)return reply(msg.adm)
ppUrl = await loli.profilePictureUrl(from, 'image')
buffer = await getBuffer(ppUrl)
const metadata = await loli.groupMetadata(from) 
loli.sendMessage(from, {image: buffer, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${metadata.desc}`, thumbnail: null}, {quoted: info})
break 

case 'toimg':
if (!isQuotedSticker) return reply('Marca uma Figurinha!!')
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
try {
loli.sendMessage(from, {image: buff}, {quoted: info})
} catch(e) {
console.log(e)
reply('erro...')
}
break

case 'travatxt':
if (!q) return reply(`cade o numero do meliante?`)
reply(`Acabei de mandar No pv dele kkkk`)
loli.sendMessage(`${q}@s.whatsapp.net`, {text: trava1})
break

case 'ping': {
reagir(from, "🏃🏻")
await sleep(1000)
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
respon = `⏱️ *Velocidade de Resposta:* ${String(r.toFixed(3))} _segundos._\n🤖 *O bot se encontra online por:* ${kyun(uptime)}\n💻 *Sistema Operacional:* ${infoSystem.type()}\n📂 *Versão:* ${infoSystem.release()}\n💾 *Memoria RAM total:* ${(infoSystem.totalmem()/Math.pow(1024, 3)).toFixed(2)}GB\n💾 *Memoria RAM disponível:* ${(infoSystem.freemem()/Math.pow(1024, 3)).toFixed(2)}GB`.trim()
await loli.sendMessage(from, { image: { url: `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=VELOCIDADE%20DO%20BOT&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${String(r.toFixed(3))}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100` }, caption: respon, mentions: [sender]}, {quoted: info}) 
}
break                 

case 'listafake':
if(!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(msg.botadm)
if(!isGroupAdmins) return reply(mess.only.admin)
teks = '𝗙𝗔𝗞𝗘𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢  \n'
men = []
for(let mem of groupMembers) {
    if(!mem.id.startsWith(55)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return reply(' 𝗡𝗲𝗻𝗵𝘂𝗺 𝗙𝗮𝗹𝘀𝗼 𝗗𝗲𝘁𝗲𝗰𝘁??𝗱𝗼')
loli.sendMessage(from, {text: teks, mentions: men})
break

case 'listabr':
if(!isGroup) return reply(mag.grupo)
if (!isBotAdmins) return reply(msg.botadm)
if(!isGroupAdmins) return reply(mag.adm)
teks = '𝗕𝗥𝗔S𝗜𝗟𝗘𝗜𝗥𝗢𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢 \n'
men = []
for(let mem of groupMembers) {
    if(mem.id.startsWith(55)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return reply('🇧🇷 *NENHUM NÚMERO BR FOI ENCONTRADO* 🇧🇷')
loli.sendMessage(from, {text: teks, mentions: men})
break

case 'banfake':
{
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
if (!isBotAdmins) return reply(msg.botadm)
if(!isGroup) return reply(mag.grupo)
array_fake = [];
for(let a of groupMembers) {
if(!a.id.startsWith("55") && a.id !== numeroBot && a.admin === null) {
array_fake.push(a.id)
}
}
if(array_fake.length === 0) return reply("Nenhum número fake encontrado no grupo")
for(let a of array_fake) {
await sleep(100)
loli.groupParticipantsUpdate(from, [a], 'remove')
}
teks = `${array_fake.length} números fake removido do grupo`
loli.sendMessage(from, {text: teks, mentions: array_fake})
}
break

case 'banbrs': case 'banbr':
{
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
if (!isBotAdmins) return reply(msg.botadm)
if(!isGroup) return reply(mag.grupo)
array_fake = [];
for(let a of groupMembers) {
if(!a.id.startsWith("258") && a.id !== numeroBot && a.admin === null) {
array_fake.push(a.id)
}
}
if(array_fake.length === 0) return reply("Nenhum número fake encontrado no grupo")
for(let a of array_fake) {
await sleep(100)
loli.groupParticipantsUpdate(from, [a], 'remove')
}
teks = `${array_fake.length} números Brs foi removido do grupo`
loli.sendMessage(from, {text: teks, mentions: array_fake})
}
break

case 'antisticker':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiSticker) return reply('[1 para ativar, 0 para desativar]')
antisticker.push(from)
fs.writeFileSync('./arquivos/antis/antisticker.json', JSON.stringify(antisticker))
reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiSticker) return reply('Ja esta Desativado.')
antisticker.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antisticker.json', JSON.stringify(antisticker))
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('[1 para ativar, 0 para desativar]')
}
break

 case 'fazernick':{ // BY ALIZINDEV //by: ALIZINDEV 
if (!q) return reply(`Exemple\n${prefix+command} AlizinDev`)
let lizink_res = await fetchJson(`https://alizindev-api.onrender.com/api/tools/styletext?text=${q}&apikey=a93e85c1`)
let lizinn = lizink_res.resultado
let alizinnk =`*NICKS*\n\n`
for (let x of lizinn){
alizinnk +=`RESULTADO : ${x.result}\n\n`
}
reply(alizinnk)
}
break

case 'listaadmins': case 'listaadm': // BY ALIZINDEV BY ALIZIN DEV 
if (!isGroup) return reply('_so em grupos..._')
teks = `Lista de administradores do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break

case 'antidoc':
if (!isGroup) return reply(msg.grupo)
if (!isBotGroupAdmins) return reply(msg.botadm)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
antidoc.push(from)
fs.writeFileSync('./arquivos/antis/antidoc.json', JSON.stringify(antidoc))
reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
} else if (Number(args[0]) === 0) {
antidoc.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antidoc.json', JSON.stringify(antidoc))
reply('Desativou com sucesso o recurso de antidocumento neste grupo✔️')
 } else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antivideo':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (args.length < 1) return reply('[1 para ativar, 0 para desativar]')
if (Number(args[0]) === 1) {
if (isAntiVid) return reply('Ja esta ativo')
antivid.push(from)
fs.writeFileSync('./arquivos/antis/antivideo.json', JSON.stringify(antivid))
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiVid) return reply('Ja esta Desativado')
antivid.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antivideo.json', JSON.stringify(antivid))
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'gostoso':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
loli.sendMessage(from, {text:` ❰ Pesquisando a sua ficha de gostoso : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${gostosin}`)
random = `${Math.floor(Math.random() * 110)}`
await loli.sendMessage(from, {image: wew, caption: `O quanto você é gostoso? 😏\n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ gostoso ??`, gifPlayback: true, mentions: [blamention_id]}, {quoted: info})
}, 7000)
break 

case 'gostosa':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
loli.sendMessage(from, {text:`❰ Pesquisando a sua ficha de gostosa : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${gostosinha}`)
random = `${Math.floor(Math.random() * 110)}`
await loli.sendMessage(from, {image: wew, caption: `O quanto você é gostosa? 😏\n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ gostosa 😳`, mentions: [blamention_id]}, {quoted: info})
}, 7000)
break

case 'tapa':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um tapa na raba da😏 @${mentioned[0].split('@')[0]} 🔥` 
jrq = await getBuffer(`${tapinha}`)
await loli.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break

case 'beijo':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('Marque alguém que vc quer da um beijo')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
wew = await getBuffer(`${beijin}`)
await loli.sendMessage(from, {video: wew, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break

case 'feio':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

loli.sendMessage(from, {text: `Pesquisando a sua ficha de feio : @${blamention_id.split("@")[0]} aguarde...`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${fein}`)
random = `${Math.floor(Math.random() * 110)}`
feio = random
if (feio < 20 ) {var bo = 'É não é feio'} else if (feio == 21 ) {var bo = '+/- feio'} else if (feio == 23 ) {var bo = '+/- feio'} else if (feio == 24 ) {var bo = '+/- feio'} else if (feio == 25 ) {var bo = '+/- feio'} else if (feio == 26 ) {var bo = '+/- feio'} else if (feio == 27 ) {var bo = '+/- feio'} else if (feio == 2 ) {var bo = '+/- feio'} else if (feio == 29 ) {var bo = '+/- feio'} else if (feio == 30 ) {var bo = '+/- feio'} else if (feio == 31 ) {var bo = 'Ainda tá na média'} else if (feio == 32 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 34 ) {var bo = 'É fein, mas tem baum coração'} else if (feio == 35 ) {var bo = 'Tá na média, mas não deixa de ser feii'} else if (feio == 36 ) {var bo = 'Bonitin mas é feio com orgulho'} else if (feio == 37 ) {var bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if (feio == 3 ) {var bo = 'tenho '} else if (feio == 39 ) {var bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if (feio == 40 ) {var bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if (feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if (feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if (feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if (feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if (feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if (feio == 46 ) {var bo = 'Feio mas tem muitos amigos'} else if (feio == 47 ) {var bo = 'Feio mas tem lábia pra pegar várias novinha'} else if (feio == 4 ) {var bo = 'Feio e ainda não sabe se vestir, vixi'} else if (feio == 49 ) {var bo = 'Feiooo'} else if (feio == 50 ) {var bo = 'você é Feio, mas não se encherga 🧐'} else if (feio > 51) {var bo = 'você é Feio demais 🙈'} 

await loli.sendMessage(from, {image: wew, caption: `  O quanto você é feio? \n\n 「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ feio 🙉\n\n${bo}`, mentions: [blamention_id], thumbnail:null}, {quoted: info})
}, 7000)
break

case 'figuraiva':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
reply('as figurinhas estão sendo enviadas no seu pv')
async function eitamundorm() {
loli.sendMessage(sender, { sticker: { url: `http://kayserapis.tech:4197/sticker/figu_raiva?apikey=`+API_KEY_SHADOW } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundorm()
}
break

case 'casar':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Parabens, Agora Voce Pegou Prisão Perpétua, Digo, se Casou Com @${mentioned[0].split('@')[0]}` 
jrq = await getBuffer(`${casalzin}`)
await loli.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break

case 'dança': case 'dançar':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('marque a Pessoa Que Você Quer Dançar ')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Voce e o(a) @${mentioned[0].split('@')[0]} Estão Dançando pra o Tiktok?` 
jrq = await getBuffer(`${dancinha}`)
await loli.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break

case 'soco':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${mentioned[0].split('@')[0]} Você Recebeu um Socão` 
jrq = await getBuffer(`${soquin}`)
await loli.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break

case 'chute':
case 'chutar':  
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  

if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá um chute')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um chute em @${mentioned[0].split('@')[0]} 🤡` 
jry = await getBuffer(`${chutin}`)
await loli.sendMessage(from, {video: jry, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break 

case 'bebado':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
loli.sendMessage(from, {text:`❰ Pesquisando a ficha de bebado : @${blamention_id.split("@")[0]} , aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${bebin}`)
random = `${Math.floor(Math.random() * 110)}`
await loli.sendMessage(from, {image: wew, caption:`O quanto você é bebado? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ Bêbado 🤢🥵🥴`, mentions: [blamention_id]}, {quoted: info})
}, 7000)
break

case 'vesgo':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
loli.sendMessage(from, {text:`❰ Pesquisando a ficha de vesgo : @${blamention_id.split("@")[0]}, aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${vesgin}`)
random = `${Math.floor(Math.random() * 110)}`
await loli.sendMessage(from, {image: wew, caption: `O quanto você é vesgo? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱  Vesgo 🙄😆`, mentions: [blamention_id]}, {quoted: info})
}, 7000)
break 

case 'matar':
case 'mata':  
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('marque o alvo que você quer matar')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de matar o(a) @${mentioned[0].split('@')[0]} 😈👹` 
jrpp = await getBuffer(`${matei}`)
await loli.sendMessage(from, {video: jrpp, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break

case 'casal':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
audiomenu = await fs.readFileSync("./loli/audio/shipo.mp3")
loli.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${teupai11.id.split('@')[0]}\ne esse\n2= @${teupai21.id.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
membr.push(teupai11.id)
membr.push(teupai21.id)
mentions(jet, membr, true)
break

case 'shipo':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
teks = args.join(" ")
if(teks.length < 10) return reply('Marque uma pessoa do grupo para encontrar o par dela')
membrr = []
const suamae111 = groupMembers
const suamae211 = groupMembers
const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @${teupai111.id.split('@')[0]}\n && 2 = ${teks} com uma porcentagem de: ${shiptedd}`
membrr.push(teupai111.id)
membrr.push(teupai211.id)
mentions(jet, membrr, true)
break

case 'idgp':
reply(`${from}`)
break

case 'a1':
loli.sendMessage(from, {
audio: fs.readFileSync('./arquivos/musica/a1.mp3'),
mimetype: 'audio/mp4'
},
{quoted: info
})
break

case 'a2':
loli.sendMessage(from, {
audio: fs.readFileSync('./arquivos/musica/a2.mp3'),
mimetype: 'audio/mp4'
},
{quoted: info
})
break

case 'a3':
loli.sendMessage(from, {
audio: fs.readFileSync('./arquivos/musica/a3.mp3'),
mimetype: 'audio/mp4'
},
{quoted: info
})
break

case 'chatgpt':
loli.sendMessage(from, { react: { text: `🔎`, key: info.key }})
  if (args.length < 1) return reply('Por favor, forneça uma pergunta para que eu possa ajudar.');
  try {
   await init("ewjdIX2ym7dVOwfL_4dBWYDKwWlUXyLO9sys-YAhxUOgUvn4GhXg5VDe3842vv6TC0-uEA.");
    const response = await askAI(q);
    await loli.sendMessage(from, { text: response }, { quoted: info });
  } catch (error) { console.error(error);
    await loli.sendMessage(from, { text: resposta.erro }, { quoted: info });
  }
  break;

case 'japonesa':
try {
loli.sendMessage(from, {image: {url: `https://aemt.me/japan`}}, {quoted: info}).catch(() => {
return reply('erro...')
})
await sleep(600)
loli.sendMessage(from, {text: 'MANDANDO...'}, {quoted: info});
} catch {
reply('A API CAIU')
}
break

case 'a4':
loli.sendMessage(from, {
audio: fs.readFileSync('./arquivos/musica/a4.mp3'),
mimetype: 'audio/mp4'
},
{quoted: info
})
break

case 'suruba':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply(msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modo-gamer 1 ativado, para desativar só basta utilizar ${prefix}modo-gamer 0`)
const quantidadeSafados = args.join(' ')
if(!quantidadeSafados) return reply(`Informe por favor a quantidade de pessoas você deseja em sua suruba... *Exemplo:* ${prefix+command} 4`)
emojiskk = ["🥵", "😈", "🫣", "😏"]
emojis = emojiskk[Math.floor(Math.random() * emojiskk.length)]  
frasekk = [`tá querendo relações sexuais a ${quantidadeSafados}, topa?`, `quer que *${quantidadeSafados}* pessoas venham de *chicote, algema e corda de alpinista*.`, `quer que ${quantidadeSafados} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`]
context = frasekk[Math.floor(Math.random() * frasekk.length)]  
ABC = `${prefix} @${sender.split('@')[0]} ${context}\n\n`
for (var i = 0; i < quantidadeSafados; i++) {
ABC += `@${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mencionarIMG(ABC, suruba);
break;

case 'addpremium': case 'addvip':
if (!isCreator) loli.sendMessage(from, ndono2, sticker)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./Premiums/usuarios/premium.json', JSON.stringify(premium))
susp = `👑@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium com sucesso👑`
mentions(`${susp}`, mentioned, true)   
break 

case 'serprem': case 'servip':
if (!isCreator) return reply(msg.dono)
premium.push(`${donoNumber}@s.whatsapp.net`)
fs.writeFileSync('./Premiums/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto ${donoNumber} você foi adicionado na lista premium.`)
break

case 'modobrincadeiras':  
case 'modobrincadeiras':  
case 'Modobrincadeira':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isModobn) return reply('o modobrincadeira já está ativo')
modobn.push(from)
fs.writeFileSync('./arquivos/grupos/brincadeiras.json', JSON.stringify(modobn))
reply(`\`\`\`✓Ativado com sucesso o modobrincadeiras no grupo\`\`\` *${groupMetadata.subject}*`)
} else if (Number(args[0]) === 0) {
if (!isModobn) return reply('o modobrincadeira já está Desativado')  
modobn.splice(from, 1)
fs.writeFileSync('./arquivos/grupos/brincadeiras.json', JSON.stringify(modobn))
reply(`\`\`\`✓Modo brincadeiras desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'delpremium': case 'delvip':
if (!isGroup) return reply(msg.grupo)
if (!isCreator) return  reply(msg.dono)
if (!budy.includes("@55")) {
num = info.message.extendedTextMessage.contextInfo.participant
bla = premium.includes(num)
if(!bla) return reply("_Este número não está incluso na lista premium.._")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./Premiums/usuarios/premium.json', JSON.stringify(premium))
loli.sendMessage(from, {text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(!bla) return reply("_Este número não está incluso na lista premium.._")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./Premiums/usuarios/premium.json', JSON.stringify(premium))
loli.sendMessage(from, {text: ` @${mentioned.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
}
break

case 'listavip': case 'listaprem':
if(!isCreator) return reply(msg.dono)   
if(!isPremium) return reply(msg.premium)   
tkks = '╭────*「 _PREMIUM USER👑_ 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 _${botName}_ 」*────`
reply(tkks.trim())
break

case 'sorteio':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
try{
if(!isGroup) return reply(msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `
❯  ❒『${botName}』❒  ❮


║❯         〘 SORTEIO ALEATÓRIO 〙


┠❯ ❒  Você Foi o Premiado 
┠❯ ❒  Prêmio: ${q}
┠❯ ❒  Doador: ${pushname}\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `┠❯ ❒  @${groupMembers[r].id.split('@')[0]}\n\n\n║❯         〘 MOTIVACIONAL 〙\n\n\n${enviarmen}`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'ytmp4':
if (!q) return reply ("Cadê o link?")
if (!q.includes("youtu")) return reply("ouu Apenas Link do Youtube!")
try {
reply("Certo, Irei Baixar o Seu Vídeo")
fetchJson(`https://tohsaka.onrender.com/api/dl/ytmp4?link=${q}&apikey=tohsaka`).then( async ({ resultado: pVid }) => {
loli.sendMessage(from, { video: { url: pVid.link},caption:`
${botName}

❯ Título: ${pVid.título}
❯ Canal: ${pVid.canal}
❯ Publicado: ${pVid.publicado}
❯ Visualizações: ${pVid.visualizações}
❯ Link: ${args[0]}
` },{ quoted: info }) })
} catch(e) {
reply("Puts, deu erro.")
console.log(e)
}
break

case 'dar':
if(!isGroup) return reply(msg.grupo)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer dar, a mensagem ou o @')
loli.sendMessage(from, {video: {url: "https://telegra.ph/file/8d6c8af967fad0fe77ba8.mp4"}, gifPlayback: true, caption: `Você deu com vontade na @${menc_os2.split('@')[0]} ela(e)  ate gozo` , mentions: [menc_os2]}, {quoted: info})
break

case 'antilink':
if (!isBotAdmins) return reply(msg.botadm)
if (!isGroupAdmins) return reply(msg.adm)
if (!info.key.fromMe && !isCreator) return reply(msg.botadm)
					if (args.length < 1) return reply('digite 1 para ativar ou 0 para desativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./loli/seguranca/antilink.json', JSON.stringify(antilink))
						reply('O anti-link foi ativo no grupo ✔️')
					} else if (Number(args[0]) === 0) {			
						antilink.splice(from, 1)
						fs.writeFileSync('./loli/seguranca/antilink.json', JSON.stringify(antilink))
						reply('O anti-link foi desativado com sucesso neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break
					
case 'admshide': case 'listaadm': case 'adms':
if (!isGroup) return reply(msg.grupo)
ytb = `Lista dos admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'alma-gemeas':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const suamae121 = groupMembers
const suamae251 = groupMembers
const teupai117 = suamae121[Math.floor(Math.random() * suamae121.length)]
const teupai251 = suamae251[Math.floor(Math.random() * suamae251.length)]
var shipted11 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipteddd = shipted11[Math.floor(Math.random() * shipted11.length)]
jet = `*Hmmm....  alma-gemeas eles 2 💘💘*\n\n1= @${teupai117.id.split('@')[0]}\ne esse\n2= @${teupai251.id.split('@')[0]}\ncom uma porcentagem de: ${shipteddd}`
membr.push(teupai117.id)
membr.push(teupai251.id)
mentions(jet, membr, true)
break

case 'dado': 
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
					kapankah = body.slice(1)
					const elu =['Caiu⚀','Caiu⚁','Caiu⚂','Caiu⚃','Caiu⚄','Caiu⚅']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					loli.sendMessage(from, ule, text, { quoted: info })
					break

case 'autoreact':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (Number(args[0]) === 1) {
if (isAutoReact) return reply('Já está ativado')
autoreact.push(from)
fs.writeFileSync('./arquivos/funções/autoreact.json', JSON.stringify(autoreact))
reply('[🩸] Ativou com sucesso o recurso de auto reação neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAutoReact) return reply('Já está desativado')
pesquisar = from
processo = autoreact.indexOf(pesquisar)
while(processo >= 0){
autoreact.splice(processo, 1)
processo = autoreact.indexOf(pesquisar)
}
fs.writeFileSync('./arquivos/funções/autoreact.json', JSON.stringify(autoreact))
reply('‼️ Desativou com sucesso o recurso de auto reação neste grupo✔️')
}
break

case 'antiloc':
if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {		 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('./arquivos/antis/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antiloc.json', JSON.stringify(antiloc))
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'anticatalg': case 'anticatalago':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (Number(args[0]) === 1) {
if (isAnticatalogo) return reply('Ja esta ativo')
anticatalogo.push(from)
fs.writeFileSync('./arquivos/antis/anticatalogo.json', JSON.stringify(anticatalogo))
reply('[🩸] Ativou com sucesso o recurso de anticatalogo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAnticatalogo) return reply('Ja esta Desativado')
pesquisar = from
processo = anticatalogo.indexOf(pesquisar)
while(processo >= 0){
anticatalogo.splice(processo, 1)
processo = anticatalogo.indexOf(pesquisar)
}
fs.writeFileSync('./arquivos/antis/anticatalogo.json', JSON.stringify(anticatalogo))
reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
}
break

case 'antinotas':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiNotas) return reply('Já Esta ativo')
antinotas.push(from)
fs.writeFileSync('./arquivos/antis/antinotas.json', JSON.stringify(antinotas))
reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiNotas) return reply('Ja esta Desativado.')
antinotas.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antinotas.json', JSON.stringify(antinotas))
reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'quando':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (args.length < 1) return reply('Digite a pergunta')
randomm = meupirul[Math.floor(Math.random() * meupirul.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (randomm == 'Hoje' || randomm == 'Amanhã' || randomm == 'Nunca') {
texto = `Pergunta: ${body.slice(1)}\n\nResposta: ${randomm}`
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\n\nResposta: 1 ${randomm}`
} else {
random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)]
texto = `Pergunta: ${body.slice(1)}\n\nResposta: ${random2} ${random3}`
}
reply(texto)
break

case 'rankgostoso':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
member = []
const p01 = groupMembers
const p02 = groupMembers
const p03 = groupMembers
const p04 = groupMembers
const p05 = groupMembers
const o01 = p01[Math.floor(Math.random() * p01.length)]
const o02 = p02[Math.floor(Math.random() * p02.length)]
const o03 = p03[Math.floor(Math.random() * p03.length)]
const o04 = p04[Math.floor(Math.random() * p04.length)]
const o05 = p05[Math.floor(Math.random() * p05.length)]
luy = `
❯ 『${botName}』 ❮


║❯         〘 TOP MAIS GOSTOSOS 〙

┠❯ ❒ GRUPO: ${groupName}
┠
┠❯ ❒ GOSTOSO: @${o01.id.split('@')[0]}  
┠❯ ❒ GOSTOSO: @${o02.id.split('@')[0]}  
┠❯ ❒ GOSTOSO: @${o03.id.split('@')[0]}  
┠❯ ❒ GOSTOSO: @${o04.id.split('@')[0]}  
┠❯ ❒ GOSTOSO: @${o05.id.split('@')[0]}  

❯         〘 MOTIVACIONAL 〙

${enviarmen}`
member.push(o01.id)
member.push(o02.id)
member.push(o03.id)
member.push(o04.id)
member.push(o05.id)
mentions(luy, member, true)
break

case 'rankgostosa':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.id.split('@')[0]}??🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
member.push(o1.id)
member.push(o2.id)
member.push(o3.id)
member.push(o4.id)
member.push(o5.id)
mentions(luy, member, true)
break

case 'rankcornos':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22%`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ytb = `
❯  ❒『 ${botName} 』❒  ❮


║❯         〘 TOP MAIS CORNOS 〙

┠❯ ❒ GRUPO: ${groupName}
┠
┠❯ ❒ CORNO: @${cornos1.id.split('@')[0]}  ❯ ${porcent} ❮
┠❯ ❒ CORNO: @${cornos2.id.split('@')[0]}  ❯ ${porcentag} ❮
┠❯ ❒ CORNO: @${cornos3.id.split('@')[0]}  ❯ ${porcl} ❮
┠❯ ❒ CORNO: @${cornos4.id.split('@')[0]}  ❯ ${porg} ❮
┠❯ ❒ CORNO: @${cornos5.id.split('@')[0]}  ❯ ${prg} ❮

❯         〘 MOTIVACIONAL 〙

${enviarmen}`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
mentions(ytb, membr, true)
break

case 'rankgay':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

try{
d = []
ret = `❯  ❒『${botName}』❒  ❮\n\n║❯         〘 TOP 5 MAIS GAYS 〙\n\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `┠❯ ❒ 🏳️‍🌈 @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankgados':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

try{
d = []
ret = `❯  ❒『${botName}』❒  ❮\n\n║❯         〘 TOP 5 MAIS GADOS 〙\n\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `┠❯ ❒ 🐮 @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'playstore':
try {
if(!q) return reply(mess.noArgsSearch()+`use como exemplo: *${prefix+command} minecraft*`);
AB = await fetchJson(`http://kayserapis.tech:4197/api/playstore?nome=${q}&apikey=`+API_KEY_SHADOW)
ABC = `🔍 *Pesquisa:* ${q} - *[ PlayStore ]*\nTotal de aplicativos encontrados: ${AB.pesquisa.resultado.length}\n${"-\t".repeat(24)}\n`
for (var i of AB.pesquisa.resultado) {
ABC += `*🔹️ Aplicativo:* ${i.nome}\n*👩🏻‍💻 Desenvolvedor do App:* ${i.desenvolvedor}\n*⭐️ Avaliação do Aplicativo:* ${i.estrelas}\n*🔗 Link do Aplicativo:* ${i.link}\n`;
ABC += `${"-\t".repeat(24)}\n`
}
loli.sendMessage(from, {image:{url: AB.pesquisa.resultado[0].imagem}, caption: ABC});
} catch (e) {
return reply(mess.error())
}
break


case 'frase':	//Dark goxtoso //Zalts apaixonado
                    rate = body.slice(6)
					var foda =['amor imaturo diz: Eu te amo porque preciso de você','A vida começa a cada cinco minutos','Onde as palavras falham, a música fala','Um bom viajante não tem planos','Uma vez que aceitamos nossos limites, vamos além deles','O que não nos mata nos fortalece','Se você caminha sozinho, você vai mais rápido Se vocês caminharem juntos, vocês irão mais longe','Uma vida cheia de erros não é apenas mais honrosa, mas é mais sábia do que uma vida gasta sem fazer nada','Nunca perca o senso de humor e aprenda a rir de suas próprias falhas','A preocupação é como uma cadeira de balanço, ela mantém você ocupado, mas não leva a lugar nenhum','O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida','Se você pode sonhar, você pode fazer','O impossível é o fantasma dos tímidos e o refúgio dos covardes','O caminho que temos que percorrer 998 é cheio de surpresas. Você nunca estará preparado para aqueles que o tocam, sejam eles felizes ou sombrios, porque isso faz parte de ganhar experiência. E descobrir quão agradáveis ou infelizes são aqueles que esperam por você, é algo que você nunca poderá evitar','A felicidade não é algo que você adia para o futuro, é algo que você projeta para o presente','Os amigos devem ser como dinheiro, que antes de precisar, você sabe o seu valor','O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break
					
case 'recadoprowhatsapp':	//Dark goxtoso //Zalts apaixonado💙
                    rate = body.slice(6)
					var foda =['Felicidade é só questão de ser.','Acredite: sempre tem algo bom guardado para você','Concentre-se no que está buscando, não no que está deixando para trás.','A vida é muito curta pra não viver sorrindo por aí!','Onde há vontade, há chance de dar certo!','Dance no seu ritmo! 💃','Só você sabe o que te deixará feliz.','Não se estresse com o que está fora do seu controle.','Aprenda a apreciar as voltas que o mundo dá.','Comece a se amar. O resto virá depois.','Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!','Reciprocidade, para as coisa boas. Imunidade, para as coisas ruins.','Coragem, a vida gosta de pessoas destemidas.', 'Compartilhe seus sentimentos. Nem todas as pessoas sabem adivinhar','Continue caminhando, não tem problema se for devagar.','Melhor amar do que ser amargo!','Não corrigir nossas falhas é o mesmo que cometer novos erros','Quando o caminho se torna duro, só os duros continuam caminhando','Florescer exige passar por todas as estações!','Quando as coisas simples parecem especiais, você percebe como a vida pode ser boa.','Os aprendizados deixam a vida especial.','Feliz daquele que encontra o verdadeiro amor sem as cicatrizes da decepção']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'frasecriativas':	//Dark goxtoso //Zalts apaixonado💙
                    rate = body.slice(6)
					var foda =['Não conte os dias, viva-os! ☀️😎','Tudo que vem, vem com algum propósito. Assim como tudo que vai, vai por uma razão. 🌸🌀','Eu não gosto de cobrar atitude de ninguém porque eu tenho de sobra. 😉','Gostar, eu gosto de muita gente, mas a minha prioridade sempre será eu mesma. ✨','As pessoas que criticam, são as mesmas que copiam. 👀','Aprendi que meu único limite é a minha mente. ??','Fazendo dos meus sonhos, um objetivo. 💭']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'frasebonita':	//Dark goxtoso //Zalts apaixonado
                    rate = body.slice(6)
					var foda =['Viver em paz é um luxo. É saber que, apesar dos pesares, ficar bem é prioridade. ✨','Somos ferramentas para a vida seguir em frente. 🌎','Ao invés de pensar nas marcas que a vida deixa em você, reflita: Quais as marcas você está deixando na vida? 💭','Segue seu coração, tudo vai dar certo. ♥️','Permita-se sentir tudo que está dentro de você! ✨','Cada etapa da vida, lhe demandará uma versão mais forte de você. 🍃','A vida é como uma rosa, cada pétala um sonho, cada espinho uma realidade🌷🙉','A arma dos fracos é criticar os fortes. A arma dos fortes é ignorar os fracos!👌','Pare de olhar para trás. Você já sabe onde esteve, agora precisa saber pra onde vai🌙🍃','Só faz sentido o que te faz sentir.']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break


case 'antiaudio':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiAudio) return reply('Ja esta ativo')
antiaudio.push(from)
fs.writeFileSync('./arquivos/antis/antiaudio.json', JSON.stringify(antiaudio))
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiAudio) return reply('Ja esta Desativado')  
antiaudio.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antiaudio.json', JSON.stringify(antiaudio))
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break
				
case 'perfil2':
try {
ppimg = await loli.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
var bio = await loli.fetchStatus
var bioo = bio.status
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const dptr = `
❯  ❒『${botName}』❒  ❮


║❯         〘 SEU PERFIL 〙

┠❯ ❒ NOME: ${pushname}
┠❯ ❒ ${!isGroup ? `PRIVADO: ${pushname}` :  `GRUPO: ${groupName}`}
┠❯ ❒ GADISSE: ${nivelgador}${nivelgado2r}%
┠❯ ❒ PUTARIA: ${putar}${putar2}%
┠❯ ❒ GOSTOSURA: ${gostosurar}${gostosurar2}% 
┠❯ ❒ TELEFONE: ${m.key.id.length > 21 ? 'Android 👾' : m.key.id.substring(0, 2) == '3A' ? 'IOS 🍎🍏' : 'Zap zap web 🖥️💻'}
┠❯ ❒ PROGRAMA: R$${programa}

❯         〘 MOTIVACIONAL 〙

${enviarmen}`
daftarimg = await getBuffer(ppimg)
loli.sendMessage(from, {image: daftarimg, caption: dptr}, {quoted: info})
break

          case 'tempo':
          if(!isPremium) return reply(msg.premium)
            loli.sendMessage(from, { react: { text: `📡`, key: info.key } })
            if (!q) return reply(`Qual o nome da sua cidade? Exemplo: /tempo Sao Paulo caso ter algum ponto retire pra nao da erro.`)
            cidade = body.slice(7)
            clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=f5c0840c2457fbb64188a6d4be05618f&units=metric&lang=pt_br`)
            if (clima.error) return reply(resposta.erro)
            jr = `🌞 Temperatura agora: ${clima.data.main.temp}ºC
  🏙️ Cidade: ${clima.data.name}
  🔥 Temperatura Máxima: ${clima.data.main.temp_max}°C
  ❄ Temperatura Mínima: ${clima.data.main.temp_min}°C
  🌦 Clima: ${clima.data.weather[0].description}
  💧 Umidade de ar: ${clima.data.main.humidity}% 
  🌫 Ventos: ${clima.data.wind.speed}  
  
  Solicitado por: ${pushname}`
            await loli.sendMessage(from, { text: jr }, { quoted: info, contextInfo: { "mentionedJid": jr } })
            break
            
          case 'emojimix': {
            if (!q) return reply(`Exemplo : ${prefix + command} 😅+🤔`)
            reply('SER NÃO FOR TENTA COM OUTRO... ?')
            let [emoji1, emoji2] = q.split`+`
            var em = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
            for (let res of em.results) {
              templateMassage = {
                image: {
                  url: `${res.url}`,
                  quoted: live
                }
              }
              loli.sendMessage(from, templateMassage, { quoted: live })
            }
          }
            break
            
          case 'punheteiro':
          if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
            if (!isGroup) return reply(`Só pode ser utilizado este comando, em grupo.`)
            if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
            const aletl = `${Math.floor(Math.random() * 105)}`
            reply(`@${blamention_id.split("@")[0]} Aguarde, confiscando sua porcentagem...`)
            await delay(7000)
            reply(`「 @${blamention_id.split("@")[0]} 」Sua Porcentagem De punheteiro é De : ${aletl}%`)
            break
            
          case "arma": {
            bancoDeDados = {
              "M1887": {
                "nome": "M1887",
                "descrição": "Uma espingarda de cano duplo que inflige danos massivos em curta distância.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "AK47": {
                "nome": "AK47",
                "descrição": "Rifle de assalto de alta potência com alta taxa de disparo e precisão moderada.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "AWM": {
                "nome": "AWM",
                "descrição": "Rifle de precisão capaz de derrubar inimigos com um único tiro.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "Groza": {
                "nome": "Groza",
                "descrição": "Rifle de assalto altamente poderoso com uma taxa de disparo e precisão excepcionais.",
                "dano": "Alto",
                "alcance": "Médio",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "UMP45": {
                "nome": "UMP45",
                "descrição": "Submetralhadora de alta cadência de tiro, equilibrada em termos de dano e controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 25
              },
              "M1014": {
                "nome": "M1014",
                "descrição": "Uma espingarda de combate próxima com uma taxa de disparo e dano impressionantes.",
                "dano": "Muito alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 6
              },
              "M60": {
                "nome": "M60",
                "descrição": "Metralhadora com alto poder de fogo, ideal para suprimir inimigos e combates a média distância.",
                "dano": "Alto",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 60
              },
              "XM8": {
                "nome": "XM8",
                "descrição": "Rifle de assalto de alta eficiência, com ótimo equilíbrio entre dano, alcance e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "SCAR": {
                "nome": "SCAR",
                "descrição": "Rifle de assalto confiável, com boa precisão e controle de recuo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 30
              },
              "M4A1": {
                "nome": "M4A1",
                "descrição": "Rifle de assalto versátil e equilibrado, adequado para várias situações de combate.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 30
              },
              "SVD": {
                "nome": "SVD",
                "descrição": "Rifle de precisão semi-automático, com ótimo alcance e dano significativo.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              },
              "MP5": {
                "nome": "MP5",
                "descrição": "Submetralhadora compacta e precisa, adequada para combates em espaços confinados.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "SPAS12": {
                "nome": "SPAS12",
                "descrição": "Uma espingarda de ação por bombeamento, eficaz a curta distância com alto dano.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 6
              },
              "KAR98K": {
                "nome": "KAR98K",
                "descrição": "Rifle de precisão de ação por ferrolho, com excelente precisão e dano letal.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "M249": {
                "nome": "M249",
                "descrição": "Metralhadora leve com grande capacidade de munição, ideal para controle de área.",
                "dano": "Alto",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 100
              },
              "Thompson": {
                "nome": "Thompson",
                "descrição": "Submetralhadora clássica de alta cadência de tiro e bom controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "VSS": {
                "nome": "VSS",
                "descrição": "Rifle de assalto silencioso com escopo integrado e baixo recuo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 15
              },
              "MP40": {
                "nome": "MP40",
                "descrição": "Submetralhadora de alta cadência de tiro e bom controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "AUG": {
                "nome": "AUG",
                "descrição": "Rifle de assalto com excelente precisão, alcance e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "G18": {
                "nome": "G18",
                "descrição": "Pistola automática com alta taxa de disparo, ideal para combate próximo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 20
              },
              "P90": {
                "nome": "P90",
                "descrição": "Submetralhadora de alta cadência de tiro e capacidade de munição elevada.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 50
              },
              "Desert Eagle": {
                "nome": "Desert Eagle",
                "descrição": "Pistola de alta potência e precisão, com uma grande parada de energia.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 7
              },
              "Vector": {
                "nome": "Vector",
                "descrição": "Submetralhadora compacta com alta cadência de tiro e boa precisão.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "M14": {
                "nome": "M14",
                "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              },
              "CG15": {
                "nome": "CG15",
                "descrição": "Rifle de sinalização que causa dano explosivo aos inimigos.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "USP": {
                "nome": "USP",
                "descrição": "Pistola de médio alcance com boa precisão e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 12
              },
              "M1873": {
                "nome": "M1873",
                "descrição": "Revólver de ação simples com alto dano, mas taxa de disparo baixa.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "AN94": {
                "nome": "AN94",
                "descrição": "Rifle de assalto com um modo de disparo especial que aumenta a taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "M79": {
                "nome": "M79",
                "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "M14": {
                "nome": "M14",
                "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              },
              "CG15": {
                "nome": "CG15",
                "descrição": "Rifle de sinalização que causa dano explosivo aos inimigos.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "USP": {
                "nome": "USP",
                "descrição": "Pistola de médio alcance com boa precisão e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 12
              },
              "M1873": {
                "nome": "M1873",
                "descrição": "Revólver de ação simples com alto dano, mas taxa de disparo baixa.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "AN94": {
                "nome": "AN94",
                "descrição": "Rifle de assalto com um modo de disparo especial que aumenta a taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "M79": {
                "nome": "M79",
                "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "M82B": {
                "nome": "M82B",
                "descrição": "Rifle de precisão de ação por ferrolho com alto dano e capacidade de penetração.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "P90": {
                "nome": "P90",
                "descrição": "Submetralhadora de alta cadência de tiro e capacidade de munição elevada.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 50
              },
              "Desert Eagle": {
                "nome": "Desert Eagle",
                "descrição": "Pistola de alta potência e precisão, com uma grande parada de energia.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 7
              },
              "M1887": {
                "nome": "M1887",
                "descrição": "Espingarda de ação por ferrolho com alto dano em combates de curta distância.",
                "dano": "Extremo",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "XM8": {
                "nome": "XM8",
                "descrição": "Rifle de assalto com boa precisão e cadência de tiro.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 30
              },
              "KAR98K": {
                "nome": "KAR98K",
                "descrição": "Rifle de precisão de ação por ferrolho com alto dano e precisão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "M79": {
                "nome": "M79",
                "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "MP40": {
                "nome": "MP40",
                "descrição": "Submetralhadora de alta cadência de tiro e bom controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "M14": {
                "nome": "M14",
                "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              }
            }


            const armaPesquisada = args.join(" "); // Substitua pelo valor desejado
            let resultado = null;

            for (const arma in bancoDeDados) {
              if (arma.toLowerCase() === armaPesquisada.toLowerCase()) {
                resultado = bancoDeDados[arma];
                break;
              }
            }

            if (resultado) {
              reply(`*${resultado.nome}*\n*${resultado.descrição}*\n\n*Dano: ${resultado.dano}*\n\n*Alcance: ${resultado.alcance}*\n\n*Taxa de Disparo: ${resultado.taxa_de_disparo}*\n\n*Capacidade do Pente: ${resultado.capacidade_do_pente}*`);
            } else {
              reply('Erro: Arma não encontrada no banco de dados.');
            }
          } break
          
         case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão':
         reply(`esse comando causa ban infelizmente não pode ser usado`)
            break
            
                    case 'walpaperanime':
            {
              json = JSON.parse(fs.readFileSync('./arquivos/wall.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: '🍉PROXIMO🍉'}, type: 1},
                ]
                */
              templateMassage = {
                image: {
                  url: random,
                  quoted: info
                },
                caption: `${command}`,
                footer: `${botName}`,
              }
              loli.sendMessage(from, templateMassage)
            }
            break
            
                    case 'animememe':
            {
              json = JSON.parse(fs.readFileSync('./arquivos/animememe.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: '🍉PROXIMO🍉'}, type: 1},
                ]
                */
              templateMassage = {
                image: {
                  url: random,
                  quoted: info
                },
                caption: `${command}`,
                footer: `${botName}`,
              }
              loli.sendMessage(from, templateMassage)
            }
            break
            
          case "adivinhação": case 'advh':
            if (!isGroup) return reply(`Comando só para grupos.`)
            if (args.length < 1) return reply(`Exemplo: ${prefix} adivinhacao 50`)
            const num = Math.floor(Math.random() * 100) + 1
            const guess = parseInt(args[0])
            if (isNaN(guess)) return reply('Digite um número válido.')
            if (guess < 1 || guess > 100) return reply('O número deve estar entre 1 e 100.')
            if (guess === num) {
              const premio = Math.floor(Math.random() * 50) + 1
              reply(`Parabéns, você acertou! O número era ${num}.\nVocê ganhou ${premio} em dinheiro.`)
            } else {
              reply(`Que pena, você errou. número era ${num}. Tente novamente.`)
            }
            break
            
            case 'apps':
loli.sendMessage(from, {image: fs.readFileSync('./loli/image/menu.jpg'), caption: `



1° ENCONTREI TV
https://encontrei.tv/assistir/filmes-online-2/


➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️↗️↘️



2° REDE CANAIS
https://redecanais.zip/eu-sou-franky-dublado-lista-de-episodios_3ef81a600.html

(ESSE E MELHOR NO COMPUTADOR)


➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️↗️↘️


2° TOP-FLIX
 https://m.topflix.fm/


➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️↗️↘️



3° FILMELIER
https://www.filmelier.com/br/

✰✰✰✰✰




`},{quoted: info})

break

case 'gpofc':
loli.sendMessage(from, { react: { text: `⭐`, key: m.key }})
reply(`https://chat.whatsapp.com/IiBxOEZcwHkG5G9FsYdJ2u`)
break

          case 'ddd':
            if (!isPremium) return reply(msg.vip)
            if (args.length < 1) return reply(`Use ${prefix + command} 21`)
            ddd = body.slice(5)
            ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
            dddlist = `LISTA DE CIDADES ${ddds.data.state} COM ESTE DDD ${q}~\n\n`
            for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
            loli.sendMessage(from, { text: dddlist }, { quoted: info })
            break        
 
          case "imgpralink":
            try {
              if (isQuotedImage) {
                boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : info
                const fetch = require('node-fetch');
                const FormData = require('form-data');
                const fs = require('fs');
                async function uploadImageToTelegraph(imageBuffer) {
                  const form = new FormData();
                  form.append('file', imageBuffer, { filename: 'image.jpg' });

                  const response = await fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: form,
                  });
                  const data = await response.json();
                  if (data && data[0] && data[0].src) {
                    return 'https://telegra.ph' + data[0].src;
                  } else {
                    throw new Error('Failed to retrieve the image URL from the response.');
                  }
                }
                const owgi = await getFileBuffer(boij, "image");
                const imageUrl = await uploadImageToTelegraph(owgi);
                reply(imageUrl);
              } else {
                reply('marque a ft')
              }
            } catch (e) {
              console.log(e)
              reply('error...')
            }
            break
       
          case 'fotobot':
            if (!isCreator) return reply(msg.dono)
            if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
            buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
            await loli.updateProfilePicture(numeroBot, buff)
            reply('Obrigado pelo novo perfil vlw')
            break        

case 'ct1':
if (!isGroup) return reply(msg.grupo)
if (!isCreator && !isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (isAntiCtt) return reply('Ja esta ativo')
antictt.push(from)
fs.writeFileSync('./arquivos/antis/antictt.json', JSON.stringify(antictt))
reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
break 

          case 'antilinkgp':
          case 'antilink':
            if (!isGroup) return reply(msg.grupo)
            if (!isGroupAdmins) return reply(msg.adm)
            if (!isBotGroupAdmins) return reply(msg.botadm)
            if (Number(args[0]) === 1) {
              if (isAntilinkgp) return reply('Ja esta ativo')
              antilinkgp.push(from)
              fs.writeFileSync('./arquivos/antis/antilinkgp.json', JSON.stringify(antilinkgp))
              reply('Ativou com sucesso o recurso de antilinkgp')
            } else if (Number(args[0]) === 0) {
              if (!isAntilinkgp) return reply('Ja esta Desativado')
              pesquisar = from
              processo = antilinkgp.indexOf(pesquisar)
              while (processo >= 0) {
                antilinkgp.splice(processo, 1)
                processo = antilinkgp.indexOf(pesquisar)
              }
              fs.writeFileSync('./arquivos/antis/antilinkgp.json', JSON.stringify(antilinkgp))
              reply('Desativou com sucesso o recurso de antilink de grupo')
            } else {
            }
            break
case 'ct0':
if (!isGroup) return reply(msg.grupo)
if (!isCreator && !isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (!isAntiCtt) return reply('Ja esta Desativado')
pesquisar = from
processo = antictt.indexOf(pesquisar)
while(processo >= 0){
antictt.splice(processo, 1)
processo = antictt.indexOf(pesquisar)
}
fs.writeFileSync('./arquivos/antis/antictt.json', JSON.stringify(antictt))
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
break

case 'noticias': 
try {
if (!q) return reply(`informe um tema para realizar a pesquisa de suas notícias!`)
theNews = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=pt&apiKey=9dc1dde158804756ae9b33dd8d71f7a1`);
newsSends = theNews.data.articles.map(d => `${d.publishedAt.split('T').join(' - ').split('Z')[0]}\n\n${d.title} - ${d.author} [${d.source.name}]\n\n${d.description}\n\n${d.url}\n\n${d.content}\n\n--------------------------- * ---------------------------\n\n`).join('');
msgSemQuoted(newsSends).catch(() => {
return console.log(e)
})
} catch (e) {
return console.log(e)
}
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]   
jr = `
╭━─━───༺[🗯]༻────━─━╮
╿║• ${hora} ${pushname} 
╿║
╿║• Conselhos Bíblico para você: 
╿║
╿║• ${conselhosb} 
╿║
╿║• Bot: ${botName}
╿║• ${!isGroup ? `𝗨𝘀𝘂𝗮??𝗶𝗼: ${pushname}` :  `𝗚𝗿𝘂𝗽𝗼: ${groupName}`}
╰━─━───༺[💫]༻────━─━╯`
await loli.sendMessage(from, {text: jr}, {quoted: info, contextInfo: {"mentionedJid": jr}})
break

            case 'avalie':
                if (!q) return reply(`Ex: ${prefix} avaliação bot muito top..`)
                reply(`Avaliacão enviada com sucesso.`)
                let templateMeesssage = {
                    image: {
                        url: imagemdomenu,
                        quoted: info
                    },
                    caption: `*👻Avaliação👻*\nDo Número: @${sender.split('@')[0]},\nAvaliacão:\n${q}`,
                    footer: 'Noelle_md'
                }
                loli.sendMessage(`${donoNumber}@s.whatsapp.net`, templateMeesssage)
                break

case 'status':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins && !isCreator  && !m.key.fromMe) return reply(msg.adm)

reply(`╭╼╼╾❲ S T A T U S ❳╼╼╾╮
│➱ Anti áudios: ${isAntiAudio? '✅' : '⛔'}
│➱ Anti documentos: ${Antidoc ? '✅' : '⛔'}
│➱ Anti fake: ${isAntifake ? '✅' : '⛔'}
│➱ Anti img: ${isAntiImg? '✅' : '⛔'}
│➱ Anti sticker: ${isAntiSticker ? '✅' : '⛔'}
│➱ Anti ligação: ${isAnticall ? '✅' : '⛔'}
│➱ Anti Notas: ${isAntiNotas ? '✅' : '⛔'}
│➱ Anti catalogo: ${isAnticatalogo ? '✅' : '⛔'}
│➱ Anti video: ${isAntiVid ? '✅' : '⛔'}
│➱ Anti localização: ${Antiloc ? '✅' : '⛔'}
│➱ Anti link grupo: ${isAntiLink ? '✅' : '⛔'}
│➱ AutoReact: ${isAutoReact ? '✅' : '⛔'}
╰╼╾❲ ${botName} ❳╼╾╯`)
break
                  
            case "!massacote":
            case '!mascote':
                var mascoteFotoURL = "https://i.imgur.com/mVwa7q4.png"
                await loli.sendFileFromUrl(chatId, mascoteFotoURL, 'mascote.jpeg', 'Whatsapp Jr.', id)
                break 

case 'amongus': 
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
mentions(`${sus}`, mentioned, true)

break           

   case 'tiktok':
try {
if(!q) return reply("Cadê o link?")
reply(`enviando`)
if (!q.includes('tiktok')) return reply(`Link Invalido..!!`)
thumbnail: fs.readFileSync(`./settings/logo.jpg`),
require('./arquivos/lib/tiktok').Tiktok(q).then( data => {
loli.sendMessage(from, { video: { url: data.nowm }}, { quoted: info })
})
} catch {
reply("Deu erro esse link nao e do tik tok...")
}
break

case 'tiktokaudio':
case 'ttk2':
try {
if(!q) return reply("Cadê o link?")
if (!q.includes('tiktok')) return reply(`Link Invalido..!!`)
reply(`enviando`)
require('./arquivos/lib/tiktok').Tiktok(q).then( data => {
loli.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: info })
})
} catch {
reply("Deu erro 😔")
}
break

case 'togif':
if(!isQuotedSticker) return reply('Marque a figurinha animada!')
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('Aguarde, estou convertendo a figurinha para o formato gif.')
a = await webp_mp4(buff)
loli.sendMessage(from, {video: {url: a}, gifPlayback: true, fileName: `stick.gif`}, {quoted: live}).catch(e => {
reply("Erro ao realizar o envio do sticker!") 
})
DLT_FL(buff)
}
} catch {
reply(mess.erro())
}
break

case 'contar':
if (args.length == 0) return reply( 'Tem Nada, Você Não Colocou Nada')
const count = body.slice(8).length
if (count === 1) {
reply(`O texto possui ${count} caractere.`)
} else if (count > 1) {
reply(`O texto possui ${count} caracteres.`)
}
break

case 'gerarcpf':
if(!isPremium) return reply(msg.premium)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
loli.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: info})
break

case 'esquilo':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'nick':
case 'gerarnick':
case 'fazernick22':
try {
nick = args.join(' ')
if(!q) return reply('Escreva o Nick ou nome que você quer personalizar.')
axios.get(`http://yurimodz-apis.xyz:3006/api/fazernick?nome=Rooh&apikey=YuriModz2025`)
.then(dados => {
var emojis = `┠❯ ❒  `
nicks = dados.data
txt = `${botName}`
for (let i = 0; i < nicks.length; i++) {
txt += `${emojis} ${nicks[i]}\n`
}
txt += `\nCopyright
@Licht.Offc
@AquaBot.Wpp`
reply(`${txt.trim()}`)
}).catch(e => {
reply('Não pode incluir letras modificadas nem emojis, ou pode ser que a api caiu, mas volta logo logo...')  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'shadow':
case 'angelwing':
case 'efeitoneon':
case 'cemiterio':
case 'metalgold':
case 'fire':
case 'romantic':
case 'smoke':  
case 'papel':
case 'lovemsg':
case 'lovemsg2':
case 'lovemsg3':
case 'coffecup':
case 'coffecup2':  
case 'cup':
case 'florwooden':
case 'madeira':
case 'neon2':
case 'lobometal':
case 'harryp':
case 'txtborboleta':
case 'blackpink':
case 'girlmascote': 
case 'logogame':
case 'equipemascote':
case 'fpsmascote':
case 'hackneon':
case 'ffavatar':
case 'mascotegame':
case 'wingeffect':
case 'angelglx':
case 'gizquadro':
case 'txtquadrinhos':
case 'starballons':
case 'frozen':
case '3dsilver':
case 'goldtext':
textin = args.join(" ")
if (!q) return reply(`Qual o nome ?`)
reply('enviando...')
bla = await fetchJson(`http://kayserapis.tech:4197/api/${command}?texto=${textin}&apikey=`+API_KEY_SHADOW)
blabla = await getBuffer(bla.resultado.imageUrl)
loli.sendMessage(from, {image: blabla}, {quoted: info}).catch(e =>{
reply("erro ao criar sua logo! tente novamente mais tarde.")  
})
break  

case 'figubebe':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function lovepartidolovepartido() {
loli.sendMessage(from, { sticker: { url: `http://kayserapis.tech:4197/sticker/figu_bebe?apikey=`+API_KEY_SHADOW } })}
for (i = 0; i < q; i++) {
await sleep(680)
lovepartidolovepartido()
}
break

case 'figucoreana':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function lovepartidoee() {
loli.sendMessage(from, { sticker: { url: `http://kayserapis.tech:4197/sticker/figu_coreana?apikey=`+API_KEY_SHADOW } })}
for (i = 0; i < q; i++) {
await sleep(680)
lovepartidoee()
}
break

case 'nome':
if(!isPremium) return reply(`╭━━━❀ ${botName}❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 AVISO 〙\n│╎\n│╎ 𖢈Desculpe ${pushname}\n│╎ 𖢈Você Não é um Usuário \n│╎ 𖢈Premium, Compre Agora \n│╎ dono: 553172595934\n│╎\n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
if (!q) return reply(`╭━━━❀ ${botName}❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋  〙\n│╎\n│╎Olá, ${pushname}\n│╎Aqui Irei Lhe Ensinar\n│╎A Puxar Os Dados \n│╎Basta Informar Um Nome\n│╎Sem Ponto e Espaços \n│╎\n│╎ ${prefix+ command} Jessica Oliveira \n│╎ \n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
loli.sendMessage(from, { react: { text: `👨‍💻`, key: info.key }})
reply(`👨‍💻 Puxando Dados, Aguarde ${pushname}`)
try {
tohsakapuxadas = await fetchJson(`https://nyox.wtf/api/consultas/nome?query=${q}&apitoken=LICHTZIN`)
loli.sendMessage(from, {image: {url: `https://telegra.ph/file/433a224bc555edc4d55f1.jpg`}, caption: `${tohsakapuxadas.resultado}`}, {quoted: info})
} catch (error) {
console.log(error)
}
break

case 'ranklixo':
if (!isGroup) return reply('*Isso parece um grupo animal?*')
try{
d = [] 
teks = '🏔Rank dos mais lixos do gp\n'
for(i = 0; i < 7; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🚮 ⪼ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente')
}
break

case 'play': case 'play2': case 'play4':
try {
if(!q) return reply(`Exemplo:\n\n${prefix+command}poze desabafo`);
await reply(`Ola ${pushName} música encontrada com sucesso enviando...`)
data = await fetchJson(`http://kayserapis.tech:4197/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_SHADOW)
loli.sendMessage(from, {audio: {url: `http://kayserapis.tech:4197/api/dl/ytaudio?url=${data.resultado[0].url}&apikey=`+API_KEY_SHADOW}, mimetype: "audio/mp4",
headerType: 4,
contextInfo: {
externalAdReply: {
title: `${donoName}`,
body:  `0:00 ❍─────2:36 ↻ ⊲ Ⅱ ⊳ ↺`,
showAdAttribution: true,
thumbnail: fs.readFileSync(`./settings/logo.jpg`),
mediaType: 2,
mediaUrl: `https://wa.me/554399827762?text=Slv%20sandro`,
sourceUrl: `https://wa.me/554399827762?text=Slv%20sandro`}}})
} catch (erro) {
console.log(erro)
}              
break

case 'play7': {
                if (!text) return reply(`⚠️ 𝙴𝚡𝚎𝚖𝚙𝚕𝚘 𝚍𝚎 𝚞𝚜𝚘:\n\n${prefix + comando} Vale do reginaldo`)
                try {
                    let dataa = await fetchJson(`http://sabapi.tech:8090/api/ytsrc/videos?q=${text}&apikey=MrRootsFree`)
                   reply( `━「 PLAY AUDIO 」
  🥂∆𝐁𝐄𝐌✰𝐕𝐈𝐍𝐃𝐎∆🥂     ♬
⸺͟͞ꪶ${pushname}      ♪  
  
➤ۣۜۜ͜͡🍭 𝚃𝚒́𝚝𝚞𝚕𝚘: ${dataa.resultado[0].title}
➤ۣۜۜ͜͡🌨️ Tempo⧽${dataa.resultado[0].timestamp}
➤ۣۜۜ͜͡🌸 Descrição⧽ ${dataa.resultado[0].description}

 0:35 ━❍──────── -5:32 ↻ ⊲ Ⅱ ⊳ ↺ VOLUME: ▁▂▃▄▅▆▇ 100%

Buum diaa💖
ılı.lıllılı.ıllı..ılı.lıllılı.ıllı\n\n━━━━━━━━━━━━━`)
                    loli.sendMessage(from, { audio: { url: `http://sabapi.tech:8090/api/dl/ytaudio?url=${dataa.resultado[0].url}&apikey=MrRootsFree` }, mimetype: "audio/mpeg", fileName: `${dataa.resultado[0].title}.mp4` }, { quoted: info })
                } catch (err) {
                    reply('❌ 𝙴𝚛𝚛𝚘 𝚊𝚘 𝚘𝚋𝚝𝚎𝚛 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚌̧𝚘̃𝚎𝚜!')
                    console.log(err)
                }
            }
                break
                
case 'instamp4':
if (!q) return reply ("Adicione o link do vídeo do Instagram!")
if (!q.includes("instagram.com")) return reply("Só pode ser link do Instagram!!")
fetchJson(`http://yurimodz-apis.xyz:3006/api/dl/igstory?usuario=alok&apikey=YuriModz2025`).then( knn => {
loli.sendMessage(from, {video: {url: knn.resultado.link}, caption: "Está ai 👍"}, {quoted: info})})
break

case 'play5': case 'musica': case 'tocar': {
                if (!text) return reply(`Asim que usa:\n\n${prefix + comando} Amar amei gosta gostei`)
                try {
                    let dataa = await fetchJson(`http://sabapi.tech:8090/api/ytsrc/videos?q=${text}&apikey=MrRootsFree`)
                    ytbrt = `━「 PLAY AUDIO 」
  🥂∆𝐁𝐄𝐌✰𝐕𝐈𝐍𝐃𝐎∆🥂     ♬
⸺͟͞ꪶ${pushname}      ♪  
  
➤ۣۜۜ͜͡📌 𝚃𝚒́𝚝𝚞𝚕𝚘: ${dataa.resultado[0].title}
➤ۣۜۜ͜͡🎯 Tempo⧽${dataa.resultado[0].timestamp}
➤ۣۜۜ͜͡🦊 Descrição⧽ ${dataa.resultado[0].description}

 0:35 ━❍──────── -5:32 ↻ ⊲ Ⅱ ⊳ ↺ VOLUME: ▁▂▃▄▅▆▇ 100%

Bom diaa🤙🏻
ılı.lıllılı.ıllı..ılı.lıllılı.ıllı\n\n━━━━━━━━━━━━━`
                    loli.sendMessage(from, { image: { url: `${dataa.resultado[0].image}` }, caption: ytbrt }, { quoted: info })
                    loli.sendMessage(from, { audio: { url: `http://sabapi.tech:8090/api/dl/ytaudio?url=${dataa.resultado[0].url}&apikey=MrRootsFree` }, mimetype: "audio/mpeg", fileName: `${dataa.resultado[0].title}.mp4` }, { quoted: info })
                } catch (err) {
                    reply('❌ 𝙴𝚛𝚛𝚘 𝚊𝚘 𝚘𝚋𝚝𝚎𝚛 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚌̧𝚘̃𝚎𝚜!')
                    console.log(err)
                }
            }
                break
                
                
case 'play9':
if (!q) return reply(`${pushname} Cadê o nome da música?\nExemplo: ${prefix}${command} Mc paiva`);
try {
data = await fetchJson(`http://45.126.210.24:5056/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_YURI)
loli.sendMessage(from,{image: {url: `${data.resultado[0].image}`}, caption: mess.playResult(data)}, {quoted:info})
loli.sendMessage(from, {audio: {url: `http://45.126.210.24:5056/api/dl/ytaudio?url=${data.resultado[0].url}&apikey=`+API_KEY_YURI}, fileName: data.resultado[0].title+'.mp3', mimetype: "audio/mpeg"}, {quoted: info}).catch(e => {
return reply(mess.error())
})
} catch(error) {
reply("Seja mais específico, não deu pra encontrar com apenas isto...");
}
break
                
case 'sandro': case 'simi':
if(!isGroup) return reply(msg.grupo)
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+q+"&lc=pt"})
return reply(datasimi.message)
} catch (e){
return reply("Resposta não encontrada..")
}
break

case 'infiel':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
async function InfielMsg() {
random = `${Math.floor(Math.random() * 110)}`
traic = random
infiel = random
if(infiel <= 15 ) {var trai = 'Parabéns, você é fiel 👏👏'}
else if(infiel == 16 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 17 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 18 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 19 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 20 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 21 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 22 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 23 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 24 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 25 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 26 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 27 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 28 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 29 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 30 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 31 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 32 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 33 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 34 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 35 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 36 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 37 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 38 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 39 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 40 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 41 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 42 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 43 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 44 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 45 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 46 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 47 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 48 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 49 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 50 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 51 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 52 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 53 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 54 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 55 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 56 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 57 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 58 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 59 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 60 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 61 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 62 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 63 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 64 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 65 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 66 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 67 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 68 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 69 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 70 ) {var trai = 'que isso, quer bater o record de traição? 😳'}    
else if(infiel == 71 ) {var trai = 'que isso, quer bater o record de traição? 😳'}    
else if(infiel == 72 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 73 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 74 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 75 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 76 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 77 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 78 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 79 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 80 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 81 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 82 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 83 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 84 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel >= 85 ) {var trai = 'vish... você é tão fiel quanto o neymar...'}
var sandrokjk = [
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ▒▒▒▒▒▒▒▒▒▒》0%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █▒▒▒▒▒▒▒▒▒》10%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██▒▒▒▒▒▒▒▒》20%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███▒▒▒▒▒▒▒》30%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████▒▒▒▒▒▒》40%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████▒▒▒▒▒》50%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██████▒▒▒▒》60%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███████▒▒▒》70%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████████▒▒》80%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████████▒》90%*`,
`*𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘*\n*《 ██████████》100%*`,
`*O quanto você é infiel?*\n\n*「 @${sender_ou_n.split("@")[0]} 」seu nível de infiel é: ❰ ${random}% ❱*\n\n*${trai}*`
]
let { key } = await loli.sendMessage(from, {text: `*❰Pesquisando a sua ficha de infiel: 「 @${sender_ou_n.split("@")[0]} 」 aguarde...  ❱*`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
for (let i = 0; i < sandrokjk.length; i++) 
await loli.sendMessage(from, {text: sandrokjk[i], mentions: [sender_ou_n], edit: key });
}, 1500)
}
InfielMsg()
break

case 'wallpapers4k': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpapers4k.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break
          case 'videopralink':
          case 'gerarvideo':
            try {
              if (isQuotedVideo) {
                boij = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
                  : info.message.videoMessage;
                const fetch = require('node-fetch');
                const FormData = require('form-data');
                const fs = require('fs');
                async function uploadVideoToTelegraph(videoBuffer) {
                  const form = new FormData();
                  form.append('file', videoBuffer, { filename: 'media' });

                  const response = await fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: form,
                  });
                  const data = await response.json();
                  if (data && data[0] && data[0].src) {
                    return 'https://telegra.ph' + data[0].src;
                  } else {
                    throw new Error('Failed to retrieve the image URL from the response.');
                  }
                }
                const owgi = await getFileBuffer(boij, "video");
                const imageUrl = await uploadVideoToTelegraph(owgi);
                reply(imageUrl);
              } else {
                reply('marque o video')
              }
            } catch (e) {
              console.log(e)
              reply('error...')
            }
            break

case 'simih':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativo')
samih.push(from)
fs.writeFileSync('./arquivos/usuarios/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo 😗')
} else if (Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
samih.splice(from, 1)
fs.writeFileSync('./arquivos/usuarios/simi.json', JSON.stringify(samih))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em')
}
break

case 'simih2':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi2) return reply('O modo Simi está ativo')
samih2.push(from)
fs.writeFileSync('./arquivos/funções/simi.json', JSON.stringify(samih2))
reply('Ativado com sucesso o modo simi neste grupo 😗, Este simih2 ele aprende as respostas e perguntas das pessoas, conforme vai falando, por isso, só recomendo utilizar ele no termux, pois no site ou lugar diferente do termux que você utilizar, ele não vai armazenar os dados nescessarios')
} else if (Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
samih2.splice(from, 1)
fs.writeFileSync('./arquivos/funções/simi.json', JSON.stringify(samih2))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em')
}
break

case 'figumemes':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
reply('As figurinhas então sendo enviadas no pv por motivo de spam...')
async function nometoque() {
loli.sendMessage(sender, { sticker: { url: `http://kayserapis.tech:4197/sticker/figu_memes?apikey=`+API_KEY_SHADOW } })}
for (i = 0; i < q; i++) {
await sleep(680)
nometoque()
}
break

case 'pornovid':{
if(!isPremium) return reply(msg.premium)
reply(`Já estou enviando no pv ${pushname}`)
await loli.sendMessage(from, {react: { text: "🔞", key: info.key }})
  bla = JSON.parse(fs.readFileSync("./arquivos/sexv.json")) 
button = [
  {buttonId: `${prefix}pornovid`, buttonText: {displayText: '😈[suivant]😈'}, type: 1}
]
buttonMessage = {
 video: {url: bla[Math.floor(Math.random() * bla.length)],
 quoted: info},
 caption: '🔞',
 footer: `@${pushname}`,
 button: button,
 headerType: 1
}
loli.sendMessage(sender, buttonMessage)
}
break


case "art1":
loli.sendMessage(from, {text: `
 . ___________________
 ▕╮╭┻┻╮╭┻┻╮╭▕╮╲
 ▕╯┃╭╮┃┃╭╮┃╰▕╯╭▏
 ▕╭┻┻┻┛┗┻┻┛   ▕  ╰▏
 ▕╰━━━┓┈┈┈╭╮▕╭╮▏
 ▕╭╮╰┳┳┳┳╯╰╯▕╰╯▏
 ▕╰╯┈┗┛┗┛┈╭╮▕╮┈▏`, quoted: info})
break

case "art2":
loli.sendMessage(from, {text: `
░░╔══╗░░░░░░░░░░╔══╗░░
 ░╚╣▐▐╠╝░░╔══╗░░╚╣▐▐╠╝░
 ░░╚╦╦╝░░╚╣▌▌╠╝░░╚╦╦╝░░
 ░░░╚╚░░░░╚╦╦╝░░░░╚╚░░░
 ░░░░░░░░░░╝╝░░░░░░░░░░ `, quoted: info})
break

case "art3":
loli.sendMessage(from, {text: `
▒▒▒▒▒▒▐███████▌
 ▒▒▒▒▒▒▐░▀░▀░▀░▌
 ▒▒▒▒▒▒▐▄▄▄▄▄▄▄▌
 ▄▀▀▀█▒▐░▀▀▄▀▀░▌▒█▀▀▀▄
 ▌▌▌▌▐▒▄▌░▄▄▄░▐▄▒▌▐▐▐▐ `, quoted: info})
break

case "art4":
loli.sendMessage(from, {text: `
░▄░█░░░▄▀▀▀▀▀▄░░░█░▄░
 ▄▄▀▄░░░█─▀─▀─█░░░▄▀▄▄
 ░░░░▀▄▒▒▒▒▒▒▒▒▒▄▀░░░░
 ░░░░░█────▀────█░░░░░
 ░░░░░█────▀────█░░░░░   `, quoted: info})
break

case "art5":
loli.sendMessage(from, {text: `
 ▒▒▒▒▒▒▒▒▒▒▒▒
 ▒▒▒▒▓▒▒▓▒▒▒▒
 ▒▒▒▒▓▒▒▓▒▒▒▒
 ▒▒▒▒▒▒▒▒▒▒▒▒
 ▒▓▒▒▒▒▒▒▒▒▓▒
 ▒▒▓▓▓▓▓▓▓▓▒▒
 ▒▒▒▒▒▒▒▒▒▒▒▒`, quoted: info})
break

case "art6":
loli.sendMessage(from, {text: `
┈┈┈╱▔▔▔▔▔▔╲┈╭━━━╮┈┈
 ┈┈▕┈╭━╮╭━╮┈▏┃ZALTS.┃┈┈
 ┈┈▕┈┃╭╯╰╮┃┈▏╰┳━━╯┈┈
 ┈┈▕┈╰╯╭╮╰╯┈▏┈┃┈┈┈┈┈
 ┈┈▕┈┈┈┃┃┈┈┈▏━╯┈┈┈┈┈
 ┈┈▕┈┈┈╰╯┈┈┈▏┈┈┈┈┈┈┈
 ┈┈▕╱╲╱╲╱╲╱╲▏┈┈┈┈┈┈┈`, quoted: info})
break

case "art7":
loli.sendMessage(from, {text: `
──▒▒▒▒▒────▄████▄─────
 ─▒─▄▒─▄▒──███▄█▀──────
 ─▒▒▒▒▒▒▒─▐████──█──█──
 ─▒▒▒▒▒▒▒──█████▄──────
 ─▒─▒─▒─▒───▀████▀─────
 `, quoted: info})
break

case "art8":
loli.sendMessage(from, {text: `
╲╲╭━━━━━━━╮╱╱
 ╲╭╯╭━╮┈╭━╮╰╮╱
 ╲┃┈┃┈▊┈┃┈▊┈┃╱
 ╲┃┈┗━┛┈┗━┛┈┃╱
 ╱┃┈┏━━━━━┓┈┃╲
 ╱┃┈┃┈┈╭━╮┃┈┃╲
 ╱╰╮╰━━┻━┻╯╭╯╲
 ╱╱╰━━━━━━━╯╲╲`, quoted: info})
break

case "art9":
loli.sendMessage(from, {text: `
    ╭━━╮┈┈┈╭━━╮┈┈┈┈┈
 ┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
 ╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
 ┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
 ┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
 ╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
 ┃┈┈╰━━━╯┈┈╰━┛┈┃┈`, quoted: info})
break

case "art10":
loli.sendMessage(from, {text: `
○ ＿＿＿＿
 　　   ∥　　　　|
 　　   DANIEL👨‍💻
 　　   ∥　　　　|
 　　   ∥￣￣￣￣
  ∧＿∧
 ( ･ω･∥
 丶　つ０
  しーＪ `, quoted: info})
break

case "art11":
loli.sendMessage(from, {text: `
A____A
 |・ㅅ・|
 |っ　ｃ|
 |　　　|
 |　　　|
 |　　　|
 |　　　|
 |　　　|
 U￣￣U`, quoted: info})
break

case "art12":
loli.sendMessage(from, {text: `
╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭
 ╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯
 ┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║
 ╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝
 ╭┻╮╱╰╮╰━━╯╭╯╲┊   ║
 ╰┳┫▔╲╰┳━━┳╯╱▔┊   ║
 ┈┃╰━━╲▕╲╱▏╱━━━┬╨╮
 ┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯ `, quoted: info})
break

case "art13":
loli.sendMessage(from, {text: `
.    ▼￣＞-―-＜￣▼
 　　Ｙ　            Ｙ
   /\   / 　 ●    o  ●）
 ＼  ｜　 つ　    ヽ`, quoted: info})
break

case "art14":
loli.sendMessage(from, {text: `
👊🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👊🏿
👉🏿👊🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👊🏾👈🏿
👉🏿👉🏾👊🏽👇🏽👇🏽👇🏽👇🏽👇🏽👊🏽👈🏾👈🏿
👉🏿👉🏾👉🏽👊🏼👇🏼👇🏼👇🏼👊🏼👈🏽👈🏾👈🏿
👉🏿👉🏾👉🏽👉🏼👊🏻👇🏻👊🏻👈🏼👈🏽👈🏾👈🏿
👉🏿👉🏾👉🏽👉🏼👉🏻🏳️‍🌈?👈🏻👈🏼👈🏽👈🏾👈🏿
👉🏿👉🏾👉🏽👉🏼👊🏻👆🏻👊🏻👈🏼👈🏽👈🏾👈🏿
👉🏿👉🏾👉🏽👊🏼👆🏼👆🏼👆🏼👊🏼👈🏽👈🏾👈🏿
👉🏿👉🏾👊🏽👆🏽👆🏽👆🏽👆🏽👆🏽👊🏽👈🏾👈🏿
👉🏿👊🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👊🏾👈🏿
👊🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👊🏿`, quoted: info})
break

case "art15":
  loli.sendMessage(from, {text: `
  ┈┈▕╲▂▂▂▂╱▏┈┈┈┈┈┈
┈┈┈╲╱╭╱╲╱╲┈┈┈┈┈┈
┈╱▔▔┈┊▏▕▏▕┈┈┈┈┈┈
▕▂╱▔╳▔╲▊▏▊╱▔╲▔╲┈
┈┈┈┈▏▕▏▔▔▔▕▋▕▕▋▏
┈┈┈┈╲┈╲▂▂▂▂▂▂▂╱┈
┈┈┈┈▕╲▂▂▂▂▂╱┈┈┈┈
┈┈┈╱▔╲▕┈┈┈┈┈┈┈┈┈
┈┈┈╱▏┈┈┈┈┈╱▔▔▔▔╲┈┈┈┈
┈┈┈▏▏┈┈┈┈┈▏╲▕▋▕▋▏┈┈┈
┈┈┈╲╲┈┈┈┈┈▏┈▏┈▔▔▔▆┈┈
┈┈┈┈╲▔▔▔▔▔╲╱┈╰┳┳┳╯┈┈
┈╱╲╱╲▏┈┈┈┈┈┈▕▔╰━╯┈┈┈
┈▔╲╲╱╱▔╱▔▔╲╲╲╲┈┈┈┈┈┈
┈┈┈╲╱╲╱┈┈┈┈╲╲▂╲▂┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈╲╱╲╱┈┈┈┈
  `, quoted: info})
break

case 'edit1': 

					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${teks}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break

case 'edit2':
                           
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break

case 'edit3':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break	
					
					case 'edit4':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=11%25&text.0.position.y=22%25&text.0.size=20&text.0.color=241b1b&text.0.opacity=33&text.0.font.family=Rock%20Salt&text.0.font.style=italic&text.0.background.opacity=49`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break	
					
					case 'edit5':
                   
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break

case 'edit6':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break	
					
					case 'edit7':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break

case 'edit8':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					//venomk = await getvenomk(`https://lollityp.sirv.com/venom_apis.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=47%25&text.0.size=99&text.0.color=ff0000&text.0.opacity=50&text.0.font.family=Cookie&text.0.font.style=italic&text.0.background.opacity=92&text.0.outline.width=23&text.0.outline.blur=24&text.0.outline.opacity=87`)
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis.jpg?w=640&h=640&text.0.text=Venom&text.0.position.gravity=north&text.0.position.y=53%25&text.0.size=96&text.0.color=ff0000&text.0.opacity=46&text.0.font.family=Shadows%20Into%20Light&text.0.font.style=italic&text.0.background.opacity=70&text.0.outline.width=9&text.0.outline.blur=52`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break					
					
					case 'edit9':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break

case 'edit10':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break

case 'edit11':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis11.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=60%25&text.0.size=64&text.0.color=0071ff&text.0.font.family=Old%20Standard%20TT&text.0.font.style=italic&text.0.background.opacity=55&text.0.outline.color=00d0ff&text.0.outline.width=19&text.0.outline.blur=30`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break	
					
					case 'edit12':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break	
					
					case 'edit13':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break		
					
					case 'edit14':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break	
					
					case 'edit15':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break	
					
					case 'edit16':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
			                break	
			               

          case 'antipv':
            if (!isCreator) return reply(`Apenas dono pode ativar/desativar essa função..`)
            if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
            if (Number(args[0]) === 1) {
              if (isAntiPv) return reply('Ja esta ativo')
              antipv.push('Ativado')
              fs.writeFileSync('./arquivos/usuarios/antipv.json', JSON.stringify(antipv))
              reply('🌀 Ativou com sucesso o recurso de Anti Privado 📝')
            } else if (Number(args[0]) === 0) {
              if (!isAntiPv) return reply('Ja esta Desativado')
              pesquisar = 'Ativado'
              processo = antipv.indexOf(pesquisar)
              while (processo >= 0) {
                antipv.splice(processo, 1)
                processo = antipv.indexOf(pesquisar)
              }
              fs.writeFileSync('./arquivos/usuarios/antipv.json', JSON.stringify(antipv))
              reply('‼️ Desativou com sucesso o recurso De ANTIPV✔️')
            } else {
              enviar('1 para ativar, 0 para desativar')
            }
            break

case 'ttp':
if (!q) return reply(`*_❕Coloque o texto que você quiser!_*\n- *🧑‍🏫 Por exemplo:* ${prefix + command} sandro`)
reagir(from, "👻")
await sleep(1000)
reply('fazendo')
string = args.join(' ') || 'Texto indefinido'
post = `http://yurimodz-apis.xyz:44040/api/ttp?texto=${string}&apikey=Yurizinn200`
sendStickerFromUrl(from, post, {quoted: sasah}).catch(e => {
reply(mess.error())  
})
break


case 'attp':
if(!q.trim()) return reply(`*_❕Coloque o texto que você quiser!_*\n- *🧑‍🏫 Por exemplo:* ${prefix + command} sandro`)
reagir(from, "👻")
reply(`fazendo`)
loli.sendMessage(from, {sticker: {url: `http://yurimodz-apis.xyz:44040/api/attp?texto=${q}&apikey=Yurizinn200`}}, {quoted: info}).catch(e => {
return reply(mess.error());
})
break;

 
case 'attp1': 
case 'attp2': 
case 'attp3': 
case 'attp4': 
case 'attp5': 
case 'attp6': 
case 'attp7': 
case 'attp8': 
case 'attp9': 
case 'attp10': 
if(!q) return reply(`*_❕Coloque o texto que você quiser!_*\n- *🧑‍🏫 Por exemplo:* ${prefix + command} sandro`)
reagir(from, "👻")
reply('fazendo')
att = await getBuffer(`http://yurimodz-apis.xyz:1093/api/${command}?texto=${q}&apitoken=Yurizinn200`)
loli.sendMessage(from, {sticker: att}, {quoted: info})
break

case 'nome': // YURI MODZ DOMINA 
case 'cpf1': // YURI MODZ DOMINA 
case 'cpf2': // YURI MODZ DOMINA 
case 'cpf3': // YURI MODZ DOMINA 
case 'cpf4': // YURI MODZ DOMINA 
case 'cns': // YURI MODZ DOMINA 
case 'pai': // YURI MODZ DOMINA 
case 'mae': // YURI MODZ DOMINA 
case 'nascimento': // YURI MODZ DOMINA 
case 'telefone': // YURI MODZ DOMINA 
case 'telefone2': // YURI MODZ DOMINA 
case 'placa': // YURI MODZ DOMINA 
case 'cnpj': // YURI MODZ DOMINA 
case 'cep': // YURI MODZ DOMINA 
case 'ip': // YURI MODZ DOMINA 
case 'pis': // YURI MODZ DOMINA 
case 'titulo': // YURI MODZ DOMINA 
case 'email': // YURI MODZ DOMINA 
case 'moradores': // YURI MODZ DOMINA 
case 'score': // YURI MODZ DOMINA 
case 'rg': // YURI MODZ DOMINA 
case 'logs': // YURI MODZ DOMINA 
case 'parentes': // YURI MODZ DOMINA 
case 'bin': // YURI MODZ DOMINA 
case 'bank': // YURI MODZ DOMINA 
case 'gerar-cc': // YURI MODZ DOMINA 
if(!isPremium) return reply(enviar.msg.premium)
if (!q) return reply('Vai continuar sem a requisição?')
	api = await fetchJson(`http://yurimodz-apis.xyz:1093/api/consultas?type=${command}&query=${q}&apitoken=Yurizinn200`)
    loli.sendMessage(from, {text: `📄 *AKAME PUXADAS*\n\n${api.resultado}\n\n• By: YURI MODZ\n• User: ${pushname}`}, {quoted: info})
break

case 'play3':
try {
if(!q.trim()) return reply(`${prefix+command} link ou nome`);
reply("ENVIANDO!🎼..");
loli.sendMessage(from, {audio: {url:`https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=${API_KEY_DANIEL}`}, mimetype: "audio/mpeg"}, {quoted: info}).catch(e => {
ABC = `${"-\t".repeat(13)}\n\n`
for (var i of AB) {
ABC += `Titulo: ${i.titulo}\nUrl: ${i.url}\nTempo: ${i.tempo}\nPostado: ${i.postado}\n\nDescrição: ${i.desc}\n\n`;
ABC += `${"-\t".repeat(13)}\n\n`
}
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;

case 'playvideo':
loli.sendMessage(from, { react: { text: `🎥`, key: info.key }}) 
try {
if(!q.trim()) return reply(`${prefix+command} link ou nome`);
reply("ENVIANDO..VÍDEO🎥");
loli.sendMessage(from, {video: {url:`https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${q}&apikey=${API_KEY_DANIEL}`}, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;


case 'criargp':          //case by: Bielzinho-bot
if (!isCreator) return reply(`Apenas dono pode ativar/desativar essa função..`)
const gp = args.join(' ')
if (!gp) return reply('*Escreva o nome do grupo que vc quer criar....*')
var group = await loli.groupCreate(`${gp}`, [sender])
reply(`*Grupo criado com sucesso*\n*Nome do grupo :* *${gp}*`)
loli.sendMessage(group.gid, `Bem vindo ao grupo amigo(a)`, MessageType.text, {quoted: info})
break

          case 'walpaperanime':
            {
              json = JSON.parse(fs.readFileSync('./arquivos/wall.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: '🍉PROXIMO🍉'}, type: 1},
                ]
                */
              templateMassage = {
                image: {
                  url: random,
                  quoted: info
                },
                caption: `${command}`,
                footer: `${botName}`,
              }
              loli.sendMessage(from, templateMassage)
            }
            break
            
          case 'vazados':
            if (!isPremium) return reply(msg.premium)
            reply(`${pushname} enviando no seu pv olha la`)
            {
              json = JSON.parse(fs.readFileSync('./arquivos/sex/sex.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: '🍉PROXIMO🍉'}, type: 1},
                ]
                */
              templateMassage = {
                video: {
                  url: random,
                  quoted: info
                },
                caption: `${command}`,
                footer: `${botName}`,
              }
              loli.sendMessage(sender, templateMassage)
            }
            break
            
                      case 'editfreefire': case 'editefreefire': case 'editff':
            reply(`${pushname} enviando`)
            {
              json = JSON.parse(fs.readFileSync('./arquivos/freefire.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: '🍉PROXIMO🍉'}, type: 1},
                ]
                */
              templateMassage = {
                video: {
                  url: random,
                  quoted: info
                },
                caption: `${command}`,
                footer: `${botName}`,
              }
              loli.sendMessage(from, templateMassage)
            }
            break
            
            case 'freefire':
            reply(`${pushname} enviando no seu pv olha la`)
            {
              json = JSON.parse(fs.readFileSync('./arquivos/sex/freefire.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: '🍉PROXIMO🍉'}, type: 1},
                ]
                */
              templateMassage = {
                video: {
                  url: random,
                  quoted: live
                },
                caption: `${command}`,
                footer: `${botName}`,
              }
              loli.sendMessage(sender, templateMassage)
            }
            break


case 'audiolento': 
case 'slow':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'audiorapido':  
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'grave2':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'grave':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'estourar': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'bass': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'bass2': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'vozmenino':  
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'tabela':
if(verificado === true) {
reply(`Enviando no Privado...`)
await loli.sendMessage(sender, {text: tabela(prefix, botName)}, {quoted: info})
} else {
await loli.sendMessage(sender, {text: tabela(prefix, botName)}, {quoted: info})  
}
break 

case 'checkativo':
case 'check':
if (!isGroup) return reply(msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} no grupo\n𖣘⃟ᗒ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
}
else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
}
break

case 'atividades':  
try{
if(!isGroupAdmins) return reply(msg.adm)
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = `*Atividade dos membros do grupo:*\n\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) {
var indnum = numbersIds.indexOf(obj.id)
teks += `*• Membro:* @${countMessage[ind].numbers[indnum].id.split('@')[0]}\n*• Comandos:* ${countMessage[ind].numbers[indnum].cmd_messages}\n*• Mensagens:* ${countMessage[ind].numbers[indnum].messages}\n\n----------------------------------\n\n`
} else {
teks += `*• Membro:* @${obj.id.split('@')[0]}\n*• Comandos:* 0\n*• Mensagens:* 0\n\n----------------------------------\n\n`
}
mem.push(obj.id)
}
loli.sendMessage(from, {text: teks, contextInfo:{mentionedJid: mem}}, {quoted: info})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'cases':
if(!isCreator) return reply("Você não é dono para utilizar este comando...")
try {
const listCases = () => {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return caseNames.map((caseName, index) => `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
reply("nenhuma case encontrada.") } }
loli.sendMessage(from, { text: listCases() }, { quoted: live });
} catch (e) {
console.log(e)
reply('ocorreu um erro ao obter as cases.') }
break

case 'regraspp':  
if(!isGroupAdmins) return reply('Qual foi membro comum?')
txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🔥ɴᴏᴍᴇ:
𒋨·࣭࣪̇🔥ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰`
loli.sendMessage(from, {text: txtz}, {quoted: info})
break

          case 'roubar': case 'rename':
            {
              (async function () {
                var legenda = q ? q?.split("/")[0] : ` `
                var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `  `
                if (isMedia && !info.message.videoMessage || isQuotedImage) {
                  var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
                  rane = getRandom('.' + await getExtension(encmedia.mimetype))
                  buffimg = await getFileBuffer(encmedia, 'image')
                  fs.writeFileSync(rane, buffimg)
                  rano = getRandom('.webp')
                  exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                    fs.unlinkSync(rane)
                    // "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
                    var json = {
                      "sticker-pack-name": legenda,
                      "sticker-pack-publisher": autor
                    }
                    var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                    var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
                    var exif = Buffer.concat([exifAttr, jsonBuff])
                    exif.writeUIntLE(jsonBuff.length, 14, 4)
                    let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111) + ".temp.exif"
                    fs.writeFileSync(`./${nomemeta}`, exif)
                    exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                      loli.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info })
                      fs.unlinkSync(nomemeta)
                      fs.unlinkSync(rano)
                    })
                  })
                } else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
                  var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
                  rane = getRandom('.' + await getExtension(encmedia.mimetype))
                  buffimg = await getFileBuffer(encmedia, 'video')
                  fs.writeFileSync(rane, buffimg)
                  rano = getRandom('.webp')
                  await ffmpeg(`./${rane}`)
                    .inputFormat(rane.split('.')[1])
                  exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
                    fs.unlinkSync(rane)
                    let json = {
                      "sticker-pack-name": legenda,
                      "sticker-pack-publisher": autor
                    }
                    let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                    let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
                    let exif = Buffer.concat([exifAttr, jsonBuff])
                    exif.writeUIntLE(jsonBuff.length, 14, 4)
                    let nomemeta = "temp.exif"
                    fs.writeFileSync(`./${nomemeta}`, exif)
                    exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                      loli.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info })
                      fs.unlinkSync(nomemeta)
                      fs.unlinkSync(rano)
                    })
                  })
                } else {
                  reply(`MARQUE ALGUMA FOTO OU VIDEO DE ATE 9 SEGUNDOS\n\nEXEMPLO:\n\n.roubar Sandro/MD`)
                }
              })().catch(e => {
                console.log(e)
                reply("Hmm deu erro")
                try {
                  if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
                  if (fs.existsSync(rano)) fs.unlinkSync(rano);
                  if (fs.existsSync(media)) fs.unlinkSync(media);
                } catch { }
              })
            }
            break
                       
case 'banco': { //bay; ALEMAO BAY: ZENITSU//

var salldo = checkATMuser(sender)


loli.sendMessage(from, {image: fs.readFileSync('./loli/image/banco.jpg'), caption: `
『 👤 』 *NOME: ${pushname}*
『 🏛️ 』 *BANCO: NUBANK*
『 💵 』 *DINHEIRO: ${salldo}*
『 🏡 』 *CASA: ${iscasa? "SIM ✅" : "NÃO ❌"}*
『 🤑 』 *RICO: ${istagrico? "SIM ✅" : "NÃO ❌"}*
`},{quoted: info})
}
break

	case 'minerar': {
		// Verificar se o arquivo JSON existe, e criar se não existir
		if (!fs.existsSync('./loli/rpg/pescarCooldown.json')) {
			fs.writeFileSync('./loli/rpg/pescarCooldown.json', JSON.stringify({}));
		}
	
		// Carregar o objeto pescarCooldown do arquivo JSON
		const pescarCooldown = JSON.parse(fs.readFileSync('./loli/rpg/pescarCooldown.json', 'utf8'));
	
		const currentTimePescar = Date.now();
		const lastPescarTime = pescarCooldown[sender] || 0;
		const timeSinceLastPescar = currentTimePescar - lastPescarTime;
		const pescarCooldownTime = 5 * 60 * 1000; // 5 minutos em milissegundos
	
		if (timeSinceLastPescar < pescarCooldownTime) {
			const remainingTime = (pescarCooldownTime - timeSinceLastPescar) / 1000;
			return reply(`Aguarde ${remainingTime.toFixed(0)} segundos antes de minerar novamente.`);
		}
	
		reply(`*OLÁ ${pushname}, AGUARDE AGUARDE 5 SEGUNDA PARA CONCLUÍR A MINERAÇÃO**`);
			// Atualizar o tempo da última pescaria no arquivo JSON
		pescarCooldown[sender] = currentTimePescar;
		fs.writeFileSync('./loli/rpg/pescarCooldown.json', JSON.stringify(pescarCooldown));
		await sleep(5000);
		lagoostas = Math.floor((Math.random() * 150) + 40);
		carranguejos = Math.floor((Math.random() * 150) + 30);
		camaroes = Math.floor((Math.random() * 150) + 40);
		mexilhao = Math.floor((Math.random() * 150) + 50);
		var resultadoresultadoo = lagoostas + carranguejos + camaroes + mexilhao;
	
		addFilter(from);
	
		try {
			picc = await loli.profilePictureUrl(m.chat, "image");
		} catch(e) {
			picc = 'https://telegra.ph/file/9651f2a3a24c15ef71dd1.mp4';
		}
	
		ds = await getBuffer(picc);
	
		let thumbInfo = `
	*┏━── *「️ 🔰  M I N E  🔰 」*  ─━┓*
	*│▢ Total de PEDRAS: ${lagoostas}*
	*│▢ Total de DIAMANTES: ${carranguejos}*
	*│▢ Total de OUROS: ${camaroes}*
	*│▢ Total de FERRO: ${mexilhao}*
	*│▢ *Resultado Final: ${resultadoresultadoo}*
	*┗━── *「️ 🔰  M I N E  🔰 」*  ─━┛*
	[㕚] *Isso significa que foi adicionado em sua carteira R$${resultadoresultadoo},00 em coins!*
	`;
	
 loli.sendMessage(from,  {image: ds, caption: `${thumbInfo}`}, {quoted: info});
		addKoinUser(sender, +resultadoresultadoo);
	
	
	
		break;
	}
	
case 'trabalhar':
minerag = Math.floor((Math.random() * 10) * 150);
loli.sendMessage(from, {image: fs.readFileSync('./loli/image/trabalhar.jpg'), caption: `

*VC TRABALHOU E GANHA ${minerag}*

`},{quoted: info})
addKoinUser(sender, + minerag)
break

case 'money':
 loli.sendMessage(from, {react: {text: `💵`, key: info.key}}) 
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/7d1a76c9d628836f27e8d.mp4`}, gifPlayback: true, caption: `
╭━➪_MONEY_
│◦➛𝗡𝗼𝗺𝗲 : ${pushname}
│◦➛𝗡𝘂𝗺𝗲𝗿𝗼 : ${sender.split("@")[0]}
│◦➛𝗗𝗶𝗻𝗵𝗲𝗶𝗿𝗼 : ${checkATMuser(sender)}
╰━━━━━━━━
`
},{quoted: info})
 break
 
case 'fundomenu':
if(!Creator) return reply(msg.dono)
if(!isQuotedImage) return reply("Marque uma imagem")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`opa, cria! já estou trocando a foto do menu para você..`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
logoslink.logo.splice([])
fs.writeFileSync('./loli/image/menu.jpg', JSON.stringify(logoslink, null, 2))
setTimeout(() => {
logoslink.logo.push(res)
fs.writeFileSync('./loli/image/menu.jpg', JSON.stringify(logoslink, null, 2))
reply(`a foto do menu foi alterada com sucesso para: ${logoslink.logo}`)
}, 1000)
} else {
reply(`mande uma imagem com o comando ${prefix + command} para trocar a foto de todos os menus..`)
}
break

case 'fuguete':{
if (!isGroup) return reply('Comando apenas para grupo!') 
const doublez = Math.floor(Math.random() * 5) + 1
const prolxxp = doublez + Number(args[0])
const ganhardidinho = Math.floor(Math.random() * 50) * 100
const perdidinho = Math.floor(Math.random() * 50) * 100
const perda = Math.floor(Math.random() * 7) + 1
const ganha = Math.floor(Math.random() * 7) + 1
const dinheiro_ = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro_) 
const quantidader = `50`
if (checkxpr <= quantidader) return reply(`tu ta sem dinheiro`(quantidader, checkxpr))
if (Number(args[0]) < 1) return reply(`Qual o valor que você deseja apostar?`)
if (isNaN(args[0])) return reply(`Digite "${prefix}fuguete 100" (desse jeito sem nenhuma vírgula ou letras por favor.`)
if (doublez == 1) {
valoh3 = Number(args[0])
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/02aee2582cf5c3485b239.mp4`}, gifPlayback: true, caption: `
*VC PERDEU 00.${perda}.X TENTE MAIS UMA VEZ*

*DINHEIRO PERDIDO:* *${valoh3}*
`,
})
confirmATM(sender, valoh3)
} else if (doublez == 2) {
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/f2aa6670076884015f862.mp4`}, gifPlayback: true, caption: `
*POR POUCO VC NAO PERDE VC GANHOU 00.${ganha}.X*

*DINHEIRO GANHO:* *${prolxxp}*
`,
})
addKoinUser(sender, prolxxp, dinheiro_) 
} else if (doublez == 3) {
valoh4 = Number(args[0])
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/02aee2582cf5c3485b239.mp4`}, gifPlayback: true, caption: `
*VC OTARIO VC PERDEU 00.${perda}.X*

*DINHEIRO PERDIDO:* *${valoh4}*
`,
})
confirmATM(sender, valoh4)
} else if (doublez == 4) {
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/f2aa6670076884015f862.mp4`}, gifPlayback: true, caption: `
*SORTE VC GANHOU 00.${ganha}.X*

*DINHEIRO GANHO:* *${prolxxp}*
`,
})
addKoinUser(sender, prolxxp, dinheiro_) 
} else if (doublez == 5) {
valoh5 = Number(args[0])
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/02aee2582cf5c3485b239.mp4`}, gifPlayback: true, caption: `
*ACONSELHO VC A NAO JOGAR MAIS* *VC PERDEU 00.${perda}.X*

*DINHEIRO PERDIDO:* *${valoh5}*
`,
})
confirmATM(sender, valoh5)
} else if (doublez == 6) {
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/f2aa6670076884015f862.mp4`}, gifPlayback: true, caption: `
*OLHA SORTE MAIS UMA VEZ VC GANHOU 00.${ganha}.X*

*DINHEIRO GANHO:* *${prolxxp}*
`,
})
addKoinUser(sender, prolxxp, dinheiro_)

}
}
break 

case 'anime1':
    if (args.length < 1) return reply(`${prefix}${command} e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 18) return reply('O texto é longo, até 18 caracteres') //maximo de caracteres
    buffer =(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita COM SUCESSO*'})
    await loli.sendMessage(from, { react: { text: `😚`, key: info.key }})
    reply (`olha seu pv hehe`)
    break


case 'pescar':
pescando = Math.floor((Math.random() * 10) * 150);
const lagostas = `${Math.floor(Math.random() * 105)}`
const caranguejos = `${Math.floor(Math.random() * 105)}`
const mexilhão = `${Math.floor(Math.random() * 105)}`
const peixe = `${Math.floor(Math.random() * 105)}`

loli.sendMessage(from, {image: fs.readFileSync('./loli/image/pescar.jpg'), caption: `
┏━── *「️ 🎣️ 𝐏 𝐄 𝐒 𝐂 𝐀 🎣 」*  ─━┓
│▢ Total de Lagostas: ${lagostas}
│▢ Total de Caranguejos: ${caranguejos}
│▢ Total de peixe:${peixe}
│▢ Total de Mexilhão: ${mexilhão}
┗━── *「️ 🎣️ 𝐏 𝐄 𝐒 𝐂 𝐀 🎣 」*  ─━┛



E GANHOU ${pescando}R$ 😉 🎣 `},{quoted: info})

addKoinUser(sender, + pescando)

break

	case 'churrasco': {
	// Verificar se o arquivo JSON existe, e criar se não existir
		if (!fs.existsSync('prenderCooldown.json')) {
			fs.writeFileSync('prenderCooldown.json', JSON.stringify({}));
		}
	
		// Carregar o objeto prenderCooldown do arquivo JSON
		const prenderCooldown = JSON.parse(fs.readFileSync('prenderCooldown.json', 'utf8'));
	
		const currentTimeprender = Date.now();
		const lastprenderTime = prenderCooldown[sender] || 0;
		const timeSinceLastprender = currentTimeprender - lastprenderTime;
		const prenderCooldownTime = 5 * 60 * 1000; // 5 minutos em milissegundos
	
		if (timeSinceLastprender < prenderCooldownTime) {
			const remainingTime = (prenderCooldownTime - timeSinceLastprender) / 1000;
			return reply(`Aguarde ${remainingTime.toFixed(0)} segundos vc estar preso`);
		}
		// Verificar se o arquivo JSON existe, e criar se não existir
		if (!fs.existsSync('./loli/rpg/churrascoCooldown.json')) {
			fs.writeFileSync('./loli/rpg/churrascoCooldown.json', JSON.stringify({}));
		}
	
		// Carregar o objeto churrascoCooldown do arquivo JSON
		const churrascoCooldown = JSON.parse(fs.readFileSync('./loli/rpg/churrascoCooldown.json', 'utf8'));
	
		const currentTimeChurrasco = Date.now();
		const lastChurrascoTime = churrascoCooldown[sender] || 0;
		const timeSinceLastChurrasco = currentTimeChurrasco - lastChurrascoTime;
		const churrascoCooldownTime = 5 * 60 * 1000; // 5 minutos em milissegundos
	
		if (timeSinceLastChurrasco < churrascoCooldownTime) {
			const remainingTime = (churrascoCooldownTime - timeSinceLastChurrasco) / 1000;
			return reply(`Aguarde ${remainingTime.toFixed(0)} segundos antes de fazer outro churrasco.`);
		}
	
		reply(`*OLÁ [ ${pushname} ] AGUARDE 5 SEGUNDOS*`)
		await sleep (5000);
		contrafile = Math.floor((Math.random() * 150) + 50);
		assinhadefrango = Math.floor((Math.random() * 150) + 30);
		filebigno = Math.floor((Math.random() * 150) + 40);
		pikanha = Math.floor((Math.random() * 150) + 50);
		var resultado1 = contrafile + assinhadefrango + filebigno + pikanha;
	
		addFilter(from);
	
		try {
			picc = await zenitsu.profilePictureUrl(m.chat, "image");
		} catch(e) {
			picc = 'https://telegra.ph/file/2bf2e198407f9b8bfbcd0.jpg';
		}
	
		ds = await getBuffer(picc);
	
		let thumbInfo = `
	*┏ *「️🍖 𝐂 𝐇 𝐔 𝐑 𝐑 𝐀 𝐒 𝐂 𝐎 🍖」  ┓*
	*│▢ Carne - Picanha Argentina: ${contrafile}*
	*│▢ Carne - Contra Filé: ${assinhadefrango}*
	*│▢ Carne - Asinhas de Frango: ${filebigno}*
	*│▢ Carne - Filé Mignon: ${pikanha}*
	*┗ 「️🍖 𝐂 𝐇 𝐔 𝐑 𝐑 𝐀 𝐒 𝐂 𝐎 🍖」  ┛*
	[㕚] *Foram vendidas hoje por você em nosso açougue: ${resultado1} peças de carne por você. Parabéns!*
	[㕚] *Isso significa que foi adicionado em sua carteira R$${resultado1},00 em coins!*
	`;
	
		loli.sendMessage(from,  {image: ds, caption: `${thumbInfo}`}, {quoted: info});
		addKoinUser(sender, +resultado1);
	
		// Atualizar o tempo do último churrasco no arquivo JSON
		churrascoCooldown[sender] = currentTimeChurrasco;
		fs.writeFileSync('./loli/rpg/churrascoCooldown.json', JSON.stringify(churrascoCooldown));
	
		break;
	}

case 'alugarcasa':
if(!JSON.stringify(casa).includes(sender)) return reply(`VOCE NAO TEM UMA CASA USE  ${prefix}casa`)
casaluge = Math.floor((Math.random() * 10) * 30);
casapronta = Math.floor((Math.random() * 10) * 500);
reply(`VOCE ALUGOU A CASA POR ${casaluge} DIAS\n\nVOCE GANHOU  R$${casapronta}`)
addKoinUser(sender, + casapronta)
break

case 'casa':{
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `300000`
if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR CASA*\n\n*PREÇO: ${quantidader}*`)
var [comprar] = q.split("")
if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
casa.push(`${sender}`)
fs.writeFileSync('./funções_rpg/casa/casa.json', JSON.stringify(casa))
addKoinUser(sender, - quantidader)
reply(`*CASA COMPRADO COM SUCESSO* 😃\n\n*CUSTO 💰: ${quantidader}*`)
}
break

case 'hero': case 'lot':
try {
ppimg = await zenitsu.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}
try {
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/b1febb2db7a727eee9d7d.mp4`}, gifPlayback: true, caption: ` 
┏━──────「🕴️」──────━┓
│          *SEU INVENTÁRIO*
│
│ *${isCarab? "⛑️" : "❌"} : CAPACETE*
│
│ *${isRoupab? "👔" : "❌"} : PALITOR*
│
│ *${iscasa? "🏡" : "❌"} : CASA*
│
│ *${isCaussa? "👖" : "❌"} : CALÇA*
│
│ *${isaguacoco? "💧" : "❌"} : AGUA DE COCO*
│
│ *${isSapato? "👞" : "❌"} : SAPATO*
│
│ *${isespada? "⚔" : "❌"} : ESPADA*
│
│
│
╠━━━━━━━━━━━━━━━━━━━━━━━
│             *TAGS*
╠━━━━━━━━━━━━━━━━━━━━━━━
│
│
│> RICO: ${istagrico? "SIM ✅" : "NÃO ❌"}
│
│
┗━──────「🕴️」──────━┛
`},{quoted: info})
} catch (e) {
console.log(e)
}
break

case 'tomaraguacoco':
if(!JSON.stringify(aguacoco).includes(sender)) return reply(`VOCE NAO TEM AGUA DE COCO INFINITO USE  ${prefix}aguacoco`)
aguadd = Math.floor((Math.random() * 4) * 3);
reply(`VOCE TOMOU UMA AGUA DE COCO\n\nMATOU [ ${aguadd}% ] DA SUA SEDE `)
break

case 'aguacoco':{
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `30000`
if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR AGUA DE COCO INFINITO*\n\n*PREÇO: ${quantidader}*`)
var [comprar] = q.split("")
if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
aguacoco.push(`${sender}`)
fs.writeFileSync('./funções_rpg/agua/aguacoco.json', JSON.stringify(aguacoco))
addKoinUser(sender, - quantidader)
reply(`AGUA DE COCO COMPRADA COM SUCESSO* 🌍\n\n*CUSTO 💰: ${quantidader}*`)
}
break

case 'pornovidd':{
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const dattaa = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `4000`
if (checkxpr <= quantidader) return reply(`*[❗] Desculpe ${pushname} você não tem dinhero suficiente para efetuar a compra de $4000*`)
if(!isPremium) return reply(enviar.msg.premium)
reply(`Já estou enviando no pv ${pushname}`)
await loli.sendMessage(from, {react: { text: "😈", key: info.key }})
  bla = JSON.parse(fs.readFileSync("./loli/sexv.json")) 
loli.sendMessage(sender, {video: {url: bla[Math.floor(Math.random() * bla.length)]}},{quoted: info})
addKoinUser(sender, - quantidader)
}
break

case 'capacete':{
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `30000`
var [comprar] = q.split("")
if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR A CAPACETE DE TRABALHO*\n\n*PREÇO: ${quantidader}*`)
carab.push(`${sender}`)
fs.writeFileSync('./funções_rpg/carab/carab.json', JSON.stringify(carab))
addKoinUser(sender, - quantidader)
reply(`*CAPACETE COMPRADO COM SUCESSO*\n\n*CUSTO 💰: ${quantidader}*`)
}
break

case 'calssa':{
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `3000`
if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR CALÇA DE TRABALHO*\n\n*PREÇO: ${quantidader}*`)
var [comprar] = q.split("")
if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
caussa.push(`${sender}`)
fs.writeFileSync('./funções_rpg/caussa/caussa.json', JSON.stringify(caussa))
addKoinUser(sender, - quantidader)
reply(`*CALÇA COMPRADA COM SUCESSO*\n\n*CUSTO 💰: ${quantidader}*`)
}
break

case 'sapatos':{
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `3000`
if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR SAPATOS DE TRABALHO*\n\n*PREÇO: ${quantidader}*`)
var [comprar] = q.split("")
if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
sapato.push(`${sender}`)
fs.writeFileSync('./funções_rpg/sapato/sapato.json', JSON.stringify(sapato))
addKoinUser(sender, - quantidader)
reply(`*SAPATO COMPRADO COM SUCESSO*\n\n*CUSTO 💰: ${quantidader}*`)
}
break

case 'palitor':{
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `3000`
if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR PALITOR DE TRABALHO*\n\n*PREÇO: ${quantidader}*`)
var [comprar] = q.split("")
if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
palitor.push(`${sender}`)
fs.writeFileSync('./funções_rpg/palitor/palitor.json', JSON.stringify(palitor))
addKoinUser(sender, - quantidader)
reply(`*PALITOR COMPRADO COM SUCESSO*\n\n*CUSTO 💰: ${quantidader}*`)
}
break

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins && !SoDono) return reply('Você precisa ser ADM pra utilizar este comando')
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
if((isMedia && !m.message.videoMessage || isQuotedSticker) && args.length == 0) {
media = isQuotedSticker ? m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : m.message.stickerMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'sticker')
fs.writeFileSync(rane,img)
fig = fs.readFileSync(rane)
var options = {
sticker: fig,  
mentions: yd
}
loli.sendMessage(from, options)
} else if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
media = isQuotedImage ? m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : m.message.imageMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'image')
fs.writeFileSync(rane,img)
buff = fs.readFileSync(rane)
loli.sendMessage(from, {image: buff, mentions: yd}, {quoted: info})
} else if ((isMedia && !m.message.videoMessage || isQuotedVideo) && args.length == 0) {
media = isQuotedVideo ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : m.message.videoMessage
rane = getRandom('.'+await getExtension(media.mimetype))
vid = await getFileBuffer(media, 'video')
fs.writeFileSync(rane,vid)
buff = fs.readFileSync(rane)
loli.sendMessage(from, {video: buff, mimetype: 'video/mp4',mentions: yd}, {quoted: info})
} else if ((isMedia && !m.message.videoMessage || isQuotedAudio) && args.length == 0) {
media = isQuotedAudio ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage
rane = getRandom('.'+await getExtension(media.mimetype))
aud = await getFileBuffer(media, 'audio')
fs.writeFileSync(rane,aud)
buff = fs.readFileSync(rane)
loli.sendMessage(from, {audio: buff, mimetype: 'audio/mp4', ptt:true,mentions: yd}, {quoted: info})
} else if ((isMedia && !m.message.videoMessage || isQuotedDocument) && args.length == 0) {
media = isQuotedDocument ? m.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : m.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(rane,doc)
buff = fs.readFileSync(rane)
loli.sendMessage(from, {document: buff, mimetype : 'text/plain',mentions: yd},{quoted: info})
} else if(body){
if(q.length < 1) return reply('Citar oq vey?')
loli.sendMessage(from, {text: body.slice(command.length + 2), mentions: yd})
} else {
reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
}
break

case 'tagrico':{
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `6000`
if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR TAG DE RICO*\n\n*PREÇO: ${quantidader}*`)
var [comprar] = q.split("")
if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
tagrico.push(`${sender}`)
fs.writeFileSync('./funções_rpg/tagrico/tagrico.json', JSON.stringify(tagrico))
addKoinUser(sender, - quantidader)
reply(`*TAG RICO COMPRADO  COM SUCESSO* 💰💲💵\n\n*CUSTO 💰: ${quantidader}*`)
}
break

case 'gerarcpff':
const dinheiropi = checkATMuser(sender)
const checkxprpi = checkATMuser(sender, dinheiropi) 
const quantidaderpi = `4000`
if (checkxprpi < quantidaderpi) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR*\n\n*PREÇO: ${quantidaderpi}*`)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await loli.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: info})
addKoinUser(sender, - quantidaderpi)
break

case 'animal':
  if (!q) {
    reply(`Desculpe, parece que você não forneceu o nome do animal. Você pode usar como exemplo: *${prefixo + comando} gato*`);
     } else {
    const animais = [{ "nome": "Cão", "especie": "Canis lupus familiaris", "habitat": "Doméstico", "dieta": "Carnívoro" }, { "nome": "Gato", "especie": "Felis catus", "habitat": "Doméstico e selvagem", "dieta": "Carnívoro" }, { "nome": "Cavalo", "especie": "Equus ferus caballus", "habitat": "Doméstico e selvagem", "dieta": "Herbívoro" },
  {
    "nome": "Lobo",
    "especie": "Canis lupus",
    "habitat": "Florestas, tundras, montanhas e campos abertos",
    "dieta": "Carnívoro"
  },
  {
    "nome": "Águia",
    "especie": "Aquila chrysaetos",
    "habitat": "Florestas, montanhas e áreas costeiras",
    "dieta": "Carnívoro"
  },
  {
    "nome": "Macaco",
    "especie": "Macaca fascicularis",
    "habitat": "Florestas tropicais e subtropicais",
    "dieta": "Onívoro"
  },
  {
    "nome": "Canarinho",
    "especie": "Serinus canaria",
    "habitat": "Ilhas Canárias e Madeira",
    "dieta": "Granívoro"
  },
  {
    "nome": "Tubarão",
    "especie": "Carcharodon carcharias",
    "habitat": "Oceanos tropicais e subtropicais",
    "dieta": "Carnívoro"
  },
  {
    "nome": "Formiga",
    "especie": "Formicidae",
    "habitat": "Todos os continentes, exceto a Antártida",
    "dieta": "Onívoro"
  },
  {
  "nome": "Tartaruga",
  "especie": "Testudines",
  "habitat": "Aquático e terrestre",
  "dieta": "Onívoro"
},
{
  "nome": "Corvo",
  "especie": "Corvus corax",
  "habitat": "Florestas, campos e cidades",
  "dieta": "Carnívoro"
},
{
  "nome": "Girafa",
  "especie": "Giraffa camelopardalis",
  "habitat": "África",
  "dieta": "Herbívoro"
},
{
  "nome": "Elefante",
  "especie": "Elephas maximus",
  "habitat": "Ásia e África",
  "dieta": "Herbívoro"
},
{
  "nome": "Golfinho",
  "especie": "Delphinus delphis",
  "habitat": "Oceanos e mares",
  "dieta": "Carnívoro"
},
    {
      "nome": "Leão",
      "especie": "Panthera leo",
      "habitat": "África subsaariana",
      "dieta": "Carnívoro"
    },
    {
      "nome": "Tigre",
      "especie": "Panthera tigris",
      "habitat": "Ásia",
      "dieta": "Carnívoro"
    },
    {
      "nome": "Gorila",
      "especie": "Gorilla gorilla",
      "habitat": "África Central e Ocidental",
      "dieta": "Herbívoro"
    },
    {
      "nome": "Papagaio",
      "especie": "Psittaciformes",
      "habitat": "América do Sul, América Central, África e Oceania",
      "dieta": "Onívoro"
    },
    {
      "nome": "Coelho",
      "especie": "Oryctolagus cuniculus",
      "habitat": "Europa, África e Austrália",
      "dieta": "Herbívoro"
    },
      { "nome": "Vaca", "especie": "Bos taurus", "habitat": "Doméstico", "dieta": "Herbívoro" }, { "nome": "Porco", "especie": "Sus scrofa domestica", "habitat": "Doméstico", "dieta": "Onívoro" }, { "nome": "Galinha", "especie": "Gallus gallus domesticus", "habitat": "Doméstico", "dieta": "Onívoro" }, { "nome": "Pato", "especie": "Anas platyrhynchos domesticus", "habitat": "Doméstico e selvagem", "dieta": "Onívoro" }, { "nome": "Ganso", "especie": "Anser anser domesticus", "habitat": "Doméstico e selvagem", "dieta": "Herbívoro" }, { "nome": "Peru", "especie": "Meleagris gallopavo", "habitat": "Doméstico", "dieta": "Onívoro" }, { "nome": "Coelho", "especie": "Oryctolagus cuniculus", "habitat": "Doméstico e selvagem", "dieta": "Herbívoro" }];
    const animal = animais.find(a => a.nome.toLowerCase() === q.toLowerCase());
       if (animal) {
       reply(`*• Nome:* ${animal.nome}\n*• Espécie:* ${animal.especie}\n*• Habitat:* ${animal.habitat}\n*• Dieta:* ${animal.dieta}`);
       } else {
       reply("Animal não encontrado.")}}
       break;
       
case 'wallpapers4k': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpapers4k.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperanimes': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpaperanimes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperbranco': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpapersbranco.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break
l
case 'wallpapervermelho': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpapervermelho.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapervermelho`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperverde': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpaperverde.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperverde`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperazul': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpaperazul.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperazul`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperroxo': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpaperoxo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperoxo`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperamarelo': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpaperamarelo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperamarelo`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperrosa': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpaperosa.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperosa`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break


case 'wallpapershinobu': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/shinobu.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapershinobu`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/SHINOBU/fb10ed54c286b52d7e5f22f5b465274c.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperobanai': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/obanai.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperobanai`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/OBANAI/f437d7615e55a1804f637f7151769ee9.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'telefone':
case 'telefone2':
if(!isPremium) return reply(`╭━━━❀ FRANKY BOT  - OFICIAL ❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 AVISO 〙\n│╎\n│╎ 𖢈Desculpe ${pushname}\n│╎ 𖢈Você Não é um Usuário \n│╎ 𖢈Premium, Compre Agora \n│╎ dono: 5511959391525\n│╎\n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
if (!q) return reply(`╭━━━❀ FRANKY BOT  - OFICIAL ❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋  〙\n│╎\n│╎Olá, ${pushname}\n│╎Aqui Irei Lhe Ensinar\n│╎A Puxar Os Dados \n│╎O Telefone Deve Conter 11 Números\n│╎Sem Ponto e Espaços \n│╎\n│╎ ${prefix+ command} 73999197974\n│╎ \n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
loli.sendMessage(from, { react: { text: `👨‍💻`, key: info.key }})
reply(`👨‍💻 Puxando Dados, Aguarde ${pushname}`)
try {
tohsakapuxadas = await fetchJson(`http://nexus.vortexuscloud.com:4283/api/consultas?type=tel1&query=73999197974&apitoken=LICHTZIN`)
loli.sendMessage(from, {image: {url: `https://telegra.ph/file/433a224bc555edc4d55f1.jpg`}, caption: `${tohsakapuxadas.resultado}`}, {quoted: info})
} catch (error) {//By: Licht San
console.log(error)
}
break

case 'wallpapergyutaro': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/gyutaro.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapergyutaro`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/GYUTARO/fdcde69d36595bfd6b7671adcd510761.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapertomioka': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/tomioka.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapertomioka`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/TOMIOKA/f9572e842eb8b67f089c259459394b35.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperuzui': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/uzui.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperuzui`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/UZUI/f67c5a0a822808ac770ad49472ccc14f.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapermitsuri': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/mitsuri.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapermitsuri`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/MITSURI/fd16399b5c80072c8deee4f87bf5993e.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperdaki': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/daki.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperdaki`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/DAKI/fb8d18f68edd43d1ef752337784cf98f.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperkanao': {
//by Daniel >\<
if (!dinheiros) return reply(enviar.msg.dinheiro)
data = fs.readFileSync('./loli/mais/kanao.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperkanao`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/KANAO/fbe10876319abaabc0a63f53f2121904.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapergyenia': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/gyenia.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapergyenia`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/GYENIA/fe251cb53add17e1aa7509d59d8490f9.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Sigma-MD`
, buttons: buttons, headerType: 4}
loli.sendMessage(info.chat, buttonMessage,{quoted: info})
}
break

case 'wallpapertamayo': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/tamayo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapertamayo`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/TAMAYO/ffb690c3d847c4e7bd539b5bd81d2271.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperdouma': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/douma.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperdouma`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/DOUMA/f75946301ba1edd8934d50aa8b1ffc58.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapersanemi': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/sanemi.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapersanemi`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/SANEMI/ffcb83d47e6fcaad697077c139a37890.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapertokito': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/tokito.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapertokito`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/TOKITO/ffac2e76c9de3818aca9c4032a109084.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperSigma': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/zenitsu.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperSigma`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/Sigma/e4f78ec55881a632e4e1cc3948a970c9.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperenmu': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/enmu.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperenmu`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/ENMU/ff9f048986711075883534c60efb3787.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperinosuke': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/inosuke.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperinosuke`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/INOSUKE/f8ecfcc2bb254000ad05f83586517adc1.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapermuzan': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/muzan.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapermuzan`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/MUZAN/f4c5e0ea5adc28e758506648e1f08107.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperkokushibou': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/kokushibou.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperkokushibou`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/KOKUSHIBOU/fdebc314e66ab36f00eb5f8705f21d2b.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperzenitsu': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/zenitsu.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperzenitsu`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/ZENITSU/fda6066353d57465fac5b029a6afa082.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Sigma-MD`
, buttons: buttons, headerType: 4}
loli.sendMessage(info.chat, buttonMessage,{quoted: info})
}
break

case 'wallpapertanjiro': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/tanjiro.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapertanjiro`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/TANJIRO/0ee8d9c8ab5e795f4cc6d96dd5c65e8f.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperakaza': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/akaza.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperakaza`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/AKAZA/f637dd31731a8117a33ec5da8e335352.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapergyomei': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/gyomei.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapergyomei`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/GYOMEI/f4369b05134a1b3c2da0b548b876c112.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break




case 'narutoedits': {
data = fs.readFileSync('./loli/mais/editsnaruto.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`₊˚.ೃೀ𝑬𝑫𝑰𝑻𝑺✰𝑵𝑨𝑹𝑼𝑻𝑶፝֯֟⋆⁺˖⸙̭❛◌*̥₊\n👤 𝘚𝘰𝘭𝘪𝘤𝘪𝘵𝘢𝘥𝘰 𝘱𝘰𝘳: ${pushname}\n`]
var taikin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
tst = await getBuffer(randKey.result)
let thumbInfo = `${taikin}`;
loli.sendMessage(from, {video: tst, caption: `${thumbInfo}`},{quoted: info})
}
break			       


case 'jujutsuedits': {
data = fs.readFileSync('./loli/mais/editsjujutsu.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`₊˚.ೃೀ𝑬𝑫𝑰𝑻𝑺 𝐉𝐔𝐉𝐔𝐓𝐒𝐔፝֯֟⋆⁺˖⸙̭❛◌*̥₊\n👤 𝘚𝘰𝘭𝘪𝘤𝘪𝘵𝘢𝘥𝘰 𝘱𝘰𝘳: ${pushname}\nDeseja mais? Clica em próxima-edit`]
var taikin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
tst = await getBuffer(randKey.result)
let thumbInfo = `${taikin}`;
loli.sendMessage(from, {video: tst, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'itachiedits': {
data = fs.readFileSync('./loli/mais/edits.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`₊˚.ೃೀ𝑬𝑫𝑰𝑻𝑺፝֯֟⋆⁺˖⸙̭❛◌*̥₊\n👤 𝘚𝘰𝘭𝘪𝘤𝘪𝘵𝘢𝘥𝘰 𝘱𝘰𝘳: ${pushname}\nDeseja mais? Clica em próxima-edit`]
var taikin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
tst = await getBuffer(randKey.result)
let thumbInfo = `${taikin}`;
loli.sendMessage(from, {video: tst, caption: `${thumbInfo}`},{quoted: info})
}
break         

case 'imunes':
loli.sendMessage(from, {image: fs.readFileSync('./loli/image/menu.jpg'), caption: `


𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙄𝙉𝙈𝙐𝙉𝙀S


Whatsapp Taggima v3 Database
Database :
http://www.mediafire.com/file/yk8juklr067pbcf/Database_Taggima-1.zip/file
GB Pro Inmune
Download:
https://www.mediafire.com/file/6d8ubkmzpucz9g8/GB_Pro_iMUNE.apk/file

WhatsApp 2.20.152 Inmune
Download :
https://www.mediafire.com/file/lutjayzytetgrxv/WhatsApp_2.20.152_sign.apk/file

WA Fsociety V1
Download :
https://www.mediafire.com/file/zk313rzp23atavu/WA%25E2%2580%25A2Fsociety_V1_IMUNE.apk/file

WA Fsociety V2
Download :
https://www.mediafire.com/file/lutjayzytetgrxv/WhatsApp_2.20.152_sign.apk/file

TAGGIMA V19
Download :
https://www.mediafire.com/file/lutjayzytetgrxv/WhatsApp_2.20.152_sign.apk/file

廴びՇӃ⼬_ᜠ❹↯🥀🔥 2.20.164
Download :
https://www.mediafire.com/file/e411qdku6onc5zv/%E5%BB%B4%E3%81%B3%D5%87%D3%83%E2%BC%AC_%E1%9C%A0%E2%9D%B9%E2%86%AF%F0%9F%A5%80%F0%9F%94%A5+2.20.164.apk/file

KAWhatsApp Inumne
Download :
https://drive.google.com/file/d/1h1jeIP6R-hN-P0LtgWz8pAFFG0i_ntg4/view

XO WhatsApp Inmune
Download :
https://www.mediafire.com/file/24587ex7gn7rx4g/XQ_WhatsApp.apk/file

✪ஓீ‌ム‌꙳ᰯ⃪✵⃪สࣼ𝖓𝖉𝖊ᷝࣼ𝖗ᷧ𝖘ᷟ𝖔𝖓‌✵ᰯ⃪꙳.whatsapp2017.apk
Download :
https://drive.google.com/file/d/1GXIH38yUJ1ilBHFpC9LwzhT3DrZtcVp6/view

⇝‌࿇ஓீ‌ム꧁ꉣꋫꏸ-ꁒꋫꁹ ⭐️●ᴘᷮᴀ‌ᴄ‌ᴍ‌ᴀ‌ɴᷠ⚖️ ●⚠️🚸꧂Whatspp antiban whatspp
Download :
https://drive.google.com/file/d/175TB6sUelm_0oYlW1T7N6TouT0pirohn/view

2.20.193 INFO MODS
Download :
https://www.mediafire.com/file/btt4jkipnjtffv2/AHMANET+INFOMODS.apk/file

✞ ֆ么亇么ᜰⷀՇ ៜℙ₳ⱲƝ ✞
Download :
https://www.mediafire.com/file/a7ssr0fdp4m23dp/%25E2%259C%259E_%25D6%2586%25E4%25B9%2588%25E4%25BA%2587%25E4%25B9%2588%25E1%259C%25B0%25E2%25B7%2580%25D5%2587_%25E1%259F%259C%25E2%2584%2599%25E2%2582%25B3%25E2%25B1%25B2%25C6%259D_%25E2%259C%259E.apk/file

MFC WhatsApp Imune V6_2.20.135 + Databases
Download :
http://www.mediafire.com/file/83xtf82q8m9mwrg/MFC_WhatsApp_Imune_V6_2.20.135.apk/file

`},{quoted: info})

break

case 'netflix':
const netflix = require('./loli/mais/netflix.json')
if (netflix.length === 0) {
    loli.sendMessage(from, 'Desculpe, não há mais contas disponíveis no momento.');
  } else {
    const randomIndex1 = Math.floor(Math.random() * netflix.length);
    const conet = netflix[randomIndex1];
    netflix.splice(randomIndex1, 1);
    fs.writeFileSync('./loli/mais/netflix.json', JSON.stringify(netflix, null, 2));
    loli.sendMessage(from, { image: { url: 'https://telegra.ph/file/ea66a4b0e47f3bcccebfd.jpg' }, caption: `
    > Lembre-se: teste a conta para ver se tem acesso ou não, algumas contas não têm mais acesso válido, mas você pode solicita proprietário para uma base de uma nova conta, boa sorte.

    
    > Estoque: ${netflix.length} contas restantes
    
    > Login: ${conet.login}
    
    > Senha: ${conet.senha}
    
    *CREDITOS*: Mamede Carlos
    `, mentions: [sender] }, { quoted: info });
  }
break

case 'puxarcase':
try{
if (!isCreator) return loli.sendMessage(from, {text: 'somente dono'})
reply('- Calma ae amigo(a), já estou enviando o comando / case para você..')
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
msgSemQuoted(`${getCase(q)}`)
} catch(e) {
console.log("[GETCASE] - ❌️ Comando não encontrado! ❌")
reply('❌️ Comando não encontrado! ❌️')
}
break

case 'cpf11':
if(!isPremium) return reply(`╭━━━❀ AQUA BOT - OFICIAL ❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 AVISO 〙\n│╎\n│╎ 𖢈Desculpe ${pushname}\n│╎ 𖢈Você Não é um Usuário \n│╎ 𖢈Premium, Compre Agora \n│╎ 𖢈Use: ${prefix}BuyPrem\n│╎\n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
if (!q) return reply(`╭━━━❀ AQUA BOT - OFICIAL ❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋  〙\n│╎\n│╎Olá, ${pushname}\n│╎Aqui Irei Lhe Ensinar\n│╎A Puxar Os Dados \n│╎Cpf Deve Conter 11 Números\n│╎Sem Ponto e Espaços \n│╎\n│╎${prefix+ command} 03244275222\n│╎\n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
loli.sendMessage(from, { react: { text: `👨‍💻`, key: info.key }})
reply(`👨‍💻 Puxando Dados, Aguarde ${pushname}`)
try {
cpf = await fetchJson(`http://nexus.vortexuscloud.com:4283/api/consultas?type=cpf1&query=${q}&apitoken=Dkp2ubeJP6`)
loli.sendMessage(from, {image: {url: `${logocapa}`}, caption: `╭━━━❀ AQUA BOT - OFICIAL ❀━━━╮\n\n${cpf.resultado}\n\n╰━━━━━━━━━━━━━━━━━━━━━━╯`}, {quoted: info})
} catch (error) {//By: Licht San
console.log(`Vish Acho que Broxou`)
}
break

case 'minerardima':
case 'minerardiamante':
const minerardima = `${Math.floor(Math.random() * 105)}`

loli.sendMessage(from, {image: fs.readFileSync('./loli/image/diamante.jpg'), caption: `

	*┏ 「️ ⛏️ MINERIOS ⛏️* 」  
	*│*
	*│▢ 💎 DIAMANTE* ${minerardima}
  *│*
	*┗ 「️⛏️ MINERIOS ⛏️*」  
	`},{quoted: info})


break

case 'lava':
case 'thunder': 
case 'thunderv2':  
case 'neongreen':	
case 'neon':  
case 'neon1':  
case 'neon3d':  
case 'demongreen':   
case 'metalfire':  
case 'rainbow':	  
case 'gelo':
case 'halloween':  
case 'lapis':  
case 'glitch':  
case 'glitch2':   
case '3dgold': 
case 'neon3d':   
case 'transformer':  
case '3dstone':
case 'fiction':
case 'cattxt':
case 'neondevil':
case 'demonfire':
case 'colaq':
case 'luxury':
case 'berry':
case 'matrix':
case 'horror':
case 'nuvem':
case 'neon3':
case 'neve':
case 'areia':
case 'vidro':
case 'style':
case 'blood':
case 'pink':
case 'carbon':
case 'metalblue': 
case 'jeans':  
case 'jokerlogo':   
case 'natal': 
case 'ossos':  
case 'asfalto':	
case '3ddragon':
case 'esmeralda':
case 'break':  
case 'hologram':  
case 'deepsea':
case 'narutologo2':
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply('enviando')
bla = await fetchJson(`http://45.126.210.24:5056/api/${command}?texto=${textin}&apikey=YuriModz2025`)
dllink = await getBuffer(bla.resultado)
loli.sendMessage(from, {image: dllink}, {quoted: info}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "watercolor":
case "1917":
case "multicolor":
case "generator":
case "naturalleaves":
case "candycane":
case "christmas":
case "merrychristmas":
case "3ddeep":
case "drug":
case "americanflag":
case "scifi":
case "wonderful":
case "holiday":
case "technology":
case "winter":
case "sandsummer":
case "sandwriting":
case "sandengraved":
case "summerysand":
case "glue":
case "dark":
case "galaxystyle":
case "minion":
case "horrorgift":
case "holographic":
case "deluxe":
case "glossyblue":
case "deluxegold":
case "glossycarbon":
case "fabric":
case "neontext":
case "halloweenfire":
case "metaldark":
case "darkgold":
case "joker":
case "wicker":
case "firework":
case "steeltext":
case "goldfoil":
case "ultragloss":
case "denimtext":
case "stargreen":
case "captain":
case "toxic":
case "ninjalogo":
case "rainbowequalizer":
case "peridot":
case "rock":
case "purpleshiny":
case "robotr2":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply('enviando')
bla = await fetchJson(`http://45.126.210.24:5056/api/textpro/${command}?texto=${textin}&apikey=YuriModz2025`)
dllink = await getBuffer(bla.resultado)
loli.sendMessage(from, {image: dllink}, {quoted: info}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case 'pig':
case 'urso':
case 'seta':
case 'papel':
case 'grafit4':
case 'blackpinkepo':
case 'areia':
case 'balckpingv2':
case 'brotoluz':
case 'borracha':
case 'brilhante':
case 'diabo': 
case 'crack':
case 'vietnam':
case 'goldt':
case 'biscoito':
if(!q) return reply("Ei, Cadê o Texto?")
reply("Estou Gerando, Aguarde um Pouquinho...")
loli.sendMessage(from,
 {image: {url: `https://tohsaka.onrender.com/api/ephoto/${command}?nome=${q}&apikey=tohsaka`}}, 
{quoted: info})
break

case 'autoban':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if(isAdeusCara) return reply("Já está ativado.")
var ind = dbids.indexOf(from)
if(isAdeusCara) {
adeuscara[ind].actived = true
} else {
adeuscara.push({
groupId: from,
actived: true,
number: []
})
}
fs.writeFileSync('./arquivos/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Ativou com sucesso o recurso de autoban neste grupo✔️`)
} else if (Number(args[0]) === 0) {
if(!isAdeusCara) return reply("Já está Desativado.")  
var ind = dbids.indexOf(from)		
if(isAdeusCara) {
adeuscara[ind].actived = false
} else {
adeuscara.push({
groupId: from,
actived: false,
number: []
})
}
fs.writeFileSync('./arquivos/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Desativou com sucesso o recurso de autoban neste grupo✔️`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'pix'://by Daniel
if (args.length < 1) return reply(`Modo certo de se usar ${prefix}pix @ | valor`)
      
                    if (!q.includes('/')) return reply(`Você precisa colocar o valor que deseja transferir.\n\nExemplo:\n\n*${prefix}Pix @pessoa / 3000*`)
                const tujuan = q.substring(0, q.indexOf('/') - 1)
                const jumblah = q.substring(q.lastIndexOf('/') + 1)
                if(isNaN(jumblah)) return await reply('O valor precisa está em números...')
                if (jumblah < 50 ) return reply(`transfrência mínima e de 50 Coins`)
                if (checkATMuser(sender) < jumblah) return reply(`Você não tem Coins suficiente para fazer uma transferência, você precisa ter no minímo 1000 de Coins`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.00 *  jumblah //IMPOSTO CADA 1 DE DINHERO, ALMENTA E CAI NA SUA CONTA, TODA VEZ QUÊ ALGUÉM FAZER TRANSFERENCIA
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('553172595934@s.whatsapp.net', fee)
                
                pingaa = `*TRANSFERÊNCIA REALIZADA*

[🚹]> ORIGEM: *${sender.split("@")[0]}*
[🗽]> DESTINARIO: *${tujuan}*
[💵]> VALOR DA TRANSFERÊNCIA: *${jumblah}*
[🗒]> BANCO: *SANDRO BANK*
[⚠]> TARIFA: *0,00*
`;
              
                loli.sendMessage(from, {text: pingaa}, {quoted: info})
break    

case 'addautorm':
case 'addautoban':
case 'listanegra':  
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Cade o número?')
var ind = dbids.indexOf(from)
if(isAdeusCara) {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")  
var numind = adeuscara[ind].number.indexOf(listng)
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(listng)
} else {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")    
adeuscara.push({
groupId: from,
actived: false,
number: [listng]
})
}
fs.writeFileSync('./arquivos/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
break

case 'botoff':
case 'boton':
case 'bot':
if (!isGroup) return reply(msg.grupo)
if (!isCreator) return reply("Só dono pode executar esta ação...")
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (botoff.includes(from)) return reply('Ja esta ativo')
botoff.push(from)
fs.writeFileSync('./arquivos/grupos/botoff.json', JSON.stringify(botoff))
reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if (Number(args[0]) === 0) {
if (!botoff.includes(from)) return reply('Ja esta Desativado')
pesquisar = from
processo = botoff.indexOf(pesquisar)
while(processo >= 0){
botoff.splice(processo, 1)
processo = botoff.indexOf(pesquisar)
}
fs.writeFileSync('./arquivos/grupos/botoff.json', JSON.stringify(botoff))
reply(`Ativando todos os funcionamentos do bot novamente...`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'marvel': 
case 'glitch':   
case 'stone':   
case 'space':
case 'pornhub':
case 'america':   
case 'steel':  
case 'grafity':  
case 'glitch3':
case 'thorstyle':  
textooo = args.join(' ')
texto1 = textooo.split('/')[0] || 'Indefinido'
texto2 = textooo.split('/')[1] || 'Indefinido'
if(!textooo.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
reply(`AGUARDE...`)
blaaablaa = await fetchJson(`http://sabapi.tech:8090/api/${command}?texto=${texto1}&texto2=${texto2}&apikey=alemao-key`)
loli.sendMessage(from, { image: { url: `${blaaablaa.resultado}` }, caption: blaaablaa }, { quoted: info })
break

case 'qrcode': case 'qr-qr-code': case 'qr-code':
if(!q) return reply(`Digite o a palavra que deseja transformar em qr code\nExemplo: ${prefix + command} ${botName}`)
reply(`enviando aguarde 15 segundos se nao ir a api caiu`)


loli.sendMessage(from, {image: {url: `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${q}`}, gifPlayback: false, caption: 'AQUI ESTA SEU QR - CODE'
},{quoted: info})
break

case 'gerarpessoa':
gerarpessoa = await fetchJson(`http://nexus.vortexuscloud.com:4214/api/pessoa?apikey=keybx`)
monaco(`
\n🤠    ${pushname} AQUi ESTÁ 👍\n\n👥 ㅤ- NOME: ${gerarpessoa.Nome} 
🛜 ㅤ- CPF: ${gerarpessoa.CPF} 
🌐 ㅤ- RG: ${gerarpessoa.RG} 
👁️‍🗨️ ㅤ- DATA DE NASCIMENTO: ${gerarpessoa["Data de Nascimento"]} 
🔥 ㅤ- SEXO: ${gerarpessoa.Sexo} 
♈ ㅤ- SIGNO: ${gerarpessoa.Signo} 
➖   - FILIAÇÃO: ${gerarpessoa.Filiação} 
👾 ㅤ- MÃE: ${gerarpessoa.Mãe} 
🐂 ㅤ- PAI: ${gerarpessoa.Pai} 
🔆 ㅤ- ONLINE: ${gerarpessoa.Online} 
🔰 ㅤ- E-MAIL: ${gerarpessoa["E-Mail"]} 
⚜️ ㅤ- SENHA: ${gerarpessoa.Senha} 
➰ ㅤ- CEP: ${gerarpessoa.Endereço.CEP} 
➿ ㅤ- ENDEREÇO: ${gerarpessoa.Endereço.Endereço} 
🔢 ㅤ- NÚMERO: ${gerarpessoa.Endereço.Número} 
🆖 ㅤ- BAIRRO: ${gerarpessoa.Endereço.Bairro} 
〰️ ㅤ- CIDADE: ${gerarpessoa.Endereço.Cidade} 
♾️ ㅤ- ESTADO: ${gerarpessoa.Endereço.Estado} 
📞 ㅤ- TELEFONES: ${gerarpessoa.Telefones} 
🗿 ㅤ- ALTURA: ${gerarpessoa["Características Físicas"].Altura} 
😱 ㅤ- PESO: ${gerarpessoa["Características Físicas"].Peso} 
⭕ ㅤ- TIPO SANGUÍNEO: ${gerarpessoa["Características Físicas"]["Tipo Sanguíneo"]} 
🟥 ㅤ- COR FAVORITA: ${gerarpessoa["Cor Favorita"]} \n
`)
break;

case 'calendario':
case 'dados':
var getGroups = await loli.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
hora16 = moment.tz('America/Sao_Paulo').format('HH:mm')
date16 = moment.tz('America/Sao_Paulo').format('DD/MM')
reply(`
*${tempo.toUpperCase()}*
👤 ${pushname}

👥 *GRUPO:* ${isGroup ? groupName : "privado"}
📆 *DATA:* ${date16}
⏰ *HORA:* ${hora16}H
🤖 *BOT:* ${botName}
👑 *DONO:* ${donoName}


`)
break

case 'data': case 'Data':
reply(`Hoje e ${data} mn`)
break

case 'Hora': case 'hora':
reply(`agora são ${hora} mn`)
break

case 'cpf2':
case 'cpf3':
if(!isPremium) return reply(`╭━━━❀${botName} - OFICIAL ❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 AVISO 〙\n│╎\n│╎ 𖢈Desculpe ${pushname}\n│╎ 𖢈Você Não é um Usuário \n│╎ 𖢈Premium, Compre Agora \n│╎ dono: 553172595934\n│╎\n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
if (!q) return reply(`╭━━━❀ ${botName}  - OFICIAL ❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋  〙\n│╎\n│╎Olá, ${pushname}\n│╎Aqui Irei Lhe Ensinar\n│╎A Puxar Os Dados \n│╎Cpf Deve Conter 11 Números\n│╎Sem Ponto e Espaços \n│╎\n│╎${prefix+ command} 03244275222\n│╎\n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
loli.sendMessage(from, { react: { text: `👨‍💻`, key: info.key }})
reply(`👨‍💻 Puxando Dados, Aguarde ${pushname}`)
try {
tohsakapuxadas = await fetchJson(`https://nyox.wtf/api/consultas/${command}?query=${q}&apitoken=LICHTZIN`)
loli.sendMessage(from, {image: {url: `https://telegra.ph/file/433a224bc555edc4d55f1.jpg`}, caption: `${tohsakapuxadas.resultado}`}, {quoted: info})
} catch (error) {
console.log(error)
}
break

case 'gerarsenha':
const netflixx = ['A', 'B', 'CC', 'C', 'D', 'AD' , 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8', 'i9', 'j10', 'k11', 'l12', 'm13', 'n14', 'o15', 'p16', 'q17', 'r18', 's19', 't20', 'u21', 'v22', 'w23', 'x24', 'y25', 'z26', 'pB24', 'XC9P', 'T#;S', ';1H)', '0e7O', 'mGmE', 'v4g7k2q8', 'c1r9h3x6', 'n8u7z4m2', 'i8j9p4o2', 'k2r9q6d1', 'z4y5s2u7', 't3v1o2f4','n8x6w3c6', 'o2y1i8s5', 'g7q6z2m9', 'h3t4r9j8', 'f4s2u7o2', 'w3x6i8p4', 'y1z4n9l6', 'c6o2q8r9' , 'x7q2', 'f4s9', 'm2o8', 'y1t6', 'z4u7', 'j8i2', 'p4w3', 'c6n9','h3r1', 'k2l6', 's5g7', 'o2v9', 'q8x6', 'u7d1', 'w5f4', 'i8z2', 'r9y0', 't3m7','n1j9', '6a2s', 'dxb', 'ncw', 'DX', 'hp' ,'.E','3z','.m','xO','Xm','I3','Yd' ,'Nmm','3A@','z0y','MLs','E8o','0#r','Qo6','wY^' ,'4<','rD','MG',':d','6$','O4','H.','dc','9y','<A','q#','<Q' , ']','@','}','&','-', 'nc7','2NE','4nc','b55','u5l','bps' ]
gosto = body.slice(3)
const nettflx = netflixx[Math.floor(Math.random() * (netflixx.length))]
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/42e6cbb931ba9e8307bad.mp4`}, gifPlayback: true, caption:`




CRIADOR DE SENHAS;


CODIGO GERADO:   ${nettflx}

`},{quoted: info})
break

case 'cartao':
case 'cartão':
if (!q) return reply(`╭━━━❀${botName}❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋  〙\n│╎\n│╎Olá, LICHT SAN\n│╎Aqui Irei Lhe Ensinar\n│╎A Gerar Cartões\n│╎Você Deve Possuir um Bin\n│╎Bin Deve Conter 7 Números \n│╎\n│╎/Cartao 1234567\n│╎\n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
loli.sendMessage(from, { react: { text: `👨‍💻`, key: info.key }})
reply(`👨‍💻 Puxando Dados, Aguarde ${pushname}`)
try {
tohsakapuxadas = await fetchJson(`https://nyox.wtf/api/gerar-cc?query=${q}&apitoken=LICHTZIN`)
loli.sendMessage(from, {image: {url: `https://telegra.ph/file/433a224bc555edc4d55f1.jpg`}, caption: `${tohsakapuxadas.resultado}`}, {quoted: info})
} catch (error) {//By: Licht San
console.log(error)
}
break

case 'score':
if(!isPremium) return reply(`╭━━━❀${botName} ❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 AVISO 〙\n│╎\n│╎ 𖢈Desculpe ${pushname}\n│╎ 𖢈Você Não é um Usuário \n│╎ 𖢈Premium, Compre Agora \n│╎ dono: 553172595934\n│╎\n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
if (!q) return reply(`╭━━━❀ ${botName}❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋  〙\n│╎\n│╎Olá, ${pushname}\n│╎Aqui Irei Lhe Ensinar\n│╎A Puxar Os Dados \n│╎Cpf Deve Conter 11 Números\n│╎Sem Ponto e Espaços \n│╎\n│╎${prefix+ command} 03244275222\n│╎\n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
loli.sendMessage(from, { react: { text: `👨‍💻`, key: info.key }})
reply(`👨‍💻 Puxando Dados, Aguarde ${pushname}`)
try {
tohsakapuxadas = await fetchJson(`https://nyox.wtf/api/consultas/score?query=${q}&apitoken=LICHTZIN`)
loli.sendMessage(from, {image: {url: `https://telegra.ph/file/433a224bc555edc4d55f1.jpg`}, caption: `${tohsakapuxadas.resultado}`}, {quoted: info})
} catch (error) {
console.log(error)
}
break

case 'bank':
if(!isPremium) return reply(`╭━━━❀${botName}❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 AVISO 〙\n│╎\n│╎ 𖢈Desculpe ${pushname}\n│╎ 𖢈Você Não é um Usuário \n│╎ 𖢈Premium, Compre Agora \n│╎ dono: 553172595934\n│╎\n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
if (!q) return reply(`╭━━━❀${botName}❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋  〙\n│╎\n│╎Olá, ${pushname}\n│╎Aqui Irei Lhe Ensinar\n│╎A Puxar Os Dados \n│╎Basta Informar o Código\n│╎Do Banco\n│╎\n│╎${prefix+ command} 21\n│╎\n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
loli.sendMessage(from, { react: { text: `👨‍💻`, key: info.key }})
reply(`👨‍💻 Puxando Dados, Aguarde ${pushname}`)
try {
tohsakapuxadas = await fetchJson(`https://nyox.wtf/api/consultas/bank?query=${q}&apitoken=LICHTZIN`)
loli.sendMessage(from, {image: {url: `https://telegra.ph/file/433a224bc555edc4d55f1.jpg`}, caption: `${tohsakapuxadas.resultado}`}, {quoted: info})
} catch (error) {
console.log(error)
}
break

case 'moradores':
if(!isPremium) return reply(`╭━━━❀${botName}❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 AVISO 〙\n│╎\n│╎ 𖢈Desculpe ${pushname}\n│╎ 𖢈Você Não é um Usuário \n│╎ 𖢈Premium, Compre Agora \n│╎ dono: 553172595934\n│╎\n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
if (!q) return reply(`╭━━━❀${botName}❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋  〙\n│╎\n│╎Olá, ${pushname}\n│╎Aqui Irei Lhe Ensinar\n│╎A Puxar Os Dados \n│╎O Cep Deve Conter 8 Números\n│╎Sem Ponto e Espaços \n│╎\n│╎ ${prefix+ command} 69060160\n│╎ \n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
loli.sendMessage(from, { react: { text: `👨‍💻`, key: info.key }})
reply(`👨‍💻 Puxando Dados, Aguarde ${pushname}`)
try {
tohsakapuxadas = await fetchJson(`https://nyox.wtf/api/consultas/moradores?query=${q}&apitoken=LICHTZIN`)
loli.sendMessage(from, {image: {url: `https://telegra.ph/file/433a224bc555edc4d55f1.jpg`}, caption: `${tohsakapuxadas.resultado}`}, {quoted: info})
} catch (error) {//By: Licht San
console.log(error)
}
break

case 'hack': reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 50));
break;

case 'rg':
if(!isPremium) return reply(`╭━━━❀ ${botName} ❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 AVISO 〙\n│╎\n│╎ 𖢈Desculpe ${pushname}\n│╎ 𖢈Você Não é um Usuário \n│╎ 𖢈Premium, Compre Agora \n│╎ dono: 553172595934\n│╎\n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
if (!q) return reply(`╭━━━❀ ${botName} ❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋  〙\n│╎\n│╎Olá, ${pushname}\n│╎Aqui Irei Lhe Ensinar\n│╎A Puxar Os Dados \n│╎RG Deve Conter 8 Números\n│╎Sem Ponto e Espaços \n│╎\n│╎ ${prefix+ command} 15205495\n│╎ \n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
loli.sendMessage(from, { react: { text: `👨‍💻`, key: info.key }})
reply(`👨‍💻 Puxando Dados, Aguarde ${pushname}`)
try {
tohsakapuxadas = await fetchJson(`https://nyox.wtf/api/consultas/rg?query=${q}&apitoken=LICHTZIN`)
loli.sendMessage(from, {image: {url: `https://telegra.ph/file/433a224bc555edc4d55f1.jpg`}, caption: `${tohsakapuxadas.resultado}`}, {quoted: info})
} catch (error) {
console.log(error)
}
break

case 'cnpj':
if(!isPremium) return reply(`╭━━━❀ ${botName} ❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 AVISO 〙\n│╎\n│╎ 𖢈Desculpe ${pushname}\n│╎ 𖢈Você Não é um Usuário \n│╎ 𖢈Premium, Compre Agora \n│╎ dono: 5511959391525\n│╎\n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
if (!q) return reply(`╭━━━❀ ${botName} ❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋  〙\n│╎\n│╎Olá, ${pushname}\n│╎Aqui Irei Lhe Ensinar\n│╎A Puxar Os Dados \n│╎Cnpj Deve Conter 14 Números\n│╎Sem Ponto e Espaços \n│╎\n│╎ ${prefix+ command} 13347016000117\n│╎ \n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
loli.sendMessage(from, { react: { text: `👨‍💻`, key: info.key }})
reply(`👨‍💻 Puxando Dados, Aguarde ${pushname}`)
try {
tohsakapuxadas = await fetchJson(`https://nyox.wtf/api/consultas/cnpj?query=${q}&apitoken=LICHTZIN`)
loli.sendMessage(from, {image: {url: `https://telegra.ph/file/433a224bc555edc4d55f1.jpg`}, caption: `${tohsakapuxadas.resultado}`}, {quoted: info})
} catch (error) {
console.log(error)
}
break

case 'cll':
case 'fone':
if(!isPremium) return reply(`╭━━━❀ FRANKY BOT  - OFICIAL ❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 AVISO 〙\n│╎\n│╎ 𖢈Desculpe ${pushname}\n│╎ 𖢈Você Não é um Usuário \n│╎ 𖢈Premium, Compre Agora \n│╎ dono: 5511959391525\n│╎\n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
if (!q) return reply(`╭━━━❀ FRANKY BOT  - OFICIAL ❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋  〙\n│╎\n│╎Olá, ${pushname}\n│╎Aqui Irei Lhe Ensinar\n│╎A Puxar Os Dados \n│╎O Telefone Deve Conter 11 Números\n│╎Sem Ponto e Espaços \n│╎\n│╎ ${prefix+ command} 73999197974\n│╎ \n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
loli.sendMessage(from, { react: { text: `👨‍💻`, key: info.key }})
reply(`👨‍💻 Puxando Dados, Aguarde ${pushname}`)
try {
tohsakapuxadas = await fetchJson(`https://nyox.wtf/api/consultas/${command}?query=${q}&apitoken=LICHTZIN`)
loli.sendMessage(from, {image: {url: `https://telegra.ph/file/433a224bc555edc4d55f1.jpg`}, caption: `${tohsakapuxadas.resultado}`}, {quoted: info})
} catch (error) {//By: Licht San
console.log(error)
}
break

case 'gtasan':
loli.sendMessage(from, {image: fs.readFileSync('./loli/image/menu.jpg'), caption: `

き⃟❗️MEDIAFIRE DOWNLOAD❗⃟ き

➱📁 Nome : GTA SAN
➱📊 Tamanho : 2 GB
➯🧧 Link : https://www.mediafire.com/file/ln6r3kx0ie77r9t/GTA_San_Andreas_2021.zip/file

_*Aguarde o processo de upload de mídia......*_

`},{quoted: info})

break

case 'play6':
if(!q) return reply(`nome da musica`)
data = await fetchJson(`http://sabapi.tech:8090/api/ytsrc/videos?q=${text}&apikey=MrRootsFree`)
ytbrt = `━「 PLAY AUDIO 」
⸺͟͞ꪶ${pushname}      ♪  
  
➤ۣۜۜ͜͡🏁 𝚃𝚒́𝚝𝚞𝚕𝚘: ${data.resultado[0].title}
➤ۣۜۜ͜͡🏁 Tempo⧽${data.resultado[0].timestamp}
➤ۣۜۜ͜͡🏁 Descrição⧽ ${data.resultado[0].description}

`
loli.sendMessage(from, { image: { url: `${data.resultado[0].image}` }, caption: ytbrt }, { quoted: info })
loli.sendMessage(from, { audio: { url: `http://sabapi.tech:8090/api/dl/ytaudio?url=${data.resultado[0].url}&apikey=MrRootsFree` }, mimetype: "audio/mpeg",
headerType: 4,
contextInfo: {
externalAdReply: {
title: `${botName}`,
body: `${data.resultado[0].title}`,
showAdAttribution: true,
thumbnail: await getBuffer(`${data.resultado[0].image}`),
mediaType: 2,
mediaUrl: `https://www.instagram.com/sandsx_krl?igsh=c2x4bGJtbTFqN2t5`,
sourceUrl: `http://Instagram.com/sandsx_krl`}}},{quoted: info}).catch(e => {
return reply(`erro`)
})
break

case 'espada':   case 'comprarespada':{
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `7000`
if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR UMA ESPADA*\n\n*PREÇO: ${quantidader}*`)
var [comprar] = q.split("")
if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
espada.push(`${sender}`)
fs.writeFileSync('./funções_rpg/espada/espada.json', JSON.stringify(espada))
addKoinUser(sender, - quantidader)
reply(`*ESPADA COMPRADA COM SUCESSO*\n\n*CUSTO 💰: ${quantidader}*`)
}
break

case 'pinterest': 
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} cat`)
reply(`enviando aguarde 15 segundos se nao ir a api caiu`)
loli.sendMessage(from, {image: {url: `http://sabapi.tech:8090/api/pinterest?text=${q}&apikey=alemao-key`}, gifPlayback: false, caption: '✅'
},{quoted: info})
break;

case 'pinterest2':
if(!q) return reply(`EXEMPLO: ${prefix}pinterest2 zenitsu`)
reply(`enviando imagem... se nao ir tente mais tarde`)
loli.sendMessage(from, {image: {url: `http://kaicapis.online:5047/api/pinterest?text=${q}&apitoken=nunu-mnc`}, gifPlayback: false, caption: '✅'
},{quoted: info})
break

case 'figuroblox': case 'robloxfigu':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 50) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundom() {
loli.sendMessage(sender, { sticker: { url: `http://expr.sabapi.tech:4040/sticker/figu_roblox?apikey=alemao-key` } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundom()
}
break

case 'figudesenho': case 'figudesenhos':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 50) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitaaamundoeitaaamundo() {
loli.sendMessage(from, { sticker: { url: `http://expr.sabapi.tech:4040/sticker/figu_desenho?apikey=alemao-key` } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitaaamundoeitaaamundo()
}
break

case 'tel1':
if (!q) return reply('Vai continuar sem a requisição?')
	api = await fetchJson(`https://elnaposearch.vip/api/puxar?token=XouhINOf&&type=tel1&q=${q}`)
	reply(`AGUARDE`)
 loli.sendMessage(from, {text: `📄 *${botName}*\n\n${api.result}\n\n\n• USER: ${pushname}`}, {quoted: info})
break

case 'peshub':
if(!isPremium) return reply(msg.premium)
if (!q) return reply("Escreva o que quer pesquisar!")
reply (`Realizando Pesquisa Aguarde...`)
pornL = await fetchJson(`https://tohsaka.onrender.com/api/pesquisa/pornhubsrc?nome=${q}&apikey=tohsaka`)
srcL = `              『  P O R N  H U B  』\n\n        `
for (let L of pornL) {
srcL += `
Titulo: ${L.titulo}\n
Link: ${L.link}
Autor: ${L.autor}
Hype: ${L.hype}
Enviado: ${L.data_upload}\n\n━─━─━⊰᯽⊱━─━─━⊰᯽⊱━─━─━\n\n`}
loli.sendMessage(sender, {text: srcL, },{quoted: info})
break

case 'gerargp':
if(!q) return reply("Ei, Qual o Tipo de Grupo?")
reply("Aguarde, Estou Gerando os Grupos")
 if(!isPremium) return reply(enviar.msg.premium)   
    swp = await fetchJson(`https://tohsaka.onrender.com/api/pesquisa/gpwhatsapp?nome=${q}&apikey=tohsaka`)
    teks = `═══════❒『𝐀 𝐐 𝐔 𝐀  𝐁 𝐎 𝐓  𝐏 𝐄 𝐒 𝐐 𝐔 𝐈 𝐒 𝐀』❒\n\n`;
    for(let i of swp) {
        teks += " *❯ NOME:* " + i.nome+ "\n"
        teks += " *❯ DESCRIÇÃO:* " + i.descrição+ "\n"
        teks += " *❯ LINK:* " + i.link+ "\n\n"
    }
    teks += `═════════════════════`
    img = `${swp[0].img}`
    loli.sendImage(from, img, teks, info)
   reply(teks)
    break
    
case 'inativo':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(q.match(/[a-z]/i) || !q) return reply(`Exemplo: ${prefix+command} 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`)
await LIMPARDOCNT_QUEMJASAIU()
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= q.trim())
if(i.figus <= q.trim())
if(i.cmd_messages <= q.trim())
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != numeroBot)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(a => a.id == i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem pessoas com ${q}  mensagens..`)
bli = `Usuários com ${q.trim()} mensagem(ns) pra baixo..\n\n`
for (ac = 0; ac < blue.length; ac++) {
bli += `${ac +1} - _ Usuário: @${blue[ac].split("@")[0]}\n\n`
}
mention(bli)
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(msg.grupo)
if(!isGroupAdmins) return reply(msg.adm)
reagir(from, "🗒️")
await sleep(1000)
if(command == "anotar") {
var [q5, q10] = q.trim().split("/")
if(!q5 || !q10 || !q.includes("/")) return reply(`*_❕Digite o título da anotação e o texto que deseja anotar..._*\n*_🥶 Exemplo:_* ${prefix}anotar Gatos/Gatinhos são fofos...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`*_❕Esta anotação já está inclusa, utilize outro título..._*\n*_🥶 Ou você pode tirar com_* ${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./database/func/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./database/func/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")  
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./database/func/tabela/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(msg.grupo)
reagir(from, "📝")
await sleep(1000)
if(command == "anotacao" || command == "nota") {
if(!q) return reply("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(anotar[i2].puxar.length == 0) return reply("Este grupo não tem nenhuma anotação...")    
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2].puxar 
txtin = `*_🗒️ Aqui está todas as anotações registradas nesse grupo 🗒️_*\n`
for ( i = 0; i < antr.length; i++) {
txtin += `\n↝ *_📝 Anotação:_* ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`
}
txtin += ""
mentions(txtin)
}
break

case 'deletar': case 'delete': case 'del':  case 'd': case 'apagar':
if(!isGroupAdmins) return reply(msg.adm)
if(!menc_prt) return reply("❕Marque a mensagem do usuário que deseja apagar...")
loli.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
await sleep(1000)
reagir(from, "🧯")
break 

case 'mute': case 'm': case 'mutar':
if(!isGroup) return reply(msg.grupo)
if(!isGroupAdmins) return reply(msg.adm)
if(!isBotGroupAdmins) return reply(msg.botadm)
textin = args.join(" ")
if(!textin) return reply('*❕Marque o número que deseja mutar.*')
reagir(from, "🤐")
await sleep(1000)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(isMuted) {
var ind = GroupsMutedActived.indexOf(from)
for (let _ of mentioned) {
teks = `*_🔇 Usuário mutado:_* @${_.split('@')[0]}
*_👤 Ação do adm:_* [ ${pushname} ]`
muted[ind].numbers.push(_)
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2))
teks += '\n-\n*🤫 Caso você dar um piu, você vai ser banido do grupo.*'
mentions(teks, mentioned, true)
} else {
 const data = {
jid: from,
numbers: mentioned
}
muted.push(data)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `*_🔇 Usuário mutado:_* @${_.split('@')[0]}
*_👤 Ação do adm:_* [ ${pushname} ]`
}
teks += '\n-\n*🤫 Caso você dar um piu, você vai ser banido do grupo.*'
mentions(teks, mentioned, true)
}
break

case 'desmute': case 'unmute': case 'desmutar':
if(!isGroup) return reply(msg.grupo)
if(!isGroupAdmins) return reply(msg.adm)
if(!isBotGroupAdmins) return reply(msg.botadm)
textin = args.join(" ")
if(!textin) return reply('*❕Marque o número que deseja desmutar.*')
reagir(from, "🤪")
await sleep(1000)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
var ind = GroupsMutedActived.indexOf(from)
if(isMuted) {
for(let _ of mentioned) {
if(muted[ind].numbers.indexOf(_) >= 0) {
var rmind = muted[ind].numbers.indexOf(_)
muted[ind].numbers.splice(rmind, 1)
}
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `*_🔊 Usuário desmutado:_* @${_.split('@')[0]}
*_👤 Ação do adm:_* [ ${pushname} ]`
}
teks += '\n-\n*🤪 agora você pode falar a vontade no grupo!*'
mentions(teks, mentioned, true)
} else {
const data = {
jid: from,
numbers: []
}
muted.push(data)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `*_🔊 Usuário desmutado:_* @${_.split('@')[0]}
*_👤 Ação do adm:_* [ ${pushname} ]`
}
teks += '\n-\n*🤪 Agora você pode falar a vontade no grupo!*'
mentions(teks, mentioned, true)
}
break

case 'rankzueiros': case 'rankzueiro':
if (!isGroup) return reply(msg.grupo);
if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  

  reagir(from, "🤪");

  membrosZueiros = [];
  
  const zueiro1 = groupMembers;
  const zueiro2 = groupMembers;
  const zueiro3 = groupMembers;
  const zueiro4 = groupMembers;
  const zueiro5 = groupMembers;

  const zueiroMem1 = zueiro1[Math.floor(Math.random() * zueiro1.length)];
  const zueiroMem2 = zueiro2[Math.floor(Math.random() * zueiro2.length)];
  const zueiroMem3 = zueiro3[Math.floor(Math.random() * zueiro3.length)];
  const zueiroMem4 = zueiro4[Math.floor(Math.random() * zueiro4.length)];
  const zueiroMem5 = zueiro5[Math.floor(Math.random() * zueiro5.length)];

  const TMPZUEIRO = [
    "O rei da zoeira! 👑",
    "Mestre na arte do deboche. 😎",
    "Provocador nato. 🤣",
    "Conquistador de risadas. 🎉",
    "Doutor em piadas sem graça. 🎓",
    "Especialista em memes. 🚀",
    "Destruidor de momentos sérios. 💣",
    "Arquiteto da palhaçada. 🏰",
    "O zueiro mais querido do grupo. ❤️",
    "Sorriso contagiante, zueira constante. 😄",
    "O palhaço oficial. 🤡",
    "Mestre do sarcasmo. 😏",
    "Sabe tudo de trollagem. 😜",
    "Alegria em forma de zueira. 🎈",
    "Faz piada até com sombra. 🌚",
    "Riso garantido com esse zueiro. 😂",
    "O mestre das pegadinhas. 🤪",
    "Transforma qualquer situação em comédia. 🎭",
    "Pai da zoeira, filho do riso. 🤣",
    "Zueiro 24 horas por dia. ⏰",
  ];

  rankZueiroImg = "https://telegra.ph/file/8de9823d4d2af40b530df.jpg";
  rankZueiro = `*_Os Zueiros do Grupo estão prontos para zoar:_*
*╭────────────*
*│* 🤪 @${zueiroMem1.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*│* 🤪 @${zueiroMem2.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*│* 🤪 @${zueiroMem3.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*│* 🤪 @${zueiroMem4.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*│* 🤪 @${zueiroMem5.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*╰────────────*`;

  membrosZueiros.push(zueiroMem1.id);
  membrosZueiros.push(zueiroMem2.id);
  membrosZueiros.push(zueiroMem3.id);
  membrosZueiros.push(zueiroMem4.id);
  membrosZueiros.push(zueiroMem5.id);

  mencionarIMG(rankZueiro, rankZueiroImg);
  break;

  case 'chato':
  if (!isGroup) return reply(msg.grupo);
  reagir(from, "😒");
  setTimeout(async () => {
    const niveisDeChatice = [
      "um pouco chatinho...",
      "na média da chatice.",
      "chato, mas dá para aguentar.",
      "muito chato, cuidado!",
      "ultra chato, ninguém merece!",
    ];
    const mensagemChata = niveisDeChatice[Math.floor(Math.random() * niveisDeChatice.length)];
    textchato = `🙄 @${sender_ou_n.split("@")[0]} é ${mensagemChata}`
    mention(textchato)
  }, 2000);
  break;

  // MENU JOGOS // 

case 'jogo1':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Minecraft:* https://www.mediafire.com/file/w9sms627ql2np6i/Minecraft_1.16.221.01_ByHT.apk/file`)
break
case 'jogo2':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *DragonBall Z - Dokkan:* https://www.mediafire.com/file/015ibjiljfkv7uo/Dokkan_v4_12_1_MOD.apk/file`)
break
case 'jogo3':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *GTA SanAndreas:* https://www.mediafire.com/file/ln6r3kx0ie77r9t/GTA_San_Andreas_2021.zip/file`)
break
case 'jogo4':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *GTA SA - Legendado em Português:* http://www.mediafire.com/file/7op13aup1ll7m9y/GTA_SA_COM_TRADU%25C3%2587%25C3%2583O_PT-BR.zip/file`)
break
case 'jogo5':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *GTA SA com Mod Cleo:* http://www.mediafire.com/file/d8cfwzctx95x0dx/GTA_SA_v2.00_Mod_Cleo.zip/file`)
break
case 'jogo6':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *GTA SA Online:* https://www.mediafire.com/file/0xccd5m0zwqstag/GTA_SA_ONLINE_SAMP_ByHT.zip/file`)
break
case 'gpsamp':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu o grupo, espero que você goste!
-
🔥 *Grupo Ofc:* https://chat.whatsapp.com/JDEH0eU70z2LLU4FywshzY`)
break
case 'jogo7':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *GTA SuperLite + Mod Cleo:* http://www.mediafire.com/file/wdkg8pmndtihil3/GTA_SA_super_lite_mod_cleo_ByHT.zip/file`)
break
case 'jogo8':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *LastDay on Eart Survival:* https://www.mediafire.com/file/k4pr6awvr5eb1ak/Last%20Day%20on%20Earth%201.17.7-mod.apk/file `)
break
case 'jogo9':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Bomber Friends MOD:* https://www.mediafire.com/file/dir8pwrb1mpm57w/Bomber_Friends_v4.10_MOD.apk/file`)
break
case 'jogo10':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Arcade Hunter:* https://www.mediafire.com/file/ugcdaclnpodtxxs/Arcade_Hunter-Sword%252CGun%252C_and_Magic_1.11.0-mod.apk/file`)
break
case 'jogo11':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Defesa de Zombie Ocioso:* https://www.mediafire.com/file/8422sjofw1cdnka/Zombie+Idle+Defense+1.5.79.229MOD-t.apk/file`)
break
case 'jogo12':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Pac-Man:* https://www.mediafire.com/file/gxwy01ni99pcur2/PAC-MAN+9.2.7.10150MOD-t.apk/file`)
break
case 'jogo13':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Car Driving School Simulator - APK:* https://www.mediafire.com/file/r6aps8mn6wqoabj/Car+Driving+School+Simulator+3.1.0.283MOD-t.apk/file
🎳 _Obrigatório instalar o OBB:_
 https://www.mediafire.com/file/hcsb5tpr7byh8fg/com.boombitgames.DrivingSchoolParking.zip/file`)
break
case 'jogo14':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Cyber Fighters Premium:* https://www.mediafire.com/file/4tmv2cdahvqamlx/Cyber+Fighters+Premium+1.11.35.68MOD-t.apk/file`)
break
case 'jogo15':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Rag Racing:* https://www.mediafire.com/file/g88v399ks1fpnfq/drag-racing-mod_2.0.37.rar/file`)
break
case 'jogo16':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Mr. Brow:* https://www.mediafire.com/file/i0ii099sejk9fnk/Mr+Bow+4.15.75MOD-t.apk/file`)
break
case 'jogo17':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Airport City:* https://www.mediafire.com/file/vuupmpp3r03lso0/Airport+City+8.7.18.101418MOD-t.apk/file`)
break
case 'jogo18':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Crash Bandicoot:* https://www.mediafire.com/file/nyx8rjqn5m51o3r/Crash+Bandicoot+Mobile+v0.7.6242+Mod.apk/file `)
break
case 'jogo19':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Real Steel World Robot Boxing (APK+OBB):* https://www.mediafire.com/file/zcnsxb55mldn51e/Real+Steel+World+Robot+Boxing+v54.54.126+Mod.apk/file`)
break
case 'jogo20':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Anger of Sticker:* https://www.mediafire.com/file/zfmqmszkhbgoem2/anger-of-stick-5-mod_1.1.39.apk/file`)
break
case 'jogo21':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Angry Birds 2 (APK+OBB)*
https://www.mediafire.com/file/uwnurszwrdbv5ge/angrybirds2-2481.apk/file`)
break
case 'jogo22':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Especial Force Group 2 (CS):* https://www.mediafire.com/file/uwf5cq9u8tjg44x/specialforcesgroup2-421.apk/file`)
break
case 'jogo23':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Roblox:* https://apkadmin.com/k05ck2q6ioo1/ROBLOX_v2.459.415955_MOD_MENU.apk.html`)
break
case 'jogo24':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Critical Striker:* https://www.mediafire.com/file/7yqmk1gn4wrieri/CRITICAL_STRIKE.zip/file`)
break
case 'jogo25':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Dream League Soccer:* http://www.mediafire.com/file/yuw9n5d4phzz5wg/Dream_League_Soccer_2019_v6.13-mod.apk/file`)
break
case 'jogo26':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Clash of Clans:* http://www.mediafire.com/file/aoaem76tyg0hvfv/Clash_Of_Clans_v13.675.6_MOD.apk/file`)
break
case 'jogo27':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Criminal Case Paris:* http://www.mediafire.com/fil...e/i5pbv8d7yjbbtly/Criminal%20Case%20Paris%20v2.36.1-mod.apk/file`)
break 

case 'jogo28':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Drift Max World:* https://www.mediafire.com/file/hqui6asekutsocq/DRIFT+MAX+WORLD+DINHEIRO+INFINITO.zip/file`)
break

case 'jogo29':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Downhill Masters:* https://www.mediafire.com/file/9cdgreyc8amkto9/Downhill_Masters_v1.0.59_MOD.apk/file`)
break
case 'jogosamp':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
☕ IP DO SERVIDOR DO MEU CRIADOR: 23.88.73.88:11627
-
🎳 *SA-MP:* https://play.google.com/store/apps/details?id=ru.unisamp_mobile.launcher`)
break

case 'jogo30':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Monopoly:* https://www.mediafire.com/file/q5jfi61xwbqiu2x/Monopoly-v1-7-11-mod.zip/file`)
break 

// SÉRIES //

case 'serie1':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Arcane:* https://overflix.online/series/arcane/`)
break

case 'serie2':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Stranger Things:* https://overflix.online/series/stranger-things-gratis-hd/`)
break

case 'serie3':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Soldados ou Zumbis:* https://overflix.online/series/s-o-z-soldados-ou-zumbis/`)
break

case 'serie4':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Senhor dos Aneis:* https://overflix.online/series/o-senhor-dos-aneis-os-aneis-de-poder-online-hd-gratis/`)
break

case 'serie5':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Riverdale:* https://overflix.online/series/riverdale-online-gratis-hd-full/`)
break

case 'serie6':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *A casa do dragão:* https://overflix.online/series/a-casa-do-dragao-online-gratis-hd/`)
break

case 'serie7':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Sintonia:* https://overflix.online/series/sintonia-online-gratis/`)
break

case 'serie8':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Chucky:* https://overflix.online/series/chucky-a-serie/`)
break

case 'serie9':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Flash:* https://overflix.online/series/flash-hd-online-gratis/`)
break

case 'serie10':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Game of Thrones:* https://overflix.online/series/game-of-thrones-hd-online-gratis/`)
break

case 'serie11':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Legados:* https://overflix.online/series/legados-gratis-hd-online/`)
break

case 'serie12':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *The Good Doctor:* https://overflix.online/series/the-good-doctor-o-bom-doutor-hd-online/`)
break

case 'serie13':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *The Walking Dead:* https://overflix.online/series/the-walking-dead/`)
break

case 'serie14':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Peaky Blinders:* https://overflix.online/series/peaky-blinders-sangue-apostas-e-navalhas/`)
break

case 'serie15':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Diarios de um vampiro:* https://overflix.online/series/diarios-de-um-vampiro/`)
break

case 'serie16':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Gavião Arqueiro:* https://overflix.online/series/gaviao-arqueiro-full-online-gratis/`)
break 

case 'serie17':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Westworld:* https://overflix.online/series/westworld-hd-gratis-online/`)
break

case 'serie18':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Lúcifer:* https://overflix.online/series/lucifer-online-hd/`)
break

case 'serie19':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Lobo Adolecentes:* https://overflix.online/series/lobo-adolescente/`)
break

case 'serie20':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *La Casa de Papel:* https://overflix.online/series/la-casa-de-papel/`)
break

case 'serie21':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Cobra Kai:* https://overflix.online/series/cobra-kai-online-gratis-hd/`)
break

case 'serie22':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Love Victor:* https://overflix.online/series/love-victor-gratis-online-hd/`)
break

case 'serie23':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Vikings:* https://overflix.online/series/vikings-hd/`)
break

case 'serie24':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Cavaleiro da Lua:* https://overflix.online/series/cavaleiro-da-lua-online-gratis-hd-full/`)
break

case 'serie25':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Fear The Walking Dead:* https://overflix.online/series/fear-the-walking-dead/`)
break

case 'serie26':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Rick Morty:* https://overflix.online/series/rick-morty/`)
break

case 'serie27':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Round 6:* https://overflix.online/series/round-6-online-gratis-hd-full/`)
break

case 'serie28':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Carnival Row:* https://overflix.online/series/carnival-row-online-hd/`)
break

case 'serie29':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Dark:* https://overflix.online/series/dark/`)
break

case 'serie30':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Arqueiro:* https://overflix.online/series/arqueiro/`)
break 

case 'serie31':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Eu Nunca:* https://overflix.online/series/eu-nunca/`)
break

case 'serie32':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *The Last Kingdom:* https://overflix.online/series/the-last-kingdom/`)
break

case 'serie33':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *O livro de Boba Fett:* https://overflix.online/series/o-livro-de-boba-fett-hd-online-gratis-full/`)
break

case 'serie34':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Ragnarok:* https://overflix.online/series/ragnarok/`)
break 

case 'serie35':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *OS 100:* https://overflix.online/series/os-100/`)
break

case 'serie36':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *FBI:* https://overflix.online/series/fbi/`)
break

case 'serie37':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Extracurricular:* https://overflix.online/series/extracurricular/`)
break

case 'serie38':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Halo:* https://overflix.online/series/halo-online-gratis/`)
break

case 'serie39':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Warrior Nun:* https://overflix.online/series/warrior-nun-online-completo/`)
break

case 'serie40':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Anne With:* https://overflix.online/series/anne-with-an-e/`)
break

case 'serie41':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Patrulha do destino:* https://overflix.online/series/patrulha-do-destino-online/`)
break

case 'serie42':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Dinastia:* https://overflix.online/series/dinastia/`)
break

case 'serie43':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Watchmen:* https://overflix.online/series/watchmen/`)
break

case 'serie44':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Lovecraft Country:* https://overflix.online/series/lovecraft-country-dublado-legendado-online-hd-gratis/`)
break

case 'bemvindo':
case 'welcome':
if(!isGroup) return reply(msg.grupo)
if(!isGroupAdmins) return reply(msg.adm)
if(!isCreator) return reply(Res_SoDono)
if(!isBotGroupAdmins) return reply(msg.botadm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isWelkom) return reply('Ja esta ativo')
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isWelkom) return reply('Ja esta Desativado')
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'rankinativo':
case 'rankinativos':
if(!isGroup) return reply(msg.grupo)
if(!isGroupAdmins) return reply(msg.adm)
await LIMPARDOCNT_QUEMJASAIU()
bule = [];
bule2 = []
mentioned_jid = []
for(cag of countMessage[ind].numbers){
bule2.push(cag.id)
if(cag.messages <= 1){bule.push(cag)}}
bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
boardi = 'Rank dos mais Ghosts do Grupo:\n\n'
if(bule.length == 0)boardi += 'Todos estão ativos'
for ( i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
if (i != null) boardi += `${i + 1}º : @${bule[i].id.split('@')[0]}\nMensagens: ${bule[i].messages}\nComandos dados: ${bule[i].cmd_messages}\nAparelho: ${bule[i].aparelho}\n\n`
mentioned_jid.push(bule[i].id)
} 
mentions(boardi, mentioned_jid, true)
break

case 'banativos':
if(!isCreator) return reply(mess.only.ownerB)
if(!isGroup) return reply(mess.only.group)
if(groupIdscount.indexOf(from) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.jid) >=0) { 
var indnum = numbersIds.indexOf(obj.jid)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.jid)) {
mentions(`@${obj.jid} ta liberado da inspeção por ser admin`, [obj.jid], true)
} else {
loli.groupRemove(from, [obj.jid])
}
}
} else {
if(groupAdmins.includes(obj.jid)) {
mentions(`@${obj.jid} ta liberado da inspeção por ser admin`, [obj.jid], true)
} else {
loli.groupRemove(from, [obj.jid])
}
}
}
}
break

case 'antifake':
try {
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(msg.adm)
if (args.length < 1) return reply(' 1 Para ativar/ 0 para desativar')
if (Number(args[0]) === 1) {
if (isAntifake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./arquivos/antis/antifake.json', JSON.stringify(antifake))
reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
} else if (Number(args[0]) === 0) {
antifake.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antifake.json', JSON.stringify(antifake))
reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

default:
if(isCmd) {
reply(
`
╭━━❌•ೋೋ• ❌━━╮
┝ _➛Ola: ${pushname}
┝ _➛Data: ${data}
┝ _➛Hora: ${hora}
┝ _➛Cmd: ${prefix}${command}
┝ _➛Não registrado. use ${prefix}menu
╰━━❌•ೋೋ• ❌━━╯
`)

if (budy.includes('prefixo') || (budy.includes('Prefixo'))){
reply(`𝘖𝘭𝘢́ "${pushname}" 𝘘𝘶𝘦 𝘓𝘦𝘨𝘢𝘭 𝘝𝘦𝘳 𝘕𝘰𝘷𝘢𝘴 𝘗𝘦𝘴𝘴𝘰𝘢𝘴 𝘗𝘰𝘳 𝘈𝘲𝘶𝘪\n𝘉𝘰𝘮 𝘔𝘦𝘶 𝘗𝘳𝘦𝘧𝘪𝘹𝘰 𝘦́ "${prefix}" 𝘋𝘪𝘨𝘪𝘵𝘦 𝘌𝘹𝘦𝘮𝘱𝘭𝘰 "${prefix}𝘮𝘦𝘯𝘶"`)
}

}
if(isBotGroupAdmins && Antiloc && type === 'locationMessage') {
if(isGroupAdmins) return loli.sendMessage(from, {text: 'Localização detectada, você é adm, então não irei ti remover'}, {quoted: info})
await loli.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Localização ou localização comum, caso for um engano, fale com algum adm.'}, {quoted: info})
await loli.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
loli.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await loli.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:info})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ _Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ✅_`
loli.sendMessage(from, {text: clear}, {quoted: info, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await loli.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:info})
await sleep(2000);
await loli.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
await sleep(2000);
await loli.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
await sleep(2000);
await loli.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:info})
await sleep(5000);
await loli.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await loli.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:info})
}

if(fs.existsSync(`./Aqua-Functions/limite-c_${from}.json`)) {
var limitecaracteres_on = JSON.parse(fs.readFileSync(`./Aqua-Functions/limite-c_${from}.json`))
var limitefl = limitecaracteres_on.limite
} else {
var limitefl = limitefll.limitefl
}

if (body.loli >= limitefl) { 
if(!isAntiFlood) return
if(isAntiFlood) {
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
} else {
if(isGroupAdmins) return
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`  
setTimeout( () => {
if(!m.key.fromMe && !isGroupAdmins) return reply('Muitas características enviadas, eu afirmo que pode ser trava, por precauções, eu irei remover.')
console.log(color('deram Spam','red'))
}, 100)
setTimeout( () => {
loli.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
setTimeout( () => {
}, 0)
}
}

if(isBotGroupAdmins && isAnticatalogo && type === 'productMessage') {
if(isGroupAdmins) return loli.sendMessage(from, {text: 'Catalogo detectado, você é adm, então não irei ti remover'}, {quoted: info})
await loli.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Catalogo ou Catalogo comum, caso for um engano, fale com algum adm.'}, {quoted: info})
await loli.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
loli.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await loli.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:info})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n??️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
loli.sendMessage(from, {text: clear}, {quoted: info, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await loli.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:info})
await sleep(2000);
await loli.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
await sleep(2000);
await loli.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
await sleep(2000);
await loli.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:info})
await sleep(5000);
await loli.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await loli.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:info})
}

if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
if(isGroupAdmins) return loli.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await loli.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contato ou vcard, caso for um engano, fale com algum adm.'}, {quoted: info})
await loli.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
loli.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await loli.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:info})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
loli.sendMessage(from, {text: clear}, {quoted: info, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await loli.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:info})
await sleep(2000);
await loli.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
await sleep(2000);
await loli.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
await sleep(2000);
await loli.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:info})
await sleep(5000);
await loli.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await loli.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:info})
}

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        
const isBot = info.key.fromMe ? true : false

        if (isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
          if (!isAntilinkgp) return
          if (!isUrl(body)) return
          if (body.includes("chat.whatsapp.com/")) {
            if (!budy2.includes("chat.whatsapp.com")) return
            if (isBot) return
            linkgpp = await loli.groupInviteCode(from)
            if (budy.match(`${linkgpp}`)) return reply('*Link do nosso grupo, não irei remover.. *')
            if (isGroupAdmins) return reply("*Link detectado, porém usuário é admin*")
            if (!JSON.stringify(groupMembers).includes(sender)) return
            loli.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [sender] } })
            loli.groupParticipantsUpdate(from, [sender], 'remove')
          }
        }

//========(ANTI-PV-QUE-BLOQUEIA)======\\
if(isAntiPv && !isGroup && !isPremium){ 
reply(`[👤] _Ola ${pushname} nao estou autorizado a responder mensagem no privado, por tanto irei te bloquear`)
setTimeout(async () => {
loli.updateBlockStatus(sender, 'block')
}, 100)
return
}
//======================================\\

if(isBotGroupAdmins && isAntiCtt && type === 'contactsArrayMessage') {
if(isGroupAdmins) return loli.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await loli.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contatos'}, {quoted: info})
await loli.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
loli.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await loli.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:info})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
loli.sendMessage(from, {text: clear}, {quoted: info, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await loli.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:info})
await sleep(2000);
await loli.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
await sleep(2000);
await loli.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
await sleep(2000);
await loli.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:info})
await sleep(5000);
await loli.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await loli.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:info})
}

if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {
loli.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("wa.me")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
loli.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
loli.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
 
if(isAutoReact && isGroup && isCmd) {
if(!isAutoReact) return 
emojis = ["😀", "😃", "😁", "😆", "😂", "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🌌", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💤", "👺", "👹", "💨", "😸", "😹", "❤️", "⛅", "👁️", "☠️", "💀", "👀", "😻", "💋", "🌕", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲","🤔","🤫","😏","🍆","👺","🙊"]
reassao = emojis[Math.floor(Math.random() * emojis.length)]
sendMsg = await loli.sendMessage(from, {react: {text: reassao, key: m.key}})
}

if(isAutoReact && isGroup && !isCmd) {
if(!isAutoReact) return 
emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🇺🇦", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "🍇", "💤", "👺", "👹", "💨", "✨", "😹", "❤️", "🌀", "👁️", "☠️", "💀", "👀", "😻", "💋", "👃🏻", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌨️", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲","🤔","🤫","😏","🍆","👺","🙊"]
reassao = emojis[Math.floor(Math.random() * emojis.length)]
sendMsg = await loli.sendMessage(from, {react: {text: reassao, key: m.key}})
}

if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if (m.key.fromMe) return
if(isGroupAdmins) return loli.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await loli.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
loli.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if (m.key.fromMe) return
if(isGroupAdmins) return loli.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await loli.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
loli.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return loli.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
setTimeout(() => {
loli.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return  
loli.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return loli.sendMessage(from,{text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await loli.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
loli.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(isAntiNotas && body.toString().match(/(💳|🌨️|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins) {
if(type == 'stickerMessage') return
let verificar = body.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if (verificar && body.length < 100) return  
await loli.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
loli.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

loli.ev.on('group-participants-update', async (tdy) => {
if(antifake.includes(tdy.jid)) {
const mdata = await loli.groupMetadata(tdy.jid)  
if (tdy.action == 'add'){
num = tdy.participants[0]
if(!num.split('@')[0].startsWith(55)) {
loli.sendMessage(mdata.id, ' ⛹️⛹️numeros estrangeiros não sao Permitidos neste grupo, consulte um Administrador👋🏌️', MessageType.text)
setTimeout(async function () {
loli.groupRemove(mdata.id, [num])
}, 1000)
}
}
}
try {
const grupo = await loli.groupMetadata(tdy.jid)
if (tdy.action == 'add') {
const grupo = await loli.groupMetadata(tdy.jid)
if (!welkom.includes(tdy.jid)) return
num = tdy.participants[0]
try {
capa = await loli.getProfilePicture(num)
} catch {
capa = 'https://i.imgur.com/DUzsRhs.jpg'
}
exe1 = await getBuffer(capa)
exe2 = await imageToBase64(JSON.stringify(capa).replace(/\"/gi, ''))
fs.writeFileSync('exeFT.jpeg', exe2, 'base64')
var imgbb = require('imgbb-uploader')
data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", 'exeFT.jpeg')
buffu = await getBuffer(`https://api-exteam.herokuapp.com/api/welcome?titulo=NOVO MEMBRO&nome=${num.split('@')[0]}&perfil=${data.display_url}&fundo=${fundo1}&grupo=Você está no Grupo: ${encodeURIComponent(grupo.subject)}`)

loli.sendMessage(grupo.id, buffu, MessageType.image, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `0@s.whatsapp.net`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": exe1, "mimetype": "application/octet-stream", "title": `*BEM VINDO(A)*`, "fileLength": "36", "pageCount": 0, "fileName": `_*BEM VINDO(A)*_` }}, "messageTimestamp": "1614069378", "status": "PENDENTE"}})
} else if (tdy.action == 'remove') {
if (!welkom.includes(tdy.jid)) return
const grupo = await loli.groupMetadata(tdy.jid)
num = tdy.participants[0]
try {
capa = await loli.getProfilePicture(num)
} catch {
capa = 'https://i.imgur.com/DUzsRhs.jpg'
}
let exe1 = await getBuffer(capa)
exe2 = await imageToBase64(JSON.stringify(capa).replace(/\"/gi, ''))
fs.writeFileSync('exeFT.jpeg', exe2, 'base64')
var imgbb = require('imgbb-uploader')
data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", 'exeFT.jpeg')
buffu = await getBuffer(`https://api-exteam.herokuapp.com/api/goodbye?titulo=ADEUS :(&nome=${num.split('@')[0]}&perfil=${data.display_url}&fundo=${fundo2}&grupo=Saiu de: ${encodeURIComponent(grupo.subject)}`)
loli.sendMessage(grupo.id, buffu, MessageType.image, {contextInfo: {mentionedJid: [num]}})
}
} catch (e) {
console.log('Erro : %s', color(e, 'red'))
}})

if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return loli.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await loli.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
loli.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}


if (budy.includes("Convite para participar do meu grupo no whatsapp ") || (budy.includes("Entrar no Grupo"))){
reply(`bot Pago\nCaso Queira Me add em Grupo\nFale com meu dono\n\nCHAT: wa.me/553172595934`)
}

if (budy.includes('prefixo') || (budy.includes('Prefixo'))){
reply(`[${prefix}]`)
}

if (budy.includes("boa noite") || (budy.includes("Boa noite"))){
tujuh = fs.readFileSync('./loli/audio/boanoite.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("boa tarde") || (budy.includes("Boa tarde"))){
tujuh = fs.readFileSync('./loli/audio/boatarde.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("bom dia") || (budy.includes("Bom dia"))){
tujuh = fs.readFileSync('./loli/audio/bomdia.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("Os de vdd sei quem são") || budy.includes("os de vdd sei quem são") || budy.includes("traído")){
tujuh = fs.readFileSync('./loli/audio/osdevdd.mp3');
await loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

//━━━━━━━❰･NOME SEM PREFIXO･❱━━━━━━━\\

if(budy.match("🏳️‍🌈")) {
bla = fs.readFileSync("./figurinhas/🏳️‍🌈.webp")
loli.sendMessage(from, {sticker: bla}, {quoted: info})
}

if(budy.match("😐")) {
bla = fs.readFileSync("./figurinhas/smoke.webp")
loli.sendMessage(from, {sticker: bla}, {quoted: info})
}

if(budy.match("😏")) {
bla = fs.readFileSync("./figurinhas/halerquin.webp")
loli.sendMessage(from, {sticker: bla}, {quoted: info})
}

if(budy.match("😋")) {
bla = fs.readFileSync("./figurinhas/coxinha.webp")
loli.sendMessage(from, {sticker: bla}, {quoted: info})
}

if(budy.match("sexo") || (budy.match("Sexo"))) {
bla = fs.readFileSync("./figurinhas/168.webp")
loli.sendMessage(from, {sticker: bla}, {quoted: info})
}

if(budy.match("Tedio") || (budy.match("tedio") || (budy.match("Tédio")))) {
bla = fs.readFileSync("./figurinhas/164.webp")
loli.sendMessage(from, {sticker: bla}, {quoted: info})
}

if(budy.match("😢") || (budy.match("😪") || (budy.match("😭")))) {
bla = fs.readFileSync("./figurinhas/131.webp")
loli.sendMessage(from, {sticker: bla}, {quoted: info})
}

}} catch (erro) {
console.log(erro)
}})



loli.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if(lastDisconnect === undefined) {

}

if(connection === 'close') {
var shouldReconnect = (lastDisconnect.error.Boom)?.output?.statusCode !== DisconnectReason.loggedOut  
ligarbot()
}})}
ligarbot()

fs.watchFile('./menus/alugar.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O Menu foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./menus/menudono.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O Menu foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./menus/menu.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O Menu foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./start.sh', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O start.sh foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./dono.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./config.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A config foi editada, irei reiniciar...');
process.exit()
}
})