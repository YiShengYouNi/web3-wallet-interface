import { TokenBalances } from "@/components/TokenBalances";
import { NativeBalance } from "@/components/NativeBalance";
import {WalletStatus} from "@/components/WalletStatus";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex min-h-screen items-center justify-center p-24">
          <WalletStatus />
          <NativeBalance />
          <TokenBalances />
      </main>
    </div>
  );
}
