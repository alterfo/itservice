var connect = require('connect'),
http = require('http'),
mail = require("nodemailer").mail,
app;

app = connect()
	.use(connect.static('app'))
	.use(connect.urlencoded())
	.use(connect.json())
	.use('/node_modules', connect.static('node_modules'))
	.use(function(req, res, next) {
		if (req.method === 'POST' && req.originalUrl === '/sendmail') {
			mail({
    				from: "Itservice ✔ <itservice@oleg-sidorkin.ru>", // sender address
    				to: "kalinon7@gmail.com", // list of receivers
    				subject: "Itservice mail ✔", // Subject line
    				text: "Hello ✔" + JSON.stringify(req.body) // plaintext body
			});
			res.end('ok');
		}
	});

http.createServer(app).listen(2002, function() {
	console.log('running on 2002 port');
});

