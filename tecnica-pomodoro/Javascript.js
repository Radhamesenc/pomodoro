function Temporizador(id, inicio, final){
    this.id = id;
    this.inicio = inicio;
    this.final = final;
    this.contador = this.inicio;

    this.conteoSegundos = function(){
      if (this.contador == this.final){
        this.conteoSegundos = null;
        alert('Descansa 5 minutos');
        return;
      }

      document.getElementById(this.id).innerHTML = this.contador--;
      setTimeout(this.conteoSegundos.bind(this), 20000);
    };
  }

  let temporizador = new Temporizador('temporizador', 20, -1);

  