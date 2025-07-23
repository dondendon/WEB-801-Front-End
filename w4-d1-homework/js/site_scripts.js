  function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;

    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;

    if (hr == 12) {
      ampm = "PM";
    } else if (hr > 12) {
      hr -= 12;
      ampm = "PM";
    } else {
      ampm = "AM";
    }

    var time = hr + ":" + min + ":" + sec + " " + ampm;

    // Get IANA timezone name
    var iana = Intl.DateTimeFormat().resolvedOptions().timeZone;

    var tzMap = {
      "America/Los_Angeles": "PT",
      "America/Denver": "MT",
      "America/Phoenix": "MT",//Arizona
      "America/Chicago": "CT",
      "America/New_York": "ET"
    };

    var shortTZ = tzMap[iana] || "Local"; // fallback if not found

    document.getElementById("clock").innerText = time + " " + shortTZ;
  }

  setInterval(currentTime, 1000);

    const partnerNames = [
        "bustour",
        "cabinrental",
        "campingadv",
        "collegetours",
        "rentalbike",
        "tourgroup"
    ];

    const partnerAlts = [
        "Partner Bus Tours",
        "Partner Cabin Rental",
        "Partner Camping Adventure",
        "Partner College Tours",
        "Partner Bike Rentals",
        "Partner Tour Group"
    ];

    const partnersList = [];

    for (let i = 0; i < partnerNames.length; i++) {
        const image = `<img src="images/partner-${partnerNames[i]}.png" alt="${partnerAlts[i]}">`;
        const listItem = `<li class="partner">${image}</li>`;
        partnersList.push(listItem);
    }

    document.getElementById("partners").innerHTML = partnersList.join("");


    