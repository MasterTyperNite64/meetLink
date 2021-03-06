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

    message.suppressEmbeds(true); //dovrebbe rimuovere gli embed

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    
    /*if(command === 'lunedi'){
        message.channel.send('mate: '+'https://meet.google.com/qzk-gaou-vrq\n');
        message.channel.send('religione: '+'https://meet.google.com/puc-qksd-bkn\n');
        message.channel.send('gpoi: '+'https://meet.google.com/tdz-cych-qsz\n');
        message.channel.send('sistemi: '+'https://meet.google.com/cga-udbd-pnb\n');
        message.channel.send('info: '+'https://meet.google.com/wry-wnkb-pgu\n');
    }
    */
    switch(command){
        case 'help':
            //message.channel.send('Versione 1.0.1\n' + 'I comandi iniziano con "-" poi basta semplicemente aggiungere:\n lun \n mar \n mer \n gio \n ven \n sab');
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Comandi')
            .setURL('https://meet.google.com/qzk-gaou-vrq')
            .setDescription('descrizione mate')
            .addFields(
                {name: 'Regola', value: 'mate'},
                );

            message.channel.send(newEmbed);
            break;
        
        case 'lun':
            /*
            message.channel.send('1 mate: '+'https://meet.google.com/qzk-gaou-vrq\n'+
                                '2 religione: '+'https://meet.google.com/puc-qksd-bkn\n'+
                                '3 gpoi: '+'https://meet.google.com/tdz-cych-qsz\n'+
                                '4 sistemi: '+'https://meet.google.com/cga-udbd-pnb\n'+
                                '5 info: '+'https://meet.google.com/wry-wnkb-pgu\n'+
                                'matias ha il pene microscopico');
            
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle()
            */
            break;

        case 'mar':
            message.channel.send('1/2 ita: '+'https://meet.google.com/anv-gaew-gqf\n'+
                                '3 ing: '+'https://meet.google.com/zdd-xiwo-vev\n'+
                                '4 mate: '+'https://meet.google.com/qzk-gaou-vrq\n'+
                                '5 tpsit: '+'https://meet.google.com/gzx-wfkv-zwn\n'+
                                'matias ha il pene microscopico');
            break;

        case 'mer':
            message.channel.send('1/2 info: '+'https://meet.google.com/wry-wnkb-pgu\n'+
                                '3 ita: '+'https://meet.google.com/anv-gaew-gqf\n'+
                                '4 tpsit: '+'https://meet.google.com/gzx-wfkv-zwn\n'+
                                '5 mate: '+'https://meet.google.com/qzk-gaou-vrq\n'+
                                'matias ha il pene microscopico');
            break;

        case 'gio':
            message.channel.send('1 ing: '+'https://meet.google.com/zdd-xiwo-vev\n'+
                                '2 ita: '+'https://meet.google.com/anv-gaew-gqf\n'+
                                '3/4 motoria: '+'https://meet.google.com/wuk-ksuc-dak\n'+
                                '5 sistemi: '+'https://meet.google.com/cga-udbd-pnb\n'+
                                '6 info: '+'https://meet.google.com/wry-wnkb-pgu\n'+
                                'matias ha il pene microscopico');
            break;
        
        case 'ven':
            message.channel.send('1/2 sistemi: '+'https://meet.google.com/cga-udbd-pnb\n'+
                                '3 gpoi: '+'https://meet.google.com/tdz-cych-qsz\n'+
                                '4 info: '+'https://meet.google.com/wry-wnkb-pgu\n'+
                                '5 sto: '+'https://meet.google.com/anv-gaew-gqf\n'+
                                'matias ha il pene microscopico');
            break;
        
        case 'sab':
            message.channel.send('1 ing: '+'https://meet.google.com/zdd-xiwo-vev\n'+
                                '2 gpoi: '+'https://meet.google.com/tdz-cych-qsz\n'+
                                '3 sto: '+'https://meet.google.com/anv-gaew-gqf\n'+
                                '4 info: '+'https://meet.google.com/wry-wnkb-pgu\n'+
                                '5 tpsit: '+'https://meet.google.com/gzx-wfkv-zwn\n'+
                                'matias ha il pene microscopico');
            break;
    }
});



client.login(process.env.token);