# MediScan

`frontend` - contains frontend code

`sensor` - contains device sensing and scanning code

## Development

```bash
$ echo "NET_CAPTURE_INTERFACE=[NETWORK INTERFACE NAME HERE]" > sensor.env
$ docker compose up
# User: elastic
# Password: mediscan
# Kibana at https://localhost:5601/
# elasticsearch at https://localhost:9200/
# Frontend at http://localhost:8080/
```
