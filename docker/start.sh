docker ps
docker stop ctk-ws-db
docker rm ctk-ws-db
echo "starting docker"
docker run --name ctk-ws-db  -p 5432:5432 -d ctk-ws-image
docker start ctk-ws-db
docker ps