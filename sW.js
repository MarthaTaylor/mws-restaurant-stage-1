/**
  Code reuse: 
  This was my first service worker and I took code from the three different youtube tutorials to create it
  Some code from https://developers.google.com/web/fundamentals/primers/service-workers/ and Mohamed Riaad study jam at 
  https://www.youtube.com/watch?v=TxXwlOAXUko and youtube bitsofcode tutorial https://www.youtube.com/watch?v=BfL3pprhnms  
**/


//main cache variable is given a value with a number of 1 as this will increment auto each time a new service worker called + cache stored a
 let mainCacheName = 'restauantCache-1';

//list of urls to cache in the service worker 
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
 self.addEventListener('install', function(e) {
 	//event.waitUntil() method takes a promise and uses it to know how long installation takes, and whether it succeeded or not
 	e.waitUntil(
 		//open cache folder then cache out caches
 		caches.open(mainCacheName).then(function(cache) {
 			console.log(cache);
 			//add caches to the array of caches
 			return cache.addAll(urlCacheList);
 		}).catch( function(err) {
 			console.log(err);
 		})
 		);
 });

// // using ES5 activate event is waiting until the inner code is resolved before continuing so it will  delete old caches of restaur names and store new ones
self.addEventListener('activate', function(e){
		//the activate event waits until the below is resolved to run
		e.waitUntil(
			//searching through all the keys in the cache
			caches.keys().then(function(cacheNames){
				//do a promise all to loop through cache and resolve next few lines of code requests
				return Promise.all( 
					//filter through array of caches to create a new list of latest restaurant names
					cacheNames.filter(function(cacheName){
						return cacheName.startsWith('restaurant-') &&
						cacheName !== mainCacheName;
						//crete a new array of caches after old ones are deleted with the new service worker
					}).map( function (cacheName) {
						console.log("[Serviceorker] Removing cached Fles from ", mainCacheName);
						 return caches.delete(cacheName);
					   })
				);
			})
		);
});


self.addEventListener('fetch', function(e) {
	console.log("[Service Worker] Fetching", e.request.url);
	//Check in the cache if the cached URL/file and the requested * URL/file match. Then respond appropriately to the outcome.
	e.respondWith(
		caches.match(e.request)
			.then(function(response) {
	//If the requested URL/file is found in the cache hen log out a message + return the cached version.There is no need to fetch it again
				 if (response) {
					console.log("[ServiceWorker] Found in cache", e.request.url);
					return response;
				}
//If the requested URL/file is not in the cache return the result of a call to fetch hich will make a network request + retrun the data if anything can be retrieved from the netork
				return fetch(e.request);
			}) //otherwise return any errors caught that do not allow our fetch call to work
			.catch(function(error) {
				console.log("Error fetching and caching new data", error);
			})
	);
});

