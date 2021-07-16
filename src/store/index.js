import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    en : {
      one : 'Total confirmed',
      two : 'Total recovered',
      three : 'Total death',
      four : 'New confirmed',
      five : 'New recovered',
      six : 'New death',
      seven : 'Country'
    },
    fr : {
      one : 'Total confirmé',
      two : 'Total sauvè',
      three : 'Total mort',
      four : 'Nouveaux confirmé',
      five : 'Nouveaux sauvè',
      six : 'Nouveaux mort',
      seven : 'Pays'
    },
    ar : {
      one : 'الحالات المؤكدة',
      two : 'الحالات شفيت',
      three : 'الحالات الميتة',
      four : 'حالات جديدة',
      five : 'الحالات المنقذة',
      six : 'الحالات الميتة',
      seven : 'البلد'
    },
    confirmed : 0,
    deaths : 0,
    reco : 0,
    newConfirmed : 0,
    newDeaths : 0,
    newReco : 0,
    allData : [],
    latUser : 0,
    longUser : 0,
    countryCodes : [
    {
          "country" : "Albania",
          "alpha2" : "AL",
          "alpha3" : "ALB",
          "numeric" : 8,
          "latitude" : 41,
          "longitude" : 20
        },
    {
          "country" : "Algeria",
          "alpha2" : "DZ",
          "alpha3" : "DZA",
          "numeric" : 12,
          "latitude" : 28,
          "longitude" : 3
        },
    {
          "country" : "American Samoa",
          "alpha2" : "AS",
          "alpha3" : "ASM",
          "numeric" : 16,
          "latitude" : -14.3333,
          "longitude" : -170
        },
    {
          "country" : "Andorra",
          "alpha2" : "AD",
          "alpha3" : "AND",
          "numeric" : 20,
          "latitude" : 42.5,
          "longitude" : 1.6
        },
    {
          "country" : "Angola",
          "alpha2" : "AO",
          "alpha3" : "AGO",
          "numeric" : 24,
          "latitude" : -12.5,
          "longitude" : 18.5
        },
    {
          "country" : "Anguilla",
          "alpha2" : "AI",
          "alpha3" : "AIA",
          "numeric" : 660,
          "latitude" : 18.25,
          "longitude" : -63.1667
        },
    {
          "country" : "Antarctica",
          "alpha2" : "AQ",
          "alpha3" : "ATA",
          "numeric" : 10,
          "latitude" : -90,
          "longitude" : 0
        },
    {
          "country" : "Antigua and Barbuda",
          "alpha2" : "AG",
          "alpha3" : "ATG",
          "numeric" : 28,
          "latitude" : 17.05,
          "longitude" : -61.8
        },
    {
          "country" : "Argentina",
          "alpha2" : "AR",
          "alpha3" : "ARG",
          "numeric" : 32,
          "latitude" : -34,
          "longitude" : -64
        },
    {
          "country" : "Armenia",
          "alpha2" : "AM",
          "alpha3" : "ARM",
          "numeric" : 51,
          "latitude" : 40,
          "longitude" : 45
        },
    {
          "country" : "Aruba",
          "alpha2" : "AW",
          "alpha3" : "ABW",
          "numeric" : 533,
          "latitude" : 12.5,
          "longitude" : -69.9667
        },
    {
          "country" : "Australia",
          "alpha2" : "AU",
          "alpha3" : "AUS",
          "numeric" : 36,
          "latitude" : -27,
          "longitude" : 133
        },
    {
          "country" : "Austria",
          "alpha2" : "AT",
          "alpha3" : "AUT",
          "numeric" : 40,
          "latitude" : 47.3333,
          "longitude" : 13.3333
        },
    {
          "country" : "Azerbaijan",
          "alpha2" : "AZ",
          "alpha3" : "AZE",
          "numeric" : 31,
          "latitude" : 40.5,
          "longitude" : 47.5
        },
    {
          "country" : "Bahamas",
          "alpha2" : "BS",
          "alpha3" : "BHS",
          "numeric" : 44,
          "latitude" : 24.25,
          "longitude" : -76
        },
    {
          "country" : "Bahrain",
          "alpha2" : "BH",
          "alpha3" : "BHR",
          "numeric" : 48,
          "latitude" : 26,
          "longitude" : 50.55
        },
    {
          "country" : "Bangladesh",
          "alpha2" : "BD",
          "alpha3" : "BGD",
          "numeric" : 50,
          "latitude" : 24,
          "longitude" : 90
        },
    {
          "country" : "Barbados",
          "alpha2" : "BB",
          "alpha3" : "BRB",
          "numeric" : 52,
          "latitude" : 13.1667,
          "longitude" : -59.5333
        },
    {
          "country" : "Belarus",
          "alpha2" : "BY",
          "alpha3" : "BLR",
          "numeric" : 112,
          "latitude" : 53,
          "longitude" : 28
        },
    {
          "country" : "Belgium",
          "alpha2" : "BE",
          "alpha3" : "BEL",
          "numeric" : 56,
          "latitude" : 50.8333,
          "longitude" : 4
        },
    {
          "country" : "Belize",
          "alpha2" : "BZ",
          "alpha3" : "BLZ",
          "numeric" : 84,
          "latitude" : 17.25,
          "longitude" : -88.75
        },
    {
          "country" : "Benin",
          "alpha2" : "BJ",
          "alpha3" : "BEN",
          "numeric" : 204,
          "latitude" : 9.5,
          "longitude" : 2.25
        },
    {
          "country" : "Bermuda",
          "alpha2" : "BM",
          "alpha3" : "BMU",
          "numeric" : 60,
          "latitude" : 32.3333,
          "longitude" : -64.75
        },
    {
          "country" : "Bhutan",
          "alpha2" : "BT",
          "alpha3" : "BTN",
          "numeric" : 64,
          "latitude" : 27.5,
          "longitude" : 90.5
        },
    {
          "country" : "Bolivia, Plurinational State of",
          "alpha2" : "BO",
          "alpha3" : "BOL",
          "numeric" : 68,
          "latitude" : -17,
          "longitude" : -65
        },
    {
          "country" : "Bosnia and Herzegovina",
          "alpha2" : "BA",
          "alpha3" : "BIH",
          "numeric" : 70,
          "latitude" : 44,
          "longitude" : 18
        },
    {
          "country" : "Botswana",
          "alpha2" : "BW",
          "alpha3" : "BWA",
          "numeric" : 72,
          "latitude" : -22,
          "longitude" : 24
        },
    {
          "country" : "Bouvet Island",
          "alpha2" : "BV",
          "alpha3" : "BVT",
          "numeric" : 74,
          "latitude" : -54.4333,
          "longitude" : 3.4
        },
    {
          "country" : "Brazil",
          "alpha2" : "BR",
          "alpha3" : "BRA",
          "numeric" : 76,
          "latitude" : -10,
          "longitude" : -55
        },
    {
          "country" : "British Indian Ocean Territory",
          "alpha2" : "IO",
          "alpha3" : "IOT",
          "numeric" : 86,
          "latitude" : -6,
          "longitude" : 71.5
        },
    {
          "country" : "Brunei Darussalam",
          "alpha2" : "BN",
          "alpha3" : "BRN",
          "numeric" : 96,
          "latitude" : 4.5,
          "longitude" : 114.6667
        },
    {
          "country" : "Bulgaria",
          "alpha2" : "BG",
          "alpha3" : "BGR",
          "numeric" : 100,
          "latitude" : 43,
          "longitude" : 25
        },
    {
          "country" : "Burkina Faso",
          "alpha2" : "BF",
          "alpha3" : "BFA",
          "numeric" : 854,
          "latitude" : 13,
          "longitude" : -2
        },
    {
          "country" : "Burundi",
          "alpha2" : "BI",
          "alpha3" : "BDI",
          "numeric" : 108,
          "latitude" : -3.5,
          "longitude" : 30
        },
    {
          "country" : "Cambodia",
          "alpha2" : "KH",
          "alpha3" : "KHM",
          "numeric" : 116,
          "latitude" : 13,
          "longitude" : 105
        },
    {
          "country" : "Cameroon",
          "alpha2" : "CM",
          "alpha3" : "CMR",
          "numeric" : 120,
          "latitude" : 6,
          "longitude" : 12
        },
    {
          "country" : "Canada",
          "alpha2" : "CA",
          "alpha3" : "CAN",
          "numeric" : 124,
          "latitude" : 60,
          "longitude" : -95
        },
    {
          "country" : "Cape Verde",
          "alpha2" : "CV",
          "alpha3" : "CPV",
          "numeric" : 132,
          "latitude" : 16,
          "longitude" : -24
        },
    {
          "country" : "Cayman Islands",
          "alpha2" : "KY",
          "alpha3" : "CYM",
          "numeric" : 136,
          "latitude" : 19.5,
          "longitude" : -80.5
        },
    {
          "country" : "Central African Republic",
          "alpha2" : "CF",
          "alpha3" : "CAF",
          "numeric" : 140,
          "latitude" : 7,
          "longitude" : 21
        },
    {
          "country" : "Chad",
          "alpha2" : "TD",
          "alpha3" : "TCD",
          "numeric" : 148,
          "latitude" : 15,
          "longitude" : 19
        },
    {
          "country" : "Chile",
          "alpha2" : "CL",
          "alpha3" : "CHL",
          "numeric" : 152,
          "latitude" : -30,
          "longitude" : -71
        },
    {
          "country" : "China",
          "alpha2" : "CN",
          "alpha3" : "CHN",
          "numeric" : 156,
          "latitude" : 35,
          "longitude" : 105
        },
    {
          "country" : "Christmas Island",
          "alpha2" : "CX",
          "alpha3" : "CXR",
          "numeric" : 162,
          "latitude" : -10.5,
          "longitude" : 105.6667
        },
    {
          "country" : "Cocos (Keeling) Islands",
          "alpha2" : "CC",
          "alpha3" : "CCK",
          "numeric" : 166,
          "latitude" : -12.5,
          "longitude" : 96.8333
        },
    {
          "country" : "Colombia",
          "alpha2" : "CO",
          "alpha3" : "COL",
          "numeric" : 170,
          "latitude" : 4,
          "longitude" : -72
        },
    {
          "country" : "Comoros",
          "alpha2" : "KM",
          "alpha3" : "COM",
          "numeric" : 174,
          "latitude" : -12.1667,
          "longitude" : 44.25
        },
    {
          "country" : "Congo",
          "alpha2" : "CG",
          "alpha3" : "COG",
          "numeric" : 178,
          "latitude" : -1,
          "longitude" : 15
        },
    {
          "country" : "Congo, the Democratic Republic of the",
          "alpha2" : "CD",
          "alpha3" : "COD",
          "numeric" : 180,
          "latitude" : 0,
          "longitude" : 25
        },
    {
          "country" : "Cook Islands",
          "alpha2" : "CK",
          "alpha3" : "COK",
          "numeric" : 184,
          "latitude" : -21.2333,
          "longitude" : -159.7667
        },
    {
          "country" : "Costa Rica",
          "alpha2" : "CR",
          "alpha3" : "CRI",
          "numeric" : 188,
          "latitude" : 10,
          "longitude" : -84
        },
    {
          "country" : "Côte d'Ivoire",
          "alpha2" : "CI",
          "alpha3" : "CIV",
          "numeric" : 384,
          "latitude" : 8,
          "longitude" : -5
        },
    {
          "country" : "Croatia",
          "alpha2" : "HR",
          "alpha3" : "HRV",
          "numeric" : 191,
          "latitude" : 45.1667,
          "longitude" : 15.5
        },
    {
          "country" : "Cuba",
          "alpha2" : "CU",
          "alpha3" : "CUB",
          "numeric" : 192,
          "latitude" : 21.5,
          "longitude" : -80
        },
    {
          "country" : "Cyprus",
          "alpha2" : "CY",
          "alpha3" : "CYP",
          "numeric" : 196,
          "latitude" : 35,
          "longitude" : 33
        },
    {
          "country" : "Czech Republic",
          "alpha2" : "CZ",
          "alpha3" : "CZE",
          "numeric" : 203,
          "latitude" : 49.75,
          "longitude" : 15.5
        },
    {
          "country" : "Denmark",
          "alpha2" : "DK",
          "alpha3" : "DNK",
          "numeric" : 208,
          "latitude" : 56,
          "longitude" : 10
        },
    {
          "country" : "Djibouti",
          "alpha2" : "DJ",
          "alpha3" : "DJI",
          "numeric" : 262,
          "latitude" : 11.5,
          "longitude" : 43
        },
    {
          "country" : "Dominica",
          "alpha2" : "DM",
          "alpha3" : "DMA",
          "numeric" : 212,
          "latitude" : 15.4167,
          "longitude" : -61.3333
        },
    {
          "country" : "Dominican Republic",
          "alpha2" : "DO",
          "alpha3" : "DOM",
          "numeric" : 214,
          "latitude" : 19,
          "longitude" : -70.6667
        },
    {
          "country" : "Ecuador",
          "alpha2" : "EC",
          "alpha3" : "ECU",
          "numeric" : 218,
          "latitude" : -2,
          "longitude" : -77.5
        },
    {
          "country" : "Egypt",
          "alpha2" : "EG",
          "alpha3" : "EGY",
          "numeric" : 818,
          "latitude" : 27,
          "longitude" : 30
        },
    {
          "country" : "El Salvador",
          "alpha2" : "SV",
          "alpha3" : "SLV",
          "numeric" : 222,
          "latitude" : 13.8333,
          "longitude" : -88.9167
        },
    {
          "country" : "Equatorial Guinea",
          "alpha2" : "GQ",
          "alpha3" : "GNQ",
          "numeric" : 226,
          "latitude" : 2,
          "longitude" : 10
        },
    {
          "country" : "Eritrea",
          "alpha2" : "ER",
          "alpha3" : "ERI",
          "numeric" : 232,
          "latitude" : 15,
          "longitude" : 39
        },
    {
          "country" : "Estonia",
          "alpha2" : "EE",
          "alpha3" : "EST",
          "numeric" : 233,
          "latitude" : 59,
          "longitude" : 26
        },
    {
          "country" : "Ethiopia",
          "alpha2" : "ET",
          "alpha3" : "ETH",
          "numeric" : 231,
          "latitude" : 8,
          "longitude" : 38
        },
    {
          "country" : "Falkland Islands (Malvinas)",
          "alpha2" : "FK",
          "alpha3" : "FLK",
          "numeric" : 238,
          "latitude" : -51.75,
          "longitude" : -59
        },
    {
          "country" : "Faroe Islands",
          "alpha2" : "FO",
          "alpha3" : "FRO",
          "numeric" : 234,
          "latitude" : 62,
          "longitude" : -7
        },
    {
          "country" : "Fiji",
          "alpha2" : "FJ",
          "alpha3" : "FJI",
          "numeric" : 242,
          "latitude" : -18,
          "longitude" : 175
        },
    {
          "country" : "Finland",
          "alpha2" : "FI",
          "alpha3" : "FIN",
          "numeric" : 246,
          "latitude" : 64,
          "longitude" : 26
        },
    {
          "country" : "France",
          "alpha2" : "FR",
          "alpha3" : "FRA",
          "numeric" : 250,
          "latitude" : 46,
          "longitude" : 2
        },
    {
          "country" : "French Guiana",
          "alpha2" : "GF",
          "alpha3" : "GUF",
          "numeric" : 254,
          "latitude" : 4,
          "longitude" : -53
        },
    {
          "country" : "French Polynesia",
          "alpha2" : "PF",
          "alpha3" : "PYF",
          "numeric" : 258,
          "latitude" : -15,
          "longitude" : -140
        },
    {
          "country" : "French Southern Territories",
          "alpha2" : "TF",
          "alpha3" : "ATF",
          "numeric" : 260,
          "latitude" : -43,
          "longitude" : 67
        },
    {
          "country" : "Gabon",
          "alpha2" : "GA",
          "alpha3" : "GAB",
          "numeric" : 266,
          "latitude" : -1,
          "longitude" : 11.75
        },
    {
          "country" : "Gambia",
          "alpha2" : "GM",
          "alpha3" : "GMB",
          "numeric" : 270,
          "latitude" : 13.4667,
          "longitude" : -16.5667
        },
    {
          "country" : "Georgia",
          "alpha2" : "GE",
          "alpha3" : "GEO",
          "numeric" : 268,
          "latitude" : 42,
          "longitude" : 43.5
        },
    {
          "country" : "Germany",
          "alpha2" : "DE",
          "alpha3" : "DEU",
          "numeric" : 276,
          "latitude" : 51,
          "longitude" : 9
        },
    {
          "country" : "Ghana",
          "alpha2" : "GH",
          "alpha3" : "GHA",
          "numeric" : 288,
          "latitude" : 8,
          "longitude" : -2
        },
    {
          "country" : "Gibraltar",
          "alpha2" : "GI",
          "alpha3" : "GIB",
          "numeric" : 292,
          "latitude" : 36.1833,
          "longitude" : -5.3667
        },
    {
          "country" : "Greece",
          "alpha2" : "GR",
          "alpha3" : "GRC",
          "numeric" : 300,
          "latitude" : 39,
          "longitude" : 22
        },
    {
          "country" : "Greenland",
          "alpha2" : "GL",
          "alpha3" : "GRL",
          "numeric" : 304,
          "latitude" : 72,
          "longitude" : -40
        },
    {
          "country" : "Grenada",
          "alpha2" : "GD",
          "alpha3" : "GRD",
          "numeric" : 308,
          "latitude" : 12.1167,
          "longitude" : -61.6667
        },
    {
          "country" : "Guadeloupe",
          "alpha2" : "GP",
          "alpha3" : "GLP",
          "numeric" : 312,
          "latitude" : 16.25,
          "longitude" : -61.5833
        },
    {
          "country" : "Guam",
          "alpha2" : "GU",
          "alpha3" : "GUM",
          "numeric" : 316,
          "latitude" : 13.4667,
          "longitude" : 144.7833
        },
    {
          "country" : "Guatemala",
          "alpha2" : "GT",
          "alpha3" : "GTM",
          "numeric" : 320,
          "latitude" : 15.5,
          "longitude" : -90.25
        },
    {
          "country" : "Guernsey",
          "alpha2" : "GG",
          "alpha3" : "GGY",
          "numeric" : 831,
          "latitude" : 49.5,
          "longitude" : -2.56
        },
    {
          "country" : "Guinea",
          "alpha2" : "GN",
          "alpha3" : "GIN",
          "numeric" : 324,
          "latitude" : 11,
          "longitude" : -10
        },
    {
          "country" : "Guinea-Bissau",
          "alpha2" : "GW",
          "alpha3" : "GNB",
          "numeric" : 624,
          "latitude" : 12,
          "longitude" : -15
        },
    {
          "country" : "Guyana",
          "alpha2" : "GY",
          "alpha3" : "GUY",
          "numeric" : 328,
          "latitude" : 5,
          "longitude" : -59
        },
    {
          "country" : "Haiti",
          "alpha2" : "HT",
          "alpha3" : "HTI",
          "numeric" : 332,
          "latitude" : 19,
          "longitude" : -72.4167
        },
    {
          "country" : "Heard Island and McDonald Islands",
          "alpha2" : "HM",
          "alpha3" : "HMD",
          "numeric" : 334,
          "latitude" : -53.1,
          "longitude" : 72.5167
        },
    {
          "country" : "Holy See (Vatican City State)",
          "alpha2" : "VA",
          "alpha3" : "VAT",
          "numeric" : 336,
          "latitude" : 41.9,
          "longitude" : 12.45
        },
    {
          "country" : "Honduras",
          "alpha2" : "HN",
          "alpha3" : "HND",
          "numeric" : 340,
          "latitude" : 15,
          "longitude" : -86.5
        },
    {
          "country" : "Hong Kong",
          "alpha2" : "HK",
          "alpha3" : "HKG",
          "numeric" : 344,
          "latitude" : 22.25,
          "longitude" : 114.1667
        },
    {
          "country" : "Hungary",
          "alpha2" : "HU",
          "alpha3" : "HUN",
          "numeric" : 348,
          "latitude" : 47,
          "longitude" : 20
        },
    {
          "country" : "Iceland",
          "alpha2" : "IS",
          "alpha3" : "ISL",
          "numeric" : 352,
          "latitude" : 65,
          "longitude" : -18
        },
    {
          "country" : "India",
          "alpha2" : "IN",
          "alpha3" : "IND",
          "numeric" : 356,
          "latitude" : 20,
          "longitude" : 77
        },
    {
          "country" : "Indonesia",
          "alpha2" : "ID",
          "alpha3" : "IDN",
          "numeric" : 360,
          "latitude" : -5,
          "longitude" : 120
        },
    {
          "country" : "Iran, Islamic Republic of",
          "alpha2" : "IR",
          "alpha3" : "IRN",
          "numeric" : 364,
          "latitude" : 32,
          "longitude" : 53
        },
    {
          "country" : "Iraq",
          "alpha2" : "IQ",
          "alpha3" : "IRQ",
          "numeric" : 368,
          "latitude" : 33,
          "longitude" : 44
        },
    {
          "country" : "Ireland",
          "alpha2" : "IE",
          "alpha3" : "IRL",
          "numeric" : 372,
          "latitude" : 53,
          "longitude" : -8
        },
    {
          "country" : "Isle of Man",
          "alpha2" : "IM",
          "alpha3" : "IMN",
          "numeric" : 833,
          "latitude" : 54.23,
          "longitude" : -4.55
        },
    {
          "country" : "Israel",
          "alpha2" : "IL",
          "alpha3" : "ISR",
          "numeric" : 376,
          "latitude" : 31.5,
          "longitude" : 34.75
        },
    {
          "country" : "Italy",
          "alpha2" : "IT",
          "alpha3" : "ITA",
          "numeric" : 380,
          "latitude" : 42.8333,
          "longitude" : 12.8333
        },
    {
          "country" : "Jamaica",
          "alpha2" : "JM",
          "alpha3" : "JAM",
          "numeric" : 388,
          "latitude" : 18.25,
          "longitude" : -77.5
        },
    {
          "country" : "Japan",
          "alpha2" : "JP",
          "alpha3" : "JPN",
          "numeric" : 392,
          "latitude" : 36,
          "longitude" : 138
        },
    {
          "country" : "Jersey",
          "alpha2" : "JE",
          "alpha3" : "JEY",
          "numeric" : 832,
          "latitude" : 49.21,
          "longitude" : -2.13
        },
    {
          "country" : "Jordan",
          "alpha2" : "JO",
          "alpha3" : "JOR",
          "numeric" : 400,
          "latitude" : 31,
          "longitude" : 36
        },
    {
          "country" : "Kazakhstan",
          "alpha2" : "KZ",
          "alpha3" : "KAZ",
          "numeric" : 398,
          "latitude" : 48,
          "longitude" : 68
        },
    {
          "country" : "Kenya",
          "alpha2" : "KE",
          "alpha3" : "KEN",
          "numeric" : 404,
          "latitude" : 1,
          "longitude" : 38
        },
    {
          "country" : "Kiribati",
          "alpha2" : "KI",
          "alpha3" : "KIR",
          "numeric" : 296,
          "latitude" : 1.4167,
          "longitude" : 173
        },
    {
          "country" : "Korea, Democratic People's Republic of",
          "alpha2" : "KP",
          "alpha3" : "PRK",
          "numeric" : 408,
          "latitude" : 40,
          "longitude" : 127
        },
    {
          "country" : "Korea, Republic of",
          "alpha2" : "KR",
          "alpha3" : "KOR",
          "numeric" : 410,
          "latitude" : 37,
          "longitude" : 127.5
        },
    {
          "country" : "Kuwait",
          "alpha2" : "KW",
          "alpha3" : "KWT",
          "numeric" : 414,
          "latitude" : 29.3375,
          "longitude" : 47.6581
        },
    {
          "country" : "Kyrgyzstan",
          "alpha2" : "KG",
          "alpha3" : "KGZ",
          "numeric" : 417,
          "latitude" : 41,
          "longitude" : 75
        },
    {
          "country" : "Lao People's Democratic Republic",
          "alpha2" : "LA",
          "alpha3" : "LAO",
          "numeric" : 418,
          "latitude" : 18,
          "longitude" : 105
        },
    {
          "country" : "Latvia",
          "alpha2" : "LV",
          "alpha3" : "LVA",
          "numeric" : 428,
          "latitude" : 57,
          "longitude" : 25
        },
    {
          "country" : "Lebanon",
          "alpha2" : "LB",
          "alpha3" : "LBN",
          "numeric" : 422,
          "latitude" : 33.8333,
          "longitude" : 35.8333
        },
    {
          "country" : "Lesotho",
          "alpha2" : "LS",
          "alpha3" : "LSO",
          "numeric" : 426,
          "latitude" : -29.5,
          "longitude" : 28.5
        },
    {
          "country" : "Liberia",
          "alpha2" : "LR",
          "alpha3" : "LBR",
          "numeric" : 430,
          "latitude" : 6.5,
          "longitude" : -9.5
        },
    {
          "country" : "Libyan Arab Jamahiriya",
          "alpha2" : "LY",
          "alpha3" : "LBY",
          "numeric" : 434,
          "latitude" : 25,
          "longitude" : 17
        },
    {
          "country" : "Liechtenstein",
          "alpha2" : "LI",
          "alpha3" : "LIE",
          "numeric" : 438,
          "latitude" : 47.1667,
          "longitude" : 9.5333
        },
    {
          "country" : "Lithuania",
          "alpha2" : "LT",
          "alpha3" : "LTU",
          "numeric" : 440,
          "latitude" : 56,
          "longitude" : 24
        },
    {
          "country" : "Luxembourg",
          "alpha2" : "LU",
          "alpha3" : "LUX",
          "numeric" : 442,
          "latitude" : 49.75,
          "longitude" : 6.1667
        },
    {
          "country" : "Macao",
          "alpha2" : "MO",
          "alpha3" : "MAC",
          "numeric" : 446,
          "latitude" : 22.1667,
          "longitude" : 113.55
        },
    {
          "country" : "Macedonia, the former Yugoslav Republic of",
          "alpha2" : "MK",
          "alpha3" : "MKD",
          "numeric" : 807,
          "latitude" : 41.8333,
          "longitude" : 22
        },
    {
          "country" : "Madagascar",
          "alpha2" : "MG",
          "alpha3" : "MDG",
          "numeric" : 450,
          "latitude" : -20,
          "longitude" : 47
        },
    {
          "country" : "Malawi",
          "alpha2" : "MW",
          "alpha3" : "MWI",
          "numeric" : 454,
          "latitude" : -13.5,
          "longitude" : 34
        },
    {
          "country" : "Malaysia",
          "alpha2" : "MY",
          "alpha3" : "MYS",
          "numeric" : 458,
          "latitude" : 2.5,
          "longitude" : 112.5
        },
    {
          "country" : "Maldives",
          "alpha2" : "MV",
          "alpha3" : "MDV",
          "numeric" : 462,
          "latitude" : 3.25,
          "longitude" : 73
        },
    {
          "country" : "Mali",
          "alpha2" : "ML",
          "alpha3" : "MLI",
          "numeric" : 466,
          "latitude" : 17,
          "longitude" : -4
        },
    {
          "country" : "Malta",
          "alpha2" : "MT",
          "alpha3" : "MLT",
          "numeric" : 470,
          "latitude" : 35.8333,
          "longitude" : 14.5833
        },
    {
          "country" : "Marshall Islands",
          "alpha2" : "MH",
          "alpha3" : "MHL",
          "numeric" : 584,
          "latitude" : 9,
          "longitude" : 168
        },
    {
          "country" : "Martinique",
          "alpha2" : "MQ",
          "alpha3" : "MTQ",
          "numeric" : 474,
          "latitude" : 14.6667,
          "longitude" : -61
        },
    {
          "country" : "Mauritania",
          "alpha2" : "MR",
          "alpha3" : "MRT",
          "numeric" : 478,
          "latitude" : 20,
          "longitude" : -12
        },
    {
          "country" : "Mauritius",
          "alpha2" : "MU",
          "alpha3" : "MUS",
          "numeric" : 480,
          "latitude" : -20.2833,
          "longitude" : 57.55
        },
    {
          "country" : "Mayotte",
          "alpha2" : "YT",
          "alpha3" : "MYT",
          "numeric" : 175,
          "latitude" : -12.8333,
          "longitude" : 45.1667
        },
    {
          "country" : "Mexico",
          "alpha2" : "MX",
          "alpha3" : "MEX",
          "numeric" : 484,
          "latitude" : 23,
          "longitude" : -102
        },
    {
          "country" : "Micronesia, Federated States of",
          "alpha2" : "FM",
          "alpha3" : "FSM",
          "numeric" : 583,
          "latitude" : 6.9167,
          "longitude" : 158.25
        },
    {
          "country" : "Moldova, Republic of",
          "alpha2" : "MD",
          "alpha3" : "MDA",
          "numeric" : 498,
          "latitude" : 47,
          "longitude" : 29
        },
    {
          "country" : "Monaco",
          "alpha2" : "MC",
          "alpha3" : "MCO",
          "numeric" : 492,
          "latitude" : 43.7333,
          "longitude" : 7.4
        },
    {
          "country" : "Mongolia",
          "alpha2" : "MN",
          "alpha3" : "MNG",
          "numeric" : 496,
          "latitude" : 46,
          "longitude" : 105
        },
    {
          "country" : "Montenegro",
          "alpha2" : "ME",
          "alpha3" : "MNE",
          "numeric" : 499,
          "latitude" : 42,
          "longitude" : 19
        },
    {
          "country" : "Montserrat",
          "alpha2" : "MS",
          "alpha3" : "MSR",
          "numeric" : 500,
          "latitude" : 16.75,
          "longitude" : -62.2
        },
    {
          "country" : "Morocco",
          "alpha2" : "MA",
          "alpha3" : "MAR",
          "numeric" : 504,
          "latitude" : 32,
          "longitude" : -5
        },
    {
          "country" : "Mozambique",
          "alpha2" : "MZ",
          "alpha3" : "MOZ",
          "numeric" : 508,
          "latitude" : -18.25,
          "longitude" : 35
        },
    {
          "country" : "Myanmar",
          "alpha2" : "MM",
          "alpha3" : "MMR",
          "numeric" : 104,
          "latitude" : 22,
          "longitude" : 98
        },
    {
          "country" : "Namibia",
          "alpha2" : "NA",
          "alpha3" : "NAM",
          "numeric" : 516,
          "latitude" : -22,
          "longitude" : 17
        },
    {
          "country" : "Nauru",
          "alpha2" : "NR",
          "alpha3" : "NRU",
          "numeric" : 520,
          "latitude" : -0.5333,
          "longitude" : 166.9167
        },
    {
          "country" : "Nepal",
          "alpha2" : "NP",
          "alpha3" : "NPL",
          "numeric" : 524,
          "latitude" : 28,
          "longitude" : 84
        },
    {
          "country" : "Netherlands",
          "alpha2" : "NL",
          "alpha3" : "NLD",
          "numeric" : 528,
          "latitude" : 52.5,
          "longitude" : 5.75
        },
    {
          "country" : "Netherlands Antilles",
          "alpha2" : "AN",
          "alpha3" : "ANT",
          "numeric" : 530,
          "latitude" : 12.25,
          "longitude" : -68.75
        },
    {
          "country" : "New Caledonia",
          "alpha2" : "NC",
          "alpha3" : "NCL",
          "numeric" : 540,
          "latitude" : -21.5,
          "longitude" : 165.5
        },
    {
          "country" : "New Zealand",
          "alpha2" : "NZ",
          "alpha3" : "NZL",
          "numeric" : 554,
          "latitude" : -41,
          "longitude" : 174
        },
    {
          "country" : "Nicaragua",
          "alpha2" : "NI",
          "alpha3" : "NIC",
          "numeric" : 558,
          "latitude" : 13,
          "longitude" : -85
        },
    {
          "country" : "Niger",
          "alpha2" : "NE",
          "alpha3" : "NER",
          "numeric" : 562,
          "latitude" : 16,
          "longitude" : 8
        },
    {
          "country" : "Nigeria",
          "alpha2" : "NG",
          "alpha3" : "NGA",
          "numeric" : 566,
          "latitude" : 10,
          "longitude" : 8
        },
    {
          "country" : "Niue",
          "alpha2" : "NU",
          "alpha3" : "NIU",
          "numeric" : 570,
          "latitude" : -19.0333,
          "longitude" : -169.8667
        },
    {
          "country" : "Norfolk Island",
          "alpha2" : "NF",
          "alpha3" : "NFK",
          "numeric" : 574,
          "latitude" : -29.0333,
          "longitude" : 167.95
        },
    {
          "country" : "Northern Mariana Islands",
          "alpha2" : "MP",
          "alpha3" : "MNP",
          "numeric" : 580,
          "latitude" : 15.2,
          "longitude" : 145.75
        },
    {
          "country" : "Norway",
          "alpha2" : "NO",
          "alpha3" : "NOR",
          "numeric" : 578,
          "latitude" : 62,
          "longitude" : 10
        },
    {
          "country" : "Oman",
          "alpha2" : "OM",
          "alpha3" : "OMN",
          "numeric" : 512,
          "latitude" : 21,
          "longitude" : 57
        },
    {
          "country" : "Pakistan",
          "alpha2" : "PK",
          "alpha3" : "PAK",
          "numeric" : 586,
          "latitude" : 30,
          "longitude" : 70
        },
    {
          "country" : "Palau",
          "alpha2" : "PW",
          "alpha3" : "PLW",
          "numeric" : 585,
          "latitude" : 7.5,
          "longitude" : 134.5
        },
    {
          "country" : "Palestinian Territory, Occupied",
          "alpha2" : "PS",
          "alpha3" : "PSE",
          "numeric" : 275,
          "latitude" : 32,
          "longitude" : 35.25
        },
    {
          "country" : "Panama",
          "alpha2" : "PA",
          "alpha3" : "PAN",
          "numeric" : 591,
          "latitude" : 9,
          "longitude" : -80
        },
    {
          "country" : "Papua New Guinea",
          "alpha2" : "PG",
          "alpha3" : "PNG",
          "numeric" : 598,
          "latitude" : -6,
          "longitude" : 147
        },
    {
          "country" : "Paraguay",
          "alpha2" : "PY",
          "alpha3" : "PRY",
          "numeric" : 600,
          "latitude" : -23,
          "longitude" : -58
        },
    {
          "country" : "Peru",
          "alpha2" : "PE",
          "alpha3" : "PER",
          "numeric" : 604,
          "latitude" : -10,
          "longitude" : -76
        },
    {
          "country" : "Philippines",
          "alpha2" : "PH",
          "alpha3" : "PHL",
          "numeric" : 608,
          "latitude" : 13,
          "longitude" : 122
        },
    {
          "country" : "Pitcairn",
          "alpha2" : "PN",
          "alpha3" : "PCN",
          "numeric" : 612,
          "latitude" : -24.7,
          "longitude" : -127.4
        },
    {
          "country" : "Poland",
          "alpha2" : "PL",
          "alpha3" : "POL",
          "numeric" : 616,
          "latitude" : 52,
          "longitude" : 20
        },
    {
          "country" : "Portugal",
          "alpha2" : "PT",
          "alpha3" : "PRT",
          "numeric" : 620,
          "latitude" : 39.5,
          "longitude" : -8
        },
    {
          "country" : "Puerto Rico",
          "alpha2" : "PR",
          "alpha3" : "PRI",
          "numeric" : 630,
          "latitude" : 18.25,
          "longitude" : -66.5
        },
    {
          "country" : "Qatar",
          "alpha2" : "QA",
          "alpha3" : "QAT",
          "numeric" : 634,
          "latitude" : 25.5,
          "longitude" : 51.25
        },
    {
          "country" : "Réunion",
          "alpha2" : "RE",
          "alpha3" : "REU",
          "numeric" : 638,
          "latitude" : -21.1,
          "longitude" : 55.6
        },
    {
          "country" : "Romania",
          "alpha2" : "RO",
          "alpha3" : "ROU",
          "numeric" : 642,
          "latitude" : 46,
          "longitude" : 25
        },
    {
          "country" : "Russian Federation",
          "alpha2" : "RU",
          "alpha3" : "RUS",
          "numeric" : 643,
          "latitude" : 60,
          "longitude" : 100
        },
    {
          "country" : "Rwanda",
          "alpha2" : "RW",
          "alpha3" : "RWA",
          "numeric" : 646,
          "latitude" : -2,
          "longitude" : 30
        },
    {
          "country" : "Saint Helena, Ascension and Tristan da Cunha",
          "alpha2" : "SH",
          "alpha3" : "SHN",
          "numeric" : 654,
          "latitude" : -15.9333,
          "longitude" : -5.7
        },
    {
          "country" : "Saint Kitts and Nevis",
          "alpha2" : "KN",
          "alpha3" : "KNA",
          "numeric" : 659,
          "latitude" : 17.3333,
          "longitude" : -62.75
        },
    {
          "country" : "Saint Lucia",
          "alpha2" : "LC",
          "alpha3" : "LCA",
          "numeric" : 662,
          "latitude" : 13.8833,
          "longitude" : -61.1333
        },
    {
          "country" : "Saint Pierre and Miquelon",
          "alpha2" : "PM",
          "alpha3" : "SPM",
          "numeric" : 666,
          "latitude" : 46.8333,
          "longitude" : -56.3333
        },
    {
          "country" : "Saint Vincent and the Grenadines",
          "alpha2" : "VC",
          "alpha3" : "VCT",
          "numeric" : 670,
          "latitude" : 13.25,
          "longitude" : -61.2
        },
    {
          "country" : "Samoa",
          "alpha2" : "WS",
          "alpha3" : "WSM",
          "numeric" : 882,
          "latitude" : -13.5833,
          "longitude" : -172.3333
        },
    {
          "country" : "San Marino",
          "alpha2" : "SM",
          "alpha3" : "SMR",
          "numeric" : 674,
          "latitude" : 43.7667,
          "longitude" : 12.4167
        },
    {
          "country" : "Sao Tome and Principe",
          "alpha2" : "ST",
          "alpha3" : "STP",
          "numeric" : 678,
          "latitude" : 1,
          "longitude" : 7
        },
    {
          "country" : "Saudi Arabia",
          "alpha2" : "SA",
          "alpha3" : "SAU",
          "numeric" : 682,
          "latitude" : 25,
          "longitude" : 45
        },
    {
          "country" : "Senegal",
          "alpha2" : "SN",
          "alpha3" : "SEN",
          "numeric" : 686,
          "latitude" : 14,
          "longitude" : -14
        },
    {
          "country" : "Serbia",
          "alpha2" : "RS",
          "alpha3" : "SRB",
          "numeric" : 688,
          "latitude" : 44,
          "longitude" : 21
        },
    {
          "country" : "Seychelles",
          "alpha2" : "SC",
          "alpha3" : "SYC",
          "numeric" : 690,
          "latitude" : -4.5833,
          "longitude" : 55.6667
        },
    {
          "country" : "Sierra Leone",
          "alpha2" : "SL",
          "alpha3" : "SLE",
          "numeric" : 694,
          "latitude" : 8.5,
          "longitude" : -11.5
        },
    {
          "country" : "Singapore",
          "alpha2" : "SG",
          "alpha3" : "SGP",
          "numeric" : 702,
          "latitude" : 1.3667,
          "longitude" : 103.8
        },
    {
          "country" : "Slovakia",
          "alpha2" : "SK",
          "alpha3" : "SVK",
          "numeric" : 703,
          "latitude" : 48.6667,
          "longitude" : 19.5
        },
    {
          "country" : "Slovenia",
          "alpha2" : "SI",
          "alpha3" : "SVN",
          "numeric" : 705,
          "latitude" : 46,
          "longitude" : 15
        },
    {
          "country" : "Solomon Islands",
          "alpha2" : "SB",
          "alpha3" : "SLB",
          "numeric" : 90,
          "latitude" : -8,
          "longitude" : 159
        },
    {
          "country" : "Somalia",
          "alpha2" : "SO",
          "alpha3" : "SOM",
          "numeric" : 706,
          "latitude" : 10,
          "longitude" : 49
        },
    {
          "country" : "South Africa",
          "alpha2" : "ZA",
          "alpha3" : "ZAF",
          "numeric" : 710,
          "latitude" : -29,
          "longitude" : 24
        },
    {
          "country" : "South Georgia and the South Sandwich Islands",
          "alpha2" : "GS",
          "alpha3" : "SGS",
          "numeric" : 239,
          "latitude" : -54.5,
          "longitude" : -37
        },
    {
          "country" : "Spain",
          "alpha2" : "ES",
          "alpha3" : "ESP",
          "numeric" : 724,
          "latitude" : 40,
          "longitude" : -4
        },
    {
          "country" : "Sri Lanka",
          "alpha2" : "LK",
          "alpha3" : "LKA",
          "numeric" : 144,
          "latitude" : 7,
          "longitude" : 81
        },
    {
          "country" : "Sudan",
          "alpha2" : "SD",
          "alpha3" : "SDN",
          "numeric" : 736,
          "latitude" : 15,
          "longitude" : 30
        },
    {
          "country" : "Suriname",
          "alpha2" : "SR",
          "alpha3" : "SUR",
          "numeric" : 740,
          "latitude" : 4,
          "longitude" : -56
        },
    {
          "country" : "Svalbard and Jan Mayen",
          "alpha2" : "SJ",
          "alpha3" : "SJM",
          "numeric" : 744,
          "latitude" : 78,
          "longitude" : 20
        },
    {
          "country" : "Swaziland",
          "alpha2" : "SZ",
          "alpha3" : "SWZ",
          "numeric" : 748,
          "latitude" : -26.5,
          "longitude" : 31.5
        },
    {
          "country" : "Sweden",
          "alpha2" : "SE",
          "alpha3" : "SWE",
          "numeric" : 752,
          "latitude" : 62,
          "longitude" : 15
        },
    {
          "country" : "Switzerland",
          "alpha2" : "CH",
          "alpha3" : "CHE",
          "numeric" : 756,
          "latitude" : 47,
          "longitude" : 8
        },
    {
          "country" : "Syrian Arab Republic",
          "alpha2" : "SY",
          "alpha3" : "SYR",
          "numeric" : 760,
          "latitude" : 35,
          "longitude" : 38
        },
    {
          "country" : "Taiwan, Province of China",
          "alpha2" : "TW",
          "alpha3" : "TWN",
          "numeric" : 158,
          "latitude" : 23.5,
          "longitude" : 121
        },
    {
          "country" : "Tajikistan",
          "alpha2" : "TJ",
          "alpha3" : "TJK",
          "numeric" : 762,
          "latitude" : 39,
          "longitude" : 71
        },
    {
          "country" : "Tanzania, United Republic of",
          "alpha2" : "TZ",
          "alpha3" : "TZA",
          "numeric" : 834,
          "latitude" : -6,
          "longitude" : 35
        },
    {
          "country" : "Thailand",
          "alpha2" : "TH",
          "alpha3" : "THA",
          "numeric" : 764,
          "latitude" : 15,
          "longitude" : 100
        },
    {
          "country" : "Timor-Leste",
          "alpha2" : "TL",
          "alpha3" : "TLS",
          "numeric" : 626,
          "latitude" : -8.55,
          "longitude" : 125.5167
        },
    {
          "country" : "Togo",
          "alpha2" : "TG",
          "alpha3" : "TGO",
          "numeric" : 768,
          "latitude" : 8,
          "longitude" : 1.1667
        },
    {
          "country" : "Tokelau",
          "alpha2" : "TK",
          "alpha3" : "TKL",
          "numeric" : 772,
          "latitude" : -9,
          "longitude" : -172
        },
    {
          "country" : "Tonga",
          "alpha2" : "TO",
          "alpha3" : "TON",
          "numeric" : 776,
          "latitude" : -20,
          "longitude" : -175
        },
    {
          "country" : "Trinidad and Tobago",
          "alpha2" : "TT",
          "alpha3" : "TTO",
          "numeric" : 780,
          "latitude" : 11,
          "longitude" : -61
        },
    {
          "country" : "Tunisia",
          "alpha2" : "TN",
          "alpha3" : "TUN",
          "numeric" : 788,
          "latitude" : 34,
          "longitude" : 9
        },
    {
          "country" : "Turkey",
          "alpha2" : "TR",
          "alpha3" : "TUR",
          "numeric" : 792,
          "latitude" : 39,
          "longitude" : 35
        },
    {
          "country" : "Turkmenistan",
          "alpha2" : "TM",
          "alpha3" : "TKM",
          "numeric" : 795,
          "latitude" : 40,
          "longitude" : 60
        },
    {
          "country" : "Turks and Caicos Islands",
          "alpha2" : "TC",
          "alpha3" : "TCA",
          "numeric" : 796,
          "latitude" : 21.75,
          "longitude" : -71.5833
        },
    {
          "country" : "Tuvalu",
          "alpha2" : "TV",
          "alpha3" : "TUV",
          "numeric" : 798,
          "latitude" : -8,
          "longitude" : 178
        },
    {
          "country" : "Uganda",
          "alpha2" : "UG",
          "alpha3" : "UGA",
          "numeric" : 800,
          "latitude" : 1,
          "longitude" : 32
        },
    {
          "country" : "Ukraine",
          "alpha2" : "UA",
          "alpha3" : "UKR",
          "numeric" : 804,
          "latitude" : 49,
          "longitude" : 32
        },
    {
          "country" : "United Arab Emirates",
          "alpha2" : "AE",
          "alpha3" : "ARE",
          "numeric" : 784,
          "latitude" : 24,
          "longitude" : 54
        },
    {
          "country" : "United Kingdom",
          "alpha2" : "GB",
          "alpha3" : "GBR",
          "numeric" : 826,
          "latitude" : 54,
          "longitude" : -2
        },
    {
          "country" : "United States",
          "alpha2" : "US",
          "alpha3" : "USA",
          "numeric" : 840,
          "latitude" : 38,
          "longitude" : -97
        },
    {
          "country" : "United States Minor Outlying Islands",
          "alpha2" : "UM",
          "alpha3" : "UMI",
          "numeric" : 581,
          "latitude" : 19.2833,
          "longitude" : 166.6
        },
    {
          "country" : "Uruguay",
          "alpha2" : "UY",
          "alpha3" : "URY",
          "numeric" : 858,
          "latitude" : -33,
          "longitude" : -56
        },
    {
          "country" : "Uzbekistan",
          "alpha2" : "UZ",
          "alpha3" : "UZB",
          "numeric" : 860,
          "latitude" : 41,
          "longitude" : 64
        },
    {
          "country" : "Vanuatu",
          "alpha2" : "VU",
          "alpha3" : "VUT",
          "numeric" : 548,
          "latitude" : -16,
          "longitude" : 167
        },
    {
          "country" : "Venezuela, Bolivarian Republic of",
          "alpha2" : "VE",
          "alpha3" : "VEN",
          "numeric" : 862,
          "latitude" : 8,
          "longitude" : -66
        },
    {
          "country" : "Viet Nam",
          "alpha2" : "VN",
          "alpha3" : "VNM",
          "numeric" : 704,
          "latitude" : 16,
          "longitude" : 106
        },
    {
          "country" : "Virgin Islands, British",
          "alpha2" : "VG",
          "alpha3" : "VGB",
          "numeric" : 92,
          "latitude" : 18.5,
          "longitude" : -64.5
        },
    {
          "country" : "Virgin Islands, U.S.",
          "alpha2" : "VI",
          "alpha3" : "VIR",
          "numeric" : 850,
          "latitude" : 18.3333,
          "longitude" : -64.8333
        },
    {
          "country" : "Wallis and Futuna",
          "alpha2" : "WF",
          "alpha3" : "WLF",
          "numeric" : 876,
          "latitude" : -13.3,
          "longitude" : -176.2
        },
    {
          "country" : "Western Sahara",
          "alpha2" : "EH",
          "alpha3" : "ESH",
          "numeric" : 732,
          "latitude" : 24.5,
          "longitude" : -13
        },
    {
          "country" : "Yemen",
          "alpha2" : "YE",
          "alpha3" : "YEM",
          "numeric" : 887,
          "latitude" : 15,
          "longitude" : 48
        },
    {
          "country" : "Zambia",
          "alpha2" : "ZM",
          "alpha3" : "ZMB",
          "numeric" : 894,
          "latitude" : -15,
          "longitude" : 30
        },
    {
          "country" : "Zimbabwe",
          "alpha2" : "ZW",
          "alpha3" : "ZWE",
          "numeric" : 716,
          "latitude" : -20,
          "longitude" : 30
        },
    {
          "country" : "Afghanistan",
          "alpha2" : "AF",
          "alpha3" : "AFG",
          "numeric" : 4,
          "latitude" : 33,
          "longitude" : 65
        },
        {
          "country" : "Republic of Kosovo",
          "alpha2" : "XK",
          "alpha3" : "XKK",
          "numeric" : 456,
          "latitude" : 42.6026,
          "longitude" : 20.9030
        },
        {
          "country" : "South Sudan",
          "alpha2" : "SS",
          "alpha3" : "SSS",
          "numeric" : 456,
          "latitude" : 6.8770,
          "longitude" : 31.3070 
        }
      ],

      image : 'data:*/*;base64,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'
    
  },
  mutations: {

    setData(state,countries)
    {
      state.allData = countries
    },
    setInfo(state,global)
    {
      state.confirmed = global.TotalConfirmed
      state.deaths = global.TotalDeaths
      state.reco = global.TotalRecovered
      state.newConfirmed = global.NewConfirmed
      state.newDeaths = global.NewDeaths
      state.newReco = global.NewRecovered
    },
    setCoor(state,data)
    {
      state.latUser = data.lat
      state.longUser = data.long
    }

  },
  actions: {
  },
  modules: {
  }
})
