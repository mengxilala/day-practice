
function HTMlist(path) {
    var txt;
    fso = new ActiveXObject("Scripting.FileSystemObject");
    fldr = fso.GetFolder(path);
    fc = new Enumerator(fldr.files);
    for (; !fc.atEnd(); fc.moveNext())//枚举所有文件  
    {
        s = fc.item();   //取文件对象    
        console.log(s.type);
        if (s.type == "HTML Document") {   //判断是否是“HTML文件”  
            f = fso.GetFile(s);
            ts = f.OpenAsTextStream(1, -2);
            txt = ts.ReadAll();   //读全文  
            ts.Close();
            txt = txt.toUpperCase();

            titl = s.name;
            start = txt.indexOf("<TITLE>", 0);
            if (start != -1) {
                start += 7;
                end = txt.indexOf("</TITLE>", start);
                if (end != -1)
                    titl = txt.substr(start, end - start);
            }
            document.write("<a href=\"" + s + "\">" + titl + "</a><br>");
        }
    }
}
HTMlist("C:\Users\张梦溪\Desktop\htmldemo");
try{  
    if (window.ActiveXObject){  
      xmlDoc= new ActiveXObject("Microsoft.XMLDOM");  
      xmlDoc.async = false;    
      isLoaded = xmlDoc.load(aXMLFileName);   
    }   
    else if  
       (document.implementation&& document.implementation.createDocument){  
          try{    
              xmlDoc = document.implementation.createDocument('', '', null);    
              xmlDoc.async = false;    
              xmlDoc.load(aXMLFileName);    
          } catch(e){    
              var xmlhttp = new window.XMLHttpRequest();    
              xmlhttp.open("GET",aXMLFileName,false);    
              xmlhttp.send(null);    
              xmlDoc = xmlhttp.responseXML;    
          }    
    }  
    else{  
        alert("load data error");  
    }  
    }  
    catch(e){  
      alert(e.message);  
    }  