export default () => ({
  searchData: {
    "amenites": {
      "groups": {
        "facilities": [
          {"id": 1, "title": "\u00d6NE \u00c7IKAN \u00d6ZELL\u0130KLER"},
          {"id": 2, "title": "MUTFAK"},
          {"id": 3, "title": "ETK\u0130NL\u0130KLER"},
          {"id": 4, "title": "\u00c7OCUKLAR \u0130\u00c7\u0130N"}
        ]
      },
      "facilities": [
        {"code": 137, "text": "Kapal\u0131 Havuz", "group_id": 1, "selected": false},
      ]
    },
    "destinations": [
      {code: "23494", text: 'Antalya', type: 1, selected: false},
      {
        code: "23472",
        text: 'İstanbul',
        type: 1,
        selected: false,
        children: [
          {code: "23495", text: 'Pendik', type: 1, selected: false},
        ]
      },
      {code: '23411', text: 'İzmir', type: 1, selected: false},
      {code: 5, text: 'Test otel 1', type: 2, selected: false},
      {code: 6, text: 'Test otel 2', type: 2, selected: false},
    ]
  }
})
