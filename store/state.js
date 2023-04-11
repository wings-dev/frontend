export default () => ({
  loginCodeModalData: {
    loginType: "phone",
    phone: null,
    email: null,
    data: null,
    message: null,
  },
  reservationModalData: {
    propertyCode: null,
    startDate: null,
    endDate: null,
    source_id: null,
    memberID: null,
    prephone: null,
    phone: null,
    name: null,
    email: null,
    adult: null,
    child: null,
    baby: null,
    reservationID: null, // TODO yeni rezervasyon sayfasına girildiğinde sıfırlanmalı. Sadettin ile senaryolar konusulacak
    availabilityData: {},
    villa: {},
  },
  visitorId: null,
  blogMenu: [
    {
      slug: "fethiye",
      title: "Fethiye",
      children: [
        {
          slug: "fethiye-hakkinda",
          title: "Fethiye Hakkında Bilmeniz Gerekenler",
        },
        {
          slug: "oludeniz",
          title: "Ölüdeniz",
        },
      ],
    },
    {
      slug: "kalkan",
      title: "Kalkan",
      children: [],
    },
    {
      slug: "antalya",
      title: "Antalya",
      children: [
        {
          slug: "fethiye-hakkinda",
          title: "Fethiye Hakkında Bilmeniz Gerekenler",
        },
        {
          slug: "oludeniz",
          title: "Ölüdeniz",
        },
      ],
    }
  ],
});
