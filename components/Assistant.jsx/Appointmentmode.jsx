import React, { useEffect } from 'react'

function Appointmentmode({ response, user, specialist }) {
    var [messages, setMessages] = React.useState([])

    useEffect(() => {
        var aijson = {
            message: "So, you have ' " + response + " ' as your problem. And you should Visit ' " + specialist + " ' for this.",
            type: "ai"
        }
        if (response) {
            setMessages([...messages, aijson])
        }
    }, [response])

    return (
        <div>
            {
                messages.map((message, index) => {
                    if (message.type === "ai") {
                        return <AIresponse key={index} response={message.message} />
                    } else {
                        return <Humanresponse key={index} response={message.message} />
                    }
                }
                )
            }
        </div>
    )
}

export default Appointmentmode



function AIresponse({ response }) {
    return (
        <div className="col-start-1 col-end-8 p-3 rounded-lg">
            <div className="flex flex-row items-center">
                <div
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                    AI
                </div>
                <div
                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                >
                    <div>
                        {response}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Humanresponse({ response }) {
    return (
        <div className="col-start-6 col-end-13 p-3 rounded-lg">
            <div className="flex items-center justify-start flex-row-reverse">
                <div
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-green-500 flex-shrink-0"
                >
                    ME
                </div>
                <div
                    className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                >
                    <div>{response}</div>
                </div>
            </div>
        </div>
    )
}