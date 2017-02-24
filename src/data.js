var data = [
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
        "id" : Number(1)
    }, 
    {
        "type" : "container", 
        "title" : "Two Columns Title", 
        "showTitle" : false, 
        "tip" : "Columns", 
        "icon" : "ti  ti-layout-column2", 
        "columns" : [
            [
                {
                    "id" : Number(2), 
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
                    "id" : Number(3), 
                    "type" : "question", 
                    "tip" : "Short answer", 
                    "icon" : "ti ti-pencil", 
                    "value" : "", 
                    "placeholder" : "Please provide your last name", 
                    "format" : "text", 
                    "disableRequiredEdit" : true, 
                    "disableRemove" : true, 
                    "disableKeyEdit" : true, 
                    "required" : true, 
                    "key" : "last_name", 
                    "label" : "Last Name:", 
                    "mapsTo" : "client.lastName"
                }
            ]
        ]
    }, 
    {
        "id" : Number(4), 
        "type" : "question", 
        "tip" : "Short answer", 
        "icon" : "ti ti-pencil", 
        "value" : "", 
        "placeholder" : "Please provide your phone number", 
        "format" : "phone", 
        "disableRequiredEdit" : false, 
        "disableRemove" : false, 
        "disableKeyEdit" : true, 
        "required" : false, 
        "key" : "phone", 
        "label" : "Phone:", 
        "mapsTo" : "client.phone"
    }, 
    {
        "id" : Number(5), 
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
        "id" : Number(6), 
        "key" : "workflow", 
        "type" : "select", 
        "tip" : "Workflow", 
        "icon" : "fa fa-circle-o-notch", 
        "label" : "What service are you interested in?", 
        "selected" : "", 
        "options" : [
            {
                "name" : "Headshots", 
                "workflow" : "5851ad4c68251040778872d1"
            }, 
            {
                "name" : "Wedding", 
                "workflow" : "5851ad4c68251040778872d1"
            }, 
            {
                "workflow" : "5851ad4c68251040778872d1", 
                "name" : "Default"
            }
        ], 
        "required" : true
    }, 
    {
        "id" : Number(7), 
        "type" : "freeResponse", 
        "tip" : "Free Response", 
        "icon" : "ti  ti-pencil-alt", 
        "value" : "", 
        "placeholder" : "I am all ears!", 
        "label" : "Comments?", 
        "disableRequiredEdit" : false, 
        "disableRemove" : false, 
        "disableKeyEdit" : true, 
        "required" : false, 
        "key" : "comments"
    }
]

module.exports = data;
