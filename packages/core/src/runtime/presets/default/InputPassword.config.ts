
import type { ConfigMethodType } from '@core/runtime/utils/config';
import type { InputPasswordConfig } from '../../components';
import InputBaseConfig from './InputBase.config'

const config = {
  InputBase: {
    trailing: {
      class: ({ props }) => {
        // Extend parent InputBaseConfig
        const parent = InputBaseConfig.trailing.class as ConfigMethodType
        const parentClass = parent({ props })

        return `${parentClass.replace('pointer-events-none', 'pointer-events-auto')} cursor-pointer`
      }
    }
  },
  eye: {
    on: 'heroicons-solid:eye',
    off: 'heroicons-solid:eye-off'
  }
} as InputPasswordConfig;

export default config;