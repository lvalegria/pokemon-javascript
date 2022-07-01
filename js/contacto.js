"use strict"
    //nombre: /^([a-zA-ZÁ-ÖØ-öø-ÿ]{3,25})$/,
    //correo: /^([\w.]+[^#$%&\/()="!¡?¿]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/,
    
class formularioPok{
    constructor(nombre,correo){
        this.nombre=nombre;
        this.correo=correo;
    }
    enviado(){
        alert("envio exitoso")
    }

}

const formPok1=new formularioPok();

window.addEventListener('load',function(event){
    const form=this.document.getElementById("formulario");
    form.addEventListener('submit', function(e){
        e.preventDefault();//se captura el evento
        if(this.nombre.value==""||this.correo.value==""){

        }else{
            formPok1.nombre=this.nombre.value
            formPok1.correo=this.correo.value
            form.reset();
            console.info(formPok1);
            alert("envio exitoso")
        }

    })

})

const nombre=()=>{
    console.log("Nombre")
}

const correo=()=>{
    console.log("Apellido")
}
