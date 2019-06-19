const { Parser } = require('json2csv'),
	Agent = require('socks5-https-client/lib/Agent'),
	MyToken = "783004619:AAHcY59NezuYc0wgT__sGE0ekY62ggjVvtA",
	fs = require("fs"),
	TelegramBot = require('node-telegram-bot-api');

var bot;

function connect(){
	bot = new TelegramBot(MyToken, {
	  polling: true,
	  request: {
	    agentClass: Agent,
	    agentOptions: {
		    socksHost: 'socksy.seriyps.ru',
		    socksPort: 7777,
		    socksUsername: 'tg-r_ee_d20',
		    socksPassword: 'Le1xPsCa'
	  	}
		} 
	});
}
connect();

bot.on("message", (res) => {
	console.log(res);
});

// bot.sendMessage(191625379, "Привет");

// // bot.getMe().then((res) => {console.log(res)});

// const fields = ['car', 'price', 'color'];
// const myCars = [
//   {
//     "car": "Audi",
//     "price": 40000,
//     "color": "blue"
//   }, {
//     "car": "BMW",
//     "price": 35000,
//     "color": "black"
//   }, {
//     "car": "Porsche",
//     "price": 60000,
//     "color": "green"
//   }
// ];
 
// const json2csvParser = new Parser({ fields });
// const csv = json2csvParser.parse(myCars);
 
// console.log(csv);

// fs.writeFile('formList.csv', csv, 'utf8', function (err) {
//   if (err) {
//     console.log('Some error occured - file either not saved or corrupted file saved.');
//   } else{
//     console.log('It\'s saved!');
//   }
// });



// const { Client } = require('tglib')

// async function connect(){
// 	var client = new Client({
// 	  apiId: '414370', // specify your API ID
// 	  apiHash: '7c958295fc9fc2071e9dc10d838e0b39', // specify your API Hash
// 	  phoneNumber: '79151368818'
// 	  // verbosityLevel: 2
// 	  // tdlibParameters: {}, // specify custom tdlibParameters object
	 
// 	  // // Node only options
// 	  // appDir: '', // specify where to place tglib files, default "__tglib__" folder
// 	  // binaryPath: '', // specify the TDLib static binary path, default "libtdjson" in cwd
	 
// 	  // // WASM only options
// 	  // wasmModule: null, // specify the WebAssembly module
// 	  // filesDir: '', // specify the files directory path
// 	  // databaseDir: '' // specify the database directory path
// 	});
// 	client.registerCallback('td:getInput', async (args) => {
// 	  console.log(args);
// 	  if (args.string === 'tglib.input.AuthorizationType') {
// 	    return 'user'
// 	  } else if (args.string === 'tglib.input.AuthorizationValue') {
// 	    return '79151368818'
// 	  }
// 	  return await defaultHandler(args)
// 	})
// 	await client.registerCallback('td:update', async (update) => {
// 	  // console.log('[update]', update);
// 	  var res = await client.tg.getChat({ username: '@rbc_ru_news'});
//     // latest 100 chats will be returned
//     console.log(res.);
// 	})
// 	// register callback for errors
// 	client.registerCallback('td:error', (error) => {
// 	  console.log('[error]', error)
// 	})
// }
// connect();
// const { Client } = require('tdl');
// const { TDLib } = require('tdl-tdlib-ffi');

// // async function conn(){
// 	const client = new Client(new TDLib(), {
// 	  apiId: 414370, // Your api_id
// 	  apiHash: '7c958295fc9fc2071e9dc10d838e0b39', // Your api_hash
// 	})
// 	client.connect();
// 	client.login();
// }

// conn();

