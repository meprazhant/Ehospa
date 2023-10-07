import { getSession } from "next-auth/react";
import connect from "../../../db/connect"
import appointment from "../../../db/modals/appointment";

export default async function handler(req, res) {

    connect();

    var session = await getSession({ req });
    if (!session) {
        return res.status(401).json({ status: "unauthenticated", error: "Please login" })
    }

    try {
        var data = await appointment.find({ email: session.user.email });
        // sort by date uploaded latest
        data.sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        return res.status(200).json({ status: "success", message: "Success", data: data })
    } catch (err) {
        return res.status(500).json({ error: "Something went wrong", status: "fail", message: err.message })
    }
}