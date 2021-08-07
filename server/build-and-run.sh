docker build -t mcastro/toy-server .
docker run -p 9090:9090 --net toy-network -d --name toy-server mcastro/toy-server