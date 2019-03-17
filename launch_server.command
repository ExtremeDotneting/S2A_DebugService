http-server .\
pause
echo "Install ngrok.exe and add to system PATH."
call ngrok http -host-header="localhost:8080" 8080
pause