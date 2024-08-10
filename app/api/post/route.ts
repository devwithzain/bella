import { NextResponse } from "next/server";

export async function GET(request: Request) {
   try {
      const response = await fetch("http://localhost:3001/dashboard/about", { cache: "no-store" });
      return NextResponse.json(await response.json());
   } catch (error: any) {
      return NextResponse.json({ message: "Get Error", error: error.message }, { status: 404 });
   }
}