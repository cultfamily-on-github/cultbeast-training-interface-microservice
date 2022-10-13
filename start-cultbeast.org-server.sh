
if [ "$1" = "" ] 
then
    echo "please provide either locally or production mode as a parameter when calling this shell script"

else


if [ "$1" = "locally" ]
then

    echo "starting the cultbeast.org server locally"
    deno run --allow-read --allow-net --allow-write --allow-env --unstable backend/src/cultbeast.org-server.ts 8045

fi


if [ "$1" = "production mode" ]
then
    echo "starting the cultbeast.org server in production mode"
    pm2 start backend/src/cultbeast.org-server.ts --interpreter="deno" --interpreter-args="run --allow-read --allow-write --allow-env --allow-net --unstable" -- 443
fi 
fi 
