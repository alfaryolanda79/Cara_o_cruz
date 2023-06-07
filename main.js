let caraCount = 0;
    let cruzCount = 0;
    
    function lanzarMoneda() {
      let resultado = Math.random();
      
      if (resultado < 0.5) {
        caraCount++;
        document.getElementById("caraCount").textContent = caraCount;
        alert("¡Cara!");
      } else {
        cruzCount++;
        document.getElementById("cruzCount").textContent = cruzCount;
        alert("¡Cruz!");
      }
    }
    
    function reiniciarJuego() {
      caraCount = 0;
      cruzCount = 0;
      document.getElementById("caraCount").textContent = caraCount;
      document.getElementById("cruzCount").textContent = cruzCount;
    }


