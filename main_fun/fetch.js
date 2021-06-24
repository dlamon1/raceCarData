const fetch = require('node-fetch')
const iconvlite = require('iconv-lite')

// https://www.escadinha.esp.br/crono/livetiming.txt

async function get(url) {

  // url = 'https://www.escadinha.esp.br/crono/livetiming.txt'

  let vMixRes = []

  try {

    let res = await fetch(url)
    const buffer = await res.buffer();
    const win = iconvlite.decode(buffer, "windows-1252");

    let resArr = win.split('%')

    let keyArr = resArr[15].split('|')

    for (let i = 0; i < keyArr.length; i++) {
      let newKey = keyArr[i].replace(' ', '_').replace('ç', 'c').replace('é', 'e').replace('Ú', 'U')
      keyArr[i] = newKey
    }

    for (let i = 16; i < resArr.length; i++) {

      let driverObj = {}
      let valueArr = resArr[i].split('|')

      for (let i = 0; i < valueArr.length; i++) {
        let key = keyArr[i]
        let value = valueArr[i]
        driverObj[key] = value
      }

      vMixRes.push(driverObj)
    }

  } catch (err) {
    console.log(err)
  }

  return vMixRes

}

module.exports = { get }