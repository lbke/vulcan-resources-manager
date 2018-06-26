export default  {
  "CafeOrCoffeeShop": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "UserLikes": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SoftwareApplication": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "availableOnDevice": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "availableOnDevice"
    },
    "featureList": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "featureList"
    },
    "applicationSubCategory": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "applicationSubCategory"
    },
    "device": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "device"
    },
    "applicationCategory": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "applicationCategory"
    },
    "softwareVersion": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "softwareVersion"
    },
    "storageRequirements": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "storageRequirements"
    },
    "applicationSuite": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "applicationSuite"
    },
    "memoryRequirements": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "memoryRequirements"
    },
    "screenshot": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "screenshot"
    },
    "countriesSupported": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "countriesSupported"
    },
    "softwareHelp": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "softwareHelp"
    },
    "softwareAddOn": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "softwareAddOn"
    },
    "releaseNotes": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "releaseNotes"
    },
    "supportingData": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "supportingData"
    },
    "requirements": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "requirements"
    },
    "countriesNotSupported": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "countriesNotSupported"
    },
    "operatingSystem": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "operatingSystem"
    },
    "fileSize": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "fileSize"
    },
    "installUrl": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "installUrl"
    }
  },
  "PublicationVolume": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "pageEnd": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "pageEnd"
    },
    "volumeNumber": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "volumeNumber"
    },
    "pageStart": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "pageStart"
    }
  },
  "Article": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "pageEnd": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "pageEnd"
    },
    "articleSection": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "articleSection"
    },
    "pageStart": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "pageStart"
    },
    "articleBody": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "articleBody"
    }
  },
  "PublicationIssue": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "issueNumber": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "issueNumber"
    },
    "pageEnd": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "pageEnd"
    },
    "pageStart": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "pageStart"
    }
  },
  "Event": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "translator": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "translator"
    },
    "previousStartDate": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "previousStartDate"
    },
    "review": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "review"
    },
    "location": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "location"
    },
    "recordedIn": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "recordedIn"
    },
    "composer": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "composer"
    },
    "isAccessibleForFree": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "isAccessibleForFree"
    },
    "performer": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "performer"
    }
  },
  "CreativeWork": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "associatedMedia": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "associatedMedia"
    },
    "funder": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "funder"
    },
    "sponsor": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "sponsor"
    },
    "audio": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "audio"
    },
    "provider": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "provider"
    },
    "encoding": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "encoding"
    },
    "interactivityType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "interactivityType"
    },
    "character": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "character"
    },
    "audience": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "audience"
    },
    "sourceOrganization": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "sourceOrganization"
    },
    "isPartOf": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "isPartOf"
    },
    "video": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "video"
    },
    "publication": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "publication"
    },
    "text": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "text"
    },
    "expires": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "expires"
    },
    "contributor": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "contributor"
    },
    "typicalAgeRange": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "typicalAgeRange"
    },
    "position": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "position"
    },
    "releasedEvent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "releasedEvent"
    },
    "educationalUse": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "educationalUse"
    },
    "contentLocation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "contentLocation"
    },
    "schemaVersion": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "schemaVersion"
    },
    "accessibilityFeature": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "accessibilityFeature"
    },
    "aggregateRating": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "aggregateRating"
    },
    "locationCreated": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "locationCreated"
    },
    "accessModeSufficient": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "accessModeSufficient"
    },
    "temporalCoverage": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "temporalCoverage"
    },
    "accountablePerson": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "accountablePerson"
    },
    "spatialCoverage": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "spatialCoverage"
    },
    "reviews": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "reviews"
    },
    "offers": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "offers"
    },
    "editor": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "editor"
    },
    "discussionUrl": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "discussionUrl"
    },
    "award": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "award"
    },
    "copyrightHolder": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "copyrightHolder"
    },
    "accessibilityHazard": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "accessibilityHazard"
    },
    "copyrightYear": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "copyrightYear"
    },
    "awards": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "awards"
    },
    "recordedAt": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "recordedAt"
    },
    "commentCount": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "commentCount"
    },
    "fileFormat": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "fileFormat"
    },
    "inLanguage": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "inLanguage"
    },
    "accessibilityAPI": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "accessibilityAPI"
    },
    "publisher": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "publisher"
    },
    "interactionStatistic": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "interactionStatistic"
    },
    "contentRating": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "contentRating"
    },
    "learningResourceType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "learningResourceType"
    },
    "accessMode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "accessMode"
    },
    "material": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "material"
    },
    "isFamilyFriendly": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "isFamilyFriendly"
    },
    "exampleOfWork": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "exampleOfWork"
    },
    "version": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "version"
    },
    "dateModified": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "dateModified"
    },
    "keywords": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "keywords"
    },
    "genre": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "genre"
    },
    "mainEntity": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "mainEntity"
    },
    "author": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "author"
    },
    "encodings": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "encodings"
    },
    "isBasedOnUrl": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "isBasedOnUrl"
    },
    "timeRequired": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "timeRequired"
    },
    "translator": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "translator"
    },
    "thumbnailUrl": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "thumbnailUrl"
    },
    "hasPart": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "hasPart"
    },
    "comment": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "comment"
    },
    "encodingFormat": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "encodingFormat"
    },
    "review": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "review"
    },
    "license": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "license"
    },
    "accessibilityControl": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "accessibilityControl"
    },
    "isBasedOn": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "isBasedOn"
    },
    "creator": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "creator"
    },
    "publishingPrinciples": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "publishingPrinciples"
    },
    "producer": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "producer"
    },
    "mentions": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "mentions"
    },
    "workExample": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "workExample"
    },
    "dateCreated": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "dateCreated"
    },
    "datePublished": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "datePublished"
    },
    "isAccessibleForFree": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "isAccessibleForFree"
    },
    "alternativeHeadline": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "alternativeHeadline"
    },
    "headline": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "headline"
    },
    "citation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "citation"
    }
  },
  "CommunicateAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Recipe": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "recipeYield": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "recipeYield"
    },
    "recipeCategory": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "recipeCategory"
    },
    "recipeIngredient": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "recipeIngredient"
    },
    "recipeInstructions": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "recipeInstructions"
    },
    "nutrition": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "nutrition"
    },
    "suitableForDiet": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "suitableForDiet"
    },
    "recipeCuisine": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "recipeCuisine"
    },
    "cookTime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "cookTime"
    },
    "cookingMethod": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "cookingMethod"
    },
    "ingredients": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "ingredients"
    }
  },
  "Game": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "characterAttribute": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "characterAttribute"
    },
    "gameLocation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "gameLocation"
    },
    "quest": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "quest"
    },
    "numberOfPlayers": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "numberOfPlayers"
    }
  },
  "VideoGameSeries": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "productionCompany": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "productionCompany"
    },
    "quest": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "quest"
    },
    "numberOfPlayers": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "numberOfPlayers"
    },
    "actors": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "actors"
    },
    "episode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "episode"
    }
  },
  "HowToDirection": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "supply": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "supply"
    },
    "afterMedia": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "afterMedia"
    },
    "tool": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "tool"
    }
  },
  "Volcano": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TrainTrip": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "arrivalStation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "arrivalStation"
    }
  },
  "SportsTeam": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "athlete": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "athlete"
    },
    "coach": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "coach"
    }
  },
  "GroceryStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Demand": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "sku": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "sku"
    },
    "availabilityStarts": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "availabilityStarts"
    },
    "availableDeliveryMethod": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "availableDeliveryMethod"
    },
    "mpn": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "mpn"
    },
    "serialNumber": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "serialNumber"
    },
    "ineligibleRegion": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "ineligibleRegion"
    },
    "gtin8": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "gtin8"
    },
    "availability": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "availability"
    },
    "priceSpecification": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "priceSpecification"
    },
    "inventoryLevel": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "inventoryLevel"
    },
    "eligibleTransactionVolume": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "eligibleTransactionVolume"
    },
    "availableAtOrFrom": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "availableAtOrFrom"
    },
    "warranty": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "warranty"
    },
    "eligibleQuantity": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "eligibleQuantity"
    },
    "validFrom": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "validFrom"
    },
    "validThrough": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "validThrough"
    },
    "gtin14": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "gtin14"
    },
    "gtin13": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "gtin13"
    },
    "gtin12": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "gtin12"
    },
    "seller": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "seller"
    },
    "deliveryLeadTime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "deliveryLeadTime"
    },
    "availabilityEnds": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "availabilityEnds"
    },
    "includesObject": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "includesObject"
    },
    "businessFunction": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "businessFunction"
    },
    "eligibleCustomerType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "eligibleCustomerType"
    },
    "itemCondition": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "itemCondition"
    },
    "itemOffered": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "itemOffered"
    },
    "eligibleDuration": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "eligibleDuration"
    },
    "acceptedPaymentMethod": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "acceptedPaymentMethod"
    },
    "areaServed": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "areaServed"
    },
    "eligibleRegion": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "eligibleRegion"
    },
    "advanceBookingRequirement": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "advanceBookingRequirement"
    }
  },
  "MusicComposition": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "recordedAs": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "recordedAs"
    },
    "firstPerformance": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "firstPerformance"
    },
    "musicArrangement": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "musicArrangement"
    },
    "iswcCode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "iswcCode"
    },
    "composer": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "composer"
    },
    "musicalKey": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "musicalKey"
    }
  },
  "AboutPage": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Action": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "startTime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "startTime"
    },
    "actionStatus": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "actionStatus"
    },
    "target": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "target"
    },
    "agent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "agent"
    },
    "endTime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "endTime"
    },
    "participant": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "participant"
    },
    "instrument": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "instrument"
    },
    "object": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "object"
    },
    "error": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "error"
    },
    "location": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "location"
    }
  },
  "Book": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "numberOfPages": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "numberOfPages"
    },
    "illustrator": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "illustrator"
    }
  },
  "ExerciseAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "course": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "course"
    },
    "sportsTeam": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "sportsTeam"
    },
    "sportsEvent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "sportsEvent"
    },
    "distance": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "distance"
    },
    "opponent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "opponent"
    },
    "sportsActivityLocation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "sportsActivityLocation"
    },
    "toLocation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "toLocation"
    },
    "fromLocation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "fromLocation"
    },
    "exerciseCourse": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "exerciseCourse"
    }
  },
  "UserPlays": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "FoodService": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "StadiumOrArena": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Order": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "paymentMethod": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "paymentMethod"
    },
    "seller": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "seller"
    },
    "paymentMethodId": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "paymentMethodId"
    },
    "discount": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "discount"
    },
    "orderDelivery": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "orderDelivery"
    },
    "orderedItem": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "orderedItem"
    },
    "acceptedOffer": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "acceptedOffer"
    },
    "discountCurrency": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "discountCurrency"
    },
    "paymentDueDate": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "paymentDueDate"
    },
    "discountCode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "discountCode"
    }
  },
  "Service": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "brand": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "brand"
    },
    "areaServed": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "areaServed"
    }
  },
  "ContactPoint": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "email": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "email"
    },
    "contactType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "contactType"
    },
    "productSupported": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "productSupported"
    },
    "areaServed": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "areaServed"
    }
  },
  "Organization": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "events": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "events"
    },
    "faxNumber": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "faxNumber"
    },
    "subOrganization": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "subOrganization"
    },
    "hasOfferCatalog": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "hasOfferCatalog"
    },
    "globalLocationNumber": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "globalLocationNumber"
    },
    "members": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "members"
    },
    "aggregateRating": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "aggregateRating"
    },
    "duns": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "duns"
    },
    "taxID": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "taxID"
    },
    "reviews": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "reviews"
    },
    "award": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "award"
    },
    "makesOffer": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "makesOffer"
    },
    "contactPoints": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "contactPoints"
    },
    "awards": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "awards"
    },
    "foundingDate": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "foundingDate"
    },
    "leiCode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "leiCode"
    },
    "seeks": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "seeks"
    },
    "member": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "member"
    },
    "founders": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "founders"
    },
    "alumni": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "alumni"
    },
    "dissolutionDate": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "dissolutionDate"
    },
    "address": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "address"
    },
    "logo": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "logo"
    },
    "employees": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "employees"
    },
    "telephone": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "telephone"
    },
    "email": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "email"
    },
    "department": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "department"
    },
    "contactPoint": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "contactPoint"
    },
    "parentOrganization": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "parentOrganization"
    },
    "legalName": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "legalName"
    },
    "employee": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "employee"
    },
    "numberOfEmployees": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "numberOfEmployees"
    },
    "naics": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "naics"
    },
    "hasPOS": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "hasPOS"
    },
    "review": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "review"
    },
    "foundingLocation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "foundingLocation"
    },
    "owns": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "owns"
    },
    "event": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "event"
    },
    "founder": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "founder"
    },
    "publishingPrinciples": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "publishingPrinciples"
    },
    "isicV4": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "isicV4"
    },
    "location": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "location"
    },
    "brand": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "brand"
    },
    "vatID": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "vatID"
    },
    "areaServed": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "areaServed"
    }
  },
  "Dataset": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "catalog": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "catalog"
    },
    "includedInDataCatalog": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "includedInDataCatalog"
    },
    "datasetTimeInterval": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "datasetTimeInterval"
    },
    "issn": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "issn"
    },
    "spatial": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "spatial"
    },
    "temporal": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "temporal"
    },
    "includedDataCatalog": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "includedDataCatalog"
    },
    "distribution": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "distribution"
    }
  },
  "Vehicle": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "numberOfForwardGears": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "numberOfForwardGears"
    },
    "mileageFromOdometer": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "mileageFromOdometer"
    },
    "cargoVolume": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "cargoVolume"
    },
    "vehicleInteriorColor": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "vehicleInteriorColor"
    },
    "steeringPosition": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "steeringPosition"
    },
    "vehicleSeatingCapacity": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "vehicleSeatingCapacity"
    },
    "vehicleEngine": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "vehicleEngine"
    },
    "vehicleModelDate": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "vehicleModelDate"
    },
    "numberOfDoors": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "numberOfDoors"
    },
    "vehicleConfiguration": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "vehicleConfiguration"
    },
    "fuelType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "fuelType"
    },
    "vehicleIdentificationNumber": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "vehicleIdentificationNumber"
    },
    "fuelConsumption": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "fuelConsumption"
    },
    "numberOfPreviousOwners": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "numberOfPreviousOwners"
    },
    "fuelEfficiency": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "fuelEfficiency"
    },
    "numberOfAxles": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "numberOfAxles"
    },
    "vehicleInteriorType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "vehicleInteriorType"
    },
    "numberOfAirbags": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "numberOfAirbags"
    },
    "vehicleTransmission": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "vehicleTransmission"
    },
    "dateVehicleFirstRegistered": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "dateVehicleFirstRegistered"
    },
    "purchaseDate": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "purchaseDate"
    },
    "productionDate": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "productionDate"
    },
    "knownVehicleDamages": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "knownVehicleDamages"
    },
    "driveWheelConfiguration": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "driveWheelConfiguration"
    }
  },
  "Person": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "height": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "height"
    },
    "workLocation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "workLocation"
    },
    "faxNumber": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "faxNumber"
    },
    "children": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "children"
    },
    "jobTitle": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "jobTitle"
    },
    "hasOfferCatalog": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "hasOfferCatalog"
    },
    "deathPlace": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "deathPlace"
    },
    "globalLocationNumber": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "globalLocationNumber"
    },
    "birthPlace": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "birthPlace"
    },
    "gender": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "gender"
    },
    "parents": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "parents"
    },
    "alumniOf": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "alumniOf"
    },
    "homeLocation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "homeLocation"
    },
    "duns": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "duns"
    },
    "taxID": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "taxID"
    },
    "award": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "award"
    },
    "birthDate": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "birthDate"
    },
    "makesOffer": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "makesOffer"
    },
    "givenName": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "givenName"
    },
    "contactPoints": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "contactPoints"
    },
    "awards": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "awards"
    },
    "familyName": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "familyName"
    },
    "seeks": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "seeks"
    },
    "sibling": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "sibling"
    },
    "address": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "address"
    },
    "performerIn": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "performerIn"
    },
    "honorificPrefix": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "honorificPrefix"
    },
    "additionalName": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "additionalName"
    },
    "siblings": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "siblings"
    },
    "telephone": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "telephone"
    },
    "email": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "email"
    },
    "weight": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "weight"
    },
    "contactPoint": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "contactPoint"
    },
    "colleague": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "colleague"
    },
    "naics": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "naics"
    },
    "hasPOS": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "hasPOS"
    },
    "parent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "parent"
    },
    "owns": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "owns"
    },
    "affiliation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "affiliation"
    },
    "publishingPrinciples": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "publishingPrinciples"
    },
    "isicV4": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "isicV4"
    },
    "brand": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "brand"
    },
    "honorificSuffix": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "honorificSuffix"
    },
    "netWorth": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "netWorth"
    },
    "vatID": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "vatID"
    },
    "nationality": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "nationality"
    },
    "relatedTo": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "relatedTo"
    },
    "follows": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "follows"
    },
    "knows": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "knows"
    },
    "worksFor": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "worksFor"
    }
  },
  "InsuranceAgency": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ListItem": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "previousItem": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "previousItem"
    },
    "item": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "item"
    }
  },
  "AudioObject": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "transcript": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "transcript"
    }
  },
  "MusicRecording": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "isrcCode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "isrcCode"
    },
    "inAlbum": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "inAlbum"
    },
    "inPlaylist": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "inPlaylist"
    },
    "byArtist": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "byArtist"
    },
    "duration": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "duration"
    }
  },
  "TaxiReservation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "pickupTime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "pickupTime"
    },
    "partySize": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "partySize"
    },
    "pickupLocation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "pickupLocation"
    }
  },
  "Audience": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "geographicArea": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "geographicArea"
    }
  },
  "PaymentChargeSpecification": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "InteractionCounter": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "userInteractionCount": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "userInteractionCount"
    },
    "interactionType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "interactionType"
    }
  },
  "AlignmentObject": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "alignmentType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "alignmentType"
    },
    "targetUrl": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "targetUrl"
    },
    "targetName": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "targetName"
    },
    "educationalFramework": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "educationalFramework"
    }
  },
  "Reservation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Rating": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "author": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "author"
    },
    "worstRating": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "worstRating"
    }
  },
  "Permit": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "validFor": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "validFor"
    },
    "validUntil": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "validUntil"
    },
    "validFrom": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "validFrom"
    },
    "issuedBy": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "issuedBy"
    },
    "issuedThrough": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "issuedThrough"
    },
    "permitAudience": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "permitAudience"
    },
    "validIn": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "validIn"
    }
  },
  "FoodEstablishmentReservation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MediaObject": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AutoPartsStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Product": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Painting": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SomeProducts": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "inventoryLevel": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "inventoryLevel"
    }
  },
  "EntryPoint": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "application": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "application"
    },
    "actionPlatform": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "actionPlatform"
    },
    "httpMethod": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "httpMethod"
    },
    "encodingType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "encodingType"
    },
    "contentType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "contentType"
    }
  },
  "MoveAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "toLocation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "toLocation"
    },
    "fromLocation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "fromLocation"
    }
  },
  "UserComments": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "commentTime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "commentTime"
    },
    "creator": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "creator"
    },
    "replyToUrl": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "replyToUrl"
    }
  },
  "Offer": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "advanceBookingRequirement": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "advanceBookingRequirement"
    }
  },
  "AddAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BroadcastChannel": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "inBroadcastLineup": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "inBroadcastLineup"
    },
    "providesBroadcastService": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "providesBroadcastService"
    },
    "genre": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "genre"
    }
  },
  "JewelryStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ViewAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "WPFooter": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "QAPage": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ImageObject": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "representativeOfPage": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "representativeOfPage"
    },
    "thumbnail": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "thumbnail"
    },
    "caption": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "caption"
    }
  },
  "SearchAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Thing": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "LikeAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PublicationEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "publishedOn": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "publishedOn"
    },
    "free": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "free"
    },
    "isAccessibleForFree": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "isAccessibleForFree"
    }
  },
  "Course": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "coursePrerequisites": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "coursePrerequisites"
    },
    "courseCode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "courseCode"
    },
    "hasCourseInstance": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "hasCourseInstance"
    }
  },
  "MobileApplication": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "carrierRequirements": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "carrierRequirements"
    }
  },
  "ParcelService": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BefriendAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "HowTo": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "steps": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "steps"
    },
    "prepTime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "prepTime"
    },
    "step": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "step"
    },
    "performTime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "performTime"
    },
    "estimatedCost": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "estimatedCost"
    },
    "totalTime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "totalTime"
    },
    "supply": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "supply"
    },
    "tool": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "tool"
    },
    "yield": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "yield"
    }
  },
  "PoliceStation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "GeoCoordinates": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Flight": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "boardingPolicy": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "boardingPolicy"
    },
    "aircraft": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "aircraft"
    },
    "seller": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "seller"
    },
    "webCheckinTime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "webCheckinTime"
    },
    "mealService": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "mealService"
    },
    "departureGate": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "departureGate"
    },
    "departureTerminal": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "departureTerminal"
    },
    "estimatedFlightDuration": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "estimatedFlightDuration"
    },
    "flightDistance": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "flightDistance"
    },
    "arrivalTerminal": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "arrivalTerminal"
    },
    "departureAirport": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "departureAirport"
    }
  },
  "DigitalDocument": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "hasDigitalDocumentPermission": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "hasDigitalDocumentPermission"
    }
  },
  "HealthClub": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DrinkAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DownloadAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "OwnershipInfo": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TypeAndQuantityNode": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "businessFunction": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "businessFunction"
    },
    "unitCode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "unitCode"
    },
    "unitText": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "unitText"
    }
  },
  "TireShop": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Synagogue": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AnimalShelter": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "JobPosting": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "industry": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "industry"
    }
  },
  "HowToSection": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "steps": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "steps"
    }
  },
  "RadioSeries": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "numberOfSeasons": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "numberOfSeasons"
    },
    "director": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "director"
    },
    "productionCompany": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "productionCompany"
    },
    "actors": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "actors"
    },
    "episode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "episode"
    }
  },
  "TVSeries": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "actors": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "actors"
    },
    "episode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "episode"
    }
  },
  "MusicAlbum": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "albumProductionType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "albumProductionType"
    },
    "albumReleaseType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "albumReleaseType"
    },
    "byArtist": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "byArtist"
    },
    "albumRelease": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "albumRelease"
    }
  },
  "Trip": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "arrivalTime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "arrivalTime"
    },
    "departureTime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "departureTime"
    }
  },
  "Invoice": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "accountId": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "accountId"
    },
    "referencesOrder": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "referencesOrder"
    },
    "paymentDueDate": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "paymentDueDate"
    }
  },
  "ParcelDelivery": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DeliveryChargeSpecification": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "ineligibleRegion": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "ineligibleRegion"
    },
    "appliesToDeliveryMethod": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "appliesToDeliveryMethod"
    },
    "areaServed": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "areaServed"
    },
    "eligibleRegion": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "eligibleRegion"
    }
  },
  "MovieTheater": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Place": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "photos": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "photos"
    },
    "map": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "map"
    },
    "branchCode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "branchCode"
    },
    "hasMap": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "hasMap"
    },
    "additionalProperty": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "additionalProperty"
    },
    "address": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "address"
    },
    "specialOpeningHoursSpecification": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "specialOpeningHoursSpecification"
    },
    "amenityFeature": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "amenityFeature"
    },
    "logo": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "logo"
    },
    "telephone": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "telephone"
    },
    "geo": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "geo"
    },
    "containedInPlace": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "containedInPlace"
    },
    "review": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "review"
    },
    "publicAccess": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "publicAccess"
    },
    "event": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "event"
    },
    "containsPlace": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "containsPlace"
    },
    "isicV4": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "isicV4"
    },
    "maps": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "maps"
    },
    "isAccessibleForFree": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "isAccessibleForFree"
    },
    "containedIn": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "containedIn"
    }
  },
  "Apartment": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "numberOfRooms": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "numberOfRooms"
    }
  },
  "SingleFamilyResidence": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "numberOfRooms": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "numberOfRooms"
    }
  },
  "Suite": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "numberOfRooms": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "numberOfRooms"
    }
  },
  "HotelRoom": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "NutritionInformation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "fatContent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "fatContent"
    },
    "unsaturatedFatContent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "unsaturatedFatContent"
    },
    "sugarContent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "sugarContent"
    },
    "cholesterolContent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "cholesterolContent"
    },
    "carbohydrateContent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "carbohydrateContent"
    },
    "proteinContent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "proteinContent"
    },
    "sodiumContent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "sodiumContent"
    },
    "transFatContent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "transFatContent"
    },
    "fiberContent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "fiberContent"
    },
    "calories": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "calories"
    },
    "servingSize": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "servingSize"
    }
  },
  "LendAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "borrower": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "borrower"
    }
  },
  "FoodEstablishment": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "servesCuisine": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "servesCuisine"
    },
    "hasMenu": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "hasMenu"
    },
    "menu": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "menu"
    },
    "starRating": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "starRating"
    },
    "acceptsReservations": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "acceptsReservations"
    }
  },
  "ListenAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TransferAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "toLocation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "toLocation"
    },
    "fromLocation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "fromLocation"
    }
  },
  "SiteNavigationElement": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MusicGroup": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "track": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "track"
    },
    "genre": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "genre"
    },
    "tracks": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "tracks"
    },
    "musicGroupMember": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "musicGroupMember"
    },
    "album": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "album"
    }
  },
  "VideoGame": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "gameTip": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "gameTip"
    },
    "musicBy": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "musicBy"
    },
    "directors": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "directors"
    },
    "playMode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "playMode"
    },
    "director": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "director"
    },
    "actors": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "actors"
    }
  },
  "OrderItem": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "orderItemNumber": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "orderItemNumber"
    }
  },
  "DeleteAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TradeAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "priceSpecification": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "priceSpecification"
    },
    "price": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "price"
    }
  },
  "LegalService": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DigitalDocumentPermission": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "permissionType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "permissionType"
    }
  },
  "ProgramMembership": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "members": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "members"
    },
    "member": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "member"
    },
    "programName": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "programName"
    },
    "hostingOrganization": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "hostingOrganization"
    }
  },
  "VisualArtwork": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "height": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "height"
    },
    "artMedium": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "artMedium"
    },
    "artform": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "artform"
    },
    "artworkSurface": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "artworkSurface"
    },
    "artEdition": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "artEdition"
    },
    "width": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "width"
    },
    "surface": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "surface"
    },
    "depth": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "depth"
    }
  },
  "Attorney": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "RsvpAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "additionalNumberOfGuests": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "additionalNumberOfGuests"
    },
    "comment": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "comment"
    },
    "rsvpResponse": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "rsvpResponse"
    }
  },
  "GeneralContractor": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SellAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "warrantyPromise": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "warrantyPromise"
    }
  },
  "ApartmentComplex": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "RegisterAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "HousePainter": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "WinAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "loser": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "loser"
    }
  },
  "MovieRentalStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "WatchAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PropertyValueSpecification": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "defaultValue": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "defaultValue"
    },
    "valuePattern": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "valuePattern"
    },
    "stepValue": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "stepValue"
    },
    "valueMaxLength": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "valueMaxLength"
    },
    "readonlyValue": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "readonlyValue"
    },
    "valueMinLength": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "valueMinLength"
    },
    "maxValue": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "maxValue"
    },
    "valueName": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "valueName"
    },
    "multipleValues": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "multipleValues"
    },
    "minValue": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "minValue"
    },
    "valueRequired": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "valueRequired"
    }
  },
  "EducationEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ResumeAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ToyStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BedAndBreakfast": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PostalAddress": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "postalCode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "postalCode"
    },
    "addressLocality": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "addressLocality"
    }
  },
  "PlayAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "event": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "event"
    }
  },
  "LodgingBusiness": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SportsEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "GenderType": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Reservoir": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "EventVenue": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ServiceChannel": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "serviceSmsNumber": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "serviceSmsNumber"
    },
    "serviceUrl": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "serviceUrl"
    },
    "servicePhone": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "servicePhone"
    },
    "processingTime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "processingTime"
    }
  },
  "GiveAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "recipient": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "recipient"
    }
  },
  "CourseInstance": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PostOffice": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "CheckoutPage": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Accommodation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "floorSize": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "floorSize"
    },
    "petsAllowed": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "petsAllowed"
    },
    "amenityFeature": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "amenityFeature"
    },
    "numberOfRooms": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "numberOfRooms"
    },
    "permittedUsage": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "permittedUsage"
    }
  },
  "Clip": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "actors": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "actors"
    },
    "clipNumber": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "clipNumber"
    }
  },
  "CreativeWorkSeason": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Episode": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "actors": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "actors"
    }
  },
  "MovieSeries": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "productionCompany": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "productionCompany"
    },
    "actors": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "actors"
    }
  },
  "Movie": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "subtitleLanguage": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "subtitleLanguage"
    },
    "countryOfOrigin": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "countryOfOrigin"
    },
    "musicBy": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "musicBy"
    },
    "directors": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "directors"
    },
    "director": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "director"
    },
    "productionCompany": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "productionCompany"
    },
    "duration": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "duration"
    },
    "actors": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "actors"
    }
  },
  "VideoObject": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "videoQuality": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "videoQuality"
    },
    "thumbnail": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "thumbnail"
    },
    "caption": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "caption"
    },
    "actors": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "actors"
    }
  },
  "PerformingArtsTheater": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AggregateOffer": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "offers": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "offers"
    },
    "offerCount": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "offerCount"
    },
    "lowPrice": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "lowPrice"
    },
    "highPrice": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "highPrice"
    }
  },
  "ChooseAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Museum": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "HowToSupply": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "estimatedCost": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "estimatedCost"
    }
  },
  "IndividualProduct": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AutoRepair": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BroadcastService": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ExerciseGym": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Embassy": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ProfilePage": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DisagreeAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ParentAudience": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ReservationPackage": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "subReservation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "subReservation"
    }
  },
  "FinancialProduct": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "annualPercentageRate": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "annualPercentageRate"
    },
    "feesAndCommissionsSpecification": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "feesAndCommissionsSpecification"
    },
    "interestRate": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "interestRate"
    }
  },
  "LiveBlogPosting": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "coverageEndTime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "coverageEndTime"
    },
    "liveBlogUpdate": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "liveBlogUpdate"
    }
  },
  "HomeAndConstructionBusiness": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ControlAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "CheckAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BusTrip": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "busNumber": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "busNumber"
    }
  },
  "WebApplication": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DiscussionForumPosting": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TouristAttraction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "touristType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "touristType"
    },
    "availableLanguage": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "availableLanguage"
    }
  },
  "Car": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PriceSpecification": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "minPrice": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "minPrice"
    },
    "eligibleTransactionVolume": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "eligibleTransactionVolume"
    },
    "maxPrice": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "maxPrice"
    },
    "priceCurrency": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "priceCurrency"
    },
    "eligibleQuantity": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "eligibleQuantity"
    },
    "validFrom": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "validFrom"
    },
    "validThrough": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "validThrough"
    },
    "price": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "price"
    },
    "valueAddedTaxIncluded": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "valueAddedTaxIncluded"
    }
  },
  "AdministrativeArea": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ScreeningEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "workPresented": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "workPresented"
    }
  },
  "BroadcastEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Season": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DrawAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PaymentCard": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "LocalBusiness": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "priceRange": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "priceRange"
    },
    "branchOf": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "branchOf"
    },
    "paymentAccepted": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "paymentAccepted"
    },
    "openingHours": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "openingHours"
    },
    "currenciesAccepted": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "currenciesAccepted"
    }
  },
  "CancelAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "IgnoreAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "LoanOrCredit": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "requiredCollateral": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "requiredCollateral"
    }
  },
  "MotorcycleDealer": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "CheckOutAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BankAccount": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Duration": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "RealEstateAgent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MapCategoryType": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "APIReference": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "executableLibraryName": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "executableLibraryName"
    },
    "assemblyVersion": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "assemblyVersion"
    },
    "assembly": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "assembly"
    },
    "targetPlatform": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "targetPlatform"
    }
  },
  "SportsOrganization": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "sport": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "sport"
    }
  },
  "EndorseAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "endorsee": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "endorsee"
    }
  },
  "EducationalOrganization": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "alumni": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "alumni"
    }
  },
  "CableOrSatelliteService": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Role": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "namedPosition": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "namedPosition"
    },
    "roleName": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "roleName"
    }
  },
  "DatedMoneySpecification": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "startDate": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "startDate"
    }
  },
  "CreativeWorkSeries": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "startDate": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "startDate"
    }
  },
  "HinduTemple": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TVSeason": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "partOfTVSeries": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "partOfTVSeries"
    },
    "countryOfOrigin": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "countryOfOrigin"
    }
  },
  "SearchResultsPage": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "UserBlocks": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DeliveryEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "accessCode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "accessCode"
    }
  },
  "DanceEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ItemList": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "QualitativeValue": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "additionalProperty": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "additionalProperty"
    },
    "lesser": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "lesser"
    },
    "valueReference": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "valueReference"
    },
    "nonEqual": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "nonEqual"
    },
    "lesserOrEqual": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "lesserOrEqual"
    },
    "greaterOrEqual": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "greaterOrEqual"
    }
  },
  "Blog": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BookStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Corporation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MusicRelease": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "catalogNumber": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "catalogNumber"
    },
    "creditedTo": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "creditedTo"
    },
    "releaseOf": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "releaseOf"
    },
    "duration": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "duration"
    },
    "musicReleaseFormat": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "musicReleaseFormat"
    }
  },
  "SaleEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "FoodEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "OutletStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Review": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "reviewBody": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "reviewBody"
    }
  },
  "PropertyValue": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "valueReference": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "valueReference"
    },
    "maxValue": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "maxValue"
    },
    "unitCode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "unitCode"
    },
    "unitText": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "unitText"
    },
    "minValue": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "minValue"
    }
  },
  "InviteAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "event": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "event"
    }
  },
  "SoftwareSourceCode": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "sampleType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "sampleType"
    },
    "runtime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "runtime"
    }
  },
  "TVEpisode": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "partOfTVSeries": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "partOfTVSeries"
    },
    "subtitleLanguage": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "subtitleLanguage"
    },
    "countryOfOrigin": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "countryOfOrigin"
    }
  },
  "AmusementPark": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ContactPointOption": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Message": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "recipient": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "recipient"
    },
    "sender": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "sender"
    },
    "messageAttachment": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "messageAttachment"
    },
    "dateReceived": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "dateReceived"
    },
    "toRecipient": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "toRecipient"
    }
  },
  "MobilePhoneStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Casino": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SubscribeAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Ticket": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "ticketedSeat": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "ticketedSeat"
    }
  },
  "BusinessEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AgreeAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "GameServer": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "game": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "game"
    },
    "playersOnline": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "playersOnline"
    },
    "serverStatus": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "serverStatus"
    }
  },
  "DepositAccount": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DigitalDocumentPermissionType": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Motel": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "WPAdBlock": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "QuantitativeValue": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "unitText": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "unitText"
    },
    "minValue": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "minValue"
    }
  },
  "MonetaryAmount": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "minValue": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "minValue"
    }
  },
  "ChildCare": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "InternetCafe": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PaymentStatusType": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MusicAlbumReleaseType": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Pharmacy": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DefenceEstablishment": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BreadcrumbList": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Church": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "LiquorStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DataFeed": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "GameServerStatus": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "UserTweets": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BusinessAudience": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Enumeration": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "LodgingReservation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "lodgingUnitDescription": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "lodgingUnitDescription"
    },
    "checkoutTime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "checkoutTime"
    },
    "lodgingUnitType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "lodgingUnitType"
    },
    "numAdults": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "numAdults"
    }
  },
  "WebPageElement": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ReviewAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TVClip": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "UserInteraction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "OrganizationRole": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Airline": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "iataCode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "iataCode"
    },
    "boardingPolicy": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "boardingPolicy"
    }
  },
  "FinancialService": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BikeStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BuddhistTemple": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "LocationFeatureSpecification": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "validFrom": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "validFrom"
    },
    "validThrough": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "validThrough"
    }
  },
  "MenuSection": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "hasMenuItem": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "hasMenuItem"
    },
    "hasMenuSection": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "hasMenuSection"
    }
  },
  "Airport": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AutoRental": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AchieveAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ProductModel": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "RentalCarReservation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Comment": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "upvoteCount": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "upvoteCount"
    },
    "downvoteCount": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "downvoteCount"
    }
  },
  "WebPage": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "significantLink": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "significantLink"
    },
    "relatedLink": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "relatedLink"
    },
    "mainContentOfPage": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "mainContentOfPage"
    },
    "reviewedBy": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "reviewedBy"
    },
    "primaryImageOfPage": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "primaryImageOfPage"
    },
    "significantLinks": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "significantLinks"
    },
    "specialty": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "specialty"
    }
  },
  "WebSite": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "issn": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "issn"
    }
  },
  "EventReservation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "OrganizeAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "NewsArticle": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "dateline": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "dateline"
    }
  },
  "Restaurant": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Integer": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "UseAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TravelAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "distance": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "distance"
    }
  },
  "FilmAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "EngineSpecification": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Code": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SportingGoodsStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "WarrantyPromise": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TextDigitalDocument": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Waterfall": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AggregateRating": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "OfficeEquipmentStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "EmployeeRole": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PlanAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "scheduledTime": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "scheduledTime"
    }
  },
  "RentAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "realEstateAgent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "realEstateAgent"
    }
  },
  "Bakery": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "GatedResidenceCommunity": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Country": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PlaceOfWorship": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "HowToTip": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PerformanceRole": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "characterName": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "characterName"
    }
  },
  "UnitPriceSpecification": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "unitCode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "unitCode"
    },
    "billingIncrement": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "billingIncrement"
    },
    "referenceQuantity": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "referenceQuantity"
    },
    "unitText": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "unitText"
    },
    "priceType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "priceType"
    }
  },
  "Brand": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "review": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "review"
    }
  },
  "PerformAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "entertainmentBusiness": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "entertainmentBusiness"
    }
  },
  "ClothingStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Mountain": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ReceiveAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "deliveryMethod": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "deliveryMethod"
    },
    "sender": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "sender"
    }
  },
  "VideoGameClip": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MusicStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Crematorium": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "QuoteAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ContactPage": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BlogPosting": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PresentationDigitalDocument": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Report": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "reportNumber": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "reportNumber"
    }
  },
  "MenuItem": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "StructuredValue": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "OfferItemCondition": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TechArticle": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "dependencies": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "dependencies"
    },
    "proficiencyLevel": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "proficiencyLevel"
    }
  },
  "Sculpture": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ComputerStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "RadioStation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Map": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "mapType": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "mapType"
    }
  },
  "GolfCourse": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "FollowAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "CookAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "foodEvent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "foodEvent"
    },
    "foodEstablishment": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "foodEstablishment"
    }
  },
  "DepartAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "InvestmentOrDeposit": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ShoeStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "WPSideBar": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "HobbyShop": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Question": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "acceptedAnswer": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "acceptedAnswer"
    },
    "upvoteCount": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "upvoteCount"
    },
    "suggestedAnswer": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "suggestedAnswer"
    },
    "downvoteCount": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "downvoteCount"
    }
  },
  "Seat": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "FlightReservation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "boardingGroup": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "boardingGroup"
    },
    "passengerSequenceNumber": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "passengerSequenceNumber"
    },
    "securityScreening": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "securityScreening"
    },
    "passengerPriorityStatus": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "passengerPriorityStatus"
    }
  },
  "PetStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "OnDemandEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AutoDealer": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "RestrictedDiet": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "GovernmentOffice": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SendAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "recipient": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "recipient"
    },
    "deliveryMethod": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "deliveryMethod"
    }
  },
  "LeaveAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "event": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "event"
    }
  },
  "ClaimReview": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "GasStation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Mosque": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SeaBodyOfWater": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AssessAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "CommentAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "resultComment": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "resultComment"
    }
  },
  "Library": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TouristInformationCenter": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Aquarium": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SelfStorage": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ScholarlyArticle": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "GeoShape": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "address": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "address"
    },
    "circle": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "circle"
    },
    "box": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "box"
    },
    "addressCountry": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "addressCountry"
    },
    "postalCode": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "postalCode"
    },
    "elevation": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "elevation"
    },
    "polygon": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "polygon"
    },
    "line": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "line"
    }
  },
  "EntertainmentBusiness": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Florist": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Mass": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "HowToTool": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PaymentMethod": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "UserPlusOnes": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Residence": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "UserPageVisits": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Room": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Continent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "UnRegisterAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "LoseAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "winner": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "winner"
    }
  },
  "ShoppingCenter": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "HowToStep": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ActionStatusType": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "OfferCatalog": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "CompoundPriceSpecification": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "NightClub": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ConfirmAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "State": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Playground": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AppendAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ReplaceAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ParkingFacility": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AuthorizeAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "recipient": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "recipient"
    }
  },
  "BookSeries": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BuyAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "warrantyPromise": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "warrantyPromise"
    }
  },
  "UserDownloads": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PawnShop": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AssignAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PayAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "recipient": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "recipient"
    }
  },
  "HighSchool": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SteeringPositionValue": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SportsClub": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Bridge": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TrainStation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BedDetails": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "WriteAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "language": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "language"
    }
  },
  "MusicPlaylist": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PeopleAudience": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "suggestedMinAge": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "suggestedMinAge"
    }
  },
  "ReserveAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PaymentService": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ProfessionalService": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "InteractAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AutoBodyShop": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ConvenienceStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "School": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TelevisionStation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "HomeGoodsStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "LakeBodyOfWater": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BodyOfWater": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MusicVideoObject": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AskAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Beach": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SpreadsheetDigitalDocument": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "HowToItem": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "requiredQuantity": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "requiredQuantity"
    }
  },
  "ShareAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "OpeningHoursSpecification": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "dayOfWeek": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "dayOfWeek"
    }
  },
  "WPHeader": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "LandmarksOrHistoricalBuildings": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MarryAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Notary": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "IceCreamShop": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ReactAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "InsertAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DryCleaningOrLaundry": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DeactivateAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DonateAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TipAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ReturnAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "FastFoodRestaurant": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DataFeedItem": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "dateModified": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "dateModified"
    },
    "dateDeleted": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "dateDeleted"
    },
    "dateCreated": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "dateCreated"
    },
    "item": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "item"
    }
  },
  "UpdateAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "OrderStatus": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SocialMediaPosting": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "sharedContent": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "sharedContent"
    }
  },
  "Park": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "GeoCircle": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "geoMidpoint": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "geoMidpoint"
    }
  },
  "VoteAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "candidate": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "candidate"
    }
  },
  "BookFormatType": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Zoo": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ItemListOrderType": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ComedyClub": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ExhibitionEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "EmploymentAgency": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PrependAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "FireStation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Hotel": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "RadioClip": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Intangible": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ElectronicsStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "NailSalon": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TelevisionChannel": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "GovernmentBuilding": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "EmergencyService": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Menu": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "hasMenuItem": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "hasMenuItem"
    },
    "hasMenuSection": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "hasMenuSection"
    }
  },
  "Periodical": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Series": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Electrician": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "WarrantyScope": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "CollectionPage": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PhotographAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "HealthAndBeautyBusiness": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "LegislativeBuilding": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "UserCheckins": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "WearAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TravelAgency": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PerformingGroup": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Hostel": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "OrderAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TrackAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Quantity": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "VideoGallery": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "EducationalAudience": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "educationalRole": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "educationalRole"
    }
  },
  "CityHall": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ComedyEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ItemPage": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MovingCompany": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BorrowAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "lender": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "lender"
    }
  },
  "GardenStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PaintAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SportsActivityLocation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Dentist": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AdultEntertainment": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DriveWheelConfigurationValue": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DataCatalog": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "City": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ConsumeAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "expectsAcceptanceOf": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "expectsAcceptanceOf"
    }
  },
  "ArriveAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BookmarkAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "CreateAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ScheduleAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DiscoverAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "InstallAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MusicEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Store": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "HairSalon": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DaySpa": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ActivateAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "RadioEpisode": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ElementarySchool": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "CreditCard": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DislikeAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BankOrCreditUnion": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TieAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DeliveryMethod": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Winery": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "InformAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "event": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "event"
    }
  },
  "MeetingRoom": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "JoinAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    },
    "event": {
      "viewableBy": [
        "guests"
      ],
      "editableBy": [
        "guests"
      ],
      "insertableBy": [
        "guests"
      ],
      "label": "event"
    }
  },
  "RiverBodyOfWater": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "HVACBusiness": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TaxiStand": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "CatholicChurch": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "GovernmentService": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MovieClip": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MusicAlbumProductionType": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ApplyAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Locksmith": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Landform": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "OceanBodyOfWater": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MedicalOrganization": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TrainReservation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MusicVenue": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "CollegeOrUniversity": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "WantAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ReadAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Specialty": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TaxiService": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ItemAvailability": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ArtGallery": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Plumber": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Preschool": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "RejectAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TattooParlor": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BusinessFunction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Energy": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "FurnitureStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BusStop": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MotorcycleRepair": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ReplyAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "GovernmentPermit": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Resort": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Table": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "URL": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "GovernmentOrganization": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BusReservation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Taxi": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Physician": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "RsvpResponseType": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DayOfWeek": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BusinessEntityType": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "NoteDigitalDocument": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Campground": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TennisComplex": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Photograph": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SubwayStation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Courthouse": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ReservationStatusType": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AutoWash": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "HardwareStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Barcode": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "VisualArtsEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DanceGroup": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BeautySalon": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "CivicStructure": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "CurrencyConversionService": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "RoofingContractor": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ChildrensEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "RVPark": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "WholesaleStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DepartmentStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SkiResort": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AutomatedTeller": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Canal": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "House": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "NGO": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BarOrPub": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Float": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DataType": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SuspendAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Distance": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MensClothingStore": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AcceptAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Language": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TheaterGroup": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BoardingPolicyType": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Answer": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Brewery": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AllocateAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "RadioChannel": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "PublicSwimmingPool": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ComputerLanguage": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MusicReleaseFormatType": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Conversation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Cemetery": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AccountingService": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "CheckInAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "EventStatusType": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "FindAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "RecyclingCenter": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Hospital": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Festival": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "LockerDelivery": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "RadioSeason": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "EmailMessage": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BusStation": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "BowlingAlley": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "ImageGallery": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "DataDownload": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "CampingPitch": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "MiddleSchool": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "AutomotiveBusiness": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "LiteraryEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "Pond": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "SocialEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "EatAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TheaterEvent": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "TakeAction": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  },
  "GamePlayMode": {
    "_id": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "createdAt": {
      "optional": true,
      "viewableBy": [
        "guests"
      ]
    },
    "userId": {
      "optional": true,
      "viewableBy": [
        "guests"
      ],
      "resolveAs": {
        "fieldName": "user",
        "type": "User",
        "addOriginalField": true
      }
    }
  }
}