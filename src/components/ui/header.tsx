import { signIn, signOut, auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
  );
}

const Header = async (props: Props) => {
  const session = await auth();
  console.log("session", session);
  return (
    <header className="border bottom-1">
      <nav className="bg-wyite border-gray-200 px-4 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <h1>AI Form Builder</h1>
        </div>
        <div>
          {session?.user ? (
            <div>
              {session.user.name && session.user.image && (
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  width={50}
                  height={50}
                />
              )}
            </div>
          ) : (
            <Link href="/api/auth/signin">
              <Button variant="link" onClick={() => signIn("google")}>
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
