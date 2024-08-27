import { Resend } from 'resend';
import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components";

const resend = new Resend('re_GGQKza4m_Pnz9o1SP2kK3edNuCJwXgBne');

export async function POST(request: Request) {
   try {
      const body = await request.json();
      console.log("API", body);
      const { name, email, phone, message } = body;
      const { data, error } = await resend.emails.send({
         from: 'Bella <info@thebroadcaststore.com>',
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
