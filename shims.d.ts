// Auto-generated. Do not edit.



    //% color="#31C7D5" weight=19
    //% icon="\uf1eb"
declare namespace eForce_IR {

    /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="按下 |%btn| 按鈕" shim=Mbit_IR::onPressEvent
    function onPressEvent(btn: RemoteButton, body: () => void): void;

    /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% block="將紅外接收器連接到接腳 %pin" shim=Mbit_IR::init
    function init(pin: Pins): void;
}

// Auto-generated. Do not edit. Really.
