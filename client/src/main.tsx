import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { HelmetProvider } from "react-helmet-async"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <ReactQueryDevtools initialIsOpen={false} position={"bottom"} />
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
