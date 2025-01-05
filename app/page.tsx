import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Home() {
  return (
    <>
      <main className=" flex flex-col  justify-center items-center gap-6 px-4">
        {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        Hello, World!!
      </main>
    </>
  );
}
