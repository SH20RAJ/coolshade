import React from "react";

export default function Maps() {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <p className="text-2xl font-bold m-4">Enjoy seamless maps experience with Mapbox API</p>
      {/* embed https://player.vimeo.com/video/866081881?app_id=122963&h=aaa72a2cef */}
      <iframe
        src="https://player.vimeo.com/video/866081881?app_id=122963&h=aaa72a2cef"
        width="700px"
        height="400px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
