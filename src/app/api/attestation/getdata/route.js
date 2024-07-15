import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import Attestation from "@/lib/models/Attestation";

export async function POST(request) {
  try {
    const payload = await request.json();
    await connect();
    const contacts = await Attestation.find({
      cnic: payload.cnic,
      stamp: payload.stamp,
    });
    if (contacts.length == 0)
      return NextResponse.json({ success: false, message: "Data not found" });
   
    return NextResponse.json({ success: true, Data: contacts });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
