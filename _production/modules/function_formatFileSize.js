function formatFileSize(bytes) {
  var val = bytes / 1024,
    suffix;
  if (val < 1000) {
    suffix = 'KB';
  } else {
    val = val / 1024;
    if (val < 1000) {
      suffix = 'MB';
    } else {
      val = val / 1024;
      if (val < 1000) {
        suffix = 'GB';
      } else {
        val = val / 1024;
        suffix = 'TB';
      }
    }
  }
  //return numericFormatters.round(val, 2) + suffix;
  return parseFloat(val).toFixed(2) + suffix;
}