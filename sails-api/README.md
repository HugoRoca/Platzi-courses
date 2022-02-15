## First command exec for create project

```
sails new backend --no-frontend

sails generate model User email:string password:string

sails generate controller User signup login
```

Si estás trabajando en WSL Ubuntu, recuerda instalarlo con

sudo npm i mongodb -g

Y también me tocó instalar

sudo apt install mongodb-clients

Para que me sirviera el comando

mongo -version

## IONIC

```
ionic start frontend sidemenu

ionic generate page rides
```
