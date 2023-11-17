import { DARK, LIGHT } from './style/theme';
import GlobalStyles from './style/global';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { ThemeProvider } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { modeState } from './atom/mode';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const CombinedProvider = () => {
  const mode = useRecoilValue(modeState);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={mode === 'light' ? LIGHT : DARK}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default CombinedProvider;
