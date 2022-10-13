# this is probably only necessary if you deploy via gh pages

sed -i'' -e 's/href="\//href=".\//g' ./dist/index.html

rm -rf ./../../docs-backup 
mv ./../../docs ./../../docs-backup 
cp -r ./dist ./../../docs