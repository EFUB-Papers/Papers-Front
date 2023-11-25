import toast from 'react-hot-toast';

export const toastMessage = (message: string) => {
  toast(message, {
    style: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '140%',
      textAlign: 'center',
      display: 'flex',
      width: '326px',
      height: '48px',
      gap: '16px',
      justifyContent: 'center',
      borderRadius: '5px',
      background: '#888',
      color: 'white'
    }
  });
};
