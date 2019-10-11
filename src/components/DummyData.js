export const dummyData = {
  collections: [
    {
      id: 1,
      name: "Contacts",
      default_view: "table",
      fields: [
        {
          "id": "field_1",
          "name": "Firstname",
          "type": "line",
          "options": {}
        },
        {
          "id": "field_2",
          "name": "Lastname",
          "type": "line",
          "options": {}
        },
        {
          "id": "field_3",
          "name": "Email",
          "type": "email",
          "options": {}
        }
      ]
    },
    {
      id: 2,
      name: "Notes",
      default_view: "table",
      fields: [
        {
          "id": "field_1",
          "name": "body",
          "type": "textarea",
          "options": {}
        }
      ]
    }
  ],
  // table settings
  table_settings: {
    fields: ['field_1'],
    //order_by: 'field:field_1',
  },

  records: [
    {
      id: 1,
      collection_id: 1,
      fields: {
        "field_1": "John",
        "field_2": "Doe",
        "field_3": "Johndoe@email.com"
      }
    },
    {
      id: 4,
      collection_id: 1,
      fields: {
        "field_1": "Jane",
        "field_2": "Lorem",
        "field_3": "janelorem@ipsum.com"
      }
    },
    {
      id: 5,
      collection_id: 1,
      fields: {
        "field_1": "Bob",
        "field_2": "Random",
        "field_3": "bobrand@mail.com"
      }
    }
  ]
}