import { WalletButton } from '@/components/WalletButton';
import { BuyTicketButton } from '@/components/BuyTicketButton';
import { CountdownTimer } from '@/components/CountdownTimer';

export default function Home() {
  return (
    <div className="container">
      <h1>✨ NEON LOTTERY ✨</h1>
      
      <CountdownTimer endTime={Date.now() + 86400000} />
      
      <div className="ticket-card">
        <WalletButton />
        <BuyTicketButton />
      </div>
    </div>
  );
}
