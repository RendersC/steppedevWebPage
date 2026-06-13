import { StrictMode } from "react"
import { ViteReactSSG } from "vite-react-ssg/single-page"
import App from "./App.tsx"
import "./index.css"

// SSG: при сборке страница пре-рендерится в статичный HTML (vite-react-ssg build),
// а на клиенте гидратируется. Поисковики (включая Яндекс) сразу видят весь контент.
export const createRoot = ViteReactSSG(
  <StrictMode>
    <App />
  </StrictMode>,
)
