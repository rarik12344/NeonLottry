import { TicketCard } from '@/components/TicketCard';
import { CountdownTimer } from '@/components/CountdownTimer';
import { WalletButton } from '@/components/WalletButton';
import { getCurrentRound } from '@/lib/lottery';

export default async function Home() {
  const roundInfo = await getCurrentRound();
  
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          ✨ NEON LOTTERY ✨
        </h1>
        
        <CountdownTimer endTime={Number(roundInfo.endTime)} />
        <TicketCard price={roundInfo.ticketPrice} />
        <WalletButton />
      </div>
    </main>
  );
}
