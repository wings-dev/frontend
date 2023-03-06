export default () => ({
  loginCodeModalData: {
    loginType: 'phone',
    phone: null,
    email: null,
  },
  searchData: {
    destinations: [
      {
        text: "Antalya",
        code: 8,
        selected: false,
        children: [
          {
            text: "Kaş",
            code: 2,
            selected: false,
            children: [
              {
                text: "Kalkan",
                code: 1,
                selected: false,
              }
            ]
          }
        ]
      },
      {
        text: "Muğla",
        code: 7,
        selected: false,
        children: [
          {
            text: "Fethiye",
            code: 6,
            selected: false,
          }
        ]
      }
    ],
    amenites: {
      groups:{
        facilityTypes: [],
        facilityConcepts: [],
        facilities: [
          { id: 1, title: 'ÖNE ÇIKAN ÖZELLİKLER'},
          { id: 2, title: 'MUTFAK'}
        ],
      },
      facilityTypes: [
        {
          text: "Bungalov",
          code: "171",
          selected: false,
          group_id: 1
        },
        {
          text: "Suit Daire",
          code: "172",
          selected: false,
          group_id: 1
        },
        {
          text: "Tiny House",
          code: "170",
          selected: false,
          group_id: 2
        },
        {
          text: "Villa",
          code: "173",
          selected: false,
          group_id: 2
        }
      ],
      facilityConcepts: [
        {
          text: "Balayı Villaları",
          code: "175",
          selected: false,
        },
        {
          text: "Deniz Manzaralı",
          code: "177",
          selected: false,
        },
        {
          text: "Havuzu Görünmeyen (Muhafazakar)",
          code: "174",
          selected: false,
        },
        {
          text: "Kalabalık Ailelere Uygun",
          code: "195",
          selected: false,
        },
        {
          text: "Kış Aylarına Uygun",
          code: "180",
          selected: false,
        },
        {
          text: "Premium Villalar",
          code: "176",
          selected: false,
        },
      ],
      highlights: [
        {
          text: "Özel Havuz",
          code: "224",
          selected: false,
        },
        {
          text: "Şezlong",
          code: "223",
          selected: false,
        },
        {
          text: "Ortak Havuz",
          code: "222",
          selected: false,
        },
        {
          text: "Isıtmalı Havuz",
          code: "221",
          selected: false,
        },
        {
          text: "Kapalı Havuz",
          code: "220",
          selected: false,
        },
      ],
      facilities: [
        {
          "code": 185,
          "text": "Bahçe Alanı",
          "selected": false,
          "group_id": 1,
        },
        {
          "code": 75,
          "text": "Bilardo Masası",
          "selected": false,
          "group_id": 1,
        },
        {
          "code": 194,
          "text": "Denize Sıfır",
          "selected": false,
          "group_id": 1,
        },
        {
          "code": 148,
          "text": "Isıtmalı Zemin",
          "selected": false,
          "group_id": 1,
        },
        {
          "code": 143,
          "text": "Jakuzi",
          "selected": false,
          "group_id": 1,
        },
        {
          "code": 137,
          "text": "Kapalı Havuz",
          "selected": false,
          "group_id": 1,
        },
        {
          "code": 79,
          "text": "Sauna",
          "selected": false,
          "group_id": 1,
        },
        {
          "code": 196,
          "text": "Sinema",
          "selected": false,
          "group_id": 1,
        },
        {
          "code": 197,
          "text": "Spor Ekipmanları",
          "selected": false,
          "group_id": 1,
        },
        {
          "code": 56,
          "text": "Türk Hamamı",
          "selected": false,
          "group_id": 1,
        },
        {
          "code": 64,
          "text": "Şömine",
          "selected": false,
          "group_id": 1,
        },
        {
          "code": 185,
          "text": "Bahçe Alanı",
          "selected": false,
          "group_id": 2
        },
        {
          "code": 75,
          "text": "Bilardo Masası",
          "selected": false,
          "group_id": 2
        },
        {
          "code": 194,
          "text": "Denize Sıfır",
          "selected": false,
          "group_id": 2
        },
        {
          "code": 148,
          "text": "Isıtmalı Zemin",
          "selected": false,
          "group_id": 2
        },
        {
          "code": 143,
          "text": "Jakuzi",
          "selected": false,
          "group_id": 2
        },
        {
          "code": 137,
          "text": "Kapalı Havuz",
          "selected": false,
          "group_id": 2
        },
        {
          "code": 79,
          "text": "Sauna",
          "selected": false,
          "group_id": 2
        },
        {
          "code": 196,
          "text": "Sinema",
          "selected": false,
          "group_id": 2
        },
        {
          "code": 197,
          "text": "Spor Ekipmanları",
          "selected": false,
          "group_id": 2
        },
        {
          "code": 56,
          "text": "Türk Hamamı",
          "selected": false,
          "group_id": 2
        },
        {
          "code": 64,
          "text": "Şömine",
          "selected": false,
          "group_id": 2
        }
      ],
    },
  }
})
