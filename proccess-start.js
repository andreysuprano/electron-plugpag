const { execFile } = require('child_process');

execFile(__dirname + '/subprocces.sh', (error, stdout, stderr) => {
	if (error) {
		console.error(`error: ${error.message}`);
		return;
	}

	if (stderr) {
		console.error(`stderr: ${stderr}`);
		return;
	}

	console.log(stdout);
});
