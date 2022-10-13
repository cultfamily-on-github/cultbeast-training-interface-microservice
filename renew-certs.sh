# to execute the renewal on a regular basis we edit the crontab via 
# crontab -e
# within the crontab we enter 
# 0 0 1 * * <path-to-this-project-folder-on-your-server>/renew-certs.sh
# details see https://crontab.guru/#0_0_1_*_*
# trigger certs renewal on 00:00 on day-of-month 1 if it's not due for renewal it won't be renewed
# you might check sudo certbot renew --dry-run

pm2 stop <processes which might interfere during cert renewal> # not 100% sure why this is required - after I had not temp stopped the bot, it seemed to lead to erroneous certs
sudo certbot renew
pm2 restart <processes which might interfere during cert renewal>
