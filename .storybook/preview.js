import '../src/styles/index.scss'
import { loadCssCode } from '../src/utils/styles'

loadCssCode(`
  #docs-root .sbdocs-wrapper .sbdocs-content {
    max-width: 100vw;
  }
`)
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}