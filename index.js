const express = require('express')
const path = require('path')
const { HOST } = require('./src/constants')

const PORT = process.env.PORT || 3000

const app = express()
  .set('port', PORT)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

// Static public files
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', function(req, res) {
//   res.send('Get ready for OpenSea!');
// })

app.get('/api/token/:token_id', function(req, res) {
  const tokenId = parseInt(req.params.token_id).toString()
  const data = {
    'name': 'Tile #' + tokenId,
    'attributes': {
      'X Coordinate': '2',
      'Y Coordinate': '2',
    },
    'description': 'Ownership of tile #' + tokenId + ' at https://themillionetherhomepage.com. Owner can put ads within the area they own.',
    'external_url': "",
    'image': `${HOST}/images/${tokenId}.png`
  }
  res.send(data)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})