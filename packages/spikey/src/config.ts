import type { SpikeyConfig } from './types/config'

const defaultConfig: SpikeyConfig = {
    pluginName: 'My StreamDeck Plugin',
    version: '1.0.0',
    author: 'Your Name',
    pluginUUID: 'com.yourname.myplugin',
    supportedDevices: ['StreamDeck', 'StreamDeckMini', 'StreamDeckXL'],
    actions: {},
}

export function defineConfig(user_config?: Partial<SpikeyConfig>) {
    return new SpikeyConfigManager(user_config)
}

class SpikeyConfigManager {
    private config: SpikeyConfig

    constructor(user_config?: Partial<SpikeyConfig>) {
        this.config = {
            ...defaultConfig,
            ...user_config,

            actions: {
                ...defaultConfig.actions,
                ...(user_config?.actions ?? {}),
            },
        }
    }

    validate(): boolean {
        if (!this.config.pluginUUID) {
            console.warn('No plugin UUID found in config, using default value')
        }

        return true
    }

    get_config(): SpikeyConfig {
        return this.config
    }

    get_action_config(action_id: string) {
        return this.config.actions[action_id]
    }
}

export type { SpikeyConfig }
