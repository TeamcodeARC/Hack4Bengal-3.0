function showResult() {
    // const searchBar = document.querySelector('#location');
    const selection = document.querySelector('#place');
    const container = document.querySelector('.search')
    // console.log(selection.options[ selection.selectedIndex ].value);
    // searchBar.value = selection.options[selection.selectedIndex].value;
    if (selection.options[selection.selectedIndex].value == "Kalyani") {
        // const worker1 = "static/img/worker1.jpg";
        container.innerHTML = '<!-- search result --><div class="searchResult" ><div class="leftSection col"><h1>Deepak Malhotra</h1><p>With 6 years of experience of recycling wastes</p></div><div class="middleSection col"><h1>Sell Scrap</h1><a href="https://outlook.office365.com/owa/calendar/RecyCraftBooking@chiragnahata.onmicrosoft.com/bookings/"><button id="sellBtn">Schedule Pickup</button></a></div><img src="static/img/worker1.jpg" class="img-fluid col" alt="factory 1"></div><!-- search result --><div class="searchResult"><div class="leftSection col"><h1>Rajiv Deshmukh</h1><p>With 8 years of experience of recycling wastes</p></div><div class="middleSection col"> <h1>Sell Scrap</h1><a href="https://outlook.office365.com/owa/calendar/RecyCraftBooking@chiragnahata.onmicrosoft.com/bookings/"><button id="sellBtn">Schedule Pickup</button></a></div><img src="static/img/worker2.jpg" class="img img-fluid col" alt="factory 1"></div>';
    }
    else if(selection.options[selection.selectedIndex].value == "Krishnanagar"){
        container.innerHTML = ' <!-- search result --><div class="searchResult"><div class="leftSection col"><h1>Alok Tiwari</h1><p>With 2 years of experience of recycling wastes</p></div><div class="middleSection col"><h1>Sell Scrap</h1><a href="https://outlook.office365.com/owa/calendar/RecyCraftBooking@chiragnahata.onmicrosoft.com/bookings/"><button id="sellBtn">Schedule Pickup</button></a></div><img src="static/img/worker3.jpg" class="img-fluid col" alt="factory 1"></div><!-- search result --><div class="searchResult"><div class="leftSection col"><h1>Sunil Kumar</h1><p>With 5 years of experience of recycling wastes</p></div><div class="middleSection col"><h1>Sell Scrap</h1><a href="https://outlook.office365.com/owa/calendar/RecyCraftBooking@chiragnahata.onmicrosoft.com/bookings/"><button id="sellBtn">Schedule Pickup</button></a></div><img src="static/img/worker4.jpg" class="img-fluid col" alt="factory 1"></div>';
    }

    else if(selection.options[selection.selectedIndex].value == "Kolkata"){
        container.innerHTML = ' <!-- search result --><div class="searchResult"><div class="leftSection col"><h1>Karan Rajan</h1>With 15 years of experience of recycling wastes</p></div><div class="middleSection col"><h1>Sell Scrap</h1><a href="https://outlook.office365.com/owa/calendar/RecyCraftBooking@chiragnahata.onmicrosoft.com/bookings/"><button id="sellBtn">Schedule Pickup</button></a></div><img src="static/img/worker5.jpg" class="img-fluid col" alt="factory 1"></div><!-- search result --><div class="searchResult"><div class="leftSection col"><h1>Rakesh Sharma</h1><p>With 4 years of experience of recycling wastes</p></div><div class="middleSection col"><h1>Sell Scrap</h1><a href="https://outlook.office365.com/owa/calendar/RecyCraftBooking@chiragnahata.onmicrosoft.com/bookings/"><button id="sellBtn">Schedule Pickup</button></a></div><img src="static/img/worker6.jpg" class="img-fluid col" alt="factory 1"></div>';
    }
}
