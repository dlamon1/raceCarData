# raceCarData

## Installation

- Clone this repo

or

- Download install files for mac and windows from this oneDrive: https://1drv.ms/u/s!An_zE6QPOPs3pkad_1RRcQJ7-hDo?e=qChzi1

## How to use

- Make sure vMix and raceCarData are running on the same local network
- In raceCarData, enter the url for the race txt file
- (ex/ https://www.escadinha.esp.br/crono/livetiming.txt )
- Click start
- In vMix, create a JSON data source using the url of the machine running raceCarData, include port 5000
- (ex/ http://192.168.0.23:5000 )
- At this point there will be data showing in the vMix Data Sources window
- If there is no data, check IP addresses and reload raceCarData

## Why is the install file so large?

This app is created using the Electron framework which is built on Chromium, which itself is large file size. 
