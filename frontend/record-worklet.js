class RecordingProcessor extends AudioWorkletProcessor {
    constructor(...x) {
        super(...x)
        this.port.postMessage(sampleRate)
    }
    process(inputs, outputs, parameters) {
        this.port.postMessage(inputs[0][0])
        return true
    }
}

registerProcessor("record", RecordingProcessor)
