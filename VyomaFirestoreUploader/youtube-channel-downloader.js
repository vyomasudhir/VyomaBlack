var fs = require('fs');
var readline = require('readline');
var {google} = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
firebase.initializeApp({
    apiKey: "AIzaSyB02B5rlQEKoHLEHkXDA0lUSkQ11Ej12do",
    authDomain: "vyomaprime.firebaseapp.com",
    databaseURL: "https://vyomaprime.firebaseio.com",
    projectId: "vyomaprime",
    storageBucket: "vyomaprime.appspot.com",
    messagingSenderId: "133795876750",
    appId: "1:133795876750:web:03df96fe68e21b466b9edf",
    measurementId: "G-TN32KLL8H5"
  });

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/youtube-nodejs-quickstart.json
var SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'youtube-nodejs-quickstart.json';

// Load client secrets from a local file.
fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  // Authorize a client with the loaded credentials, then call the YouTube API.
  authorize(JSON.parse(content), getChannel);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
   // console.log(credentials);
  var clientSecret = credentials.installed.client_secret;
  var clientId = credentials.installed.client_id;
  var redirectUrl = credentials.installed.redirect_uris[0];

  var oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);
console.log('TOKEN_PATH',TOKEN_PATH);
  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(err, token) {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
    }
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) throw err;
    console.log('Token stored to ' + TOKEN_PATH);
  });
}

/**
 * Lists the names and IDs of up to 10 files.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function getChannel(auth) {
  var service = google.youtube('v3');
  service.channelSections.list({
    auth: auth,
    part: 'snippet,contentDetails',
    channelId: 'UCp5mvCwXR-drTRyzNUUjdZg'
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var channelSections = response.data.items;
    if (channelSections.length == 0) {
      console.log('No channel section found.');
    } else {
        
        
      
        channelSections.forEach(function(obj) {
           // console.log("------------------------------------------------");
            //console.log("Section Title:" + obj.snippet.title);
            //console.log("No. of Playlists:" + obj.contentDetails.playlists.length);
            var i=0;
            obj.contentDetails.playlists.forEach(element => { 
                i++;
              //console.log("playlist " + i + element); 
                getPlaylist(auth, obj.snippet.title, element);
                
            });
            

            
        });
        
    }
  });
}

function getPlaylist(auth, sectionTitle, playlistId)
{
      var service = google.youtube('v3');
      service.playlists.list({
        auth: auth,
        part: 'snippet,contentDetails',
        id: playlistId
      }, function(err, response) {
        if (err) {
          console.log('The API returned an error: ' + err);
          return;
        }
        var playlists = response.data.items;
        if (playlists.length == 0) {
          console.log('No playlist found.');
        } else {


          //console.log(playlists.length);

            playlists.forEach(function(obj) {
                getPlaylistItems(auth,sectionTitle,obj.snippet.title,playlistId);
            });

        }
      });
}

function getPlaylistItems(auth, sectionTitle, playlistTitle, playlistId)
{
      var service = google.youtube('v3');
      service.playlistItems.list({
        auth: auth,
        part: 'snippet,contentDetails',
        playlistId: playlistId
      }, function(err, response) {
        if (err) {
          console.log('The API returned an error: ' + err);
          return;
        }
        var playlistItems = response.data.items;
        if (playlistItems.length == 0) {
          console.log('No playlist found.');
        } else {


          //console.log(playlists.length);
            var ord = 0;
            playlistItems.forEach(function(obj) {
                ord ++;
                console.log("Section Title:" + sectionTitle);
                console.log("Playlist Title:" + playlistTitle);
                console.log("Video Order:" + ord);
                console.log("Video Title:" + obj.snippet.title);
                console.log("Video Description:" + obj.snippet.description);
                console.log("Video Id:" + obj.contentDetails.videoId);
                console.log("Video thumbnail:" + obj.snippet.thumbnails.default.url);
                console.log("----------------------------------");
                uploadVideo(obj.id, sectionTitle, playlistTitle, ord, obj.snippet.title, obj.snippet.description, obj.contentDetails.videoId, obj.snippet.thumbnails.default.url);
            });

        }
      });
}

function uploadVideo(id, sectionTitle, playlistTitle, videoOrder, videoTitle, videoDescription, videoId, videoThumbnail)
{


    var db = firebase.firestore();
    
     db.collection("ytvideo").add({
        id: id,
        sectionTitle: sectionTitle,
        playlistTitle:  playlistTitle,
         videoOrder: videoOrder,
         videoTitle: videoTitle,
         videoDescription: videoDescription,
         videoId : videoId,
         videoThumbnail: videoThumbnail
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

}
