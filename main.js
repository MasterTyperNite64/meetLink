const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';      //prefisso con cui si richiamano i comandi del bot

//quando il bot è online lo dice nella console
client.once('ready', () => {
    console.log('meetLink is online');
});

//verifica se un messaggio inizia con "droplink"
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    
    /*if(command === 'lunedi'){
        message.channel.send('mate: '+'https://meet.google.com/qzk-gaou-vrq\n');
        message.channel.send('religione: '+'https://meet.google.com/puc-qksd-bkn\n');
        message.channel.send('gpoi: '+'https://meet.google.com/tdz-cych-qsz\n');
        message.channel.send('sistemi: '+'https://meet.google.com/cga-udbd-pnb\n');
        message.channel.send('info: '+'https://meet.google.com/wry-wnkb-pgu\n');
    }*/

    switch(command){
        case 'lunedi':
            message.suppressEmbeds(true);
            message.channel.send('mate: '+'https://meet.google.com/qzk-gaou-vrq\n' +
                'religione: '+'https://meet.google.com/puc-qksd-bkn\n' +
                'gpoi: '+'https://meet.google.com/tdz-cych-qsz\n'+
                'sistemi: '+'https://meet.google.com/cga-udbd-pnb\n'+
                'info: '+'https://meet.google.com/wry-wnkb-pgu\n');
            break;

        case 'martedi':
            message.channel.send('ita: '+'https://meet.google.com/anv-gaew-gqf\n');
            message.channel.send('ing: '+'https://meet.google.com/zdd-xiwo-vev\n');
            message.channel.send('mate: '+'https://meet.google.com/qzk-gaou-vrq\n');
            message.channel.send('tpsit: '+'https://meet.google.com/dmk-vjoa-mej\n');
            break;

        case 'mercoledi':
            message.channel.send('1 info: '+'https://meet.google.com/wry-wnkb-pgu\n');
            message.channel.send('ita: '+'https://meet.google.com/anv-gaew-gqf\n');
            message.channel.send('tpsit: '+'https://meet.google.com/dmk-vjoa-mej\n');
            message.channel.send('mate: '+'https://meet.google.com/qzk-gaou-vrq\n');
            break;

        case 'giovedi':
            message.channel.send('1 ing: '+'https://meet.google.com/zdd-xiwo-vev\n');
            message.channel.send('2 ita: '+'https://meet.google.com/anv-gaew-gqf\n');
            message.channel.send('3/4 motoria: '+'https://meet.google.com/wuk-ksuc-dak\n');
            message.channel.send('5 sistemi: '+'https://meet.google.com/cga-udbd-pnb\n');
            message.channel.send('6 info: '+'https://meet.google.com/wry-wnkb-pgu\n');
            break;
        
        case 'venerdi':
            message.channel.send('sistemi: '+'https://meet.google.com/cga-udbd-pnb\n');
            message.channel.send('gpoi: '+'https://meet.google.com/tdz-cych-qsz\n');
            message.channel.send('info: '+'https://meet.google.com/wry-wnkb-pgu\n');
            message.channel.send('ita: '+'https://meet.google.com/anv-gaew-gqf\n');
            break;
        
        case 'sabato':
            message.channel.send('ing: '+'https://meet.google.com/zdd-xiwo-vev\n');
            message.channel.send('gpoi: '+'https://meet.google.com/tdz-cych-qsz\n');
            message.channel.send('ita: '+'https://meet.google.com/anv-gaew-gqf\n');
            message.channel.send('info: '+'https://meet.google.com/wry-wnkb-pgu\n');
            message.channel.send('tpsit: '+'https://meet.google.com/dmk-vjoa-mej\n');
            break;
    }
});



client.login(process.env.token);