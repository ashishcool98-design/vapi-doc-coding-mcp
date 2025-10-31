module.exports = [
  {
    "url": "https://api.vedicastroapi.com/v3-json/prediction/daily-sun",
    "request_type": "GET",
    "params": {
      "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
      "date": {
        "sample": "25/05/2025",
        "datatype": "string",
        "template": "DD/MM/YYYY",
        "other_option": []
      },
      "zodiac": {
        "sample": 1,
        "other_option": {
          "Aries": 1,
          "Taurus": 2,
          "Gemini": 3,
          "Cancer": 4,
          "Leo": 5,
          "Virgo": 6,
          "Libra": 7,
          "Scorpio": 8,
          "Sagittarius": 9,
          "Capricorn": 10,
          "Aquarius": 11,
          "Pisces": 12
        }
      },
      "split": {
        "sample": true,
        "other_option": [
          true,
          false
        ]
      },
      "type": {
        "sample": "big",
        "other_option": [
          "big",
          "small"
        ]
      },
      "lang": {
        "sample": "en",
        "other_option": {
          "Bengali": "be",
          "French": "fr",
          "Hindi": "hi",
          "Kannada": "ka",
          "Malayalam": "ml",
          "Spanish": "sp",
          "Tamil": "ta",
          "Telugu": "te",
          "Marathi": "mr",
          "Sinhalese": "si",
          "Nepali": "ne",
          "Korean": "ko",
          "Japanese": "ja",
          "Gujarati": "gu",
          "Portuguese": "pt",
          "German": "de",
          "Turkish": "tr",
          "Russian": "ru",
          "Italian": "it",
          "Dutch": "nl",
          "Polish": "pl"
        }
      }
    }
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/prediction/daily-moon",
    "request_type": "GET",
    "params": {
      "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly.",
        "other_option": []
      },
      "date": {
        "sample": "25/05/2025",
        "datatype": "string",
        "template": "DD/MM/YYYY",
        "other_option": []
      },
      "zodiac": {
        "sample": 1,
        "other_option": {
          "Aries": 1,
          "Taurus": 2,
          "Gemini": 3,
          "Cancer": 4,
          "Leo": 5,
          "Virgo": 6,
          "Libra": 7,
          "Scorpio": 8,
          "Sagittarius": 9,
          "Capricorn": 10,
          "Aquarius": 11,
          "Pisces": 12
        }
      },
      "split": {
        "sample": true,
        "other_option": [
          true,
          false
        ]
      },
      "type": {
        "sample": "big",
        "other_option": [
          "big",
          "small"
        ]
      },
      "lang": {
        "sample": "en",
        "other_option": {
          "Bengali": "be",
          "French": "fr",
          "Hindi": "hi",
          "Kannada": "ka",
          "Malayalam": "ml",
          "Spanish": "sp",
          "Tamil": "ta",
          "Telugu": "te",
          "Marathi": "mr",
          "Sinhalese": "si",
          "Nepali": "ne",
          "Korean": "ko",
          "Japanese": "ja",
          "Gujarati": "gu",
          "Portuguese": "pt",
          "German": "de",
          "Turkish": "tr",
          "Russian": "ru",
          "Italian": "it",
          "Dutch": "nl",
          "Polish": "pl"
        }
      }
    }
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/prediction/daily-nakshatra",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "date": {
          "sample": "25/05/2025",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "nakshatra": {
          "sample": 1,
          "other_option": {
            "Ashwini": 1,
            "Bharani": 2,
            "Krittika": 3,
            "Rohini": 4,
            "Mrigashirsha": 5,
            "Ardra": 6,
            "Punarvasu": 7,
            "Pushya": 8,
            "Ashlesha": 9,
            "Magha": 10,
            "PurvaPhalguni": 11,
            "UttaraPhalguni": 12,
            "Hasta": 13,
            "Chitra": 14,
            "Swati": 15,
            "Vishakha": 16,
            "Anuradha": 17,
            "Jyeshtha": 18,
            "Mula": 19,
            "PurvaAshadha": 20,
            "UttaraAshadha": 21,
            "Shravana": 22,
            "Dhanishta": 23,
            "Shatabhisha": 24,
            "PurvaBhadrapada": 25,
            "UttaraBhadrapada": 26,
            "Revati": 27
          }
        },
        "split": {
          "sample": true,
          "other_option": [
            true,
            false
          ]
        },
        "type": {
          "sample": "big",
          "other_option": [
            "big",
            "small"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/prediction/weekly-sun",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "week": {
          "sample": "thisweek",
          "other_option": [
            "thisweek",
            "nextweek"
          ]
        },
        "zodiac": {
          "sample": 3,
          "other_option": {
            "Aries": 1,
            "Taurus": 2,
            "Gemini": 3,
            "Cancer": 4,
            "Leo": 5,
            "Virgo": 6,
            "Libra": 7,
            "Scorpio": 8,
            "Sagittarius": 9,
            "Capricorn": 10,
            "Aquarius": 11,
            "Pisces": 12
          }
        },
        "split": {
          "sample": true,
          "other_option": [
            true,
            false
          ]
        },
        "type": {
          "sample": "big",
          "other_option": [
            "big",
            "small"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/prediction/weekly-moon",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "week": {
          "sample": "thisweek",
          "other_option": [
            "thisweek",
            "nextweek"
          ]
        },
        "split": {
          "sample": true,
          "other_option": [
            true,
            false
          ]
        },
        "type": {
          "sample": "big",
          "other_option": [
            "big",
            "small"
          ]
        },
        "zodiac": {
          "sample": 3,
          "other_option": {
            "Aries": 1,
            "Taurus": 2,
            "Gemini": 3,
            "Cancer": 4,
            "Leo": 5,
            "Virgo": 6,
            "Libra": 7,
            "Scorpio": 8,
            "Sagittarius": 9,
            "Capricorn": 10,
            "Aquarius": 11,
            "Pisces": 12
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/prediction/yearly",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "year": {
          "sample": "2025",
          "datatype": "string",
          "template": "YYYY",
          "other_option": []
        },
        "zodiac": {
          "sample": 1,
          "other_option": {
            "Aries": 1,
            "Taurus": 2,
            "Gemini": 3,
            "Cancer": 4,
            "Leo": 5,
            "Virgo": 6,
            "Libra": 7,
            "Scorpio": 8,
            "Sagittarius": 9,
            "Capricorn": 10,
            "Aquarius": 11,
            "Pisces": 12
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/prediction/biorhythm",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "01/01/2024",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/prediction/day-number",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "01/01/2024",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/prediction/numerology",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "name": {
          "sample": "Superman",
          "datatype": "string",
          "other_option": []
        },
        "date": {
          "sample": "01/01/2024",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/horoscope/planet-details",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:MM",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/horoscope/ascendant-report",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:MM",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/horoscope/planet-report",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "planet": {
          "sample": "Sun",
          "datatype": "string",
          "other_option": {
            "Sun": "Sun",
            "Moon": "Moon",
            "Mercury": "Mercury",
            "Venus": "Venus",
            "Mars": "Mars",
            "Saturn": "Saturn",
            "Jupiter": "Jupiter",
            "Rahu": "Rahu",
            "Ketu": "Ketu"
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/horoscope/personal-characteristics",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:MM",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/horoscope/divisional-charts",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:MM",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "div": {
          "sample": "D9",
          "datatype": "string",
          "other_option": {
            "D1": "D1",
            "D2": "D2",
            "D3": "D3",
            "D3-s": "D3-s",
            "D4": "D4",
            "D5": "D5",
            "D7": "D7",
            "D8": "D8",
            "D9": "D9",
            "D10": "D10",
            "D10-R": "D10-R",
            "D12": "D12",
            "D16": "D16",
            "D20": "D20",
            "D24": "D24",
            "D24-R": "D24-R",
            "D27": "D27",
            "D30": "D30",
            "D40": "D40",
            "D45": "D45",
            "D60": "D60",
            "chalit": "chalit",
            "sun": "sun",
            "moon": "moon",
            "kp_chalit": "kp_chalit",
            "transit": "transit"
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/horoscope/chart-image",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "div": {
          "sample": "D9",
          "datatype": "string",
          "other_option": {
            "D1": "D1",
            "D2": "D2",
            "D3": "D3",
            "D3-s": "D3-s",
            "D4": "D4",
            "D5": "D5",
            "D7": "D7",
            "D8": "D8",
            "D9": "D9",
            "D10": "D10",
            "D10-R": "D10-R",
            "D12": "D12",
            "D16": "D16",
            "D20": "D20",
            "D24": "D24",
            "D24-R": "D24-R",
            "D27": "D27",
            "D30": "D30",
            "D40": "D40",
            "D45": "D45",
            "D60": "D60",
            "chalit": "chalit",
            "sun": "sun",
            "moon": "moon",
            "kp_chalit": "kp_chalit",
            "transit": "transit"
          }
        },
        "color": {
          "sample": "#ff850b3d",
          "datatype": "string",
          "other_option": []
        },
        "style": {
          "sample": "north",
          "datatype": "string",
          "other_option": [
            "north",
            "south"
          ]
        },
        "font_size": {
          "sample": 15,
          "datatype": "number",
          "other_option": []
        },
        "font_style": {
          "sample": "Nunito",
          "datatype": "string",
          "other_option": []
        },
        "stroke": {
          "sample": 2,
          "datatype": "number",
          "other_option": []
        },
        "colorful_planets": {
          "sample": true,
          "datatype": "boolean",
          "other_option": [
            true,
            false
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/horoscope/ashtakvarga-chart-image",
    "request_type": "GET",
    "new": true,
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "10",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "80",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "style": {
          "sample": "south",
          "datatype": "string",
          "other_option": []
        },
        "color": {
          "sample": "#ff3366",
          "datatype": "string",
          "other_option": []
        },
        "planet": {
          "sample": "total",
          "datatype": "string",
          "other_option": []
        },
        "size": {
          "sample": 300,
          "datatype": "number",
          "other_option": []
        },
        "font_size": {
          "sample": 30,
          "datatype": "number",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/horoscope/ashtakvarga",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "planet": {
          "sample": "Sun",
          "datatype": "string",
          "other_option": {
            "Sun": "Sun",
            "Moon": "Moon",
            "Mercury": "Mercury",
            "Venus": "Venus",
            "Mars": "Mars",
            "Saturn": "Saturn",
            "Jupiter": "Jupiter",
            "Rahu": "Rahu",
            "Ketu": "Ketu"
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/horoscope/binnashtakvarga",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",          
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "planet": {
          "sample": "Sun",
          "datatype": "string",
          "other_option": {
            "Sun": "Sun",
            "Moon": "Moon",
            "Mercury": "Mercury",
            "Venus": "Venus",
            "Mars": "Mars",
            "Saturn": "Saturn",
            "Jupiter": "Jupiter",
            "Rahu": "Rahu",
            "Ketu": "Ketu"
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/horoscope/ai-12-month-prediction",
    "request_type": "GET",
    "new": true,
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "start_date": {
          "sample": "01/01/2024",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/horoscope/planetary-aspects",
    "request_type": "GET",
    "new": true,
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "type": {
          "sample": "houses",
          "datatype": "string",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/horoscope/planets-in-houses",
    "request_type": "GET",
    "new": true,
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/horoscope/western-planets",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/matching/ashtakoot",
    "request_type": "GET",
    "new": true,
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "boy_dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "boy_tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "boy_tz": {
          "sample": 5.5,
          "datatype": "number",
          "other_option": []
        },
        "boy_lat": {
          "sample": "11",
          "datatype": "string",
          "other_option": []
        },
        "boy_lon": {
          "sample": "77",
          "datatype": "string",
          "other_option": []
        },
        "girl_dob": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "girl_tob": {
          "sample": "14:37",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "girl_tz": {
          "sample": 5.5,
          "datatype": "number",
          "other_option": []
        },
        "girl_lat": {
          "sample": "11",
          "datatype": "string",
          "other_option": []
        },
        "girl_lon": {
          "sample": "77",
          "datatype": "string",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/matching/ashtakoot-with-astro-details",
    "request_type": "GET",
    "new": true,
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "boy_dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "boy_tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "boy_tz": {
          "sample": 5.5,
          "datatype": "number",
          "other_option": []
        },
        "boy_lat": {
          "sample": "11",
          "datatype": "string",
          "other_option": []
        },
        "boy_lon": {
          "sample": "77",
          "datatype": "string",
          "other_option": []
        },
        "girl_dob": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "girl_tob": {
          "sample": "14:37",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "girl_tz": {
          "sample": 5.5,
          "datatype": "number",
          "other_option": []
        },
        "girl_lat": {
          "sample": "11",
          "datatype": "string",
          "other_option": []
        },
        "girl_lon": {
          "sample": "77",
          "datatype": "string",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/matching/dashakoot",
    "request_type": "GET",
    "new": true,
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "boy_dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "boy_tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "boy_tz": {
          "sample": 5.5,
          "datatype": "number",
          "other_option": []
        },
        "boy_lat": {
          "sample": "11",
          "datatype": "string",
          "other_option": []
        },
        "boy_lon": {
          "sample": "77",
          "datatype": "string",
          "other_option": []
        },
        "girl_dob": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "girl_tob": {
          "sample": "14:37",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "girl_tz": {
          "sample": 5.5,
          "datatype": "number",
          "other_option": []
        },
        "girl_lat": {
          "sample": "11",
          "datatype": "string",
          "other_option": []
        },
        "girl_lon": {
          "sample": "77",
          "datatype": "string",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/matching/aggregate-match",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "boy_dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "boy_tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "boy_tz": {
          "sample": 5.5,
          "datatype": "number",
          "other_option": []
        },
        "boy_lat": {
          "sample": "11",
          "datatype": "string",
          "other_option": []
        },
        "boy_lon": {
          "sample": "77",
          "datatype": "string",
          "other_option": []
        },
        "girl_dob": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "girl_tob": {
          "sample": "14:37",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "girl_tz": {
          "sample": 5.5,
          "datatype": "number",
          "other_option": []
        },
        "girl_lat": {
          "sample": "11",
          "datatype": "string",
          "other_option": []
        },
        "girl_lon": {
          "sample": "77",
          "datatype": "string",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/matching/rajju-vedha-details",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "boy_dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "boy_tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "boy_tz": {
          "sample": 5.5,
          "datatype": "number",
          "other_option": []
        },
        "boy_lat": {
          "sample": "11",
          "datatype": "string",
          "other_option": []
        },
        "boy_lon": {
          "sample": "77",
          "datatype": "string",
          "other_option": []
        },
        "girl_dob": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "girl_tob": {
          "sample": "14:37",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "girl_tz": {
          "sample": 5.5,
          "datatype": "number",
          "other_option": []
        },
        "girl_lat": {
          "sample": "11",
          "datatype": "string",
          "other_option": []
        },
        "girl_lon": {
          "sample": "77",
          "datatype": "string",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/matching/papasamaya-match",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "boy_dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "boy_tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "boy_tz": {
          "sample": 5.5,
          "datatype": "number",
          "other_option": []
        },
        "boy_lat": {
          "sample": "11",
          "datatype": "string",
          "other_option": []
        },
        "boy_lon": {
          "sample": "77",
          "datatype": "string",
          "other_option": []
        },
        "girl_dob": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "girl_tob": {
          "sample": "14:37",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "girl_tz": {
          "sample": 5.5,
          "datatype": "number",
          "other_option": []
        },
        "girl_lat": {
          "sample": "11",
          "datatype": "string",
          "other_option": []
        },
        "girl_lon": {
          "sample": "77",
          "datatype": "string",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/matching/nakshatra-match",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "boy_star": {
          "sample": 1,
          "datatype": "number",
          "other_option": {
            "Ashwini": 1,
            "Bharani": 2,
            "Krittika": 3,
            "Rohini": 4,
            "Mrigashirsha": 5,
            "Ardra": 6,
            "Punarvasu": 7,
            "Pushya": 8,
            "Ashlesha": 9,
            "Magha": 10,
            "PurvaPhalguni": 11,
            "UttaraPhalguni": 12,
            "Hasta": 13,
            "Chitra": 14,
            "Swati": 15,
            "Vishakha": 16,
            "Anuradha": 17,
            "Jyeshtha": 18,
            "Mula": 19,
            "PurvaAshadha": 20,
            "UttaraAshadha": 21,
            "Shravana": 22,
            "Dhanishta": 23,
            "Shatabhisha": 24,
            "PurvaBhadrapada": 25,
            "UttaraBhadrapada": 26,
            "Revati": 27
          }
        },
        "girl_star": {
          "sample": 2,
          "datatype": "number",
          "other_option": {
            "Ashwini": 1,
            "Bharani": 2,
            "Krittika": 3,
            "Rohini": 4,
            "Mrigashirsha": 5,
            "Ardra": 6,
            "Punarvasu": 7,
            "Pushya": 8,
            "Ashlesha": 9,
            "Magha": 10,
            "PurvaPhalguni": 11,
            "UttaraPhalguni": 12,
            "Hasta": 13,
            "Chitra": 14,
            "Swati": 15,
            "Vishakha": 16,
            "Anuradha": 17,
            "Jyeshtha": 18,
            "Mula": 19,
            "PurvaAshadha": 20,
            "UttaraAshadha": 21,
            "Shravana": 22,
            "Dhanishta": 23,
            "Shatabhisha": 24,
            "PurvaBhadrapada": 25,
            "UttaraBhadrapada": 26,
            "Revati": 27
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/matching/western-match",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "boy_sign": {
          "sample": 1,
          "datatype": "number",
          "other_option": {
            "Aries": 1,
            "Taurus": 2,
            "Gemini": 3,
            "Cancer": 4,
            "Leo": 5,
            "Virgo": 6,
            "Libra": 7,
            "Scorpio": 8,
            "Sagittarius": 9,
            "Capricorn": 10,
            "Aquarius": 11,
            "Pisces": 12
          }
        },
        "girl_sign": {
          "sample": 2,
          "datatype": "number",
          "other_option": {
            "Aries": 1,
            "Taurus": 2,
            "Gemini": 3,
            "Cancer": 4,
            "Leo": 5,
            "Virgo": 6,
            "Libra": 7,
            "Scorpio": 8,
            "Sagittarius": 9,
            "Capricorn": 10,
            "Aquarius": 11,
            "Pisces": 12
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/matching/bulk-north-match",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "native_asc_degrees": {
          "sample": "122",
          "datatype": "string",
          "other_option": []
        },
        "native_sun_degrees": {
          "sample": "111",
          "datatype": "string",
          "other_option": []
        },
        "native_moon_degrees": {
          "sample": "101",
          "datatype": "string",
          "other_option": []
        },
        "native_star_no": {
          "sample": 6,
          "datatype": "number",
          "other_option": {
            "Ashwini": 1,
            "Bharani": 2,
            "Krittika": 3,
            "Rohini": 4,
            "Mrigashirsha": 5,
            "Ardra": 6,
            "Punarvasu": 7,
            "Pushya": 8,
            "Ashlesha": 9,
            "Magha": 10,
            "PurvaPhalguni": 11,
            "UttaraPhalguni": 12,
            "Hasta": 13,
            "Chitra": 14,
            "Swati": 15,
            "Vishakha": 16,
            "Anuradha": 17,
            "Jyeshtha": 18,
            "Mula": 19,
            "PurvaAshadha": 20,
            "UttaraAshadha": 21,
            "Shravana": 22,
            "Dhanishta": 23,
            "Shatabhisha": 24,
            "PurvaBhadrapada": 25,
            "UttaraBhadrapada": 26,
            "Revati": 27
          }
        },
        "native_gender": {
          "sample": "male",
          "datatype": "string",
          "other_option": [
            "male",
            "female"
          ]
        },
        "native_rasi_no": {
          "sample": 8,
          "datatype": "number",
          "other_option": {
            "Aries": 1,
            "Taurus": 2,
            "Gemini": 3,
            "Cancer": 4,
            "Leo": 5,
            "Virgo": 6,
            "Libra": 7,
            "Scorpio": 8,
            "Sagittarius": 9,
            "Capricorn": 10,
            "Aquarius": 11,
            "Pisces": 12
          }
        },
        "match_details": {
          "sample": "[[1,1,20.11,12.1,30.12,2232323],[4,2,20,40,30,134423]]",
          "datatype": "string (JSON array of arrays)",
          "format": [
            {
              "index": 0,
              "details": "star_no",
              "datatype": "number"
            },
            {
              "index": 1,
              "details": "rasi_no",
              "datatype": "number"
            },
            {
              "index": 2,
              "details": "asc_degrees",
              "datatype": "number"
            },
            {
              "index": 3,
              "details": "moon_degrees",
              "datatype": "number"
            },
            {
              "index": 4,
              "details": "sun_degrees",
              "datatype": "number"
            },
            {
              "index": 5,
              "details": "reference_id",
              "datatype": "number"
            }
          ],
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "datatype": "string",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/matching/bulk-south-match",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "native_asc_degrees": {
          "sample": "122",
          "datatype": "string",
          "other_option": []
        },
        "native_sun_degrees": {
          "sample": "111",
          "datatype": "string",
          "other_option": []
        },
        "native_moon_degrees": {
          "sample": "101",
          "datatype": "string",
          "other_option": []
        },
        "native_star_no": {
          "sample": 6,
          "datatype": "number",
          "other_option": {
            "Ashwini": 1,
            "Bharani": 2,
            "Krittika": 3,
            "Rohini": 4,
            "Mrigashirsha": 5,
            "Ardra": 6,
            "Punarvasu": 7,
            "Pushya": 8,
            "Ashlesha": 9,
            "Magha": 10,
            "PurvaPhalguni": 11,
            "UttaraPhalguni": 12,
            "Hasta": 13,
            "Chitra": 14,
            "Swati": 15,
            "Vishakha": 16,
            "Anuradha": 17,
            "Jyeshtha": 18,
            "Mula": 19,
            "PurvaAshadha": 20,
            "UttaraAshadha": 21,
            "Shravana": 22,
            "Dhanishta": 23,
            "Shatabhisha": 24,
            "PurvaBhadrapada": 25,
            "UttaraBhadrapada": 26,
            "Revati": 27
          }
        },
        "native_gender": {
          "sample": "male",
          "datatype": "string",
          "other_option": [
            "male",
            "female"
          ]
        },
        "native_rasi_no": {
          "sample": 8,
          "datatype": "number",
          "other_option": {
            "Aries": 1,
            "Taurus": 2,
            "Gemini": 3,
            "Cancer": 4,
            "Leo": 5,
            "Virgo": 6,
            "Libra": 7,
            "Scorpio": 8,
            "Sagittarius": 9,
            "Capricorn": 10,
            "Aquarius": 11,
            "Pisces": 12
          }
        },
        "match_details": {
          "sample": "[[1,1,20.11,12.1,30.12,2232323],[4,2,20,40,30,134423]]",
          "datatype": "string (JSON array of arrays)",
          "format": [
            {
              "index": 0,
              "details": "star_no",
              "datatype": "number"
            },
            {
              "index": 1,
              "details": "rasi_no",
              "datatype": "number"
            },
            {
              "index": 2,
              "details": "asc_degrees",
              "datatype": "number"
            },
            {
              "index": 3,
              "details": "moon_degrees",
              "datatype": "number"
            },
            {
              "index": 4,
              "details": "sun_degrees",
              "datatype": "number"
            },
            {
              "index": 5,
              "details": "reference_id",
              "datatype": "number"
            }
          ],
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/matching/bulk-west-match",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "native_asc_degrees": {
          "sample": "122",
          "datatype": "string",
          "other_option": []
        },
        "native_sun_degrees": {
          "sample": "111",
          "datatype": "string",
          "other_option": []
        },
        "native_moon_degrees": {
          "sample": "101",
          "datatype": "string",
          "other_option": []
        },
        "native_star_no": {
          "sample": 6,
          "datatype": "number",
          "other_option": []
        },
        "native_gender": {
          "sample": "male",
          "datatype": "string",
          "other_option": [
            "male",
            "female"
          ]
        },
        "native_rasi_no": {
          "sample": 8,
          "datatype": "number",
          "other_option": []
        },
        "match_details": {
          "sample": "[[3, 112233],[7, 223344]]",
          "datatype": "string (JSON array of arrays)",
          "format": [
            {
              "index": 0,
              "details": "partner_rasi_no",
              "datatype": "number"
            },
            {
              "index": 1,
              "details": "uid",
              "datatype": "number"
            }
          ],
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "datatype": "string",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dashas/maha-dasha",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dashas/maha-dasha-predictions",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dashas/antar-dasha",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dashas/paryantar-dasha",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dashas/current-mahadasha",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dashas/current-mahadasha-full",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dashas/char-dasha-current",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dashas/char-dasha-main",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dashas/char-dasha-sub",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dashas/yogini-dasha-main",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dashas/yogini-dasha-sub",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dashas/specific-sub-dasha",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "md": {
          "sample": "Sun",
          "datatype": "string",
          "other_option": {
            "Sun": "Sun",
            "Moon": "Moon",
            "Mercury": "Mercury",
            "Venus": "Venus",
            "Mars": "Mars",
            "Saturn": "Saturn",
            "Jupiter": "Jupiter",
            "Rahu": "Rahu",
            "Ketu": "Ketu"
          }
        },
        "ad": {
          "sample": "Moon",
          "datatype": "string",
          "other_option": {
            "Sun": "Sun",
            "Moon": "Moon",
            "Mercury": "Mercury",
            "Venus": "Venus",
            "Mars": "Mars",
            "Saturn": "Saturn",
            "Jupiter": "Jupiter",
            "Rahu": "Rahu",
            "Ketu": "Ketu"
          }
        },
        "pd": {
          "sample": "Mars",
          "datatype": "string",
          "other_option": {
            "Sun": "Sun",
            "Moon": "Moon",
            "Mercury": "Mercury",
            "Venus": "Venus",
            "Mars": "Mars",
            "Saturn": "Saturn",
            "Jupiter": "Jupiter",
            "Rahu": "Rahu",
            "Ketu": "Ketu"
          }
        },
        "sd": {
          "sample": "Mars",
          "datatype": "string",
          "other_option": {
            "Sun": "Sun",
            "Moon": "Moon",
            "Mercury": "Mercury",
            "Venus": "Venus",
            "Mars": "Mars",
            "Saturn": "Saturn",
            "Jupiter": "Jupiter",
            "Rahu": "Rahu",
            "Ketu": "Ketu"
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/find-moon-sign",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/find-sun-sign",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/find-ascendant",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/current-sade-sati",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/extended-kundli-details",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/gem-suggestion",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/numero-table",
    "request_type": "GET",
    "params": 
      {
        "name": {
          "sample": "adity",
          "datatype": "string",
          "other_option": []
        },
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/rudraksh-suggestion",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/varshapal-details",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/varshapal-year-chart",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/sade-sati-table",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/yoga-list",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/kp-planets",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/kp-houses",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/shad-bala",
    "new": true,
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/arutha-padas",
    "new": true,
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/jaimini-karakas",
    "new": true,
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/extended-horoscope/varshapal-month-chart",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/panchang/festivals",
    "new": true,
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "date": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description":"Longitude in decimals",
          "other_option": []
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/panchang/panchang",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "date": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/panchang/monthly-panchang",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "date": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "time": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/panchang/choghadiya-muhurta",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "date": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "time": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/panchang/hora-muhurta",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "date": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "time": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/panchang/moon-calendar",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "date": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/panchang/moon-phase",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "date": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/panchang/moonrise",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "date": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "time": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/panchang/solarnoon",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "date": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "time": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/panchang/sunrise",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "date": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "time": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/panchang/sunset",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "date": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "time": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/panchang/retrogrades",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "year": {
          "sample": "2021",
          "datatype": "string",
          "other_option": []
        },
        "planet": {
          "sample": "Sun",
          "datatype": "string",
          "other_option": {
            "Sun": "Sun",
            "Moon": "Moon",
            "Mercury": "Mercury",
            "Venus": "Venus",
            "Mars": "Mars",
            "Saturn": "Saturn",
            "Jupiter": "Jupiter",
            "Rahu": "Rahu",
            "Ketu": "Ketu"
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/panchang/transit-dates",
    "request_type": "GET",
    "new": true,
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "year": {
          "sample": "2024",
          "datatype": "string",
          "other_option": []
        },
        "planet": {
          "sample": "Sun",
          "datatype": "string",
          "other_option": []
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/utilities/gem-details",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "gem": {
          "sample": "coral",
          "datatype": "string",
          "other_option": {
            "cat_eye": "cat_eye",
            "diamond": "diamond",
            "ruby": "ruby",
            "pearl": "pearl",
            "coral": "coral",
            "gomedhaka": "gomedhaka",
            "yellow_sapphire": "yellow_sapphire",
            "blue_sapphire": "blue_sapphire",
            "emerald": "emerald"
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/utilities/geo-search",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "city": {
          "sample": "coimbatore",
          "datatype": "string",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/utilities/geo-search-advanced",
    "request_type": "GET",
    "new": true,
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "city": {
          "sample": "New York",
          "datatype": "string",
          "other_option": []
        },
        "date": {
          "sample": "01/12/2024",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/utilities/radical-number-details",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "radical_number": {
          "sample": 5,
          "datatype": "number",
          "other_option": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/utilities/nakshatra-vastu-details",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "nakshatra": {
          "sample": "Ashwini",
          "datatype": "string",
          "other_option": {
            "Ashwini": 1,
            "Bharani": 2,
            "Krittika": 3,
            "Rohini": 4,
            "Mrigashirsha": 5,
            "Ardra": 6,
            "Punarvasu": 7,
            "Pushya": 8,
            "Ashlesha": 9,
            "Magha": 10,
            "PurvaPhalguni": 11,
            "UttaraPhalguni": 12,
            "Hasta": 13,
            "Chitra": 14,
            "Swati": 15,
            "Vishakha": 16,
            "Anuradha": 17,
            "Jyeshtha": 18,
            "Mula": 19,
            "PurvaAshadha": 20,
            "UttaraAshadha": 21,
            "Shravana": 22,
            "Dhanishta": 23,
            "Shatabhisha": 24,
            "PurvaBhadrapada": 25,
            "UttaraBhadrapada": 26,
            "Revati": 27
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dosha/mangal-dosh",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dosha/kaalsarp-dosh",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dosha/manglik-dosh",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dosha/pitra-dosh",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/dosha/papasamaya",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "77",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/pdf/horoscope-queue",
    "request_type": "GET",
    "new": true,
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "name": {
          "sample": "hmm",
          "datatype": "string",
          "other_option": []
        },
        "city": {
          "sample": "Jammu and Kashmir",
          "datatype": "string",
          "other_option": []
        },
        "dob": {
          "sample": "04/12/1980",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "09:15",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": 24,
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": 83,
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "pob": {
          "sample": "Jammu and Kashmir",
          "datatype": "string",
          "other_option": []
        },
        "style": {
          "sample": "north",
          "datatype": "string",
          "other_option": [
            "north",
            "south"
          ]
        },
        "company_name": {
          "sample": "AstroForU",
          "datatype": "string",
          "other_option": []
        },
        "color": {
          "sample": 75,
          "datatype": "number",
          "other_option": []
        },
        "address": {
          "sample": "Flat No-7545 , B 10 Vasant Kunj, Near Bhatnagar School, New Delhi 110070",
          "datatype": "string",
          "other_option": []
        },
        "phone": {
          "sample": "9971216316",
          "datatype": "string",
          "other_option": []
        },
        "email": {
          "sample": "info@astroforu.com",
          "datatype": "string",
          "other_option": []
        },
        "website": {
          "sample": "https://astrobharat.test",
          "datatype": "string",
          "other_option": []
        },
        "pdf_type": {
          "sample": "small",
          "datatype": "string",
          "other_option":  ["small", "medium", "large","prediction","12_month_prediction"],
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/pdf/matching-queue",
    "request_type": "GET",
    "new": true,
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "boy_name": {
          "sample": "haha",
          "datatype": "string",
          "other_option": []
        },
        "boy_dob": {
          "sample": "09/10/2024",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "boy_tob": {
          "sample": "10:41",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "boy_tz": {
          "sample": 5.5,
          "datatype": "number",
          "other_option": []
        },
        "boy_lat": {
          "sample": 11,
          "datatype": "number",
          "other_option": []
        },
        "boy_lon": {
          "sample": 77,
          "datatype": "number",
          "other_option": []
        },
        "boy_pob": {
          "sample": "Coimbatore",
          "datatype": "string",
          "other_option": []
        },
        "girl_name": {
          "sample": "121212",
          "datatype": "string",
          "other_option": []
        },
        "girl_dob": {
          "sample": "12/11/2011",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "girl_tob": {
          "sample": "20:28",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "girl_tz": {
          "sample": 5.5,
          "datatype": "number",
          "other_option": []
        },
        "girl_lat": {
          "sample": 11,
          "datatype": "number",
          "other_option": []
        },
        "girl_lon": {
          "sample": 77,
          "datatype": "number",
          "other_option": []
        },
        "girl_pob": {
          "sample": "dfdfdf",
          "datatype": "string",
          "other_option": []
        },
        "style": {
          "sample": "north",
          "datatype": "string",
          "other_option": [
            "north",
            "south"
          ]
        },
        "color": {
          "sample": 44,
          "datatype": "number",
          "other_option": []
        },
        "company_name": {
          "sample": "Your Company Name",
          "datatype": "string",
          "other_option": []
        },
        "address": {
          "sample": "asdre",
          "datatype": "string",
          "other_option": []
        },
        "website": {
          "sample": "Sample.com",
          "datatype": "string",
          "other_option": []
        },
        "email": {
          "sample": "sample@sample.Xom",
          "datatype": "string",
          "other_option": []
        },
        "phone": {
          "sample": 33,
          "datatype": "number",
          "other_option": []
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/natal-chart",
    "request_type": "GET",
    "new": true,
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11.7749",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "76.994",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "size": {
          "sample": "400",
          "datatype": "string",
          "other_option": []
        },
        "format": {
          "sample": "base64",
          "datatype": "string",
          "other_option": [
            "base64",
            "utf8"
          ]
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/find-sun-sign",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11.7749",
          "datatype": "float",
          "other_option": []
        },
        "lon": {
          "sample": "76.994",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/transit-chart",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11.7749",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "76.994",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "transit_date": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "transit_time": {
          "sample": "02:47",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "transit_lat": {
          "sample": "12.9716",
          "datatype": "string",
          "other_option": []
        },
        "transit_lon": {
          "sample": "80.5946",
          "datatype": "string",
          "other_option": []
        },
        "transit_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "datatype": "string",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "size": {
          "sample": "400",
          "datatype": "string",
          "other_option": []
        },
        "format": {
          "sample": "base64",
          "datatype": "string",
          "other_option": [
            "base64",
            "utf8"
          ]
        },
        "natal_color": {
          "sample": "#00ced1",
          "datatype": "string",
          "description": "APIs do not accept color values with #; they may require only hex digits or a different format.",
          "other_option": []
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/synastry-chart",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "p1_dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p1_tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p1_lat": {
          "sample": "11.7749",
          "datatype": "string",
          "other_option": []
        },
        "p1_lon": {
          "sample": "76.994",
          "datatype": "string",
          "other_option": []
        },
        "p1_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "p2_dob": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p2_tob": {
          "sample": "02:47",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p2_lat": {
          "sample": "12.9716",
          "datatype": "string",
          "other_option": []
        },
        "p2_lon": {
          "sample": "80.5946",
          "datatype": "string",
          "other_option": []
        },
        "p2_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "size": {
          "sample": "400",
          "datatype": "string",
          "other_option": []
        },
        "format": {
          "sample": "base64",
          "datatype": "string",
          "other_option": [
            "base64",
            "utf8"
          ]
        },
        "p1_color": {
          "sample": "#ff0000",
          "datatype": "string",
          "other_option": []
        },
        "p2_color": {
          "sample": "#0000ff",
          "datatype": "string",
          "other_option": []
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/synastry-aspects",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "p1_dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p1_tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p1_lat": {
          "sample": "11.7749",
          "datatype": "string",
          "other_option": []
        },
        "p1_lon": {
          "sample": "76.994",
          "datatype": "string",
          "other_option": []
        },
        "p1_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "p2_dob": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p2_tob": {
          "sample": "02:47",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p2_lat": {
          "sample": "12.9716",
          "datatype": "string",
          "other_option": []
        },
        "p2_lon": {
          "sample": "80.5946",
          "datatype": "string",
          "other_option": []
        },
        "p2_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/synastry-aspect-predictions",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "p1_dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p1_tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p1_lat": {
          "sample": "11.7749",
          "datatype": "string",
          "other_option": []
        },
        "p1_lon": {
          "sample": "76.994",
          "datatype": "string",
          "other_option": []
        },
        "p1_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "p2_dob": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p2_tob": {
          "sample": "02:47",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p2_lat": {
          "sample": "12.9716",
          "datatype": "string",
          "other_option": []
        },
        "p2_lon": {
          "sample": "80.5946",
          "datatype": "string",
          "other_option": []
        },
        "p2_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/transit-planets",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11.7749",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "76.994",
          "datatype": "",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "transit_date": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "transit_time": {
          "sample": "02:47",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "transit_lat": {
          "sample": "12.9716",
          "datatype": "string",
          "other_option": []
        },
        "transit_lon": {
          "sample": "80.5946",
          "datatype": "string",
          "other_option": []
        },
        "transit_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "direction": {
          "sample": "p1_to_p2",
          "datatype": "string",
          "other_option": []
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/daily-transit-prediction",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11.7749",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "76.994",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "transit_date": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "transit_time": {
          "sample": "02:47",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "transit_lat": {
          "sample": "12.9716",
          "datatype": "string",
          "other_option": []
        },
        "transit_lon": {
          "sample": "80.5946",
          "datatype": "string",
          "other_option": []
        },
        "transit_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "direction": {
          "sample": "p1_to_p2",
          "datatype": "string",
          "other_option": []
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/cusps-details",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "12/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "80",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/aspects",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "12/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "80",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/planet-details",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "12/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "80",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/daily-transits",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11.7749",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "76.994",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "start_date": {
          "sample": "11/12/2024",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "planet": {
          "sample": "sun",
          "datatype": "string",
          "other_option": []
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/weekly-transits",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11.7749",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "76.994",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "start_date": {
          "sample": "11/12/2024",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "planet": {
          "sample": "sun",
          "datatype": "string",
          "other_option": []
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/monthly-transits",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11.7749",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "76.994",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "start_date": {
          "sample": "11/12/2024",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "planet": {
          "sample": "sun",
          "datatype": "string",
          "other_option": []
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/detailed-planet-report",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11.7749",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "76.994",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "size": {
          "sample": "400",
          "datatype": "string",
          "other_option": []
        },
        "format": {
          "sample": "base64",
          "datatype": "string",
          "other_option": [
            "base64",
            "utf8"
          ]
        },
        "planet": {
          "sample": "sun",
          "datatype": "string",
          "other_option": []
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/planet-transit-dates",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "year": {
          "sample": "2020",
          "datatype": "string",
          "other_option": []
        },
        "planet": {
          "sample": "sun",
          "datatype": "string",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/simple-compatibility",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "p1_sign": {
          "sample": "aries",
          "datatype": "string",
          "other_option": []
        },
        "p2_sign": {
          "sample": "leo",
          "datatype": "string",
          "other_option": []
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/node-position-report",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11.7749",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "76.994",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": []
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "node": {
          "sample": "Northnode",
          "datatype": "string",
          "other_option": []
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/planet-position-report",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11.7749",
          "datatype": "float",
          "description": "Latitude of the location in decimal degrees. Positive for north, negative for south. Example: 11.1234",
          "other_option": []
        },
        "lon": {
          "sample": "76.994",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": []
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        },
        "planet": {
          "sample": "Sun",
          "datatype": "string",
          "other_option": []
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/ascendant-position-report",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "lat": {
          "sample": "11.7749",
          "datatype": "float",
          "other_option": []
        },
        "lon": {
          "sample": "76.994",
          "datatype": "float",
          "description": "Longitude of the location in decimal degrees. Positive for east, negative for west. Example: 77.5678",
          "other_option": []
        },
        "tz": {
          "sample": 5.5,
          "datatype": "float",
          "description": "Timezone offset from UTC in decimal hours. Use positive values for locations east of UTC and negative for west. For example, 5.5 for UTC+5:30, -4 for UTC-4:00.",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": []
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/synastry-career-predictions",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "p1_dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p1_tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p1_lat": {
          "sample": "11.7749",
          "datatype": "string",
          "other_option": []
        },
        "p1_lon": {
          "sample": "76.994",
          "datatype": "string",
          "other_option": []
        },
        "p1_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "p2_dob": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p2_tob": {
          "sample": "02:47",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p2_lat": {
          "sample": "12.9716",
          "datatype": "string",
          "other_option": []
        },
        "p2_lon": {
          "sample": "80.5946",
          "datatype": "string",
          "other_option": []
        },
        "p2_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/synastry-finance-predictions",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "p1_dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p1_tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p1_lat": {
          "sample": "11.7749",
          "datatype": "string",
          "other_option": []
        },
        "p1_lon": {
          "sample": "76.994",
          "datatype": "string",
          "other_option": []
        },
        "p1_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "p2_dob": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p2_tob": {
          "sample": "02:47",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p2_lat": {
          "sample": "12.9716",
          "datatype": "string",
          "other_option": []
        },
        "p2_lon": {
          "sample": "80.5946",
          "datatype": "string",
          "other_option": []
        },
        "p2_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/synastry-intimacy-predictions",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "p1_dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p1_tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p1_lat": {
          "sample": "11.7749",
          "datatype": "string",
          "other_option": []
        },
        "p1_lon": {
          "sample": "76.994",
          "datatype": "string",
          "other_option": []
        },
        "p1_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "p2_dob": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p2_tob": {
          "sample": "02:47",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p2_lat": {
          "sample": "12.9716",
          "datatype": "string",
          "other_option": []
        },
        "p2_lon": {
          "sample": "80.5946",
          "datatype": "string",
          "other_option": []
        },
        "p2_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/synastry-health-predictions",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "p1_dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p1_tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p1_lat": {
          "sample": "11.7749",
          "datatype": "string",
          "other_option": []
        },
        "p1_lon": {
          "sample": "76.994",
          "datatype": "string",
          "other_option": []
        },
        "p1_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "p2_dob": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p2_tob": {
          "sample": "02:47",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p2_lat": {
          "sample": "12.9716",
          "datatype": "string",
          "other_option": []
        },
        "p2_lon": {
          "sample": "80.5946",
          "datatype": "string",
          "other_option": []
        },
        "p2_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/synastry-spirituality-predictions",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "p1_dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p1_tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p1_lat": {
          "sample": "11.7749",
          "datatype": "string",
          "other_option": []
        },
        "p1_lon": {
          "sample": "76.994",
          "datatype": "string",
          "other_option": []
        },
        "p1_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "p2_dob": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p2_tob": {
          "sample": "02:47",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p2_lat": {
          "sample": "12.9716",
          "datatype": "string",
          "other_option": []
        },
        "p2_lon": {
          "sample": "80.5946",
          "datatype": "string",
          "other_option": []
        },
        "p2_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/synastry-emotion-predictions",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "p1_dob": {
          "sample": "11/03/1994",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p1_tob": {
          "sample": "11:40",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p1_lat": {
          "sample": "11.7749",
          "datatype": "string",
          "other_option": []
        },
        "p1_lon": {
          "sample": "76.994",
          "datatype": "string",
          "other_option": []
        },
        "p1_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "p2_dob": {
          "sample": "16/11/1995",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "p2_tob": {
          "sample": "02:47",
          "datatype": "string",
          "template": "HH:mm",
          "other_option": []
        },
        "p2_lat": {
          "sample": "12.9716",
          "datatype": "string",
          "other_option": []
        },
        "p2_lon": {
          "sample": "80.5946",
          "datatype": "string",
          "other_option": []
        },
        "p2_tz": {
          "sample": "5.5",
          "datatype": "string",
          "other_option": []
        },
        "house_type": {
          "sample": "placidus",
          "datatype": "string",
          "other_option": {
            "placidus": "placidus",
            "koch": "koch",
            "topocentric": "topocentric",
            "regiomontanus": "regiomontanus",
            "campanus": "campanus",
            "whole_sign": "whole-sign",
            "equal_house": "equal-house"
          }
        },
        "zodiac_type": {
          "sample": "tropical",
          "datatype": "string",
          "other_option": [
            "Sidereal",
            "Tropical"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/yearly-horoscope",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "year": {
          "sample": "2025",
          "datatype": "string",
          "other_option": []
        },
        "zodiac": {
          "sample": "7",
          "datatype": "string",
          "other_option": {
            "Aries": 1,
            "Taurus": 2,
            "Gemini": 3,
            "Cancer": 4,
            "Leo": 5,
            "Virgo": 6,
            "Libra": 7,
            "Scorpio": 8,
            "Sagittarius": 9,
            "Capricorn": 10,
            "Aquarius": 11,
            "Pisces": 12
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/daily-horoscope",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "zodiac": {
          "sample": "2",
          "datatype": "string",
          "other_option": {
            "Aries": 1,
            "Taurus": 2,
            "Gemini": 3,
            "Cancer": 4,
            "Leo": 5,
            "Virgo": 6,
            "Libra": 7,
            "Scorpio": 8,
            "Sagittarius": 9,
            "Capricorn": 10,
            "Aquarius": 11,
            "Pisces": 12
          }
        },
        "date": {
          "sample": "25/05/2025",
          "datatype": "string",
          "template": "DD/MM/YYYY",
          "other_option": []
        },
        "split": {
          "sample": "true",
          "datatype": "string",
          "other_option": [
            "true",
            "false"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/western/weekly-horoscope",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "zodiac": {
          "sample": "2",
          "datatype": "string",
          "other_option": {
            "Aries": 1,
            "Taurus": 2,
            "Gemini": 3,
            "Cancer": 4,
            "Leo": 5,
            "Virgo": 6,
            "Libra": 7,
            "Scorpio": 8,
            "Sagittarius": 9,
            "Capricorn": 10,
            "Aquarius": 11,
            "Pisces": 12
          }
        },
        "week": {
          "sample": "thisweek",
          "datatype": "string",
          "other_option": [
            "thisweek",
            "nextweek"
          ]
        },
        "split": {
          "sample": "true",
          "datatype": "string",
          "other_option": [
            "true",
            "false"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/tarot/shuffle",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "shuffle_type": {
          "sample": "both",
          "datatype": "string",
          "other_option": [
            "both",
            "major",
            "minor"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/tarot/yes-no",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "card_name": {
          "sample": "the_fool",
          "datatype": "string",
          "other_option": {
            "the_fool": "the_fool",
            "the_magician": "the_magician",
            "the_high_priestess": "the_high_priestess",
            "the_empress": "the_empress",
            "the_emperor": "the_emperor",
            "the_hierophant": "the_hierophant",
            "the_lovers": "the_lovers",
            "the_chariot": "the_chariot",
            "strength": "strength",
            "the_hermit": "the_hermit",
            "wheel_of_fortune": "wheel_of_fortune",
            "justice": "justice",
            "the_hanged_man": "the_hanged_man",
            "death": "death",
            "temperance": "temperance",
            "the_devil": "the_devil",
            "the_tower": "the_tower",
            "the_star": "the_star",
            "the_moon": "the_moon",
            "the_sun": "the_sun",
            "judgement": "judgement",
            "the_world": "the_world",
            "ace_of_wands": "ace_of_wands",
            "two_of_wands": "two_of_wands",
            "three_of_wands": "three_of_wands",
            "four_of_wands": "four_of_wands",
            "five_of_wands": "five_of_wands",
            "six_of_wands": "six_of_wands",
            "seven_of_wands": "seven_of_wands",
            "eight_of_wands": "eight_of_wands",
            "nine_of_wands": "nine_of_wands",
            "ten_of_wands": "ten_of_wands",
            "page_of_wands": "page_of_wands",
            "knight_of_wands": "knight_of_wands",
            "queen_of_wands": "queen_of_wands",
            "king_of_wands": "king_of_wands",
            "ace_of_cups": "ace_of_cups",
            "two_of_cups": "two_of_cups",
            "three_of_cups": "three_of_cups",
            "four_of_cups": "four_of_cups",
            "five_of_cups": "five_of_cups",
            "six_of_cups": "six_of_cups",
            "seven_of_cups": "seven_of_cups",
            "eight_of_cups": "eight_of_cups",
            "nine_of_cups": "nine_of_cups",
            "ten_of_cups": "ten_of_cups",
            "page_of_cups": "page_of_cups",
            "knight_of_cups": "knight_of_cups",
            "queen_of_cups": "queen_of_cups",
            "king_of_cups": "king_of_cups",
            "ace_of_swords": "ace_of_swords",
            "two_of_swords": "two_of_swords",
            "three_of_swords": "three_of_swords",
            "four_of_swords": "four_of_swords",
            "five_of_swords": "five_of_swords",
            "six_of_swords": "six_of_swords",
            "seven_of_swords": "seven_of_swords",
            "eight_of_swords": "eight_of_swords",
            "nine_of_swords": "nine_of_swords",
            "ten_of_swords": "ten_of_swords",
            "page_of_swords": "page_of_swords",
            "knight_of_swords": "knight_of_swords",
            "queen_of_swords": "queen_of_swords",
            "king_of_swords": "king_of_swords",
            "ace_of_pentacles": "ace_of_pentacles",
            "two_of_pentacles": "two_of_pentacles",
            "three_of_pentacles": "three_of_pentacles",
            "four_of_pentacles": "four_of_pentacles",
            "five_of_pentacles": "five_of_pentacles",
            "six_of_pentacles": "six_of_pentacles",
            "seven_of_pentacles": "seven_of_pentacles",
            "eight_of_pentacles": "eight_of_pentacles",
            "nine_of_pentacles": "nine_of_pentacles",
            "ten_of_pentacles": "ten_of_pentacles",
            "page_of_pentacles": "page_of_pentacles",
            "knight_of_pentacles": "knight_of_pentacles",
            "queen_of_pentacles": "queen_of_pentacles",
            "king_of_pentacles": "king_of_pentacles"
          }
        },
        "direction": {
          "sample": "upright",
          "datatype": "string",
          "other_option": [
            "upright",
            "reverse"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/tarot/career-select",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "card_name": {
          "sample": "the_magician",
          "datatype": "string",
          "other_option": {
            "the_fool": "the_fool",
            "the_magician": "the_magician",
            "the_high_priestess": "the_high_priestess",
            "the_empress": "the_empress",
            "the_emperor": "the_emperor",
            "the_hierophant": "the_hierophant",
            "the_lovers": "the_lovers",
            "the_chariot": "the_chariot",
            "strength": "strength",
            "the_hermit": "the_hermit",
            "wheel_of_fortune": "wheel_of_fortune",
            "justice": "justice",
            "the_hanged_man": "the_hanged_man",
            "death": "death",
            "temperance": "temperance",
            "the_devil": "the_devil",
            "the_tower": "the_tower",
            "the_star": "the_star",
            "the_moon": "the_moon",
            "the_sun": "the_sun",
            "judgement": "judgement",
            "the_world": "the_world",
          
          }
        },
        "direction": {
          "sample": "reverse",
          "datatype": "string",
          "other_option": [
            "upright",
            "reverse"
          ]
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/tarot/love-triangle",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "card_self": {
          "sample": "the_high_priestess",
          "datatype": "string",
          "other_option": {
            "the_fool": "the_fool",
            "the_magician": "the_magician",
            "the_high_priestess": "the_high_priestess",
            "the_empress": "the_empress",
            "the_emperor": "the_emperor",
            "the_hierophant": "the_hierophant",
            "the_lovers": "the_lovers",
            "the_chariot": "the_chariot",
            "strength": "strength",
            "the_hermit": "the_hermit",
            "wheel_of_fortune": "wheel_of_fortune",
            "justice": "justice",
            "the_hanged_man": "the_hanged_man",
            "death": "death",
            "temperance": "temperance",
            "the_devil": "the_devil",
            "the_tower": "the_tower",
            "the_star": "the_star",
            "the_moon": "the_moon",
            "the_sun": "the_sun",
            "judgement": "judgement",
            "the_world": "the_world"
          }
        },
        "card_lover1": {
          "sample": "the_empress",
          "datatype": "string",
          "other_option": {
            "the_fool": "the_fool",
            "the_magician": "the_magician",
            "the_high_priestess": "the_high_priestess",
            "the_empress": "the_empress",
            "the_emperor": "the_emperor",
            "the_hierophant": "the_hierophant",
            "the_lovers": "the_lovers",
            "the_chariot": "the_chariot",
            "strength": "strength",
            "the_hermit": "the_hermit",
            "wheel_of_fortune": "wheel_of_fortune",
            "justice": "justice",
            "the_hanged_man": "the_hanged_man",
            "death": "death",
            "temperance": "temperance",
            "the_devil": "the_devil",
            "the_tower": "the_tower",
            "the_star": "the_star",
            "the_moon": "the_moon",
            "the_sun": "the_sun",
            "judgement": "judgement",
            "the_world": "the_world"
          }
        },
        "card_lover2": {
          "sample": "the_emperor",
          "datatype": "string",
          "other_option": {
            "the_fool": "the_fool",
            "the_magician": "the_magician",
            "the_high_priestess": "the_high_priestess",
            "the_empress": "the_empress",
            "the_emperor": "the_emperor",
            "the_hierophant": "the_hierophant",
            "the_lovers": "the_lovers",
            "the_chariot": "the_chariot",
            "strength": "strength",
            "the_hermit": "the_hermit",
            "wheel_of_fortune": "wheel_of_fortune",
            "justice": "justice",
            "the_hanged_man": "the_hanged_man",
            "death": "death",
            "temperance": "temperance",
            "the_devil": "the_devil",
            "the_tower": "the_tower",
            "the_star": "the_star",
            "the_moon": "the_moon",
            "the_sun": "the_sun",
            "judgement": "judgement",
            "the_world": "the_world"
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/tarot/daily",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "card_name": {
          "sample": "the_hierophant",
          "datatype": "string",
          "other_option": {
            "the_fool": "the_fool",
            "the_magician": "the_magician",
            "the_high_priestess": "the_high_priestess",
            "the_empress": "the_empress",
            "the_emperor": "the_emperor",
            "the_hierophant": "the_hierophant",
            "the_lovers": "the_lovers",
            "the_chariot": "the_chariot",
            "strength": "strength",
            "the_hermit": "the_hermit",
            "wheel_of_fortune": "wheel_of_fortune",
            "justice": "justice",
            "the_hanged_man": "the_hanged_man",
            "death": "death",
            "temperance": "temperance",
            "the_devil": "the_devil",
            "the_tower": "the_tower",
            "the_star": "the_star",
            "the_moon": "the_moon",
            "the_sun": "the_sun",
            "judgement": "judgement",
            "the_world": "the_world"
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/tarot/in-depth-love",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "card_name": {
          "sample": "the_lovers",
          "datatype": "string",
          "other_option": {
            "the_fool": "the_fool",
            "the_magician": "the_magician",
            "the_high_priestess": "the_high_priestess",
            "the_empress": "the_empress",
            "the_emperor": "the_emperor",
            "the_hierophant": "the_hierophant",
            "the_lovers": "the_lovers",
            "the_chariot": "the_chariot",
            "strength": "strength",
            "the_hermit": "the_hermit",
            "wheel_of_fortune": "wheel_of_fortune",
            "justice": "justice",
            "the_hanged_man": "the_hanged_man",
            "death": "death",
            "temperance": "temperance",
            "the_devil": "the_devil",
            "the_tower": "the_tower",
            "the_star": "the_star",
            "the_moon": "the_moon",
            "the_sun": "the_sun",
            "judgement": "judgement",
            "the_world": "the_world"
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/tarot/erotic-love",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "card_name": {
          "sample": "the_chariot",
          "datatype": "string",
          "other_option": {
            "the_fool": "the_fool",
            "the_magician": "the_magician",
            "the_high_priestess": "the_high_priestess",
            "the_empress": "the_empress",
            "the_emperor": "the_emperor",
            "the_hierophant": "the_hierophant",
            "the_lovers": "the_lovers",
            "the_chariot": "the_chariot",
            "strength": "strength",
            "the_hermit": "the_hermit",
            "wheel_of_fortune": "wheel_of_fortune",
            "justice": "justice",
            "the_hanged_man": "the_hanged_man",
            "death": "death",
            "temperance": "temperance",
            "the_devil": "the_devil",
            "the_tower": "the_tower",
            "the_star": "the_star",
            "the_moon": "the_moon",
            "the_sun": "the_sun",
            "judgement": "judgement",
            "the_world": "the_world"
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/tarot/made-for-each-other-or-not",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "card_name": {
          "sample": "strength",
          "datatype": "string",
          "other_option": {
            "the_fool": "the_fool",
            "the_magician": "the_magician",
            "the_high_priestess": "the_high_priestess",
            "the_empress": "the_empress",
            "the_emperor": "the_emperor",
            "the_hierophant": "the_hierophant",
            "the_lovers": "the_lovers",
            "the_chariot": "the_chariot",
            "strength": "strength",
            "the_hermit": "the_hermit",
            "wheel_of_fortune": "wheel_of_fortune",
            "justice": "justice",
            "the_hanged_man": "the_hanged_man",
            "death": "death",
            "temperance": "temperance",
            "the_devil": "the_devil",
            "the_tower": "the_tower",
            "the_star": "the_star",
            "the_moon": "the_moon",
            "the_sun": "the_sun",
            "judgement": "judgement",
            "the_world": "the_world"
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/tarot/flirt-reading",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "card_name": {
          "sample": "the_hermit",
          "datatype": "string",
          "other_option": {
            "the_fool": "the_fool",
            "the_magician": "the_magician",
            "the_high_priestess": "the_high_priestess",
            "the_empress": "the_empress",
            "the_emperor": "the_emperor",
            "the_hierophant": "the_hierophant",
            "the_lovers": "the_lovers",
            "the_chariot": "the_chariot",
            "strength": "strength",
            "the_hermit": "the_hermit",
            "wheel_of_fortune": "wheel_of_fortune",
            "justice": "justice",
            "the_hanged_man": "the_hanged_man",
            "death": "death",
            "temperance": "temperance",
            "the_devil": "the_devil",
            "the_tower": "the_tower",
            "the_star": "the_star",
            "the_moon": "the_moon",
            "the_sun": "the_sun",
            "judgement": "judgement",
            "the_world": "the_world"
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/tarot/romantic-breakup",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "card_cause": {
          "sample": "wheel_of_fortune",
          "datatype": "string",
          "other_option": {
            "the_fool": "the_fool",
            "the_magician": "the_magician",
            "the_high_priestess": "the_high_priestess",
            "the_empress": "the_empress",
            "the_emperor": "the_emperor",
            "the_hierophant": "the_hierophant",
            "the_lovers": "the_lovers",
            "the_chariot": "the_chariot",
            "strength": "strength",
            "the_hermit": "the_hermit",
            "wheel_of_fortune": "wheel_of_fortune",
            "justice": "justice",
            "the_hanged_man": "the_hanged_man",
            "death": "death",
            "temperance": "temperance",
            "the_devil": "the_devil",
            "the_tower": "the_tower",
            "the_star": "the_star",
            "the_moon": "the_moon",
            "the_sun": "the_sun",
            "judgement": "judgement",
            "the_world": "the_world"
          }
        },
        "card_advise": {
          "sample": "justice",
          "datatype": "string",
          "other_option": {
            "the_fool": "the_fool",
            "the_magician": "the_magician",
            "the_high_priestess": "the_high_priestess",
            "the_empress": "the_empress",
            "the_emperor": "the_emperor",
            "the_hierophant": "the_hierophant",
            "the_lovers": "the_lovers",
            "the_chariot": "the_chariot",
            "strength": "strength",
            "the_hermit": "the_hermit",
            "wheel_of_fortune": "wheel_of_fortune",
            "justice": "justice",
            "the_hanged_man": "the_hanged_man",
            "death": "death",
            "temperance": "temperance",
            "the_devil": "the_devil",
            "the_tower": "the_tower",
            "the_star": "the_star",
            "the_moon": "the_moon",
            "the_sun": "the_sun",
            "judgement": "judgement",
            "the_world": "the_world"
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/tarot/business-breakup",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "card_cause": {
          "sample": "the_hanged_man",
          "datatype": "string",
          "other_option": {
            "the_fool": "the_fool",
            "the_magician": "the_magician",
            "the_high_priestess": "the_high_priestess",
            "the_empress": "the_empress",
            "the_emperor": "the_emperor",
            "the_hierophant": "the_hierophant",
            "the_lovers": "the_lovers",
            "the_chariot": "the_chariot",
            "strength": "strength",
            "the_hermit": "the_hermit",
            "wheel_of_fortune": "wheel_of_fortune",
            "justice": "justice",
            "the_hanged_man": "the_hanged_man",
            "death": "death",
            "temperance": "temperance",
            "the_devil": "the_devil",
            "the_tower": "the_tower",
            "the_star": "the_star",
            "the_moon": "the_moon",
            "the_sun": "the_sun",
            "judgement": "judgement",
            "the_world": "the_world"
          }
        },
        "card_advise": {
          "sample": "death",
          "datatype": "string",
          "other_option": {
            "the_fool": "the_fool",
            "the_magician": "the_magician",
            "the_high_priestess": "the_high_priestess",
            "the_empress": "the_empress",
            "the_emperor": "the_emperor",
            "the_hierophant": "the_hierophant",
            "the_lovers": "the_lovers",
            "the_chariot": "the_chariot",
            "strength": "strength",
            "the_hermit": "the_hermit",
            "wheel_of_fortune": "wheel_of_fortune",
            "justice": "justice",
            "the_hanged_man": "the_hanged_man",
            "death": "death",
            "temperance": "temperance",
            "the_devil": "the_devil",
            "the_tower": "the_tower",
            "the_star": "the_star",
            "the_moon": "the_moon",
            "the_sun": "the_sun",
            "judgement": "judgement",
            "the_world": "the_world"
          }
        },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  },
  {
    "url": "https://api.vedicastroapi.com/v3-json/tarot/fortune-cookie",
    "request_type": "GET",
    "params": 
      {
        "api_key": {
        "sample": "YOUR_API_KEY",
        "datatype": "string",
        "other_option": [],
        "description": "A unique identifier provided to you for authenticating API requests. Keep this key secure and do not share it publicly."
      },
        "lang": {
          "sample": "en",
          "other_option": {
            "Bengali": "be",
            "French": "fr",
            "Hindi": "hi",
            "Kannada": "ka",
            "Malayalam": "ml",
            "Spanish": "sp",
            "Tamil": "ta",
            "Telugu": "te",
            "Marathi": "mr",
            "Sinhalese": "si",
            "Nepali": "ne",
            "Korean": "ko",
            "Japanese": "ja",
            "Gujarati": "gu",
            "Portuguese": "pt",
            "German": "de",
            "Turkish": "tr",
            "Russian": "ru",
            "Italian": "it",
            "Dutch": "nl",
            "Polish": "pl"
          }
        }
      }
    
  }
]