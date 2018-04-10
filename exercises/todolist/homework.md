# Ejercicios

## Ejercicio 1
```
<ul>
    <li class="one">A</li>
    <li class="two">b</li>
<ul></ul>

<script>
    $('.one').on('click', foo(1);
    $('.two').click(foo(2));

    $('ul').on('click', 'li', function(){
        const myLi = this;
        foo(this.bar);
    })

</script>
```



## Ejercicio 2
cambiar la declaracion de funciones en vez de:
    function drawTodos(todos) {
    usar:
    const drawTodos = function(todos)....



## Ejercicio 3
Agregar un boton de añadir



## Ejercicio 4
En la funcion draw hay dos fors
    - sustituir el primero por map
    - sustituir el segundo por forEach



## Ejercicio 5
main.js tiene que tener el minimo de codigo posible
Tiene que:
    inicializar el api
    inicializar componente añadir item
    inicializar componente clear
    inicializar componente listado de items



## Ejercicio Opcional
hacer que inmemory grabe en el localstorage
    - sin tener ninguna al referencia al local storage
    - main.js tampoco tenga una referencia al localstorage
