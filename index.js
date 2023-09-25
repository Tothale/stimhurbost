const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = 'itemsatis172';
var password = 'process.env.password';
var shared_secret = '';

var games = [730, 440, 570, 1172470, 236390, 304930, 238960, 1085660, 1599340, 230410, 2357570, 386360, 444200, 8500, 203770, 905370, 1881700, 1549250, 1973530, 1046930, 767560, 1180380, 2064650, 109600, 2140510, 466240, 550650, 550470, 698780, 225840, 1254120];  // Enter here AppIDs of the needed games
var status = 7;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});
