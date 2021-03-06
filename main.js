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
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setDescription('tabella help')
            .addFields(
                {name: '-orario', value: 'orario settimanale', inline: true},
                {name: '-"giorno"', value: 'link di meet del giorno scelto', inline: true},
                {name: '-info', value: 'info del bot', inline: true},
                );

            message.channel.send(newEmbed);
            break;
        
        case 'orario':
            const embOrario = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Comandi')
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setDescription('tabella help')
            .addFields(
                {name: 'LUNEDI :'},
                {name: '1 - Matematica'},
                {name: '2 - Religione'},
                {name: '3 - GPOI'},
                {name: '4 - Sistemi'},
                {name: '5 - Informatica'},

                {name: 'MARTEDI :'},
                {name: '1 - Italiano'},
                {name: '2 - Italiano'},
                {name: '3 - Inglese'},
                {name: '4 - Matematica'},
                {name: '5 - TPSIT'},
                {name: '6 - TPSIT'},

                {name: 'MERCOLEDI :'},
                {name: '1 - Informatica'},
                {name: '2 - Informatica'},
                {name: '3 - Italiano'},
                {name: '4 - TPSIT'},
                {name: '5 - Matematica'},

                {name: 'GIOVEDI :'},
                {name: '1 - Inglese'},
                {name: '2 - Italiano'},
                {name: '3 - Motoria'},
                {name: '4 - Motoria'},
                {name: '5 - Sistemi'},
                {name: '6 - Informatica'},

                {name: 'Venerdi :'},
                {name: '1 - Sistemi'},
                {name: '2 - Sistemi'},
                {name: '3 - GPOI'},
                {name: '4 - Informatica'},
                {name: '5 - Storia'},

                {name: 'Sabato :'},
                {name: '1 - Inglese'},
                {name: '2 - GPOI'},
                {name: '3 - Storia'},
                {name: '4 - Informatica'},
                {name: '5 - TPSIT'}
                );

            message.channel.send(embOrario);
            break;

        case 'lun':
            /*
            message.channel.send('1 mate: '+'https://meet.google.com/qzk-gaou-vrq\n'+
                                '2 religione: '+'https://meet.google.com/puc-qksd-bkn\n'+
                                '3 gpoi: '+'https://meet.google.com/tdz-cych-qsz\n'+
                                '4 sistemi: '+'https://meet.google.com/cga-udbd-pnb\n'+
                                '5 info: '+'https://meet.google.com/wry-wnkb-pgu\n'+
                                'matias ha il pene microscopico');
            */

            const lunedi = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Lunedi')
            .setDescription('Orario di lunedi: ')
            .addFields(
                {name: 'Matematica', value: 'https://meet.google.com/qzk-gaou-vrq'},
                {name: 'Religione', value: 'https://meet.google.com/puc-qksd-bkn'},
                {name: 'GPOI', value: 'https://meet.google.com/tdz-cych-qsz'},
                {name: 'Sistemi', value: 'https://meet.google.com/cga-udbd-pnb'},
                {name: 'Informatica', value: 'https://meet.google.com/wry-wnkb-pgu'}
                );
            message.channel.send(lunedi);
            break;

        case 'mar':
            /*
            message.channel.send('1/2 ita: '+'https://meet.google.com/anv-gaew-gqf\n'+
                                '3 ing: '+'https://meet.google.com/zdd-xiwo-vev\n'+
                                '4 mate: '+'https://meet.google.com/qzk-gaou-vrq\n'+
                                '5 tpsit: '+'https://meet.google.com/gzx-wfkv-zwn\n'+
                                'matias ha il pene microscopico');
            */
            const martedi = new Discord.MessageEmbed()
                .setColor('#304281')
                .setTitle('Martedi')
                .setDescription('Orario di martedi: ')
                .addFields(
                    {name: 'Italiano', value: 'https://meet.google.com/anv-gaew-gqf'},
                    {name: 'Italiano', value: 'https://meet.google.com/anv-gaew-gqf'},
                    {name: 'Inglese', value: 'https://meet.google.com/zdd-xiwo-vev'},
                    {name: 'Matematica', value: 'https://meet.google.com/qzk-gaou-vrq'},
                    {name: 'TPSIT', value: 'https://meet.google.com/gzx-wfkv-zwn'},
                    {name: 'TPSIT', value: 'https://meet.google.com/gzx-wfkv-zwn'}
                    );
            message.channel.send(martedi);
            break;

        case 'mer':
            /*
            message.channel.send('1/2 info: '+'https://meet.google.com/wry-wnkb-pgu\n'+
                                '3 ita: '+'https://meet.google.com/anv-gaew-gqf\n'+
                                '4 tpsit: '+'https://meet.google.com/gzx-wfkv-zwn\n'+
                                '5 mate: '+'https://meet.google.com/qzk-gaou-vrq\n'+
                                'matias ha il pene microscopico');
            */
            const mercoledi = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Mercoledi')
            .setDescription('Orario di mercoledi: ')
            .addFields(
                {name: 'Informatica', value: 'https://meet.google.com/wry-wnkb-pgu'},
                {name: 'Informatica', value: 'https://meet.google.com/wry-wnkb-pgu'},
                {name: 'Italiano', value: 'https://meet.google.com/anv-gaew-gqf'},
                {name: 'TPSIT', value: 'https://meet.google.com/gzx-wfkv-zwn'},
                {name: 'Matematica', value: 'https://meet.google.com/qzk-gaou-vrq'}
                );
            message.channel.send(mercoledi);
            break;

        case 'gio':
            /*message.channel.send('1 ing: '+'https://meet.google.com/zdd-xiwo-vev\n'+
                                '2 ita: '+'https://meet.google.com/anv-gaew-gqf\n'+
                                '3/4 motoria: '+'https://meet.google.com/wuk-ksuc-dak\n'+
                                '5 sistemi: '+'https://meet.google.com/cga-udbd-pnb\n'+
                                '6 info: '+'https://meet.google.com/wry-wnkb-pgu\n'+
                                'matias ha il pene microscopico');*/
            const giovedi = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Giovedi')
            .setDescription('Orario di giovedi: ')
            .addFields(
                {name: 'Inglese', value: 'https://meet.google.com/zdd-xiwo-vev'},
                {name: 'Italiano', value: 'https://meet.google.com/anv-gaew-gqf'},
                {name: 'Motoria', value: 'https://meet.google.com/wuk-ksuc-dak'},
                {name: 'Motoria', value: 'https://meet.google.com/wuk-ksuc-dak'},
                {name: 'Sistemi', value: 'https://meet.google.com/cga-udbd-pnb'},
                {name: 'Informatica', value: 'https://meet.google.com/wry-wnkb-pgu'}
                );
                message.channel.send(giovedi);
            break;
        
        case 'ven':
            /*message.channel.send('1/2 sistemi: '+'https://meet.google.com/cga-udbd-pnb\n'+
                                '3 gpoi: '+'https://meet.google.com/tdz-cych-qsz\n'+
                                '4 info: '+'https://meet.google.com/wry-wnkb-pgu\n'+
                                '5 sto: '+'https://meet.google.com/anv-gaew-gqf\n'+
                                'matias ha il pene microscopico');*/
            const venerdi = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Venerdi')
            .setDescription('Orario di venerdi: ')
            .addFields(
                {name: 'Sistemi', value: 'https://meet.google.com/cga-udbd-pnb'},
                {name: 'Sistemi', value: 'https://meet.google.com/cga-udbd-pnb'},
                {name: 'GPOI', value: 'https://meet.google.com/tdz-cych-qsz'},
                {name: 'Informatica', value: 'https://meet.google.com/wry-wnkb-pgu'},
                {name: 'Storia', value: 'https://meet.google.com/anv-gaew-gqf'}
                );
            message.channel.send(venerdi);
            break;
        
        case 'sab':
            /*message.channel.send('1 ing: '+'https://meet.google.com/zdd-xiwo-vev\n'+
                                '2 gpoi: '+'https://meet.google.com/tdz-cych-qsz\n'+
                                '3 sto: '+'https://meet.google.com/anv-gaew-gqf\n'+
                                '4 info: '+'https://meet.google.com/wry-wnkb-pgu\n'+
                                '5 tpsit: '+'https://meet.google.com/gzx-wfkv-zwn\n'+
                                'matias ha il pene microscopico');*/
            const sabato = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Sabato')
            .setDescription('Orario di sabato: ')
            .addFields(
                {name: 'Inglese', value: 'https://meet.google.com/zdd-xiwo-vev'},
                {name: 'GPOI', value: 'https://meet.google.com/tdz-cych-qsz'},
                {name: 'Storia', value: 'https://meet.google.com/anv-gaew-gqf'},
                {name: 'Informatica', value: 'https://meet.google.com/wry-wnkb-pgu'},
                {name: 'TPSIT', value: 'https://meet.google.com/gzx-wfkv-zwn'}
                );
            message.channel.send(sabato);
            break;
    }
});



client.login(process.env.token);