# Metadata server for themillionetherhomepage.com

### Available at:
```
https://api.themillionetherhomepage.com/
```
### Cache notes
Cache is configured through Nginx. See [config](nginx-config.txt).
Cloudflare rules appleied:
- Cache rules. TTL is 1 year for api.themillionetherhomepage.com (not sure if works 🤷).
- Page Rules. "Cache everything" for api.themillionetherhomepage.com (not sure if needed🤷).

### Example query:
```
https://api.themillionetherhomepage.com/token/15
```
Response:
```
{
  "name": "Tile #101",
  "attributes": {
    "X Coordinate": 1,
    "Y Coordinate": 2
  },
  "description": "Ownership of tile #101 at https://themillionetherhomepage.com. Owner can put ads within the area they own.",
  "external_url": "https://themillionetherhomepage.com/tokenid/101",
  "image": "https://api.themillionetherhomepage.com/images/101.png"
}
```
## Useful links:
- [Nginx setup (wrong CF cert)](https://www.digitalocean.com/community/tutorials/how-to-host-a-website-using-cloudflare-and-nginx-on-ubuntu-16-04)
- [Cloudflare origin certificate](https://developers.cloudflare.com/ssl/origin-configuration/authenticated-origin-pull/set-up/zone-level/)
- [Configure pm2](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)