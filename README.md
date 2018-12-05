# Hackathon Presenter
Google sheets event organisation linked to a web frontend for live updates, countdowns, etc.

#### General Design
Google sheets -> Azure Function -> CosmosDB (Mongo) -> Azure Function -> Frontend

1. Add macro to google sheets (GS).
1. Change GS, and Azure function is sent the Payload.
1. Azure func adds the payload to the Mongo DB.
1. Clients listen to the Azure function for changes.
1. Loads them in to the UI

#### Dependencies
you need the `gspread` and `oauth2client` python modules to run this
install them both with
`pip install gspread oauth2client`

https://azure.microsoft.com/en-us/blog/serverless-real-time-notifications-in-azure-using-azure-cosmosdb/
