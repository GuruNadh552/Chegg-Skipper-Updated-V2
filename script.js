/**
 * Developed by Vamsi Krishna Kodimela.
 * This is the firs beta release of the extension.
 * Please report if you found any bugs.
 * Feel free to ask any features required.
 */
var skip = true;
let c = 1;
var timer;
$(document).ready(function () {
  $("body").prepend("<button id='cheggSkipper'>Start Automation</button>");
  $("body").prepend("<button id='cheggSkip'>Skip Question</button>");
  $("body").prepend("<button id='SAA'>Start</button>");
  $("body").prepend(
    "<div id='cheggSkipSpan'>Designed &amp; Developed by <strong>Vamsi Krishna Kodimela</strong>.<br/><center><strong>&copy; Guru</strong></center></div>"
  );
  $("#SAA").click(function()
  	{
  		skip=true;
  	});
  $("#cheggSkipper").click(function () {
    if (!skip) skip = true;
    alert("Question mode activated.");
    skipper();
  });

  $("#cheggSkip").click(function () {
    skipQuestion();
  });

  $(document).keypress(function (e)
    {
      if(e.which == 114)
      {
        location.reload(true);
      }
    });
  $(document).keypress(function (e) {
  	if (skip)
  	{
	    if (e.which == 13) {
	      skip = false;
	      alert("Answer Mode.");
	    } else if (e.which == 48) {
	      skipQuestion();
	    }
	    console.log(e.which);
	}
  });
});

function skipper() {
  timer = setTimeout(function () {
    if (skip) {
      console.log("Skipped:" + c);
      c++;
      skipQuestion();
      skipper();
    }
  }, 10000);
}

function skipQuestion() {
 if(skip)
 {	
  $(".sc-bbmXgH").click();
  $(".eOoWZC").click();
  $(".jkNSkS").click();
 }
}