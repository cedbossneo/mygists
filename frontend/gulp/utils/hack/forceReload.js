/**
 * Created by aziphael on 01/02/15.
 */

var scriptElements = document.getElementsByTagName("script");
myIo = io.connect(typeof __resourceQuery === "string" && __resourceQuery ?
    __resourceQuery.substr(1) :
    scriptElements[scriptElements.length-1].getAttribute("src").replace(/\/[^\/]+$/, "")
);

myIo.on("force-reload", function() {
  console.log("[WDS] force-reload. Reloading...");
  window.location.reload();
});