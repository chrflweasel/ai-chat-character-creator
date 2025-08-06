import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './i18n';
import {Provider} from "react-redux";
import {SnackbarProvider} from "notistack";
import store from "./app/features/store.ts";
import {CssBaseline} from "@mui/material";
import ThemeWrapper from "./app/components/themes/ThemeWrapper.tsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Provider store={store}>
          <ThemeWrapper>
              <SnackbarProvider maxSnack={5}>
                  <CssBaseline/>
                  <App/>
              </SnackbarProvider>
          </ThemeWrapper>
      </Provider>
    </BrowserRouter>
)
