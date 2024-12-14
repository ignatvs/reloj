      function updateDateTime() {
        const now = new Date();
        fe = now.toString().split(' ')
        document.getElementById("bh").innerText = fe[4].toString();
        hms = fe[4].split(":")
        h = hms[0].split("");
        m = hms[1].split("");
        s = hms[2].split("");
        fe[0] = 1;
        fe[1] = (parseInt(h[0])+16).toString(2);
        fe[2] = (parseInt(h[1])+16).toString(2);
        fe[3] = (parseInt(m[0])+16).toString(2);
        fe[4] = (parseInt(m[1])+16).toString(2);
        fe[5] = (parseInt(s[0])+16).toString(2);
        fe[6] = (parseInt(s[1])+16).toString(2);
        for(i = 1; i<7; i++){
          ide = "b" + i;
          document.getElementById(ide).innerHTML = fe[i][1] + fe[i][2] + fe[i][3] + fe[i][4];
        }
        for(i = 1; i < 7; i++)
          for(j = 1; j < 5; j++)
          {
            var ide = "b" + i.toString() + j.toString();
            if(fe[i][j] == 0)
              document.getElementById(ide).className = "ball b1";
                else
              document.getElementById(ide).className = "ball b2";
          }
      }
      function lahora() {
        document.getElementById("bh").style.visibility = "visible";
}
      function nada() {
        document.getElementById("bh").style.visibility = "hidden";
}
      setInterval(updateDateTime, 1000); 