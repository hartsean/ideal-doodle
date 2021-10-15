import React from "react";
import DevicesOn from './DevicesOn.js';
import DevicesOff from './DevicesOff.js';
import DeviceUpdates from './DeviceUpdates.js';
import CurrentResidence from './CurrentResidence.js';
import Menu from './Menu.js';
import AddDevice from "./AddDevice.js";

function HomeScreen() {
  return (
    <div className="homeScreen container mx-auto bg-green-500">

        <div>
            <div><AddDevice /></div>
        </div>

        <div class="grid grid-cols-3 gap-4 bg-green-400">
            <div><DevicesOn /></div>
            <div><DevicesOff /></div>
            <div><DeviceUpdates /></div>
        </div>
        <div class="container mx-auto bg-green-500">
            <div><CurrentResidence /></div>
        </div>
        <div class="container mx-auto bg-gray-500">
            <div><Menu /></div>
        </div>
    </div>
  )
}

export default HomeScreen;