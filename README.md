# Skel MVC

Simple bespoke MVC architecture for using Express.js & Jade.js.

## Architecture:

```App.js ---> Routes ---> Controllers```

Where:

```Routes: index.js``` & 
```Controllers: indexController.js, aboutController.js```

For prototyping speed, Model has been hard coded into the Controllers.

Jade Mixins can be built into views as usual.

## Still Todo:

- External data can be imported into Model interface.
- Safely import media

## Install:

Note: Ensure that both jade-js & nodemon are installed globally on system first.

To install, git clone repo then:

```$ npm install```

```$ nodemon```

Locate to ```http://localhost:3000/``` & ```http://localhost:3000/about``` to test.



