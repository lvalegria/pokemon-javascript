<?php include "head.php"?>


<div class="container2">

        
    <form id="formulario" class="margenForm" action="">
        <p>Suscribete y recibe más informacion de pokemones           
        </p>

        <div class="form-row ">

            <!--Nombre-->

            <div id="generalnombre">
                <div class="col-md-3 mb-3">
                    <label for="nombre" onclick="nombre()">Nombre</label><br>
                    <input class="sizeBarra" type="text" class="form-control" id="nombre" name="nombre"placeholder="Nombre"  required>
                    <p class="formularioError">Ejemplo:Maria</p>
                </div>
            </div>

                <!--Correo-->
            <div id="generalcorreo">
                <div class="col-md-3 mb-3">
                    <label for="correo" onclick="correo()">Correo electronico</label>
                    <br>
                    <input class="sizeBarra" type="text" class="form-control" id="correo" name="correo" placeholder="correo" required>
                    
                    <p class="formularioError">Ejemplo correo@correo.com</p>
                </div>
            </div>

            <div class="formButon ">
                <button class="btn colorBoton" type="submit" id="envio">Enviar</button>
            </div>

        </div>
    </form>
</div>
<script src="js/contacto.js"></script>



<?php include "footer.php"?>