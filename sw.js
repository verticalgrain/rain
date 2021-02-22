importScripts('https://cdn.ampproject.org/sw/amp-sw.js');

AMP_SW.init({
    assetCachingOptions: [{
        regexp: /\.(png|jpg|mp3)/,
        cachingStrategy: 'CACHE_FIRST'
    }]
});