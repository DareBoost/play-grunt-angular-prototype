# Play Grunt / Angular Prototype

This prototype enables grunt to hook into plays lifecycle.

The layout is such everything under the app dir is play related and everything under the ui dir is grunt related.

By using grunt, bower, yeoman for the frontend build and sbt for the backend we have the perfect mix.


# Start Play!

    play

from play you can now run `bower`, `npm`, `yo`, `grunt`

so to get started run these straight from the sbt console

    npm install

    bower install

Then when you start the app with the usual `play run`
it will run together with play until you hit `ctrl + c`

The magic thing with this is that bootstrap gets fetched by bower, and we reference it in our main.less file.
Angular, jQuery... also get fetched via bower and referenced in the uglify task of grunt.

grunt then outputs everything to the standard play `public` folder which we can then get the stuff from the usual way.

    @routes.Assets.at("javascripts/main.min.js")


### Todo

* Angular doesn't seem to work well with livereload, so you still have to do a reload when changing your $scope (but less works great!)

### Versioning
We could use this technique to output a json file with the git version in <http://eng.42go.com/play-framework-apps-be-version-aware/> and then use the grunt api
to load the version and append it to the outputted javascripts. and then use plays getFile api to load the same version file and append it to both the less and javascript files.

This seems a bit overkill, but if we wan't to deliver the files via nginx we would wan't to include the public folder in the dist zip instead of using the files stored in the .jar file.


### The future

I'm going to see if it's possible to make this into a plugin or together with these guys <https://github.com/guardian/sbt-grunt-plugin>
and make the scaffolding for angular into a giter8 repo.

Let me know if you have any suggestions or contributions!
