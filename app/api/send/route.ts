import { Resend } from 'resend';
import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components";

const resend = new Resend('process.env.RESEND_API_KEY');

export async function POST(request: Request) {
   try {
      const body = await request.json();
      console.log("API", body);
      const { name, email } = body;
      const { data, error } = await resend.emails.send({
         from: 'onboarding@resend.dev',
         to: email,
         subject: 'Hi, ${name}',
         react: EmailTemplate({ firstName: name }),
      });

      if (error) {
         return NextResponse.json({ error }, { status: 500 });
      }

      return NextResponse.json(data);
   } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
   }
}
