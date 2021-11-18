import { createClient } from 'contentful';

// Arguments are the search word for the filtering of entries
const getClientEntries = (contentTypeName, clientParams) => {

    const client = createClient(clientParams)

        (async () => {
            try {
                const response = await client.getEntries()
                if (contentTypeName) {
                    console.log(response.items.filter(item => item.sys.contentType.sys.id === contentTypeName))
                } else if (id) {
                    const items = response.items.filter(item => item.sys.id === id)
                    console.log(items[0])
                } else {
                    console.log(response.items)
                }
            } catch (error) {
                console.error(error)
            }
        })()
}

export default getClientEntries;