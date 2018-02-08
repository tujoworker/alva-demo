const ngrok = require('ngrok')
const exec = require('child_process').exec

const PORT = 3000
const opts = {
  proto: 'http', // http|tcp|tls
  addr: 3000 // port or network address
  // auth: 'user:pwd', // http basic authentication for tunnel
  // subdomain: 'alex', // reserved tunnel name https://alex.ngrok.io
  // authtoken: '12345', // your authtoken from ngrok.com
  // region: 'us' // one of ngrok regions (us, eu, au, ap), defaults to us,
  // configPath: '~/git/project/ngrok.yml' // custom path for ngrok config file
}

// ngrok.connect(function(err, url) {}); // https://757c1652.ngrok.io -> http://localhost:80
// ngrok.connect(9090, function(err, url) {}); // https://757c1652.ngrok.io -> http://localhost:9090
// ngrok.connect({ proto: 'tcp', addr: 22 }, function(err, url) {}); // tcp://0.tcp.ngrok.io:48590

ngrok.connect(opts, (err, url) => {
  if (!err) {
    // http://localhost:4040/api/tunnels
    // http://localhost:4040/status
    console.log(`url: ${url} and http://localhost:${PORT}`)

    exec(
      `xcrun simctl openurl "iPhone 6" ${url}`,
      (err, stdout, stderr) => {
        // console.log(stdout);
      }
    )
  } else {
    console.log('Error on ngrok.connect:', err)
  }
})
