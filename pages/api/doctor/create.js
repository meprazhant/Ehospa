import appointment from "../../../db/modals/doctors";
import connect from "../../../db/connect";

export default async function handler(req, res) {
    var { email, speciality, phone,
        image, name } = req.body;
    connect();

    if (req.method !== "POST") {
        return res.send("Hello World")
    }


    if (!email || !name || !phone || !image || !speciality) {
        return res.status(422).json({ status: "fill", error: "Please fill all the fields" })
    } else {
        try {
            // check the appointment queue number of that date
            if (!email.includes("@")) {
                return res.status(422).json({ status: "fail", error: "Please enter a valid email" })
            }
            var check = await appointment.findOne({ email: email })
            if (check) {
                return res.status(422).json({ status: "fail", error: "Doctor already Registered" })
            }
            var data = new appointment({
                email: email,
                name: name,
                phone: phone,
                image: image,
                speciality: speciality,
                available: true
            })

            await data.save();

            return res.status(200).json({ status: "success", message: "Success", data: data })
        } catch (err) {
            return res.status(500).json({ error: "Something went wrong", status: "fail", message: err.message })
        }
    }


}