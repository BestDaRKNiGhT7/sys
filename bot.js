//consts

const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl'); 
const translate = require('google-translate-api'); 
const fs = require("fs");      
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set();   
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map();
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat');
 const pretty = require('pretty-ms') 
,ti={}  
,spee={};
 

//codes

//كود الهيلب

client.on("message", message => {
	var prefix = "$";
 if (message.content === "$help**)(") {
  const embed = new Discord.RichEmbed() 
      .setColor("#000000") 
      .setDescription(`
	  
	         Please Chose: 
			 
${prefix}helpall ⇏    **  | لعرض جميع اوامر البوت**  

${prefix}help-p ⇏    **  | لعرض الاوامر العامه**  

${prefix}help-a ⇏    **  | لعرض الاوامر الاداريه**  
 
${prefix}help-g ⇏    **  | لعرض الاوامر الالعاب**  

${prefix}help-m ⇏    **  | لعرض الاوامر الاغاني**  

ملاحضه البوت محمي بكود الجحفله

        `)
   message.channel.sendEmbed(embed)
    
   }
   }); 
   


   

  

client.on('message', message => {
    if (message.content === "$help-p") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#000000")
  .addField("Done | تــــم" , ":envelope: | :sleuth_or_spy::skin-tone-3:شيك علي في الخاص")
  
  
  
  message.channel.sendEmbed(embed);
  }
  });
  
