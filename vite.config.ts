import path from 'path'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import react from "@vitejs/plugin-react-swc";
import { lingui } from "@lingui/vite-plugin";
import tsconfigPaths from 'vite-tsconfig-paths'


const config: UserConfig = {
  resolve:{
    alias:{
      '#root':path.resolve(__dirname,'src')
    }
  },
  plugins: [
    react({
      plugins: [["@lingui/swc-plugin", {}]],
    }),
    ssr(),
    lingui(),
],
}

export default config
