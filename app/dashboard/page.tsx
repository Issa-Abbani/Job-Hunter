//This route is in this file. You see the auth pages are protected in proxy because they are client components and can't access the getSession function. Keep in mind that you can protect this route in proxy.ts if you wish. The code for that will be commented in proxy.ts to remember.
import { getSession } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import connectDB from "@/lib/db";
import { Board } from "@/lib/models";

export default async function Dashboard() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/sign-in");
  }

  await connectDB();

  const board = await Board.findOne({
    userId: session.user.id,
    name: "Job Hunt",
  });

  console.log(board);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black">Job Hunt</h1>
          <p className="text-gray-600">Track your job applications</p>
        </div>
        {/* <KanbanBoard board={board} userId={session.user.id} /> */}
      </div>
    </div>
  );
}
