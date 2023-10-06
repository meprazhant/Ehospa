import connect from "../../../db/connect"
import user from "../../../db/modals/user"
import appointment from "../../../db/modals/appointment";

export default async function handler(req, res) {
    var { email, category, age,
        appointmentDate, problem, dedicatedDoctor } = req.body;
    connect();

    if (req.method !== "POST") {
        return res.send("Hello World")
    }


    if (!email || !category || !age || !appointmentDate || !problem || !dedicatedDoctor) {
        return res.status(422).json({ status: "fill", error: "Please fill all the fields" })
    } else {
        try {
            // check the appointment queue number of that date
            var queueNumber = await appointment.find({ appointmentDate: appointmentDate, category: category }).countDocuments();
            queueNumber = queueNumber + 1;

            if (queueNumber > 10) {
                return res.status(422).json({ status: "full", error: "Appointment queue is full for this date" })
            }


            // book an appointment

            var data = new appointment({
                email, category, age,
                appointmentDate, problem, dedicatedDoctor, queueNumber
            })

            await data.save();

            return res.status(200).json({ status: "success", message: "Success", data: data })
        } catch (err) {
            return res.status(500).json({ error: "Something went wrong", status: "fail", message: err.message })
        }
    }


}