var data = [
  {
    "type" : "container", 
    "title" : "", 
    "showTitle" : false, 
    "tip" : "Columns", 
    "icon" : "ti  ti-layout-column2", 
    "columns" : [
      [
        {
          // "id" : NumberInt(2), 
          "type" : "question", 
          "tip" : "Short answer", 
          "icon" : "ti ti-pencil", 
          "value" : "", 
          "placeholder" : "Please provide your first name", 
          "label" : "First Name:", 
          "format" : "text", 
          "disableRequiredEdit" : true, 
          "disableRemove" : true, 
          "disableKeyEdit" : true, 
          "required" : true, 
          "key" : "first_name", 
          "mapsTo" : "client.firstName"
        }
      ],
      [
        {
          // "id" : NumberInt(2), 
          "type" : "question", 
          "tip" : "Short answer", 
          "icon" : "ti ti-pencil", 
          "value" : "", 
          "placeholder" : "Please provide your last name", 
          "label" : "Last Name:", 
          "format" : "text", 
          "disableRequiredEdit" : true, 
          "disableRemove" : true, 
          "disableKeyEdit" : true, 
          "required" : true, 
          "key" : "last_name", 
          "mapsTo" : "client.lastName"
        }
      ],
    ]
  },
  {
    // "id" : NumberInt(5), 
    "type" : "question", 
    "tip" : "Short answer", 
    "icon" : "ti ti-pencil", 
    "value" : "", 
    "placeholder" : "Please provide your email address", 
    "label" : "Email:", 
    "format" : "email", 
    "disableRequiredEdit" : true, 
    "disableRemove" : true, 
    "disableKeyEdit" : true, 
    "required" : true, 
    "key" : "email", 
    "mapsTo" : "client.email"
  },
  {
    "date" : "2017-02-22T18:30:05.490Z", 
    "value" : 1485320960446.0, 
    "minDate" : 1485320960446.0, 
    "opened" : false, 
    "format" : "fullDate", 
    "label" : "When is your ideal event start date?", 
    "icon" : "ti ti-calendar", 
    "tip" : "Date Select", 
    "type" : "date", 
    // "id" : NumberInt(1)
  },
  {
    "type": "checkbox",
    "tip": "Checkboxes",
    "icon": "ti  ti-check-box",
    "label": "Check all that you are looking for assistance with.",
    "boxes": [{
      "checked": false,
      "label": "Website"
    }, {
      "checked": false,
      "label": "Logo Design"
    }, {
      "checked": false,
      "label": "Stationery"
    }]
  }
]