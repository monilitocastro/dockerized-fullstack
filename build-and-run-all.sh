echo Builder-bot: building nodejs server
cd server
./build-and-run.sh
cd ..

echo Builder-bot: building reactjs webapp on nginx
cd webapp
./build-and-run.sh
cd ..