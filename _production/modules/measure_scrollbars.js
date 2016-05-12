function measure_scrollbars() {
    // Create the measurement node
    var scrollDiv = document.createElement("div");
    scrollDiv.style.width = "100px";
    scrollDiv.style.height = "100px";
    scrollDiv.style.overflow = "scroll";
    scrollDiv.style.position = "absolute";
    scrollDiv.style.top = "-9999px";
    document.body.appendChild(scrollDiv);

    //var scrollDiv = '<div style="width: 100px;height: 100px;overflow: scroll;position: absolute;top: -9999px;';
    //$('body').append(scrollDiv);

    // Get the scrollbar width
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    // Delete the DIV 
    document.body.removeChild(scrollDiv);
    return scrollbarWidth; 
   
}