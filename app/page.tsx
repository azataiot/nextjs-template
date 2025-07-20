// app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={30}
            className="dark:invert mb-4"
          />
          <CardTitle className="text-xl font-semibold text-center">
            Welcome to your Next.js + ShadCN Template
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            Start editing <code className="font-mono">app/page.tsx</code> to
            build your app.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <a
                href="https://shadcn.dev/docs"
                target="_blank"
                rel="noreferrer"
              >
                ShadCN Docs
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noreferrer"
              >
                Next.js Docs
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
