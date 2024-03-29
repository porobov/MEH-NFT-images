const express = require('express')
const path = require('path')
const { HOST } = require('./src/constants')

const PORT = process.env.PORT || 3000

// just copied from meh-ressurections
function blockXY(blockId) {
  let remainder = blockId % 100;
  let y;
  if (remainder === 0) {
      y = Math.floor(blockId / 100);
  } else {
      y = Math.floor(blockId / 100) + 1;
  }
  let x = blockId - ((y - 1) * 100);
  return [x, y];
}

const app = express()
  .set('port', PORT)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

// Static public files
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', function(req, res) {
//   res.send('Get ready for OpenSea!');
// })

app.get('/token/:token_id', function(req, res) {
  const tokenId = parseInt(req.params.token_id).toString()
  if (tokenId > 0 && tokenId <= 10000) {
    const [tileX, tileY] = blockXY(tokenId)
    const data = {
      'name': 'Tile #' + tokenId,
      'attributes': {
        'X Coordinate': tileX,
        'Y Coordinate': tileY,
      },
      'description': 'This NFT confirms ownership of tile #' + tokenId + ' at https://themillionetherhomepage.com. Owner can put ads within the area they own.',
      'external_url': "https://themillionetherhomepage.com/tokenid/" + tokenId,
      'image': `${HOST}/images/${tokenId}.png`
    }
    res.send(data)
  } else {
    res.send({ 'error': 'Token ID our of range' })
  }
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})