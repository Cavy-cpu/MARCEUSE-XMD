const fetch = require('node-fetch');

async function flirtCommand(sock, chatId, message) {
    try {
        const shizokeys = '𝗠𝗔𝗥𝗖𝗘𝗨𝗦𝗘-𝗫𝗠𝗗😈';
        const res = await fetch(`https://api.shizo.top/api/quote/flirt?apikey=${shizokeys}`);
        
        if (!res.ok) {
            throw await res.text();
        }
        
        const json = await res.json();
        const flirtMessage = json.result;
        
        await sock.sendMessage(chatId, {
                react: { text: '😔' , key: message.key }
            });

        // Send the flirt message
        await sock.sendMessage(chatId, { text: flirtMessage }, { quoted: message });
    } catch (error) {
        console.error('Error in flirt command:', error);
        await sock.sendMessage(chatId, { text: '❌ Failed to get flirt message. Please try again later!' }, { quoted: message });
    }
}

module.exports = { flirtCommand }; 
