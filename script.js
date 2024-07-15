document.getElementById("copyButton").addEventListener("click", function() {
    var copyText = document.getElementById("copyText").value;
  
    navigator.clipboard.writeText(copyText)
      .then(function() {
        alert("Text copied to clipboard: " + copyText);
      })
      .catch(function(error) {
        alert("Failed to copy text: " + error);
      });
  });