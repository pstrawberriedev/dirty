// Get dirty


// Initialize Local Storage
/* store.js by marcuswestin | https://github.com/marcuswestin/store.js/ */
initStorage();
  function initStorage() {
    
    //Make sure local storage is enabled
    if (!store.enabled) {
      alert('Please enable local storage.');
      return;
    }
    else {
      //Make a storage state
      store.set('state', { status: 'open', saved: 'unsaved' });

      var storage = store.get('state');
      if (storage.status != 'open') {
        console.log('something went wrong - couldn\'t open storage');
      }
      else {
        console.log('storage: ' + storage.status);
      }
    }
    
  }


// Flowtype Init
// http://simplefocus.com/flowtype/
$('body').flowtype({
   minimum   : 320,
   maximum   : 1980,
   minFont   : 10,
   maxFont   : 20,
   fontRatio : 30
});