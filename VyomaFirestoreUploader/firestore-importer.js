const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
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
  
var db = firebase.firestore();

var playlist =[ 
    {
      "kind": "youtube#playlist",
      "etag": "eW1d3G02xDErC85q1CQHfz5EhNc",
      "id": "PLmozlYyYE-ETNpybZyWkwWqbs4rB2oST-",
      "snippet": {
        "publishedAt": "2020-10-26T13:49:46Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Master Paninian Grammar through Kashikavritti",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/FlmS2cOtIBM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/FlmS2cOtIBM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/FlmS2cOtIBM/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/FlmS2cOtIBM/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/FlmS2cOtIBM/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Master Paninian Grammar through Kashikavritti",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 7
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "sE2eAoxP8BqqVFR3Am8g4xLhBAs",
      "id": "PLmozlYyYE-ESrPR8ilSUMb9v8BmbJYNkQ",
      "snippet": {
        "publishedAt": "2020-10-26T12:43:34Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Learn authentic pronunciation of Bhagavad-Gita through Teacher-Student Karaoke videos",
        "description": "Pronunciation is one of the most important aspects of Sanskrit Shloka Chanting, to get the real experience and benefits told by our Rishis. \n\nInaccurate pronunciation can lead to many issues including distorted meaning, ill-effect on the body, mind, and other layers of our existence. \n\nThis is a humble attempt by the Vyoma team of scholars, to provide one of the most authentic pronunciations of the Bhagavad Gita, in the Teacher-Student Karaoke Mode.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/E2gK_AQNUs4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/E2gK_AQNUs4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/E2gK_AQNUs4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/E2gK_AQNUs4/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/E2gK_AQNUs4/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Learn authentic pronunciation of Bhagavad-Gita through Teacher-Student Karaoke videos",
          "description": "Pronunciation is one of the most important aspects of Sanskrit Shloka Chanting, to get the real experience and benefits told by our Rishis. \n\nInaccurate pronunciation can lead to many issues including distorted meaning, ill-effect on the body, mind, and other layers of our existence. \n\nThis is a humble attempt by the Vyoma team of scholars, to provide one of the most authentic pronunciations of the Bhagavad Gita, in the Teacher-Student Karaoke Mode."
        }
      },
      "contentDetails": {
        "itemCount": 21
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "3n3bEQTrvQcPB2k--BPz81_BE4Q",
      "id": "PLmozlYyYE-ESUqDiGa0KIxUovrjUiNLVN",
      "snippet": {
        "publishedAt": "2020-10-23T12:49:19Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Soundaryalahari - Detailed Explanation",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/jTXhGiP__yw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/jTXhGiP__yw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/jTXhGiP__yw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/jTXhGiP__yw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/jTXhGiP__yw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Soundaryalahari - Detailed Explanation",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 1
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "Op3rsL1z7jQEoQ-o3fKzFMctR8Y",
      "id": "PLmozlYyYE-ERvyFxCOvc0eOhywVDIUMgH",
      "snippet": {
        "publishedAt": "2020-10-09T06:05:51Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Madhyama Vyayoga",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Zf36HNvrEgQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Zf36HNvrEgQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Zf36HNvrEgQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Zf36HNvrEgQ/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Zf36HNvrEgQ/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Madhyama Vyayoga",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 9
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "V45_rIQSpDXAhZMFATyJ9Te3UCY",
      "id": "PLmozlYyYE-ESqtrv98GvBUIHWZTO4EMXY",
      "snippet": {
        "publishedAt": "2020-10-05T07:56:06Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Laghu Siddhanta Kaumudi - Tell Me More Videos",
        "description": "Videos explaining some additional aspects related to the material dealt with in the Laghu Siddhanta Kaumudi Course by Dr. Sowmya Krishnapur",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/gbqVSOKfakM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/gbqVSOKfakM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/gbqVSOKfakM/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/gbqVSOKfakM/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Laghu Siddhanta Kaumudi - Tell Me More Videos",
          "description": "Videos explaining some additional aspects related to the material dealt with in the Laghu Siddhanta Kaumudi Course by Dr. Sowmya Krishnapur"
        }
      },
      "contentDetails": {
        "itemCount": 1
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "A18zKw1u-MOO14lpLBvJyL11Wns",
      "id": "PLmozlYyYE-ERtgUwOyrxr1R9rV55eDYe9",
      "snippet": {
        "publishedAt": "2020-09-15T13:55:30Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Soundaryalahari - Simple word to word meaning",
        "description": "This is a short video series consisting of the shlokas of Soundarya lahari with English meaning. The source shloka with anvaya and pratipadartha can be seen along with the audio of translation of the verse in English. Please find the next ones in  series in the playlist.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/WzvsNSRdvgk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/WzvsNSRdvgk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/WzvsNSRdvgk/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/WzvsNSRdvgk/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/WzvsNSRdvgk/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Soundaryalahari - Simple word to word meaning",
          "description": "This is a short video series consisting of the shlokas of Soundarya lahari with English meaning. The source shloka with anvaya and pratipadartha can be seen along with the audio of translation of the verse in English. Please find the next ones in  series in the playlist."
        }
      },
      "contentDetails": {
        "itemCount": 20
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "pW1KhBcDkX4sY115yBVAgqMLhwE",
      "id": "PLmozlYyYE-ER03g-Jgz4cmPXme_2R1wof",
      "snippet": {
        "publishedAt": "2020-09-10T15:40:11Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Sri Venkatachala Mahatmyam by Srikrishnapremi Swamigal",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/GPXjsTIrXSk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/GPXjsTIrXSk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/GPXjsTIrXSk/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/GPXjsTIrXSk/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/GPXjsTIrXSk/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Sri Venkatachala Mahatmyam by Srikrishnapremi Swamigal",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 12
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "E5NppHXuLWdZnOddZ80Deops8Kc",
      "id": "PLmozlYyYE-ERA1JRr22k7X02Ln9INb_Pk",
      "snippet": {
        "publishedAt": "2020-09-01T13:22:17Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Learn to Chant Lalita Sahasranama Stotram",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/RMBq6F_dCOs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/RMBq6F_dCOs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/RMBq6F_dCOs/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/RMBq6F_dCOs/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/RMBq6F_dCOs/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Learn to Chant Lalita Sahasranama Stotram",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 35
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "xBtCB6ekNxXUxr1t-xhZu776Oss",
      "id": "PLmozlYyYE-ESQHZiBbaikNuC0b7m5u6jY",
      "snippet": {
        "publishedAt": "2020-08-31T13:04:13Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Ashtadhyayi Assessment - 1",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/VaObOZCIfWg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/VaObOZCIfWg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/VaObOZCIfWg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/VaObOZCIfWg/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/VaObOZCIfWg/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Ashtadhyayi Assessment - 1",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 4
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "3Vel42x3pftSx-JQcFRRHb9F7q8",
      "id": "PLmozlYyYE-ES38d9YEGUAMCXRvH4YoFpO",
      "snippet": {
        "publishedAt": "2020-08-27T13:24:34Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Narayaneeyam Memorization Tests",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/iAW7dqo7sts/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/iAW7dqo7sts/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/iAW7dqo7sts/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/iAW7dqo7sts/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/iAW7dqo7sts/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Narayaneeyam Memorization Tests",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 13
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "ikGeRdSqNT6fAmCwaBxy-Vd2pCU",
      "id": "PLmozlYyYE-EQyN06EzYJlnRRjE_qSJ-wc",
      "snippet": {
        "publishedAt": "2020-08-25T17:46:24Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Laghusiddhantakaumudi Part 1 (Samjna and Sandhis) by Dr.Sowmya Krishnapur",
        "description": "This is a Free live webinar Course on Laghu Siddhanta Kaumudi, one of the beginner-level texts of Paninian Grammar. Focus of the course will be on helping learners understand the basic structure and functioning of the sutra-system of Grammar, and applying the rules to basic sandhi processes.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Vfor85MwuSE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Vfor85MwuSE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Vfor85MwuSE/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Vfor85MwuSE/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Vfor85MwuSE/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Laghusiddhantakaumudi Part 1 (Samjna and Sandhis) by Dr.Sowmya Krishnapur",
          "description": "This is a Free live webinar Course on Laghu Siddhanta Kaumudi, one of the beginner-level texts of Paninian Grammar. Focus of the course will be on helping learners understand the basic structure and functioning of the sutra-system of Grammar, and applying the rules to basic sandhi processes."
        }
      },
      "contentDetails": {
        "itemCount": 48
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "MVRNRb5AxnnoExTxUs7MQ7BXs-U",
      "id": "PLmozlYyYE-ETVMI4d0AVaBW-9UvxgfGCT",
      "snippet": {
        "publishedAt": "2020-08-25T07:48:28Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Upanishadaaloka",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/IKWkfvue_kA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/IKWkfvue_kA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/IKWkfvue_kA/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/IKWkfvue_kA/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/IKWkfvue_kA/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Upanishadaaloka",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 15
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "2nJyeGV56CMwvnASKP2-m76Ou1E",
      "id": "PLmozlYyYE-ESADo-M1gJH4v1ZYjvlphyD",
      "snippet": {
        "publishedAt": "2020-08-22T11:20:58Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Kridanta Prakaranam of Siddhanta kaumudi- Svadhyayacharcha",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/5i2El2sxRFo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/5i2El2sxRFo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/5i2El2sxRFo/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/5i2El2sxRFo/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Kridanta Prakaranam of Siddhanta kaumudi- Svadhyayacharcha",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 34
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "lXyVZ00vX52ifhI1SbCRAgmx_wM",
      "id": "PLmozlYyYE-ESkoQAcGKi1O9MFSvfo9CSC",
      "snippet": {
        "publishedAt": "2020-08-22T08:32:17Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Narayaneeyam Discourse",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/uPgsqyMwrIs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/uPgsqyMwrIs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/uPgsqyMwrIs/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/uPgsqyMwrIs/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/uPgsqyMwrIs/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Narayaneeyam Discourse",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 3
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "4ed9yo3ncXOizCY-e8_s_wHj7Vw",
      "id": "PLmozlYyYE-EQNj0A3TJZ-lTk9LMLea6V-",
      "snippet": {
        "publishedAt": "2020-08-16T12:42:31Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Book Release Function",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/SEj70TmC0Cg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/SEj70TmC0Cg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/SEj70TmC0Cg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/SEj70TmC0Cg/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/SEj70TmC0Cg/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Book Release Function",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 1
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "5wm1N7D27E910Pl1RKB1tMloTAo",
      "id": "PLmozlYyYE-EShl4Qpyt_DrZApQa6WGKP2",
      "snippet": {
        "publishedAt": "2020-08-05T10:28:28Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "'Learn the Basics of Nyayashastra through Tarkabhasha",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/wEfjrDqYoro/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/wEfjrDqYoro/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/wEfjrDqYoro/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/wEfjrDqYoro/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/wEfjrDqYoro/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "'Learn the Basics of Nyayashastra through Tarkabhasha",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 21
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "IK2Ax129W93kNUSCyaGlK0K7p6I",
      "id": "PLmozlYyYE-EQgLMju4PsdpwiZJgjfwA2o",
      "snippet": {
        "publishedAt": "2020-07-18T17:33:13Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Learn Sharada Lipi – Weekend batch",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/PZOPhbSDdEw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/PZOPhbSDdEw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/PZOPhbSDdEw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/PZOPhbSDdEw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/PZOPhbSDdEw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Learn Sharada Lipi – Weekend batch",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 15
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "BsUZdiRvq8pXeGlSJ2nukCLk4C4",
      "id": "PLmozlYyYE-ET3E_oHWErkEpExDmke0vO-",
      "snippet": {
        "publishedAt": "2020-07-15T10:39:42Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Study of Vaisheshika Darshana",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/tCkZf9AMEDQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/tCkZf9AMEDQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/tCkZf9AMEDQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/tCkZf9AMEDQ/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/tCkZf9AMEDQ/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Study of Vaisheshika Darshana",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 17
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "lWcRD7LRI0NPRlNYG_HdsJLuhGI",
      "id": "PLmozlYyYE-ERaqtMxe6_Hq8Ay8AexmLpY",
      "snippet": {
        "publishedAt": "2020-06-23T10:56:59Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Wisdom for the Subhashitas for a Successful Life - Subhashita Nidhi",
        "description": "Recordings from the Live Webinar Course taught by Dr. Shobha Vasuki, presented by Vyoma Samskrta Pathasala at https://www.sanskritfromhome.in/course/wisdom-from-sanskrit-subhashitas-for-successful-life",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/CNg366Tcyiw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/CNg366Tcyiw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/CNg366Tcyiw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/CNg366Tcyiw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/CNg366Tcyiw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Wisdom for the Subhashitas for a Successful Life - Subhashita Nidhi",
          "description": "Recordings from the Live Webinar Course taught by Dr. Shobha Vasuki, presented by Vyoma Samskrta Pathasala at https://www.sanskritfromhome.in/course/wisdom-from-sanskrit-subhashitas-for-successful-life"
        }
      },
      "contentDetails": {
        "itemCount": 15
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "lvOP-UCpCRQ2NE6diVLebtmY7CY",
      "id": "PLmozlYyYE-ESm_asAN4fXw6zM7b2mGGFC",
      "snippet": {
        "publishedAt": "2020-06-19T13:22:54Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Narayaneeyam Parayanam Livestream",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/PRAPIjPJskw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/PRAPIjPJskw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/PRAPIjPJskw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/PRAPIjPJskw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/PRAPIjPJskw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Narayaneeyam Parayanam Livestream",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 4
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "g4qpt54o1rzRvn_Bza3XtyAAa-c",
      "id": "PLmozlYyYE-EQxbVz6-DVIyB91uklotUxn",
      "snippet": {
        "publishedAt": "2020-06-13T07:45:14Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Namasankeerthanam: Bhajans for Children – Full class: By Dr. Udaiyalur K Kalyanaraman",
        "description": "Recordings of the full sessions of the free Webinar course - \"Namasankeerthana Yajna - Bhajans for Chidren\" conducted by Udaiyalur Dr. K Kalyanaraman through Vyoma Samskrta Pathasala (www.sanskritfromhome.in) during Vasanta Navaratri - April 2020",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/jg1xVt87zBU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/jg1xVt87zBU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/jg1xVt87zBU/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/jg1xVt87zBU/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/jg1xVt87zBU/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Namasankeerthanam: Bhajans for Children – Full class: By Dr. Udaiyalur K Kalyanaraman",
          "description": "Recordings of the full sessions of the free Webinar course - \"Namasankeerthana Yajna - Bhajans for Chidren\" conducted by Udaiyalur Dr. K Kalyanaraman through Vyoma Samskrta Pathasala (www.sanskritfromhome.in) during Vasanta Navaratri - April 2020"
        }
      },
      "contentDetails": {
        "itemCount": 8
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "LhS_JZM01ftu2cIyKsiu5NQKoWk",
      "id": "PLmozlYyYE-ERAkAKl-MbnQal-49xPVNwn",
      "snippet": {
        "publishedAt": "2020-06-08T15:15:08Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Sriman-Narayaneeyam Dasakam by Dasakam Recitation",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/6KiOwlClfgg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/6KiOwlClfgg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/6KiOwlClfgg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/6KiOwlClfgg/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/6KiOwlClfgg/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Sriman-Narayaneeyam Dasakam by Dasakam Recitation",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 19
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "_ZuKeOIVUxrpo4oEc9G8yOYs12U",
      "id": "PLmozlYyYE-ETl4-Wd73u3Lb4KZyRXBlbM",
      "snippet": {
        "publishedAt": "2020-05-27T10:09:32Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Foundations of Sanatana Dharma",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/fK_1yR1ZU_U/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/fK_1yR1ZU_U/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/fK_1yR1ZU_U/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/fK_1yR1ZU_U/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/fK_1yR1ZU_U/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Foundations of Sanatana Dharma",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 55
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "QjkiKah-eDfRhw634mkgVAZXGHY",
      "id": "PLmozlYyYE-ESQsqJt6KD8pFzWbhfkHonx",
      "snippet": {
        "publishedAt": "2020-05-18T19:46:31Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Samaasa - Understanding Compound Words in Sanskrit",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/y5ykJEiZj_s/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/y5ykJEiZj_s/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/y5ykJEiZj_s/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/y5ykJEiZj_s/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/y5ykJEiZj_s/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Samaasa - Understanding Compound Words in Sanskrit",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 15
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "MvmXm8uF45D_XluxM-se8cW5Rrs",
      "id": "PLmozlYyYE-EQlwZtjGAEEEhlRYuVYBFJN",
      "snippet": {
        "publishedAt": "2020-04-28T09:58:11Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Meaning of Vishnu Sahasranama Based on Shaankara Bhaashya",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/aW_j1t9uqXs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/aW_j1t9uqXs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/aW_j1t9uqXs/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/aW_j1t9uqXs/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/aW_j1t9uqXs/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Meaning of Vishnu Sahasranama Based on Shaankara Bhaashya",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 100
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "yzeGYMNt9Ozs5ibX8-KFzUf2xPE",
      "id": "PLmozlYyYE-EQ06rUpC6m6pMz-fyRchgNl",
      "snippet": {
        "publishedAt": "2020-04-26T15:50:35Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Srimad Bhagavata Saptaha Upanyasam Saptaha Samrat Sri Sengalipuram Deeshitar",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/HSzXeYSF094/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/HSzXeYSF094/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/HSzXeYSF094/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/HSzXeYSF094/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/HSzXeYSF094/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Srimad Bhagavata Saptaha Upanyasam Saptaha Samrat Sri Sengalipuram Deeshitar",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 7
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "3FFexkn6yPwVieUiQHoPUeQvFHo",
      "id": "PLmozlYyYE-ESCNGJ1J8r9Fj51WJDa31D4",
      "snippet": {
        "publishedAt": "2020-04-21T09:39:02Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Learn to Chant Sri Shankara Digvijaya Saara",
        "description": "This is a playlist of the recordings from the free webinar course \"Learn to chant Sri Shankara Digvijaya Saara\". The work Sri Shankara Digvijaya Saara was originally composed by Jagadguru Sri Vidyaranya Mahaswami and concised by Vid. Mahabaleshwar Bhat. This course is taught by Sri. Raghunandana R.\n\nFor attending the live classes, visit https://www.sanskritfromhome.in/course/shankara-digvijaya-saara",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/K10rvetTQVg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/K10rvetTQVg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/K10rvetTQVg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/K10rvetTQVg/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/K10rvetTQVg/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Learn to Chant Sri Shankara Digvijaya Saara",
          "description": "This is a playlist of the recordings from the free webinar course \"Learn to chant Sri Shankara Digvijaya Saara\". The work Sri Shankara Digvijaya Saara was originally composed by Jagadguru Sri Vidyaranya Mahaswami and concised by Vid. Mahabaleshwar Bhat. This course is taught by Sri. Raghunandana R.\n\nFor attending the live classes, visit https://www.sanskritfromhome.in/course/shankara-digvijaya-saara"
        }
      },
      "contentDetails": {
        "itemCount": 27
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "Fowf1ir5lOCpPGx_X18aKSSYxNU",
      "id": "PLmozlYyYE-ESc52rCrln5LTNetlnDsbdK",
      "snippet": {
        "publishedAt": "2020-04-05T09:03:02Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Learn to Chant Sriman-Narayaneeyam",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/dj6jOLhqBMw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/dj6jOLhqBMw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/dj6jOLhqBMw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/dj6jOLhqBMw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/dj6jOLhqBMw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Learn to Chant Sriman-Narayaneeyam",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 37
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "3gyUUI8I789BoifeyOWSBM_wy8U",
      "id": "PLmozlYyYE-ETiEDyzg3UYg4pbNz31nCEG",
      "snippet": {
        "publishedAt": "2020-04-03T11:02:10Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Learn Sharada Lipi",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/p2uoAVE4HPI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/p2uoAVE4HPI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/p2uoAVE4HPI/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/p2uoAVE4HPI/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/p2uoAVE4HPI/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Learn Sharada Lipi",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 16
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "xRFoYZKnNH5IcSHNtB32nEjDx_Q",
      "id": "PLmozlYyYE-ERR87sKgCYIPEiOiLAd-Mi5",
      "snippet": {
        "publishedAt": "2020-03-30T15:58:03Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Discourse on Adityahridayam - The power of Surya Upasana",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/XlOz-uYTJfY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/XlOz-uYTJfY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/XlOz-uYTJfY/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/XlOz-uYTJfY/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/XlOz-uYTJfY/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Discourse on Adityahridayam - The power of Surya Upasana",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 9
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "ja7aU3DYXU4xX9-14GrmTI8jqMM",
      "id": "PLmozlYyYE-ET80ndk3_GtuWgVBxh0WT7a",
      "snippet": {
        "publishedAt": "2020-03-28T01:58:09Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Srimad Valmiki Ramayanam - Navaaha Parayanam 2020",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/IL8Fvx7H4bA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/IL8Fvx7H4bA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/IL8Fvx7H4bA/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/IL8Fvx7H4bA/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/IL8Fvx7H4bA/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Srimad Valmiki Ramayanam - Navaaha Parayanam 2020",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 10
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "DrEcBv5iKoQm40vJWKgh1ZH5W6c",
      "id": "PLmozlYyYE-ET4aPvb18R1Bi4YOBrV3YC1",
      "snippet": {
        "publishedAt": "2020-03-25T12:49:39Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Rare Opportunity to learn ‘selected bhajans for children’ from Shri Dr. Udaiyalur K Kalyanaraman",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/z2kCyU2PIa8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/z2kCyU2PIa8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/z2kCyU2PIa8/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/z2kCyU2PIa8/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/z2kCyU2PIa8/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Rare Opportunity to learn ‘selected bhajans for children’ from Shri Dr. Udaiyalur K Kalyanaraman",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 14
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "PtoiN1Fj29V9KfUJj9srA_ASoKU",
      "id": "PLmozlYyYE-ERzYSo-_3qPtJH-QkWcLMxE",
      "snippet": {
        "publishedAt": "2020-03-09T08:52:39Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Learn to chant vishnu sahasranama stotram",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/P0ZdO06XwCo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/P0ZdO06XwCo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/P0ZdO06XwCo/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/P0ZdO06XwCo/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/P0ZdO06XwCo/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Learn to chant vishnu sahasranama stotram",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 36
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "sfu7PTW_XByxJfZuvDdN_PbUWrM",
      "id": "PLmozlYyYE-EStkz80kDoKapPXyV5PUUxb",
      "snippet": {
        "publishedAt": "2019-11-22T20:36:23Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Laghu Siddhantha Kaumudi - Samaasa",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/cD3qiytGFVw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/cD3qiytGFVw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/cD3qiytGFVw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/cD3qiytGFVw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/cD3qiytGFVw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Laghu Siddhantha Kaumudi - Samaasa",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 21
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "eY--lJEChvu1DTmo1Miuh5Ljlz0",
      "id": "PLmozlYyYE-ETy0niNSEMi4IfW3bqE9Y4A",
      "snippet": {
        "publishedAt": "2019-11-19T11:56:14Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Learn to Chant Ashtadhyayi",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/RSrQgugcrAE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/RSrQgugcrAE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/RSrQgugcrAE/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/RSrQgugcrAE/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/RSrQgugcrAE/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Learn to Chant Ashtadhyayi",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 224
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "cMh-OidEC-OJpGJQAEE16knyZ-k",
      "id": "PLmozlYyYE-ES0OM9C3NRXRAfWmNjBrkzp",
      "snippet": {
        "publishedAt": "2019-11-19T10:21:52Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Learn to Chant Amarkosha",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/tfPYEi4WkxU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/tfPYEi4WkxU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/tfPYEi4WkxU/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/tfPYEi4WkxU/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/tfPYEi4WkxU/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Learn to Chant Amarkosha",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 234
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "65juavO-s2VARqOAj5XZfC_92yI",
      "id": "PLmozlYyYE-ETLrSJB4OKeeuCMk6G4m8ov",
      "snippet": {
        "publishedAt": "2019-07-16T05:31:33Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Siddhanta Kaumudi - Kridanta Prakaranam",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/i4vKkI2tTso/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/i4vKkI2tTso/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/i4vKkI2tTso/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/i4vKkI2tTso/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Siddhanta Kaumudi - Kridanta Prakaranam",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 84
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "NkcA84SFgTfjA5_M8UqKtOjCt38",
      "id": "PLmozlYyYE-ESzxrPXPWf_aAdQjkyk17Fv",
      "snippet": {
        "publishedAt": "2019-07-12T06:31:45Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Vedanta Karikavali",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ZnBCAWvOXuY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ZnBCAWvOXuY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ZnBCAWvOXuY/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/ZnBCAWvOXuY/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/ZnBCAWvOXuY/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Vedanta Karikavali",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 44
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "lb_kOSvXnmgwfD5JfrdJTVWwzMQ",
      "id": "PLmozlYyYE-EQ-tDrVYejR6ZhImzze5p65",
      "snippet": {
        "publishedAt": "2019-05-06T12:33:59Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Sundarakandam_upanyasam_Ramanavami_Navaham2019",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/atkQaY8I2Y8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/atkQaY8I2Y8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/atkQaY8I2Y8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Sundarakandam_upanyasam_Ramanavami_Navaham2019",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 9
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "lKEcaAhKRaSM-G1Ad4FpFXhgeqM",
      "id": "PLmozlYyYE-EQwu4YsuKS-JoqF-t9Y5d08",
      "snippet": {
        "publishedAt": "2019-04-22T07:43:16Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Learn to Chant Bhagavadgita",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/lJAsUqhwrHw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/lJAsUqhwrHw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/lJAsUqhwrHw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/lJAsUqhwrHw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/lJAsUqhwrHw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Learn to Chant Bhagavadgita",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 71
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "60rhHp-c4O8ijnIdsqbCb_hg1gM",
      "id": "PLmozlYyYE-ERI52EVhtqsdpTUBKf7IoAd",
      "snippet": {
        "publishedAt": "2019-04-10T09:41:32Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Chandas - Introduction to Sanskrit Prosody",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/An16wmqMCvs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/An16wmqMCvs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/An16wmqMCvs/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/An16wmqMCvs/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/An16wmqMCvs/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Chandas - Introduction to Sanskrit Prosody",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 21
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "i4-lXEBGBAVWHIEMZUy_IUa2R48",
      "id": "PLmozlYyYE-EQt3Iw5cN7ctvfTbmNr7IGi",
      "snippet": {
        "publishedAt": "2019-03-24T07:22:00Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Kovida - Samskrita Bharati Level 4",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/qV0Vsdry5Yc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/qV0Vsdry5Yc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/qV0Vsdry5Yc/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/qV0Vsdry5Yc/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/qV0Vsdry5Yc/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Kovida - Samskrita Bharati Level 4",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 52
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "fm8lZry2kVGaGX3PpTxXtndT3_Q",
      "id": "PLmozlYyYE-EQherGIb_pL3y-4_JH-N30b",
      "snippet": {
        "publishedAt": "2019-02-23T15:03:50Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Ramakatha - Chittoor Parichaya",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/TuqwfNx03no/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/TuqwfNx03no/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/TuqwfNx03no/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/TuqwfNx03no/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/TuqwfNx03no/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Ramakatha - Chittoor Parichaya",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 10
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "tPECt5NA2p84je4qO9cHOVAhNfE",
      "id": "PLmozlYyYE-EQJygdRR0vGVdRtSzvrlFXc",
      "snippet": {
        "publishedAt": "2019-01-31T05:14:51Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Koshadarshanam",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/bkhD--yCrBI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/bkhD--yCrBI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/bkhD--yCrBI/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/bkhD--yCrBI/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/bkhD--yCrBI/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Koshadarshanam",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 12
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "Vz-U9G18oqlPd1AzWfPX7UwspKo",
      "id": "PLmozlYyYE-EQsYrqi0R9ml0TF9e7Qdjw2",
      "snippet": {
        "publishedAt": "2018-12-17T05:56:59Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Understanding the Gita Verse By Verse",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/IqFYbblmSfo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/IqFYbblmSfo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/IqFYbblmSfo/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/IqFYbblmSfo/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/IqFYbblmSfo/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Understanding the Gita Verse By Verse",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 116
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "TsQUspAbQN7Eip39dDP0tgbGxP8",
      "id": "PLmozlYyYE-ES-VdPJQup3gh9ZaixOmHv1",
      "snippet": {
        "publishedAt": "2018-08-27T10:46:13Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Bridgewater_Sundara Kandam_ vishesha amshaaha_in Sanskrit",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/9H-tPy5D8to/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/9H-tPy5D8to/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/9H-tPy5D8to/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Bridgewater_Sundara Kandam_ vishesha amshaaha_in Sanskrit",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 1
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "xuLV7qMOqD8fqZUMPepaor-Ut8s",
      "id": "PLmozlYyYE-ETawNpwcKmVV83zU8Z8lmJe",
      "snippet": {
        "publishedAt": "2018-08-16T13:03:45Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Sundara Kandam_interesting aspects_Upanyasam_Lectures",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/64UH7q5HhE4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/64UH7q5HhE4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/64UH7q5HhE4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Sundara Kandam_interesting aspects_Upanyasam_Lectures",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 6
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "2S6RCnjsG-w0ACijZ4HuwJEgBaA",
      "id": "PLmozlYyYE-ERX7L1dREW8Analt-mELF83",
      "snippet": {
        "publishedAt": "2018-08-16T13:01:51Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Sundara Kandam_Moolam_parayanam_live recording",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/9o_IkYxlfvo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/9o_IkYxlfvo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/9o_IkYxlfvo/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Sundara Kandam_Moolam_parayanam_live recording",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 9
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "NngPa0AE9tWbrzanKqU3KMc2qkk",
      "id": "PLmozlYyYE-ESNJWhcCrJh7gz_gMiRBxXN",
      "snippet": {
        "publishedAt": "2018-08-16T12:14:04Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "Sanskrit Grammar workshop_ face to face",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Y64BwpzJC0s/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Y64BwpzJC0s/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Y64BwpzJC0s/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "Sanskrit Grammar workshop_ face to face",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 3
      }
    },
    {
      "kind": "youtube#playlist",
      "etag": "WYpKlbu83vj7_oNWst1mu-3WNrY",
      "id": "PLmozlYyYE-EQ45XW0GuPMJkFcIaDV_uVP",
      "snippet": {
        "publishedAt": "2018-08-16T11:56:38Z",
        "channelId": "UCp5mvCwXR-drTRyzNUUjdZg",
        "title": "How to decode a Sanskrit Verse - Unique workshop",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/YotPP8JIYSU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/YotPP8JIYSU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/YotPP8JIYSU/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/YotPP8JIYSU/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/YotPP8JIYSU/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Learn Sanskrit Online : vyoma-samskrta-pathasala",
        "localized": {
          "title": "How to decode a Sanskrit Verse - Unique workshop",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 4
      }
    }
     ]

playlist.forEach(function(obj) {
    db.collection("playlist").add({
        id: obj.id,
        channelId: obj.snippet.channelId,
        title: obj.snippet.title,
        icon: obj.snippet.thumbnails.default.url,
        channelTitle: obj.snippet.channelTitle
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});