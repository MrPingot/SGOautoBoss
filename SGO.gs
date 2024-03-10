

var token1 = ''; 

var token2 = ''; // 可無限新增





function attack(ms) {
  var tokens = [
    token1, token2
  ];
// 記得這邊也要更改

  for (var i = 0; i < tokens.length; i++) {
    var bossOptions = {
      'method': 'GET',
      'payload': JSON.stringify({}),
      'headers': {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'token': tokens[i]
      }
    };

    try {
      var auto = UrlFetchApp.fetch('https://api.swordgale.online/api/boss', bossOptions);
      Utilities.sleep(200);
      
    } catch (error) {
      
      Logger.log('Request failed with token: ' + tokens[i]);
      
    }
    try {

      var rest = UrlFetchApp.fetch('https://api.swordgale.online/api/action/rest', bossOptions);
      Utilities.sleep(200);
      
    } catch (error) {
      
      Logger.log('Request failed with token: ' + tokens[i]);
      
    }
    try {
      var ok = UrlFetchApp.fetch('https://api.swordgale.online/api/action/complete', bossOptions);
      Logger.log('Request successful with token: ' + tokens[i]);
      
    } catch (error) {
      
      Logger.log('Request failed with token: ' + tokens[i]);
      
    }
  }
}






