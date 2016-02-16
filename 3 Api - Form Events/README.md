# Kony - Form Events (ciclo de vida de la APP)


# Ciclo de vida app(Kony)

![Alt text](https://lh3.googleusercontent.com/-qBqgh2J-QJs/VsOfOnH6AnI/AAAAAAAAD0E/JlxJO3xQ5sM/s604-Ic42/Captura%252520de%252520pantalla%2525202016-02-16%252520a%252520las%2525205.11.36%252520p.m..png "1")

![Alt text](https://lh3.googleusercontent.com/-8e-_7tUoYg4/VsOfOhr4LdI/AAAAAAAAD0E/RU6LpeQYtWo/s512-Ic42/Captura%252520de%252520pantalla%2525202016-02-16%252520a%252520las%2525205.12.23%252520p.m..png "2")

![Alt text](https://lh3.googleusercontent.com/--5cjqqo2kng/VsOfOoQOXrI/AAAAAAAAD0E/JW85c2oyA20/s512-Ic42/Captura%252520de%252520pantalla%2525202016-02-16%252520a%252520las%2525205.12.32%252520p.m..png "3")

# Ciclo de vida app(Android)

![Alt text](http://www.ysweb.co/images/ciclo-de-vida.png "4")

onCreate( ): Es el método inicial que se llama cuando la actividad recién se inicia, y el más común que veremos en todos los ejemplos, ya que siempre se extiende. Acá lo recomendado es hacer toda la configuración estática que vamos a necesitar, es decir: llamar vistas, enlazar objetos a las vistas, etc. Adicionalmente recibe como parámetro un Bundle que contiene el estado de la actividad previo a ser llamado, si existiese. Desde acá, la actividad siempre va hacia el método onStart( ).

onStart( ): Se llama a este método cuando la actividad se vuelve visible para el usuario. Desde aquí la actividad puede ir a dos métodos: onResume( ) si es que será completamente visible, o onStop( ) si es que queda oculta.

onResume( ): En este estado es cuando la actividad se encuentra completamente visible e interactuando con el usuario (independiente si estamos utilizando otros métodos). La actividad se mantiene siempre en este estado hasta que nos vamos a otra o cerramos la app, en ese momento se va a onPause( ).

onPause( ): Se llama a este método justo antes de que otra actividad vaya a pasar al frente de la app y volverse activa. Adicionalmente en este método se aprovechan de hacer algunas operaciones de sincronización de datos o detención de animaciones, por dar algunos ejemplos. Desde aquí pasa a onResume( ) si la actividad se vuelve a poner al frente, o a onStop( ) si queda oculta.

onStop( ): Es el método que se llama cuando la actividad ya no está visible de ninguna forma para el usuario. Desde aquí pasa a onRestart( ) si vuelve a ser visible, o a onDestroy( ) si ya no volverá a existir.

onRestart( ): Es un breve estado entre que la actividad ha sido detenida y vuelve a estar visible. Desde aquí pasa a onStart( ).

onDestroy( ): El estado final antes que la actividad sea destruida por completo y deje de existir.

# Ciclo de vida app(IOS)

![Alt text](http://i.stack.imgur.com/wYKPZ.png "parte 1")

![Alt text](http://i.stack.imgur.com/waD5I.png "parte 2")


# Ciclo de vida app(Android v& IOS)

![Alt text](http://i.stack.imgur.com/45AUH.png "5")
