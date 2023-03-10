import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

import { inventoryItems } from '@api/inventory/data/inventoryItems.js'

export const inventoryAdapter = () => {
    const mockAdapter = new MockAdapter(axios, { delayResponse: 200 })

    mockAdapter.onGet('/api/inventory/getItems')
        .reply(200, { items: inventoryItems })
}
