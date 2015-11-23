if (window.File && window.FileReader && window.FileList && window.Blob) {
    var f = new File([""], "count.txt")
    var reader = new FileReader();
    reader.readAsText(new File([""], "count.txt"));
    alert("contents: " + reader.result);
} else {
    alert("File APIs missing!");
}