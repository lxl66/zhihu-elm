
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"content { text-align: center; padding: ",[0,10]," 2%; width: 96%; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"title { line-height: 2em; font-weight: 700; font-size: ",[0,38],"; }\n.",[1],"richText { line-height: 2em; }\n.",[1],"part2 { width: 100%; height: 280px; border-bottom: 20px solid #f9f9f9; overflow: hidden; position: relative; }\n.",[1],"part2:after { content: \x22 \x22; height: 20px; border-radius: 50%; background: #f9f9f9; position: absolute; bottom: -10px; left: -20px; right: -20px; }\n.",[1],"banner-image { width: 100%; height: 100%; }\n",],undefined,{path:"./pages/info/info.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/info/info.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      