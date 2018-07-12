/*
 * Copyright 2013. Amazon Web Services, Inc. All Rights Reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
**/

// Load the SDK and UUID
var config = require('./config')

var AWS = require('aws-sdk');
var path = require('path');

AWS.config.region = config.region;

var rekognition = new AWS.Rekognition({region: config.region});

var collectionName = config.collectionName;
// AWS allows you to create separate collections of faces to search in. 
// This creates the collection we'll use.

function deleteCollection(){
    rekognition.deleteCollection( { "CollectionId": config.collectionName }, function(err, data) {
        if (err) {
          console.log(err, err.stack); // an error occurred
        } else {
          console.log(data);           // successful response
          createCollection();
        }
      });
}

function createCollection() {
	// Index a dir of faces
	rekognition.createCollection( { "CollectionId": config.collectionName }, function(err, data) {
	  if (err) {
		console.log(err, err.stack); // an error occurred
	  } else {
		console.log(data);           // successful response
	  }
	});
}



deleteCollection();