client.on('message', message => {
    if (message.content === "-help-a") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#000000")
  .addField("Done | تــــم" , ":envelope: | :sleuth_or_spy::skin-tone-3:شيك علي في الخاص")
  
  
  
  message.channel.sendEmbed(embed);
  }
  });
  
  client.on('message', message => {
    if (message.content === "-help-g") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#000000")
  .addField("Done | تــــم" , ":envelope: | :sleuth_or_spy::skin-tone-3:شيك علي في الخاص")
  
  
  
  message.channel.sendEmbed(embed);
  }
  });
  
  
  client.on('message', message => {
    if (message.content === "-help-m") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#000000")
  .addField("Done | تــــم" , ":envelope: | :sleuth_or_spy::skin-tone-3:شيك علي في الخاص")
  
  
  
  message.channel.sendEmbed(embed);
  }
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   client.on("message", message => {
    if (message.content === "$helpall") {
     const embed = new Discord.RichEmbed() 
         .setThumbnail(message.author.avatarURL)
         .setColor("#00FF00")
       message.author.sendEmbed(embed)
   
   }
   });
  
   client.on("message", message => {
    if (message.content === "-help-a") {
     const embed = new Discord.RichEmbed() 
         .setThumbnail(message.author.avatarURL)
         .setColor("#00FF00")
   message.author.sendEmbed(embed)
   
   }
   });
  
     client.on("message", message => {
    if (message.content === "-help-p") {
     const embed = new Discord.RichEmbed() 
         .setThumbnail(message.author.avatarURL)
         .setColor("#00FF00")
   message.author.sendEmbed(embed)
   
   }
   });
  
      client.on("message", message => {
    if (message.content === "-help-g") {
     const embed = new Discord.RichEmbed() 
         .setThumbnail(message.author.avatarURL)
         .setColor("#00FF00")
         .setDescription(`**  السيرفر الرسمي للبوت :  :dove:  https://discord.gg/TZ3dcyC :scroll:
         :hearts: الموقع الرسمي للبوت https://aboodealnaimat.wixsite.com/superbot: website here  :hearts: **`)
   message.author.sendEmbed(embed)
   
   }
   });
  
   client.on("message", message => {
    if (message.content === "-help-m") {
     const embed = new Discord.RichEmbed() 
         .setThumbnail(message.author.avatarURL)
         .setColor("#00FF00")
         .setDescription(`**  السيرفر الرسمي للبوت :  :dove:  https://discord.gg/TZ3dcyC :scroll:
         :hearts: الموقع الرسمي للبوت https://aboodealnaimat.wixsite.com/superbot: website here  :hearts: **`)
   message.author.sendEmbed(embed)
   
   }
   });
  
     client.on("message", message => {
      if (message.content === "-help-a") {
       const embed = new Discord.RichEmbed() 
           .setThumbnail(message.author.avatarURL)
           .setColor("#FF0000")
           .setDescription(`**    :sleuth_or_spy::skin-tone-1: اوامر الأداره :sleuth_or_spy::skin-tone-1:**
**============ **
  ** -move @user |  لسحب الشخص الى روومك** :confused: 

  ** -bc | رسالة جماعية الى كل اعضاء السيرفر** :mega:

  ** -role @user <rank> | لأعطاء رتبة لعضو معين**:large_orange_diamond: 

  ** -roleremove @user <rank> | لازالة الرتبة من شخص معين** :orange_book: 

  ** -role all <rank> | لأعطاء رتبة للجميع**:shield: 

  ** -role humans <rank> | لأعطاء رتبة للاشخاص فقط **:man: , :woman: 

  **-role bots <rank> | لأعطاء رتبة لجميع البوتات**:robot: 

  ** -schannel | اضهار الشات المخفية**:blush: 

  ** -hchannel | اخفاء الشات**:arrow_heading_down: 

  ** -clr <numbr> | مسح الشات بعدد**:information_source: 

  ** -clear | مسح الشات ** :recycle: 

  ** -mute @user <reason> | اعطاء العضو ميوت لازم رتبة <Muted>**:mute:

  ** -unmute @user | لفك الميوت عن الشخص ** :loud_sound:

  ** -kick @user <reason> | طرد الشخص من السيرفر**  :outbox_tray:

  ** -ban @user <reason> | حضر الشخص من السيرفر** :no_entry:

  ** -mutechannel | تقفيل الشات**:no_entry:

  ** -unmutechannel | فتح الشات**:on:   

  ** -dc | مسح كل الرومات**

  ** -dr | <مسح كل الرانكات <لازم تكون رانك البوت فوق كل الرانكات**

  ** -ct <name> | انشاء شات**:rolling_eyes:

  ** -cv <name> | انشاء رووم فويس**:crown:

  ** -delet <name> | مسح الشات او الرووم فويس**

  ** -ccolors <number> | ينشا لك الوان مع كم الوان تبي**

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
`)
     message.author.sendEmbed(embed)
     
     }
     });
  
  

  
  
  
  
   client.on("message", message => {
    if (message.content === "-help-g") {
     const embed = new Discord.RichEmbed() 
         .setThumbnail(message.author.avatarURL)
         .setColor("#FFFF00")
         .setDescription(`**  :video_game: الألعاب :video_game:**
  ** -rps | حجر ورقة مقص ** :video_game:

  ** -speed | اسرع كتابن ** :video_game:

  ** -quas | اسئلة عامة ** :video_game:

  ** -نكت | نكت ** :video_game:

  ** -لعبة فكك | فكك ** :video_game:

  ** -لعبة عواصم | عواصم** :video_game:

  ** -لعبة كت تويت | كت تويت ** :video_game:

  ** -roll | قرعة راندوم** :video_game:

  ** -لو خيروك بطريقة حلوة | لوخيروك

  ** -لعبة مريم | مريم** :video_game: 
  
  ** -فوائد نصائح | هلتعلم ** :video_game: 
  
  ** -يعطيك عقابات قاسية |عقاب** :video_game: 
   `)
   message.author.sendEmbed(embed)
   
   }
   });



   client.on("message", message => {
      if (message.content === "-help-m") {
       const embed = new Discord.RichEmbed() 
           .setThumbnail(message.author.avatarURL)
           .setColor("#57FEFF")
           .setDescription(`** موسيقي :play_pause:  **
  ** -play | لتشغيل اغنية برابط او بأسم** 

  ** -skip | لتجآوز الأغنية الحآلية**

  ** -pause | إيقآف الأغنية مؤقتا**

  ** -resume | ل**موآصلة الإغنية بعد إيقآفهآ مؤقتا

  ** -vol | لتغيير درجة الصوت 100 - 0**

  ** -stop | لإخرآج البوت من الروم**

  ** -np | لمعرفة الأغنية المشغلة حآليا**

  ** -queue | لمعرفة قآئمة التشغيل**
  
  `)
     message.author.sendEmbed(embed)
     }
     });
  
   client.on("message", message => {
      if (message.content === "-help-p") {
       const embed = new Discord.RichEmbed() 
           .setThumbnail(message.author.avatarURL)
           .setColor("#FF0000")
           .setDescription(`**   :earth_africa: الأوامر العامه :earth_africa: **
**============ **

  ** -allbots | لعرض جميع البوتات الي بالسيرفر** :robot: 

  ** -server |يعرض لك معلومات عن السيرفر**:fire: 

  ** -bot | يعرض لك كل معلومات البوت**:computer: 
  
  ** -skin <name> | يعرض لك سكنك بماين كرافت**:blush:

  ** -count | يعرض لك عدد الاشخاص بالسيرفر بدون بوتات** :information_source:

  ** -invites | يعرض لك  عدد انفايتاتك بالسيرفر ** :microscope: 

  ** -invite-codes | يعرض لك روابط الانفايتات حكك في السيرفر **:spy: 

  ** -cal | اله حاسبة**:slot_machine: 

  ** -trans <language> <any thing> | يترجم لك الي تبيه من اي لغة**:writing_hand: 

  ** -short | يختصر لك رابط كبير الى رابط صغير**:mortar_board: 

  ** -tag | يكتب لك الكلمة بشكل جميل وكبير**:sunglasses: 

  ** -google | للبحث في قوقل عن طريق الدسكورد**:desktop: 

  ** -perms | يعرض لك برمشناتك بالسيرفر**:pushpin: 

  ** -za5 | يزخرف لك كلمة او جملة**:hearts: 

  ** -rooms | يعرض لك كل الرومات الي بالسيرفر مع عددها**:rocket: 

  ** -roles | يعرض لك كل الرانكات بالسيرفر بشكل جميل**

  ** -emojilist | يعرض لك كل الايموجيات الي بالسيرفر**:cry: :smile: :joy: 

  ** -say | يكرر الكلام الي تكتبو**:sparkles: 

  ** -image | صورة السيرفر**:bust_in_silhouette: 

  ** -members | يعرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص**:selfie: 

  ** -profile | ليعرض البرفايل حقك** 

  ** -bans | عدد الاشخاص المبندة **:no_entry: 

  ** -avatar | صورتك او صورة الي تمنشنو**:bust_in_silhouette:

  ** -embed | يكرر الي تقولو بشكل حلو**:small_blue_diamond: 

  ** -emoji <any things> | لتحويل اي كلمه تقولها الي ايموجي**:small_orange_diamond: 

  ** -inv | لدعوة البوت الى سيرفرك**:black_circle: 

  ** -support | سيرفر الدعم**:wrench:  :envelope_with_arrow: 
  
  ** -contact | ارسال اقتراح او لمراسلة صاحب البوت**
  
**  ======:blossom:نــتــمــنــآ لــكــم آســتــمـــتــآع :blossom:======  **`)
     message.author.sendEmbed(embed)
     
     }
     });

  
 
       client.on("message", message => {
      if (message.content === "-help-a") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF00FF")
           .setFooter('By *LEGEND_YT#4537  ')
           .setDescription(`**__أتمنى يعجبكم البوت يا أغلى ناس:revolving_hearts: __**`)
     message.author.sendEmbed(embed)
     
     }
     });


     client.on("message", message => {
      if (message.content === "-help-g") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF00FF")
           .setFooter('By *LEGEND_YT#4537  ')
           .setDescription(`**__أتمنى يعجبكم البوت يا أغلى ناس:revolving_hearts: __**`)
     message.author.sendEmbed(embed)
     
     }
     });


     client.on("message", message => {
      if (message.content === "-help-m") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF00FF")
           .setFooter('By *LEGEND_YT#4537  ')
           .setDescription(`**__أتمنى يعجبكم البوت يا أغلى ناس:revolving_hearts: __**`)
     message.author.sendEmbed(embed)
     
     }
     });

  
       client.on("message", message => {
      if (message.content === "-help-p") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF00FF")
           .setFooter('By *LEGEND_YT#4537  ')
           .setDescription(`**__أتمنى يعجبكم البوت يا أغلى ناس:revolving_hearts: __**`)
     message.author.sendEmbed(embed)
     
     }
     });

    client.on('message', async msg => {
    var prefix = "-";
    var user = msg.author;
        if (msg.content === (prefix +'help')) {
        if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
        msg.channel.send({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
           .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=466256531998900246&permissions=8&scope=bot')
 .setDescription(`**اذا كنت تريد الاوامر العامة اظغط الريكشن** 🌏 \n**اذا كنت تريد الاوامر الادارية اظغط الريكشن**🔧 \n**اذا كنت تريد اوامر الالعاب**🎲 \n**اذا كنت تريد اوامر الاغاني **🎶\n              **وشكرا لمستخدمين البوت**`)  
 

//bot token
client.login(process.env.BOT_TOKEN);
