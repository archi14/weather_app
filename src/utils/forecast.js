const request = require('request');

const forecast = (location, callback) => {
	const url = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=6a98b4433504479e915150125232908&q=${location}&format=json`;

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather service!', undefined);
		} else if (body.error) {
			callback('Unable to find location', undefined);
		} else {
			console.log(body.data.weather[0]);
			callback(
				undefined,
				'The max temperature today would be ' +
					body.data.weather[0].maxtempC +
					' and the min temperature today would be ' +
					body.data.weather[0].mintempC
			);
		}
	});
};

module.exports = forecast;
