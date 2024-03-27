# Metadata server for themillionetherhomepage.com

Available at:
```
https://api.themillionetherhomepage.com
```

Example query:
```
https://api.themillionetherhomepage.com/token/101
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

Nginx setup (wrong CF cert)
https://www.digitalocean.com/community/tutorials/how-to-host-a-website-using-cloudflare-and-nginx-on-ubuntu-16-04

Cloudflare cert is here:
https://developers.cloudflare.com/ssl/origin-configuration/authenticated-origin-pull/set-up/zone-level/