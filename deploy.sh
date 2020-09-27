#!/bin/bash
set -e

release="ax-h5.release.tar.gz"
ax="/home/mahy/www/ax"
remote="qiniu"
npm install --production
npm run build

if [ -f $release ]; then
  echo "$release exists, remove it..."
  rm -rf $release
fi


if command -v gtar >/dev/null 2>&1; then
  echo "gtar exists, use gtar..."
  gtar -zcvf $release ./build
else
  tar -zcvf $release ./build
fi


scp -r $release $remote:$ax

ssh $remote "cd $ax; bash ./ax-h5.sh 2>&1 | tee -a /var/log/ax-h5.log"

