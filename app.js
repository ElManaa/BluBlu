function sendRequest(event) {
    event.preventDefault();  
    document.getElementById("bttnsubmit").style.display = "none"; 
    document.getElementById("loader").style.display = "inline-block"; 
    
    const text = document.getElementById("myprompt").value;
    const url = `https://hook.eu2.make.com/ns2ss2h7xcbvoz4s3hj93nguc9b98u1c?userPrompt=${encodeURIComponent(
      text
    )}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text(); // or response.text(), depending on what the server sends back
      })
      .then((data) => {
       
        const iframe = document.createElement('iframe');
        iframe.src = 'https://vidsrc.net/embed/'+ data ; // replace with the desired URL
        iframe.width = '100%';
        iframe.height = '800';
        iframe.referrerPolicy= "origin"
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;

        const container = document.getElementById('iframeContainer');
        container.innerHTML=""
        container.appendChild(iframe);
        document.getElementById("bttnsubmit").style.display = "inline"; 
        document.getElementById("loader").style.display = "none"; 
      
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }