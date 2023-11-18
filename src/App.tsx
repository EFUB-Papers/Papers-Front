import './App.css';
import { RecoilRoot } from 'recoil';
import CombinedProvider from './CombinedProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <CombinedProvider />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
