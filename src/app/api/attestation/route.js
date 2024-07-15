import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import Attestation from "@/lib/models/Attestation";


export async function POST(request) {
  try {
    const payload = await request.json();
    await connect();
    const dataAttest = await Attestation.find({
      cnic: payload.cnic,
      stamp: payload.stamp,
    });
    if (dataAttest.length != 0)
      return NextResponse.json({
        success: false,
        message: "Data Already Exist",
      });

    const newContact = new Attestation(payload);
    const contact = await newContact.save();
    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
