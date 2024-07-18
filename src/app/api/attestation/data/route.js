import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import Attestation from "@/lib/models/Attestation";

export async function GET(req,res) {
  try {
   
    await connect();
    const contacts = await Attestation.find();
    // if (contacts.length == 0)
      return NextResponse.json({ success: true, message: "Data found",data:contacts });
   
    //return NextResponse.json({ success: true, Data: contacts });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
