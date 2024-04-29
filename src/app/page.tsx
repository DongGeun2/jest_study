import Calendar from '@components/calendar/Calendar';

const style = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function Home() {
  return (
    <main style={{ ...style }}>
      <Calendar />
    </main>
  );
}
