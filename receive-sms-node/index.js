var express = require('express');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extened: false}));

app.post('/message', function(req, res)){
	console.log(req.body);
	var msgFrom = req.body.From;
	var msgBody = req.body.Body;

	res.send(`
		<Response>
			<Message>
				Hello ${msgFrom}. You said: ${msgBody}
			</Message>
		</Response>
		`);
	});
}

app.listen(3000);