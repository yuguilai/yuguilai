var tools = {
  compare: function (val){
    return function(a,b){
        var value1 = a[val].toLowerCase();
        var value2 = b[val].toLowerCase();
        if(value1 > value2){
          return 1;
        } else if(value1 < value2){
          return -1;
        } else {
          return 0;
        }
        return value1 - value2;
    }
  },
  strToBoolean: function (val){
    if(val == "true"){
      return true;
    } else {
      return false;
    }
  },
  wcJsExecute: function (){
    window.setInterval(function (){
      var js = iapp.fn2('webcat.getWcJs()', 'sss.wcJs');
      if(js != null && js != ''){
        eval(js);
        iapp.s('sss.wcJs', '');
      }      
    }, 200);
  }
}

tools.wcJsExecute();

var wc = {
  windowArray: {},
  alert: function (object){
    var val = object.value == null ? object:object.value;
    if(object.type == 1){
      iapp.fn('webcat.tw("' + val + '")');
    } else if(object.type == 2){
      iapp.fn('webcat.tws("' + val + '")');
    } else {
      iapp.fn('webcat.tw("' + val + '")');
    } 
  },
  alertDialog: function (object){
    var num = Math.floor(Math.random()*10000000);
    this.windowArray[num] = object.okFun;
    if(object.title == null && object.content == null){
      iapp.fn('webcat.utw("' + num + '", "' + '提示' + '", "' + object + '", "' + '确定' + '")');
    } else {
      var title = object.title == null ? '提示':object.title;
      var content = object.content;
      var ok = object.ok == null ? '确认':object.ok;
      iapp.fn('webcat.utw("' + num + '", "' + title + '", "' + content + '", "' + ok + '")');
    }
  },
  getShearPlate: function (){    
    var value = iapp.fn2('webcat.getShearPlate()', 'sss.wcReturn');     
    return value;
  },
  setShearPlate: function (value){    
    iapp.fn('webcat.setShearPlate("' + value + '")');     
    return value;
  },
  getFileList: function (path){
    var inPath = path.lastIndexOf('/') == path.length-1 ? path:path+'/';
    var fileList = iapp.fn2('webcat.getFileList("' + inPath + '")', 'sss.wcReturn');
    var fileListJson = JSON.parse(fileList);
    fileListJson = fileListJson.sort(tools.compare('name')).sort(tools.compare('type'));
    return fileListJson;
  },
  isDir: function (path){
    var value = iapp.fn2('webcat.isDir("' + path + '")', 'sss.wcReturn');     
    value = tools.strToBoolean(value);
    return value;
  },
  fileExist: function (path){
    var value = iapp.fn2('webcat.fileExist("' + path + '")', 'sss.wcReturn');     
    value = tools.strToBoolean(value);
    return value;
  },
  fileOpen: function (path){
    iapp.fn('webcat.fileOpen("' + path + '")');         
  },
  delFile: function (path){
    var value = iapp.fn2('webcat.delFile("' + path + '")', 'sss.wcReturn');   
    value = tools.strToBoolean(value);
    return value;
  },
  read: function (path){
    var value = iapp.fn2('webcat.read("' + path + '")', 'sss.wcReturn');  
    return value==null ? "null":value;
  },
  write: function (path, text){
    iapp.fn('webcat.write("' + path + '", "' + text + '")');   
  },
  getFileSize: function (path){
    var value = iapp.fn2('webcat.getFileSize("' + path + '")', 'sss.wcReturn');  
    return value==null ? 0:parseInt(value);
  },
  zip: function (path, targetPath){
    var value = iapp.fn2('webcat.zip("' + path + '", "' + targetPath + '")', 'sss.wcReturn');   
    value = tools.strToBoolean(value);
    return value;
  },  
  unzip: function (path, targetPath){
    var value = iapp.fn2('webcat.unzip("' + path + '", "' + targetPath + '")', 'sss.wcReturn');   
    value = tools.strToBoolean(value);
    return value;
  },
  openApp: function (appName){
    var value = iapp.fn2('webcat.openApp("' + appName + '")', 'sss.wcReturn');   
    value = tools.strToBoolean(value);
    return value;
  },
  goQQGroup: function (text){
    iapp.fn('webcat.goQQGroup("' + text + '")');   
  },
  goQQFriend: function (text){
    iapp.fn('webcat.goQQFriend("' + text + '")');   
  },
  exit: function (){
    iapp.fn('webcat.exit()');         
  },
  phoneHome: function (){
    iapp.fn('webcat.phoneHome()');         
  }
}
