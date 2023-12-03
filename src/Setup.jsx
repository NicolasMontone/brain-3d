import React from 'react'
import { useEffect } from 'react'

const Setup = () => {
    useEffect(() => {
        const ws = new WebSocket('wss://e131-190-220-130-194.ngrok.io/')
        ws.onopen = () => {
            console.log('connected');
            ws.send('Hello')
        }
        ws.onmessage = (e) => {
            console.log('message');
            console.log(e.data)
            // -45246.01,-36642.11,-47637.56,-50700.11,-29693.94,-32981.70,-34270.68,-64256.71,-0.14,0.99,0.15,0.58,1.83,0.31,46.67,141619.00,1.00
        }
        ws.onclose = () => {
            console.log('disconnected')
        }
        ws.onerror = (err) => {
            console.log(err)
        }
    }, [])
    return (
        <div>Setup</div>
    )
}

export default Setup