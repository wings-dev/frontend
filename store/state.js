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
      facilityTypes: [
        {
          text: "Bungalov",
          code: "171",
          selected: false,
        },
        {
          text: "Suit Daire",
          code: "172",
          selected: false,
        },
        {
          text: "Tiny House",
          code: "170",
          selected: false,
        },
        {
          text: "Villa",
          code: "173",
          selected: false,
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
          text: "Bahçe Alanı",
          code: "185",
          selected: false,
        },
        {
          text: "Bilardo Masası",
          code: "75",
          selected: false,
        },
        {
          text: "Denize Sıfır",
          code: "194",
          selected: false,
        },
        {
          text: "Isıtmalı Zemin",
          code: "148",
          selected: false,
        },
        {
          text: "Jakuzi",
          code: "143",
          selected: false,
        },
        {
          text: "Kapalı Havuz",
          code: "137",
          selected: false,
        },
        {
          text: "Sauna",
          code: "79",
          selected: false,
        },
        {
          text: "Sinema",
          code: "196",
          selected: false,
        },
        {
          text: "Spor Ekipmanları",
          code: "197",
          selected: false,
        },
        {
          text: "Türk Hamamı",
          code: "56",
          selected: false,
        },
        {
          text: "Şömine",
          code: "64",
          selected: false,
        },
      ],
    },
  }
})
