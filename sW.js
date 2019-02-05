/**
  Code reuse: 
  This was my first service worker and I took code from the two different youtube tutorials to create it
  Some code Mohamed Riaad study jam at https://www.youtube.com/watch?v=TxXwlOAXUko and https://www.youtube.com/watch?v=BfL3pprhnms
**/


//main cache variable is given a value with a number of 1 as this will increment auto each time a new service worker called + cache stored a
 let mainCacheName = 'restauantCache-1';

 let urlCacheList = [
 	'./',
 	'./restaurant.html',
 	'./css/styles.css',
 	'./data/restaurants.json',
 	'./js/dbhelper.js',
 	'./js/main.js',
 	'./js/restaurant_info.js',	
 	'./img/1.jpg',
 	'./img/2.jpg',
 	'./img/3.jpg',
	'./img/4.jpg',
 	'./img/5.jpg',
 	'./img/6.jpg',
 	'./img/7.jpg',
 	'./img/8.jpg',
 	'./img/9.jpg',
 	'./img/10.jpg'
 ];


//installed event used with service worker to listen for and add urls to cache or if it can't to return an error if there is one
 self.addEventListener('install', (e) => {
 	e.waitUntil(
 		//open cache folder then cache out caches
 		caches.open(mainCacheName).then((cache) => {
 			console.log(cache);
 			//add caches to the array of caches
 			return cache.addAll(urlCacheList);
 		}).catch(err => {
 			console.log(err);
 		})
 		);
 });

// using ES5 activate event is waiting until the inner code is resolved before continuing so it will  delete old caches of restaur names and store new ones
// self.addEventListener('activate', function(e){
	
// 		e.waitUntil(
// 			//searching through all the keys in the cache
// 			caches.keys().then(function(cacheNames){
// 				//do a promise all to loop through cache and resolve next few lines of code requests
// 				return Promise.all( 
// 					//filter through array of caches to create a new list of latest restaurant names
// 					cacheNames.filter(function(cacheName){
// 						return cacheName.startsWith('restaurant-') &&
// 						cacheName !== mainCacheName;
// 						//crete a new array of caches after old ones are deleted with the new service worker
// 					}).map( function (cacheName) {
// 						 return caches.delete(cacheName);
// 					   })
// 				);
// 			})
// 		);
// });

//using ES6, activate event is waiting until the inner code is resolved before continuing so it will  delete old caches of restaur names and store new ones
self.addEventListener('activate', (e) => {
		e.waitUntil(
			caches.keys().then((cacheNames) => {
				return Promise.all( 
					cacheNames.filter((cacheName) => {
						return cacheName.startsWith('restaurant') &&
						cacheName !== mainCacheName;
					}).map( (cacheName) => {
						 return caches.delete(cacheName);
					   })
				);
			})
		);
});


//fetch request written in es6 hope it works ok, any advice on how to handle this better appreciated
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then( (response) => {
            return response || fetch(e.request);
        })
    );
});







