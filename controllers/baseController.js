const sgMail = require('@sendgrid/mail');
const request = require('request');


exports.sendEmail = function(req, res){
    const { API_KEY, options } = req.body;
    sgMail.setApiKey(API_KEY);
    sgMail.send(options, null, (err)=> {
        if(err)
            res.status(500).send(err);
        res.json({
			message: 'email sent successfully',
		});
    });
};


exports.sendSMS = function(req, res){
    const { to, text, API_TOKEN, SERVICE_PLAN_ID,  } = req.body;
    const options = {
    method: 'POST',
        url: `https://sms.api.sinch.com/xms/v1/${SERVICE_PLAN_ID}/batches`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
            "from": "447537432321",
            "to": to,
            "body": text,
        }),
    };
    request(options, (err, response)=> {
        if(err)
            res.status(500).send(err);
        res.json({
            message: 'SMS(s) sent successfully',
            response
		});
    });  
};