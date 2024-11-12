# Inicializar Identity Providers

Se explicará a continuación el proceso a seguir para preparar Keycloak e inicializar sus Identity Providers para el inicio de sesión con Google, Github y Microsoft.
**Importante tener una instancia de Keycloak levantada previamente**, para ello visitar el siguiente [repositorio](https://github.com/joyitoficial/ats-rctl-cn-keycloakfy) donde se explica como levantar una instancia de Keycloak con el tema persoanlizado.

---

## Preparar Keycloak

Iniciar sesión en el panel de control como administrador y crear un realm (el nombre puede ser cualquiera)

![image.png](https://i.imgur.com/4UN1n2n.png)

![image-2.png](https://i.imgur.com/WKxu5Vu.png)

Una vez creado el Realm, dirigirese al **Realm Settings** y aplicar las siguientes configuraciones:

1. En la pestaña de **Login**, activar las siguientes opciones:

![image-3.png](https://i.imgur.com/E3rc9ZZ.png)

2. En la pestaña de **Themes** seleccionar el tema personalizado para el **Login Theme**:

![image-4.png](https://i.imgur.com/mt3YWml.png)

## Configurar los Identity Providers

Para cada provider será necesario crear una aplicación OAuth.

### Google

Seleccionar **Identity Providers** y luego buscar el provider para **Google**, anotar el valor de **Redirect URI**.

![image-13.png](https://i.imgur.com/FCtwvbZ.png)

Dirigirse al [Console Developers de Google](https://console.developers.google.com/) y crear un nuevo proyecto.

![image-6.png](https://i.imgur.com/KzYZ1IX.png)

![image-7.png](https://i.imgur.com/13LslKD.png)

Luego en el menú lateral izquierdo seleccionar **Credenciales** y seleccionar la opción **Configurar pantalla de consentimiento**

![image-8.png](https://i.imgur.com/kmIZmkl.png)

Y realizar las siguientes configuraciones:

1. Configurar el **User Type** como **Externos**

![image-9.png)](https://i.imgur.com/CCzEXRp.png)

2. Llenar los siguientes campos obligatorios

![image-10.png)](https://i.imgur.com/oEpOcPS.png)

Luego regresar a la opción **Credenciales** ubicada en el menú lateral izquierdo y seleccionar la opción **Crear credenciales** > **ID de Cliente de OAuth**

![image-12.png)](https://i.imgur.com/tu0Snz0.png)

En la nueva pantalla que aparece, seleccionar el **Tipo de Aplicación** como **Aplicación Web** y ototrgarle un nombre (puede ser cualquiera). Para la **URI de redireccionamiento autorizados** copiar el **Redirect URI** de Keycloak y finalizar dando click al botón de **Crear**.

Anotar los valores de **ID de cliente** y **Secreto del cliente**

![image-15.png)](https://i.imgur.com/ZI4Ped4.png)

Finalmente, pegar estos valores en los campos correspondientes en Keycloak dar click en **Add**:

![image-16.png)](https://i.imgur.com/qEog8Xo.png)

### Github

En Keycloak, añadir el provider para Github

![image-17.png)](https://i.imgur.com/cNtgsvm.png)

Y nuevamente anotar el valor de **Redirect URI**

![image-18.png)](https://i.imgur.com/vIIIAs4.png)

Dirigirse al [Developer Settings](https://github.com/settings/apps) en Github y crear una nueva aplicación OAuth:

![image-19.png)](https://i.imgur.com/3gfldVQ.png)

- El **Homepage URL** corresponde a la dirección de tu realm, el formato debe ser

```bash
http://localhost:[puerto]/realms/[nombre_de_tu_realm]
```

- El **Authorization callback URL** es el valor del **Redirect URI** proveniente de Keycloak.

Completado esos valores, dar click en **Register Application**. En la pantalla que aparece, generar un secreto de cliente dando click al botón **Generate new client secret** y llenar los valores correspondientes en Keycloak provenientes de Github:

![image-20.png)](https://i.imgur.com/Bu1SEn2.png)

### Microsoft

Añadir un provider de tipo **User-defined** > **OpenID Connect v1.0**

![image-21.png)](https://i.imgur.com/JyVGMhd.png)

Llenar los campos de **Alias** y **Display name** como se muestra en la imagen, y anotar el **Redirect URI**

![image-22.png)](https://i.imgur.com/Oc02TyY.png)

Dirigirse a [Portal Azure](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade), iniciar sesión con tu cuenta de Microsoft y crear una aplicación haciendo click en **Nuevo Registro**

![image-23.png)](https://i.imgur.com/zfBJi68.png)

Llenar los campos solicitados y pegar la URI proveniente de Keycloak donde se requiere.

![image-24.png)](https://i.imgur.com/QsvzgB7.png)

En la siguiente pantalla, hacer click en **Puntos de conexión** y copiar el valor de **Documento de metadatos de OpenID Connect** y pegarlo en el campo de **Discovery Endpoint** de Keycloak

![image-25.png)](https://i.imgur.com/2IY6ZiV.png)

![image-26.png)](https://i.imgur.com/DZmXRwu.png)

En Azure, tal y como se hizo con Github, generar un secreto de cliente haciendo click en **Nuevo secreto de cliente** y anotar su valor.

![image-28.png)](https://i.imgur.com/yfrb7aE.png)

Luego dirigirse a la sección de **Información general** en Azure y anotar el **ID. de aplicación (cliente)**. Con estos valores completar los campos obligatorios restantes en Keycloak para terminar de configurar este provider

![image-29.png)](https://i.imgur.com/HZYJIqQ.png)
