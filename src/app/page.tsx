import { WalletButton } from '@/components/WalletButton';
import { BuyTicketButton } from '@/components/BuyTicketButton';
import { CountdownTimer } from '@/components/CountdownTimer';

export default function Home() {
  const roundEndTime = Math.floor(Date.now() / 1000) + 86400; // 24 часа от текущего момента

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          ✨ NEON LOTTERY ✨
        </h1>
        
        <div className="mb-8">
          <CountdownTimer endTime={roundEndTime} />
        </div>
        
        <div className="space-y-4">
          <WalletButton />
          <BuyTicketButton />
        </div>
      </div>
    </main>
  );
}
