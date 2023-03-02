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
        code: 0,
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
        text: "Çavdır",
        code: 0,
        selected: false,
        children: [
          {
            text: "Fethiye",
            code: 6,
            selected: false,
          },
          {
            text: "Marmaris",
            code: 0,
            selected: false,
          }
        ]
      }
    ],
    amenites: {
      facilityTypes: [
        {
          text: "Villa",
          code: "234",
          selected: false,
        },
        {
          text: "Ev",
          code: "233",
          selected: false,
        },
        {
          text: "Suite",
          code: "232",
          selected: false,
        },
        {
          text: "Dubleks",
          code: "231",
          selected: false,
        },
        {
          text: "Bungalov",
          code: "230",
          selected: false,
        },
      ],
      facilityConcepts: [
        {
          text: "Deniz manzaralı villa ve evler",
          code: "229",
          selected: false,
        },
        {
          text: "Merkezi konumdaki evler",
          code: "228",
          selected: false,
        },
        {
          text: "Lüks tatil villaları",
          code: "227",
          selected: false,
        },
        {
          text: "Lüks tatil villaları",
          code: "226",
          selected: false,
        },
        {
          text: "Muhafazakar villa",
          code: "225",
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
          text: "Çamaşır Makinesi",
          code: "219",
          selected: false,
        },
        {
          text: "Hamam",
          code: "218",
          selected: false,
        },
        {
          text: "Sauna",
          code: "217",
          selected: false,
        },
        {
          text: "Küvetli Banyo",
          code: "216",
          selected: false,
        },
        {
          text: "Fırın",
          code: "215",
          selected: false,
        },
      ],
    },
  }
})
