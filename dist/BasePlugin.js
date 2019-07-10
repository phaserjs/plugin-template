/**
@description It's the new plugin template that can work with phaser >3.0.8
I use the exemple plugin :
@link{https://raw.githubusercontent.com/photonstorm/phaser3-examples/master/public/assets/loader-tests/BannerTextPlugin.js}
*/

(function(){

    var root = this;

    class basePlugin extends Phaser.Plugins.ScenePlugin {

        constructor (scene, pluginManager)
        {
            super(scene, pluginManager);
        }

        config (key)
        {

        }

        test(name)
        {
           console.log('BasePlugin says hello ' + name + '!');
        }

    }

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = basePlugin;
        }
        exports.basePlugin = basePlugin;
    } else if (typeof define !== 'undefined' && define.amd) {
        define('BannerTextPlugin', (function() { return root.basePlugin = basePlugin; })() );
    } else {
        root.basePlugin = basePlugin;
    }

    return basePlugin;
}).call(this);
