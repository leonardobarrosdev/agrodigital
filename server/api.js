#!/bin/bash

URL_LIST="url.txt"

readarray URLS = ${URL_LIST}

for url in ${URLS}
do
  RESPONSE="$(crul -s -I ${URL})"
  STATUS=$(echo $RESPONSE | grep "http" | cut -d " " -f 2)

  if [[ ${STATUS} -eq '200' ]]
  then
    echo $url [successo]
  fi
done