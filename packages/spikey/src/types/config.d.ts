export type SpikeyConfig = {
    pluginName: string
    version: string
    author: string

    pluginUUID: string
    supportedDevices: Array<'StreamDeck' | 'StreamDeckMini' | 'StreamDeckXL'>
    actions: {
        [actionId: string]: {
            name: string
            icon?: string
            defaultState: {
                title?: string
                backgroundColor?: string
                textAlign?: 'top' | 'middle' | 'bottom'
            }
            settings?: Record<string, unknown>
        }
    }

    websocket?: {
        port?: number
        host?: string
    }

    debug?: {
        enabled: boolean
        logLevel?: 'info' | 'warm' | 'error' | 'debug'
    }

    platforms?: {
        mac?: unknown
        windows?: unknown
    }
}
