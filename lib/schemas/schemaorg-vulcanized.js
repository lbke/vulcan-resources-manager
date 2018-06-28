export default {
  CafeOrCoffeeShop: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  UserLikes: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SoftwareApplication: {
    availableOnDevice: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "availableOnDevice",
    },
    featureList: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "featureList",
    },
    applicationSubCategory: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "applicationSubCategory",
    },
    device: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "device",
    },
    applicationCategory: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "applicationCategory",
    },
    softwareVersion: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "softwareVersion",
    },
    storageRequirements: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "storageRequirements",
    },
    applicationSuite: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "applicationSuite",
    },
    memoryRequirements: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "memoryRequirements",
    },
    screenshot: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "screenshot",
    },
    countriesSupported: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "countriesSupported",
    },
    softwareHelp: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "softwareHelp",
    },
    softwareAddOn: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "softwareAddOn",
    },
    releaseNotes: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "releaseNotes",
    },
    supportingData: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "supportingData",
    },
    requirements: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "requirements",
    },
    countriesNotSupported: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "countriesNotSupported",
    },
    operatingSystem: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "operatingSystem",
    },
    fileSize: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "fileSize",
    },
    installUrl: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "installUrl",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PublicationVolume: {
    pageEnd: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "pageEnd",
    },
    volumeNumber: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "volumeNumber",
    },
    pageStart: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "pageStart",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Article: {
    pageEnd: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "pageEnd",
    },
    articleSection: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "articleSection",
    },
    pageStart: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "pageStart",
    },
    articleBody: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "articleBody",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PublicationIssue: {
    issueNumber: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "issueNumber",
    },
    pageEnd: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "pageEnd",
    },
    pageStart: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "pageStart",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Event: {
    translator: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "translator",
    },
    previousStartDate: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "previousStartDate",
    },
    review: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "review",
    },
    location: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "location",
    },
    recordedIn: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "recordedIn",
    },
    composer: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "composer",
    },
    isAccessibleForFree: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "isAccessibleForFree",
    },
    performer: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "performer",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CreativeWork: {
    associatedMedia: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "associatedMedia",
    },
    funder: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "funder",
    },
    sponsor: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "sponsor",
    },
    audio: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "audio",
    },
    provider: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "provider",
    },
    encoding: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "encoding",
    },
    interactivityType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "interactivityType",
    },
    character: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "character",
    },
    audience: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "audience",
    },
    sourceOrganization: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "sourceOrganization",
    },
    isPartOf: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "isPartOf",
    },
    video: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "video",
    },
    publication: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "publication",
    },
    text: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "text",
    },
    expires: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "expires",
    },
    contributor: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "contributor",
    },
    typicalAgeRange: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "typicalAgeRange",
    },
    position: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "position",
    },
    releasedEvent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "releasedEvent",
    },
    educationalUse: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "educationalUse",
    },
    contentLocation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "contentLocation",
    },
    schemaVersion: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "schemaVersion",
    },
    accessibilityFeature: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "accessibilityFeature",
    },
    aggregateRating: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "aggregateRating",
    },
    locationCreated: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "locationCreated",
    },
    accessModeSufficient: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "accessModeSufficient",
    },
    temporalCoverage: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "temporalCoverage",
    },
    accountablePerson: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "accountablePerson",
    },
    spatialCoverage: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "spatialCoverage",
    },
    reviews: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "reviews",
    },
    offers: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "offers",
    },
    editor: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "editor",
    },
    discussionUrl: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "discussionUrl",
    },
    award: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "award",
    },
    copyrightHolder: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "copyrightHolder",
    },
    accessibilityHazard: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "accessibilityHazard",
    },
    copyrightYear: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "copyrightYear",
    },
    awards: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "awards",
    },
    recordedAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "recordedAt",
    },
    commentCount: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "commentCount",
    },
    fileFormat: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "fileFormat",
    },
    inLanguage: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "inLanguage",
    },
    accessibilityAPI: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "accessibilityAPI",
    },
    publisher: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "publisher",
    },
    interactionStatistic: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "interactionStatistic",
    },
    contentRating: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "contentRating",
    },
    learningResourceType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "learningResourceType",
    },
    accessMode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "accessMode",
    },
    material: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "material",
    },
    isFamilyFriendly: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "isFamilyFriendly",
    },
    exampleOfWork: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "exampleOfWork",
    },
    version: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "version",
    },
    dateModified: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "dateModified",
    },
    keywords: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "keywords",
    },
    genre: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "genre",
    },
    mainEntity: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "mainEntity",
    },
    author: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "author",
    },
    encodings: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "encodings",
    },
    isBasedOnUrl: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "isBasedOnUrl",
    },
    timeRequired: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "timeRequired",
    },
    translator: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "translator",
    },
    thumbnailUrl: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "thumbnailUrl",
    },
    hasPart: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "hasPart",
    },
    comment: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "comment",
    },
    encodingFormat: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "encodingFormat",
    },
    review: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "review",
    },
    license: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "license",
    },
    accessibilityControl: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "accessibilityControl",
    },
    isBasedOn: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "isBasedOn",
    },
    creator: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "creator",
    },
    publishingPrinciples: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "publishingPrinciples",
    },
    producer: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "producer",
    },
    mentions: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "mentions",
    },
    workExample: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "workExample",
    },
    dateCreated: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "dateCreated",
    },
    datePublished: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "datePublished",
    },
    isAccessibleForFree: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "isAccessibleForFree",
    },
    alternativeHeadline: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "alternativeHeadline",
    },
    headline: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "headline",
    },
    citation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "citation",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CommunicateAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Recipe: {
    recipeYield: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "recipeYield",
    },
    recipeCategory: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "recipeCategory",
    },
    recipeIngredient: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "recipeIngredient",
    },
    recipeInstructions: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "recipeInstructions",
    },
    nutrition: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "nutrition",
    },
    suitableForDiet: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "suitableForDiet",
    },
    recipeCuisine: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "recipeCuisine",
    },
    cookTime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "cookTime",
    },
    cookingMethod: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "cookingMethod",
    },
    ingredients: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "ingredients",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Game: {
    characterAttribute: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "characterAttribute",
    },
    gameLocation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "gameLocation",
    },
    quest: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "quest",
    },
    numberOfPlayers: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "numberOfPlayers",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  VideoGameSeries: {
    productionCompany: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "productionCompany",
    },
    quest: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "quest",
    },
    numberOfPlayers: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "numberOfPlayers",
    },
    actors: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "actors",
    },
    episode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "episode",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HowToDirection: {
    supply: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "supply",
    },
    afterMedia: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "afterMedia",
    },
    tool: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "tool",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Volcano: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TrainTrip: {
    arrivalStation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "arrivalStation",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SportsTeam: {
    athlete: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "athlete",
    },
    coach: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "coach",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GroceryStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Demand: {
    sku: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "sku",
    },
    availabilityStarts: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "availabilityStarts",
    },
    availableDeliveryMethod: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "availableDeliveryMethod",
    },
    mpn: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "mpn",
    },
    serialNumber: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "serialNumber",
    },
    ineligibleRegion: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "ineligibleRegion",
    },
    gtin8: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "gtin8",
    },
    availability: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "availability",
    },
    priceSpecification: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "priceSpecification",
    },
    inventoryLevel: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "inventoryLevel",
    },
    eligibleTransactionVolume: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "eligibleTransactionVolume",
    },
    availableAtOrFrom: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "availableAtOrFrom",
    },
    warranty: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "warranty",
    },
    eligibleQuantity: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "eligibleQuantity",
    },
    validFrom: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "validFrom",
    },
    validThrough: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "validThrough",
    },
    gtin14: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "gtin14",
    },
    gtin13: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "gtin13",
    },
    gtin12: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "gtin12",
    },
    seller: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "seller",
    },
    deliveryLeadTime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "deliveryLeadTime",
    },
    availabilityEnds: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "availabilityEnds",
    },
    includesObject: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "includesObject",
    },
    businessFunction: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "businessFunction",
    },
    eligibleCustomerType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "eligibleCustomerType",
    },
    itemCondition: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "itemCondition",
    },
    itemOffered: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "itemOffered",
    },
    eligibleDuration: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "eligibleDuration",
    },
    acceptedPaymentMethod: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "acceptedPaymentMethod",
    },
    areaServed: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "areaServed",
    },
    eligibleRegion: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "eligibleRegion",
    },
    advanceBookingRequirement: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "advanceBookingRequirement",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MusicComposition: {
    recordedAs: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "recordedAs",
    },
    firstPerformance: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "firstPerformance",
    },
    musicArrangement: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "musicArrangement",
    },
    iswcCode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "iswcCode",
    },
    composer: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "composer",
    },
    musicalKey: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "musicalKey",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AboutPage: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Action: {
    startTime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "startTime",
    },
    actionStatus: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "actionStatus",
    },
    target: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "target",
    },
    agent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "agent",
    },
    endTime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "endTime",
    },
    participant: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "participant",
    },
    instrument: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "instrument",
    },
    object: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "object",
    },
    error: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "error",
    },
    location: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "location",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Book: {
    numberOfPages: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "numberOfPages",
    },
    illustrator: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "illustrator",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ExerciseAction: {
    course: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "course",
    },
    sportsTeam: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "sportsTeam",
    },
    sportsEvent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "sportsEvent",
    },
    distance: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "distance",
    },
    opponent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "opponent",
    },
    sportsActivityLocation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "sportsActivityLocation",
    },
    toLocation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "toLocation",
    },
    fromLocation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "fromLocation",
    },
    exerciseCourse: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "exerciseCourse",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  UserPlays: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  FoodService: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  StadiumOrArena: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Order: {
    paymentMethod: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "paymentMethod",
    },
    seller: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "seller",
    },
    paymentMethodId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "paymentMethodId",
    },
    discount: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "discount",
    },
    orderDelivery: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "orderDelivery",
    },
    orderedItem: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "orderedItem",
    },
    acceptedOffer: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "acceptedOffer",
    },
    discountCurrency: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "discountCurrency",
    },
    paymentDueDate: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "paymentDueDate",
    },
    discountCode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "discountCode",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Service: {
    brand: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "brand",
    },
    areaServed: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "areaServed",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ContactPoint: {
    email: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "email",
    },
    contactType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "contactType",
    },
    productSupported: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "productSupported",
    },
    areaServed: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "areaServed",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Organization: {
    events: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "events",
    },
    faxNumber: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "faxNumber",
    },
    subOrganization: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "subOrganization",
    },
    hasOfferCatalog: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "hasOfferCatalog",
    },
    globalLocationNumber: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "globalLocationNumber",
    },
    members: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "members",
    },
    aggregateRating: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "aggregateRating",
    },
    duns: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "duns",
    },
    taxID: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "taxID",
    },
    reviews: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "reviews",
    },
    award: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "award",
    },
    makesOffer: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "makesOffer",
    },
    contactPoints: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "contactPoints",
    },
    awards: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "awards",
    },
    foundingDate: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "foundingDate",
    },
    leiCode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "leiCode",
    },
    seeks: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "seeks",
    },
    member: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "member",
    },
    founders: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "founders",
    },
    alumni: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "alumni",
    },
    dissolutionDate: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "dissolutionDate",
    },
    address: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "address",
    },
    logo: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "logo",
    },
    employees: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "employees",
    },
    telephone: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "telephone",
    },
    email: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "email",
    },
    department: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "department",
    },
    contactPoint: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "contactPoint",
    },
    parentOrganization: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "parentOrganization",
    },
    legalName: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "legalName",
    },
    employee: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "employee",
    },
    numberOfEmployees: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "numberOfEmployees",
    },
    naics: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "naics",
    },
    hasPOS: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "hasPOS",
    },
    review: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "review",
    },
    foundingLocation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "foundingLocation",
    },
    owns: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "owns",
    },
    event: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "event",
    },
    founder: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "founder",
    },
    publishingPrinciples: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "publishingPrinciples",
    },
    isicV4: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "isicV4",
    },
    location: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "location",
    },
    brand: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "brand",
    },
    vatID: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "vatID",
    },
    areaServed: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "areaServed",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Dataset: {
    catalog: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "catalog",
    },
    includedInDataCatalog: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "includedInDataCatalog",
    },
    datasetTimeInterval: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "datasetTimeInterval",
    },
    issn: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "issn",
    },
    spatial: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "spatial",
    },
    temporal: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "temporal",
    },
    includedDataCatalog: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "includedDataCatalog",
    },
    distribution: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "distribution",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Vehicle: {
    numberOfForwardGears: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "numberOfForwardGears",
    },
    mileageFromOdometer: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "mileageFromOdometer",
    },
    cargoVolume: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "cargoVolume",
    },
    vehicleInteriorColor: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "vehicleInteriorColor",
    },
    steeringPosition: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "steeringPosition",
    },
    vehicleSeatingCapacity: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "vehicleSeatingCapacity",
    },
    vehicleEngine: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "vehicleEngine",
    },
    vehicleModelDate: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "vehicleModelDate",
    },
    numberOfDoors: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "numberOfDoors",
    },
    vehicleConfiguration: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "vehicleConfiguration",
    },
    fuelType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "fuelType",
    },
    vehicleIdentificationNumber: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "vehicleIdentificationNumber",
    },
    fuelConsumption: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "fuelConsumption",
    },
    numberOfPreviousOwners: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "numberOfPreviousOwners",
    },
    fuelEfficiency: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "fuelEfficiency",
    },
    numberOfAxles: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "numberOfAxles",
    },
    vehicleInteriorType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "vehicleInteriorType",
    },
    numberOfAirbags: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "numberOfAirbags",
    },
    vehicleTransmission: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "vehicleTransmission",
    },
    dateVehicleFirstRegistered: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "dateVehicleFirstRegistered",
    },
    purchaseDate: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "purchaseDate",
    },
    productionDate: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "productionDate",
    },
    knownVehicleDamages: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "knownVehicleDamages",
    },
    driveWheelConfiguration: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "driveWheelConfiguration",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Person: {
    height: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "height",
    },
    workLocation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "workLocation",
    },
    faxNumber: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "faxNumber",
    },
    children: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "children",
    },
    jobTitle: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "jobTitle",
    },
    hasOfferCatalog: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "hasOfferCatalog",
    },
    deathPlace: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "deathPlace",
    },
    globalLocationNumber: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "globalLocationNumber",
    },
    birthPlace: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "birthPlace",
    },
    gender: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "gender",
    },
    parents: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "parents",
    },
    alumniOf: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "alumniOf",
    },
    homeLocation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "homeLocation",
    },
    duns: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "duns",
    },
    taxID: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "taxID",
    },
    award: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "award",
    },
    birthDate: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "birthDate",
    },
    makesOffer: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "makesOffer",
    },
    givenName: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "givenName",
    },
    contactPoints: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "contactPoints",
    },
    awards: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "awards",
    },
    familyName: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "familyName",
    },
    seeks: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "seeks",
    },
    sibling: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "sibling",
    },
    address: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "address",
    },
    performerIn: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "performerIn",
    },
    honorificPrefix: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "honorificPrefix",
    },
    additionalName: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "additionalName",
    },
    siblings: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "siblings",
    },
    telephone: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "telephone",
    },
    email: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "email",
    },
    weight: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "weight",
    },
    contactPoint: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "contactPoint",
    },
    colleague: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "colleague",
    },
    naics: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "naics",
    },
    hasPOS: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "hasPOS",
    },
    parent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "parent",
    },
    owns: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "owns",
    },
    affiliation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "affiliation",
    },
    publishingPrinciples: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "publishingPrinciples",
    },
    isicV4: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "isicV4",
    },
    brand: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "brand",
    },
    honorificSuffix: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "honorificSuffix",
    },
    netWorth: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "netWorth",
    },
    vatID: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "vatID",
    },
    nationality: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "nationality",
    },
    relatedTo: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "relatedTo",
    },
    follows: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "follows",
    },
    knows: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "knows",
    },
    worksFor: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "worksFor",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  InsuranceAgency: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ListItem: {
    previousItem: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "previousItem",
    },
    item: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "item",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AudioObject: {
    transcript: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "transcript",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MusicRecording: {
    isrcCode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "isrcCode",
    },
    inAlbum: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "inAlbum",
    },
    inPlaylist: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "inPlaylist",
    },
    byArtist: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "byArtist",
    },
    duration: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "duration",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TaxiReservation: {
    pickupTime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "pickupTime",
    },
    partySize: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "partySize",
    },
    pickupLocation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "pickupLocation",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Audience: {
    geographicArea: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "geographicArea",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PaymentChargeSpecification: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  InteractionCounter: {
    userInteractionCount: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "userInteractionCount",
    },
    interactionType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "interactionType",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AlignmentObject: {
    alignmentType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "alignmentType",
    },
    targetUrl: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "targetUrl",
    },
    targetName: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "targetName",
    },
    educationalFramework: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "educationalFramework",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Reservation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Rating: {
    author: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "author",
    },
    worstRating: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "worstRating",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Permit: {
    validFor: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "validFor",
    },
    validUntil: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "validUntil",
    },
    validFrom: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "validFrom",
    },
    issuedBy: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "issuedBy",
    },
    issuedThrough: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "issuedThrough",
    },
    permitAudience: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "permitAudience",
    },
    validIn: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "validIn",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  FoodEstablishmentReservation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MediaObject: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AutoPartsStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Product: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Painting: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SomeProducts: {
    inventoryLevel: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "inventoryLevel",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  EntryPoint: {
    application: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "application",
    },
    actionPlatform: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "actionPlatform",
    },
    httpMethod: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "httpMethod",
    },
    encodingType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "encodingType",
    },
    contentType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "contentType",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MoveAction: {
    toLocation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "toLocation",
    },
    fromLocation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "fromLocation",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  UserComments: {
    commentTime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "commentTime",
    },
    creator: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "creator",
    },
    replyToUrl: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "replyToUrl",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Offer: {
    advanceBookingRequirement: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "advanceBookingRequirement",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AddAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BroadcastChannel: {
    inBroadcastLineup: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "inBroadcastLineup",
    },
    providesBroadcastService: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "providesBroadcastService",
    },
    genre: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "genre",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  JewelryStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ViewAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  WPFooter: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  QAPage: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ImageObject: {
    representativeOfPage: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "representativeOfPage",
    },
    thumbnail: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "thumbnail",
    },
    caption: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "caption",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SearchAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Thing: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LikeAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PublicationEvent: {
    publishedOn: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "publishedOn",
    },
    free: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "free",
    },
    isAccessibleForFree: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "isAccessibleForFree",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Course: {
    coursePrerequisites: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "coursePrerequisites",
    },
    courseCode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "courseCode",
    },
    hasCourseInstance: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "hasCourseInstance",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MobileApplication: {
    carrierRequirements: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "carrierRequirements",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ParcelService: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BefriendAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HowTo: {
    steps: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "steps",
    },
    prepTime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "prepTime",
    },
    step: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "step",
    },
    performTime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "performTime",
    },
    estimatedCost: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "estimatedCost",
    },
    totalTime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "totalTime",
    },
    supply: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "supply",
    },
    tool: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "tool",
    },
    yield: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "yield",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PoliceStation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GeoCoordinates: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Flight: {
    boardingPolicy: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "boardingPolicy",
    },
    aircraft: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "aircraft",
    },
    seller: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "seller",
    },
    webCheckinTime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "webCheckinTime",
    },
    mealService: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "mealService",
    },
    departureGate: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "departureGate",
    },
    departureTerminal: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "departureTerminal",
    },
    estimatedFlightDuration: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "estimatedFlightDuration",
    },
    flightDistance: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "flightDistance",
    },
    arrivalTerminal: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "arrivalTerminal",
    },
    departureAirport: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "departureAirport",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DigitalDocument: {
    hasDigitalDocumentPermission: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "hasDigitalDocumentPermission",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HealthClub: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DrinkAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DownloadAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  OwnershipInfo: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TypeAndQuantityNode: {
    businessFunction: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "businessFunction",
    },
    unitCode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "unitCode",
    },
    unitText: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "unitText",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TireShop: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Synagogue: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AnimalShelter: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  JobPosting: {
    industry: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "industry",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HowToSection: {
    steps: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "steps",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RadioSeries: {
    numberOfSeasons: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "numberOfSeasons",
    },
    director: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "director",
    },
    productionCompany: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "productionCompany",
    },
    actors: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "actors",
    },
    episode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "episode",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TVSeries: {
    actors: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "actors",
    },
    episode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "episode",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MusicAlbum: {
    albumProductionType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "albumProductionType",
    },
    albumReleaseType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "albumReleaseType",
    },
    byArtist: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "byArtist",
    },
    albumRelease: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "albumRelease",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Trip: {
    arrivalTime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "arrivalTime",
    },
    departureTime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "departureTime",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Invoice: {
    accountId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "accountId",
    },
    referencesOrder: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "referencesOrder",
    },
    paymentDueDate: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "paymentDueDate",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ParcelDelivery: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DeliveryChargeSpecification: {
    ineligibleRegion: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "ineligibleRegion",
    },
    appliesToDeliveryMethod: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "appliesToDeliveryMethod",
    },
    areaServed: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "areaServed",
    },
    eligibleRegion: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "eligibleRegion",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MovieTheater: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Place: {
    photos: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "photos",
    },
    map: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "map",
    },
    branchCode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "branchCode",
    },
    hasMap: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "hasMap",
    },
    additionalProperty: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "additionalProperty",
    },
    address: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "address",
    },
    specialOpeningHoursSpecification: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "specialOpeningHoursSpecification",
    },
    amenityFeature: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "amenityFeature",
    },
    logo: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "logo",
    },
    telephone: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "telephone",
    },
    geo: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "geo",
    },
    containedInPlace: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "containedInPlace",
    },
    review: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "review",
    },
    publicAccess: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "publicAccess",
    },
    event: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "event",
    },
    containsPlace: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "containsPlace",
    },
    isicV4: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "isicV4",
    },
    maps: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "maps",
    },
    isAccessibleForFree: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "isAccessibleForFree",
    },
    containedIn: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "containedIn",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Apartment: {
    numberOfRooms: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "numberOfRooms",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SingleFamilyResidence: {
    numberOfRooms: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "numberOfRooms",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Suite: {
    numberOfRooms: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "numberOfRooms",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HotelRoom: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  NutritionInformation: {
    fatContent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "fatContent",
    },
    unsaturatedFatContent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "unsaturatedFatContent",
    },
    sugarContent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "sugarContent",
    },
    cholesterolContent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "cholesterolContent",
    },
    carbohydrateContent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "carbohydrateContent",
    },
    proteinContent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "proteinContent",
    },
    sodiumContent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "sodiumContent",
    },
    transFatContent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "transFatContent",
    },
    fiberContent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "fiberContent",
    },
    calories: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "calories",
    },
    servingSize: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "servingSize",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LendAction: {
    borrower: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "borrower",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  FoodEstablishment: {
    servesCuisine: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "servesCuisine",
    },
    hasMenu: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "hasMenu",
    },
    menu: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "menu",
    },
    starRating: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "starRating",
    },
    acceptsReservations: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "acceptsReservations",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ListenAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TransferAction: {
    toLocation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "toLocation",
    },
    fromLocation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "fromLocation",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SiteNavigationElement: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MusicGroup: {
    track: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "track",
    },
    genre: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "genre",
    },
    tracks: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "tracks",
    },
    musicGroupMember: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "musicGroupMember",
    },
    album: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "album",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  VideoGame: {
    gameTip: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "gameTip",
    },
    musicBy: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "musicBy",
    },
    directors: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "directors",
    },
    playMode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "playMode",
    },
    director: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "director",
    },
    actors: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "actors",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  OrderItem: {
    orderItemNumber: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "orderItemNumber",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DeleteAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TradeAction: {
    priceSpecification: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "priceSpecification",
    },
    price: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "price",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LegalService: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DigitalDocumentPermission: {
    permissionType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "permissionType",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ProgramMembership: {
    members: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "members",
    },
    member: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "member",
    },
    programName: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "programName",
    },
    hostingOrganization: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "hostingOrganization",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  VisualArtwork: {
    height: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "height",
    },
    artMedium: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "artMedium",
    },
    artform: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "artform",
    },
    artworkSurface: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "artworkSurface",
    },
    artEdition: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "artEdition",
    },
    width: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "width",
    },
    surface: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "surface",
    },
    depth: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "depth",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Attorney: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RsvpAction: {
    additionalNumberOfGuests: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "additionalNumberOfGuests",
    },
    comment: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "comment",
    },
    rsvpResponse: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "rsvpResponse",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GeneralContractor: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SellAction: {
    warrantyPromise: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "warrantyPromise",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ApartmentComplex: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RegisterAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HousePainter: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  WinAction: {
    loser: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "loser",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MovieRentalStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  WatchAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PropertyValueSpecification: {
    defaultValue: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "defaultValue",
    },
    valuePattern: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "valuePattern",
    },
    stepValue: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "stepValue",
    },
    valueMaxLength: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "valueMaxLength",
    },
    readonlyValue: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "readonlyValue",
    },
    valueMinLength: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "valueMinLength",
    },
    maxValue: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "maxValue",
    },
    valueName: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "valueName",
    },
    multipleValues: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "multipleValues",
    },
    minValue: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "minValue",
    },
    valueRequired: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "valueRequired",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  EducationEvent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ResumeAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ToyStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BedAndBreakfast: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PostalAddress: {
    postalCode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "postalCode",
    },
    addressLocality: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "addressLocality",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PlayAction: {
    event: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "event",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LodgingBusiness: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SportsEvent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GenderType: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Reservoir: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  EventVenue: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ServiceChannel: {
    serviceSmsNumber: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "serviceSmsNumber",
    },
    serviceUrl: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "serviceUrl",
    },
    servicePhone: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "servicePhone",
    },
    processingTime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "processingTime",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GiveAction: {
    recipient: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "recipient",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CourseInstance: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PostOffice: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CheckoutPage: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Accommodation: {
    floorSize: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "floorSize",
    },
    petsAllowed: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "petsAllowed",
    },
    amenityFeature: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "amenityFeature",
    },
    numberOfRooms: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "numberOfRooms",
    },
    permittedUsage: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "permittedUsage",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Clip: {
    actors: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "actors",
    },
    clipNumber: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "clipNumber",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CreativeWorkSeason: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Episode: {
    actors: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "actors",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MovieSeries: {
    productionCompany: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "productionCompany",
    },
    actors: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "actors",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Movie: {
    subtitleLanguage: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "subtitleLanguage",
    },
    countryOfOrigin: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "countryOfOrigin",
    },
    musicBy: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "musicBy",
    },
    directors: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "directors",
    },
    director: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "director",
    },
    productionCompany: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "productionCompany",
    },
    duration: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "duration",
    },
    actors: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "actors",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  VideoObject: {
    videoQuality: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "videoQuality",
    },
    thumbnail: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "thumbnail",
    },
    caption: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "caption",
    },
    actors: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "actors",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PerformingArtsTheater: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AggregateOffer: {
    offers: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "offers",
    },
    offerCount: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "offerCount",
    },
    lowPrice: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "lowPrice",
    },
    highPrice: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "highPrice",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ChooseAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Museum: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HowToSupply: {
    estimatedCost: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "estimatedCost",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  IndividualProduct: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AutoRepair: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BroadcastService: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ExerciseGym: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Embassy: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ProfilePage: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DisagreeAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ParentAudience: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ReservationPackage: {
    subReservation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "subReservation",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  FinancialProduct: {
    annualPercentageRate: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "annualPercentageRate",
    },
    feesAndCommissionsSpecification: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "feesAndCommissionsSpecification",
    },
    interestRate: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "interestRate",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LiveBlogPosting: {
    coverageEndTime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "coverageEndTime",
    },
    liveBlogUpdate: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "liveBlogUpdate",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HomeAndConstructionBusiness: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ControlAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CheckAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BusTrip: {
    busNumber: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "busNumber",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  WebApplication: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DiscussionForumPosting: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TouristAttraction: {
    touristType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "touristType",
    },
    availableLanguage: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "availableLanguage",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Car: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PriceSpecification: {
    minPrice: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "minPrice",
    },
    eligibleTransactionVolume: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "eligibleTransactionVolume",
    },
    maxPrice: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "maxPrice",
    },
    priceCurrency: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "priceCurrency",
    },
    eligibleQuantity: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "eligibleQuantity",
    },
    validFrom: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "validFrom",
    },
    validThrough: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "validThrough",
    },
    price: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "price",
    },
    valueAddedTaxIncluded: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "valueAddedTaxIncluded",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AdministrativeArea: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ScreeningEvent: {
    workPresented: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "workPresented",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BroadcastEvent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Season: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DrawAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PaymentCard: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LocalBusiness: {
    priceRange: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "priceRange",
    },
    branchOf: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "branchOf",
    },
    paymentAccepted: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "paymentAccepted",
    },
    openingHours: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "openingHours",
    },
    currenciesAccepted: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "currenciesAccepted",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CancelAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  IgnoreAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LoanOrCredit: {
    requiredCollateral: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "requiredCollateral",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MotorcycleDealer: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CheckOutAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BankAccount: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Duration: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RealEstateAgent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MapCategoryType: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  APIReference: {
    executableLibraryName: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "executableLibraryName",
    },
    assemblyVersion: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "assemblyVersion",
    },
    assembly: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "assembly",
    },
    targetPlatform: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "targetPlatform",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SportsOrganization: {
    sport: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "sport",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  EndorseAction: {
    endorsee: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "endorsee",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  EducationalOrganization: {
    alumni: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "alumni",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CableOrSatelliteService: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Role: {
    namedPosition: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "namedPosition",
    },
    roleName: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "roleName",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DatedMoneySpecification: {
    startDate: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "startDate",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CreativeWorkSeries: {
    startDate: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "startDate",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HinduTemple: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TVSeason: {
    partOfTVSeries: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "partOfTVSeries",
    },
    countryOfOrigin: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "countryOfOrigin",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SearchResultsPage: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  UserBlocks: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DeliveryEvent: {
    accessCode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "accessCode",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DanceEvent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ItemList: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  QualitativeValue: {
    additionalProperty: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "additionalProperty",
    },
    lesser: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "lesser",
    },
    valueReference: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "valueReference",
    },
    nonEqual: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "nonEqual",
    },
    lesserOrEqual: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "lesserOrEqual",
    },
    greaterOrEqual: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "greaterOrEqual",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Blog: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BookStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Corporation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MusicRelease: {
    catalogNumber: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "catalogNumber",
    },
    creditedTo: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "creditedTo",
    },
    releaseOf: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "releaseOf",
    },
    duration: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "duration",
    },
    musicReleaseFormat: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "musicReleaseFormat",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SaleEvent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  FoodEvent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  OutletStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Review: {
    reviewBody: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "reviewBody",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PropertyValue: {
    valueReference: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "valueReference",
    },
    maxValue: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "maxValue",
    },
    unitCode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "unitCode",
    },
    unitText: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "unitText",
    },
    minValue: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "minValue",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  InviteAction: {
    event: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "event",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SoftwareSourceCode: {
    sampleType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "sampleType",
    },
    runtime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "runtime",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TVEpisode: {
    partOfTVSeries: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "partOfTVSeries",
    },
    subtitleLanguage: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "subtitleLanguage",
    },
    countryOfOrigin: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "countryOfOrigin",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AmusementPark: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ContactPointOption: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Message: {
    recipient: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "recipient",
    },
    sender: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "sender",
    },
    messageAttachment: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "messageAttachment",
    },
    dateReceived: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "dateReceived",
    },
    toRecipient: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "toRecipient",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MobilePhoneStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Casino: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SubscribeAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Ticket: {
    ticketedSeat: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "ticketedSeat",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BusinessEvent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AgreeAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GameServer: {
    game: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "game",
    },
    playersOnline: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "playersOnline",
    },
    serverStatus: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "serverStatus",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DepositAccount: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DigitalDocumentPermissionType: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Motel: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  WPAdBlock: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  QuantitativeValue: {
    unitText: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "unitText",
    },
    minValue: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "minValue",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MonetaryAmount: {
    minValue: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "minValue",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ChildCare: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  InternetCafe: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PaymentStatusType: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MusicAlbumReleaseType: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Pharmacy: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DefenceEstablishment: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BreadcrumbList: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Church: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LiquorStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DataFeed: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GameServerStatus: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  UserTweets: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BusinessAudience: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Enumeration: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LodgingReservation: {
    lodgingUnitDescription: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "lodgingUnitDescription",
    },
    checkoutTime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "checkoutTime",
    },
    lodgingUnitType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "lodgingUnitType",
    },
    numAdults: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "numAdults",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  WebPageElement: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ReviewAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TVClip: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  UserInteraction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  OrganizationRole: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Airline: {
    iataCode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "iataCode",
    },
    boardingPolicy: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "boardingPolicy",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  FinancialService: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BikeStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BuddhistTemple: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LocationFeatureSpecification: {
    validFrom: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "validFrom",
    },
    validThrough: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "validThrough",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MenuSection: {
    hasMenuItem: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "hasMenuItem",
    },
    hasMenuSection: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "hasMenuSection",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Airport: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AutoRental: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AchieveAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ProductModel: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RentalCarReservation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Comment: {
    upvoteCount: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "upvoteCount",
    },
    downvoteCount: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "downvoteCount",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  WebPage: {
    significantLink: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "significantLink",
    },
    relatedLink: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "relatedLink",
    },
    mainContentOfPage: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "mainContentOfPage",
    },
    reviewedBy: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "reviewedBy",
    },
    primaryImageOfPage: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "primaryImageOfPage",
    },
    significantLinks: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "significantLinks",
    },
    specialty: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "specialty",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  WebSite: {
    issn: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "issn",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  EventReservation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  OrganizeAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  NewsArticle: {
    dateline: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "dateline",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Restaurant: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Integer: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  UseAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TravelAction: {
    distance: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "distance",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  FilmAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  EngineSpecification: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Code: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SportingGoodsStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  WarrantyPromise: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TextDigitalDocument: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Waterfall: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AggregateRating: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  OfficeEquipmentStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  EmployeeRole: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PlanAction: {
    scheduledTime: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "scheduledTime",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RentAction: {
    realEstateAgent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "realEstateAgent",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Bakery: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GatedResidenceCommunity: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Country: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PlaceOfWorship: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HowToTip: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PerformanceRole: {
    characterName: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "characterName",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  UnitPriceSpecification: {
    unitCode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "unitCode",
    },
    billingIncrement: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "billingIncrement",
    },
    referenceQuantity: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "referenceQuantity",
    },
    unitText: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "unitText",
    },
    priceType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "priceType",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Brand: {
    review: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "review",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PerformAction: {
    entertainmentBusiness: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "entertainmentBusiness",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ClothingStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Mountain: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ReceiveAction: {
    deliveryMethod: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "deliveryMethod",
    },
    sender: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "sender",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  VideoGameClip: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MusicStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Crematorium: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  QuoteAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ContactPage: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BlogPosting: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PresentationDigitalDocument: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Report: {
    reportNumber: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "reportNumber",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MenuItem: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  StructuredValue: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  OfferItemCondition: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TechArticle: {
    dependencies: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "dependencies",
    },
    proficiencyLevel: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "proficiencyLevel",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Sculpture: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ComputerStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RadioStation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Map: {
    mapType: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "mapType",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GolfCourse: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  FollowAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CookAction: {
    foodEvent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "foodEvent",
    },
    foodEstablishment: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "foodEstablishment",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DepartAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  InvestmentOrDeposit: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ShoeStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  WPSideBar: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HobbyShop: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Question: {
    acceptedAnswer: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "acceptedAnswer",
    },
    upvoteCount: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "upvoteCount",
    },
    suggestedAnswer: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "suggestedAnswer",
    },
    downvoteCount: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "downvoteCount",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Seat: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  FlightReservation: {
    boardingGroup: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "boardingGroup",
    },
    passengerSequenceNumber: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "passengerSequenceNumber",
    },
    securityScreening: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "securityScreening",
    },
    passengerPriorityStatus: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "passengerPriorityStatus",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PetStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  OnDemandEvent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AutoDealer: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RestrictedDiet: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GovernmentOffice: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SendAction: {
    recipient: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "recipient",
    },
    deliveryMethod: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "deliveryMethod",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LeaveAction: {
    event: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "event",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ClaimReview: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GasStation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Mosque: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SeaBodyOfWater: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AssessAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CommentAction: {
    resultComment: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "resultComment",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Library: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TouristInformationCenter: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Aquarium: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SelfStorage: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ScholarlyArticle: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GeoShape: {
    address: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "address",
    },
    circle: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "circle",
    },
    box: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "box",
    },
    addressCountry: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "addressCountry",
    },
    postalCode: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "postalCode",
    },
    elevation: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "elevation",
    },
    polygon: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "polygon",
    },
    line: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "line",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  EntertainmentBusiness: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Florist: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Mass: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HowToTool: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PaymentMethod: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  UserPlusOnes: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Residence: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  UserPageVisits: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Room: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Continent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  UnRegisterAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LoseAction: {
    winner: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "winner",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ShoppingCenter: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HowToStep: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ActionStatusType: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  OfferCatalog: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CompoundPriceSpecification: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  NightClub: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ConfirmAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  State: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Playground: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AppendAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ReplaceAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ParkingFacility: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AuthorizeAction: {
    recipient: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "recipient",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BookSeries: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BuyAction: {
    warrantyPromise: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "warrantyPromise",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  UserDownloads: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PawnShop: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AssignAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PayAction: {
    recipient: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "recipient",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HighSchool: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SteeringPositionValue: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SportsClub: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Bridge: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TrainStation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BedDetails: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  WriteAction: {
    language: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "language",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MusicPlaylist: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PeopleAudience: {
    suggestedMinAge: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "suggestedMinAge",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ReserveAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PaymentService: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ProfessionalService: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  InteractAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AutoBodyShop: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ConvenienceStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  School: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TelevisionStation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HomeGoodsStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LakeBodyOfWater: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BodyOfWater: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MusicVideoObject: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AskAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Beach: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SpreadsheetDigitalDocument: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HowToItem: {
    requiredQuantity: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "requiredQuantity",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ShareAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  OpeningHoursSpecification: {
    dayOfWeek: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "dayOfWeek",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  WPHeader: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LandmarksOrHistoricalBuildings: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MarryAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Notary: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  IceCreamShop: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ReactAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  InsertAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DryCleaningOrLaundry: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DeactivateAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DonateAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TipAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ReturnAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  FastFoodRestaurant: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DataFeedItem: {
    dateModified: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "dateModified",
    },
    dateDeleted: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "dateDeleted",
    },
    dateCreated: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "dateCreated",
    },
    item: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "item",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  UpdateAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  OrderStatus: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SocialMediaPosting: {
    sharedContent: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "sharedContent",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Park: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GeoCircle: {
    geoMidpoint: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "geoMidpoint",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  VoteAction: {
    candidate: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "candidate",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BookFormatType: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Zoo: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ItemListOrderType: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ComedyClub: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ExhibitionEvent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  EmploymentAgency: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PrependAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  FireStation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Hotel: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RadioClip: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Intangible: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ElectronicsStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  NailSalon: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TelevisionChannel: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GovernmentBuilding: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  EmergencyService: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Menu: {
    hasMenuItem: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "hasMenuItem",
    },
    hasMenuSection: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "hasMenuSection",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Periodical: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Series: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Electrician: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  WarrantyScope: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CollectionPage: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PhotographAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HealthAndBeautyBusiness: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LegislativeBuilding: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  UserCheckins: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  WearAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TravelAgency: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PerformingGroup: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Hostel: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  OrderAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TrackAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Quantity: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  VideoGallery: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  EducationalAudience: {
    educationalRole: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "educationalRole",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CityHall: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ComedyEvent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ItemPage: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MovingCompany: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BorrowAction: {
    lender: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "lender",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GardenStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PaintAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SportsActivityLocation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Dentist: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AdultEntertainment: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DriveWheelConfigurationValue: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DataCatalog: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  City: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ConsumeAction: {
    expectsAcceptanceOf: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "expectsAcceptanceOf",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ArriveAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BookmarkAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CreateAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ScheduleAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DiscoverAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  InstallAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MusicEvent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Store: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HairSalon: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DaySpa: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ActivateAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RadioEpisode: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ElementarySchool: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CreditCard: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DislikeAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BankOrCreditUnion: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TieAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DeliveryMethod: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Winery: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  InformAction: {
    event: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "event",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MeetingRoom: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  JoinAction: {
    event: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      label: "event",
    },
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RiverBodyOfWater: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HVACBusiness: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TaxiStand: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CatholicChurch: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GovernmentService: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MovieClip: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MusicAlbumProductionType: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ApplyAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Locksmith: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Landform: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  OceanBodyOfWater: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MedicalOrganization: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TrainReservation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MusicVenue: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CollegeOrUniversity: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  WantAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ReadAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Specialty: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TaxiService: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ItemAvailability: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ArtGallery: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Plumber: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Preschool: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RejectAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TattooParlor: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BusinessFunction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Energy: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  FurnitureStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BusStop: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MotorcycleRepair: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ReplyAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GovernmentPermit: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Resort: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Table: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  URL: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GovernmentOrganization: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BusReservation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Taxi: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Physician: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RsvpResponseType: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DayOfWeek: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BusinessEntityType: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  NoteDigitalDocument: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Campground: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TennisComplex: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Photograph: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SubwayStation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Courthouse: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ReservationStatusType: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AutoWash: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  HardwareStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Barcode: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  VisualArtsEvent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DanceGroup: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BeautySalon: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CivicStructure: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CurrencyConversionService: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RoofingContractor: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ChildrensEvent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RVPark: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  WholesaleStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DepartmentStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SkiResort: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AutomatedTeller: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Canal: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  House: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  NGO: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BarOrPub: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Float: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DataType: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SuspendAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Distance: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MensClothingStore: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AcceptAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Language: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TheaterGroup: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BoardingPolicyType: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Answer: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Brewery: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AllocateAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RadioChannel: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  PublicSwimmingPool: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ComputerLanguage: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MusicReleaseFormatType: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Conversation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Cemetery: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AccountingService: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CheckInAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  EventStatusType: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  FindAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RecyclingCenter: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Hospital: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Festival: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LockerDelivery: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  RadioSeason: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  EmailMessage: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BusStation: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  BowlingAlley: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  ImageGallery: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  DataDownload: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  CampingPitch: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  MiddleSchool: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  AutomotiveBusiness: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  LiteraryEvent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  Pond: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  SocialEvent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  EatAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TheaterEvent: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  TakeAction: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
  GamePlayMode: {
    _id: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
    },
    createdAt: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: Date,
      optional: true,
      viewableBy: ["guests"],
      onInsert: (document, context) => {
        return new Date()
      },
    },
    userId: {
      viewableBy: ["guests"],
      editableBy: ["guests"],
      insertableBy: ["guests"],
      type: String,
      optional: true,
      resolveAs: {
        fieldName: "user",
        type: "User",
        resolver: (movie, args, context) => {
          return context.Users.findOne(
            { _id: movie.userId },
            {
              fields: context.Users.getViewableFields(
                context.currentUser,
                context.Users
              ),
            }
          )
        },
        optional: true,
      },
    },
  },
}
