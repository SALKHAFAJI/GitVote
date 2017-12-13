//GitVote BY SAJJAD

"use strict";
function VOET() {
    
    //VAR FOR RADIO
    
    var R01 = document.getElementById("R01");
    //RADIO 01
    var R02 = document.getElementById("R02");
    //RADIO 02
    var R03 = document.getElementById("R03");
    //RADIO 03
    var R04 = document.getElementById("R04");
    //RADIO 04
    var R05 = document.getElementById("R05");
    //RADIO 05
    var R06 = document.getElementById("R06");
    //RADIO 06
    var R07 = document.getElementById("R07");
    //RADIO 07
    var R08 = document.getElementById("R08");
    //RADIO 08
    var R09 = document.getElementById("R09");
    //RADIO 09
    var R10 = document.getElementById("R10");
    //RADIO 10
    var R11 = document.getElementById("R11");
    //RADIO 11
    var R12 = document.getElementById("R12");
    //RADIO 12
    var R13 = document.getElementById("R13");
    //RADIO 13
    var R14 = document.getElementById("R14");
    //RADIO 14
    var R15 = document.getElementById("R15");
    //RADIO 15
    
    //VAR FOR SPAN
    
    var C01 = document.getElementById("C01");
    //SPAN 01
    var C02 = document.getElementById("C02");
    //SPAN 02
    var C03 = document.getElementById("C03");
    //SPAN 03
    var C04 = document.getElementById("C04");
    //SPAN 04
    var C05 = document.getElementById("C05");
    //SPAN 05
    var C06 = document.getElementById("C06");
    //SPAN 06
    var C07 = document.getElementById("C07");
    //SPAN 07
    var C08 = document.getElementById("C08");
    //SPAN 08
    var C09 = document.getElementById("C09");
    //SPAN 09
    var C10 = document.getElementById("C10");
    //SPAN 10
    var C11 = document.getElementById("C11");
    //SPAN 11
    var C12 = document.getElementById("C12");
    //SPAN 12
    var C13 = document.getElementById("C13");
    //SPAN 13
    var C14 = document.getElementById("C14");
    //SPAN 14
    var C15 = document.getElementById("C15");
    //SPAN 15
    
    //VAR FOR SPAN PERCENT
    
    var P01 = document.getElementById("P01");
    //SPAN PERCENT 01
    var P02 = document.getElementById("P02");
    //SPAN PERCENT 02
    var P03 = document.getElementById("P03");
    //SPAN PERCENT 03
    var P04 = document.getElementById("P04");
    //SPAN PERCENT 04
    var P05 = document.getElementById("P05");
    //SPAN PERCENT 05
    var P06 = document.getElementById("P06");
    //SPAN PERCENT 06
    var P07 = document.getElementById("P07");
    //SPAN PERCENT 07
    var P08 = document.getElementById("P08");
    //SPAN PERCENT 08
    var P09 = document.getElementById("P09");
    //SPAN PERCENT 09
    var P10 = document.getElementById("P10");
    //SPAN PERCENT 10
    var P11 = document.getElementById("P11");
    //SPAN PERCENT 11
    var P12 = document.getElementById("P12");
    //SPAN PERCENT 12
    var P13 = document.getElementById("P13");
    //SPAN PERCENT 13
    var P14 = document.getElementById("P14");
    //SPAN PERCENT 14
    var P15 = document.getElementById("P15");
    //SPAN PERCENT 15
    
    //FINAL RESULTS
    
    var TITLEN = document.getElementById("TITLEN");
    //INFORMATION NAME
    var TITLEV = document.getElementById("TITLEV");
    //INFORMATION VOTERS
    var TITLEX = document.getElementById("TITLEX");
    //INFORMATION 
    var TITLEO = document.getElementById("TITLEO");
    //INFORMATION PERCENT
    var PROGRESS01 = document.getElementById("PROGRESS01");
    //INFORMATION PROGRESS01
    var PROGRESS02 = document.getElementById("PROGRESS02");
    //INFORMATION PROGRESS02
    var XOVPP = document.getElementById("XOVPP");
    //INFORMATION PROGRESS
    
    //ALL
    
    var VOTERS = +C01.innerHTML + +C02.innerHTML + +C03.innerHTML + +C04.innerHTML + +C05.innerHTML + +C06.innerHTML + +C07.innerHTML + +C08.innerHTML + +C09.innerHTML + +C10.innerHTML + +C11.innerHTML + +C12.innerHTML + +C13.innerHTML + +C14.innerHTML + +C15.innerHTML + 1;
    
    //SHOW ALL VOTERS
    
    var VS = document.getElementById("VS");
    VS.innerHTML = "VOTERS" + " " + VOTERS;
    TITLEO.innerHTML = "TOTAL VOTE" + " " + VOTERS;
    
    //WORK WHEN RADIO CHECKED
    
    if (R01.checked) {
        
        C01.innerHTML = ++C01.innerHTML;
        //TO ADD ONE EVERY CLICK VOTE
        TITLEN.innerHTML = document.getElementById("SNAME01").innerHTML;
        //TO SHOW NAME IN PERSONAL RESULT
        TITLEV.innerHTML = "VOTES" + " " + C01.innerHTML;
        //TO SHOW VOTES IN PERSONAL RESULT
        TITLEX.innerHTML = P01.innerHTML;
        //TO SHOW PERCENT IN PERCENT IN PERSONAL RESULT
        XOVPP.innerHTML = P01.innerHTML;
        //PERCENT IN PROGRESS
        PROGRESS01.style.width = P01.innerHTML;
        //PROGRESS WORK
    }
    if (R02.checked) {
        
        C02.innerHTML = ++C02.innerHTML;
        //TO ADD ONE EVERY CLICK VOTE
        TITLEN.innerHTML = document.getElementById("SNAME02").innerHTML;
        //TO SHOW NAME IN PERSONAL RESULT
        TITLEV.innerHTML = "VOTES" + " " + C02.innerHTML;
        //TO SHOW VOTES IN PERSONAL RESULT
        TITLEX.innerHTML = P02.innerHTML;
        //TO SHOW PERCENT IN PERCENT IN PERSONAL RESULT
        XOVPP.innerHTML = P02.innerHTML;
        //PERCENT IN PROGRESS
        PROGRESS01.style.width = P02.innerHTML;
        //PROGRESS WORK
    }
    if (R03.checked) {
        
        C03.innerHTML = ++C03.innerHTML;
        //TO ADD ONE EVERY CLICK VOTE
        TITLEN.innerHTML = document.getElementById("SNAME03").innerHTML;
        //TO SHOW NAME IN PERSONAL RESULT
        TITLEV.innerHTML = "VOTES" + " " + C03.innerHTML;
        //TO SHOW VOTES IN PERSONAL RESULT
        TITLEX.innerHTML = P03.innerHTML;
        //TO SHOW PERCENT IN PERCENT IN PERSONAL RESULT
        XOVPP.innerHTML = P03.innerHTML;
        //PERCENT IN PROGRESS
        PROGRESS01.style.width = P03.innerHTML;
        //PROGRESS WORK
    }
    if (R04.checked) {
        
        C04.innerHTML = ++C04.innerHTML;
        //TO ADD ONE EVERY CLICK VOTE
        TITLEN.innerHTML = document.getElementById("SNAME04").innerHTML;
        //TO SHOW NAME IN PERSONAL RESULT
        TITLEV.innerHTML = "VOTES" + " " + C04.innerHTML;
        //TO SHOW VOTES IN PERSONAL RESULT
        TITLEX.innerHTML = P04.innerHTML;
        //TO SHOW PERCENT IN PERCENT IN PERSONAL RESULT
        XOVPP.innerHTML = P04.innerHTML;
        //PERCENT IN PROGRESS
        PROGRESS01.style.width = P04.innerHTML;
        //PROGRESS WORK
    }
    if (R05.checked) {
        
        C05.innerHTML = ++C05.innerHTML;
        //TO ADD ONE EVERY CLICK VOTE
        TITLEN.innerHTML = document.getElementById("SNAME05").innerHTML;
        //TO SHOW NAME IN PERSONAL RESULT
        TITLEV.innerHTML = "VOTES" + " " + C05.innerHTML;
        //TO SHOW VOTES IN PERSONAL RESULT
        TITLEX.innerHTML = P05.innerHTML;
        //TO SHOW PERCENT IN PERCENT IN PERSONAL RESULT
        XOVPP.innerHTML = P05.innerHTML;
        //PERCENT IN PROGRESS
        PROGRESS01.style.width = P05.innerHTML;
        //PROGRESS WORK
    }
    if (R06.checked) {
        
        C06.innerHTML = ++C06.innerHTML;
        //TO ADD ONE EVERY CLICK VOTE
        TITLEN.innerHTML = document.getElementById("SNAME06").innerHTML;
        //TO SHOW NAME IN PERSONAL RESULT
        TITLEV.innerHTML = "VOTES" + " " + C06.innerHTML;
        //TO SHOW VOTES IN PERSONAL RESULT
        TITLEX.innerHTML = P06.innerHTML;
        //TO SHOW PERCENT IN PERCENT IN PERSONAL RESULT
        XOVPP.innerHTML = P06.innerHTML;
        //PERCENT IN PROGRESS
        PROGRESS01.style.width = P06.innerHTML;
        //PROGRESS WORK
    }
    if (R07.checked) {
        
        C07.innerHTML = ++C07.innerHTML;
        //TO ADD ONE EVERY CLICK VOTE
        TITLEN.innerHTML = document.getElementById("SNAME07").innerHTML;
        //TO SHOW NAME IN PERSONAL RESULT
        TITLEV.innerHTML = "VOTES" + " " + C07.innerHTML;
        //TO SHOW VOTES IN PERSONAL RESULT
        TITLEX.innerHTML = P07.innerHTML;
        //TO SHOW PERCENT IN PERCENT IN PERSONAL RESULT
        XOVPP.innerHTML = P07.innerHTML;
        //PERCENT IN PROGRESS
        PROGRESS01.style.width = P07.innerHTML;
        //PROGRESS WORK
    }
    if (R08.checked) {
        
        C08.innerHTML = ++C08.innerHTML;
        //TO ADD ONE EVERY CLICK VOTE
        TITLEN.innerHTML = document.getElementById("SNAME08").innerHTML;
        //TO SHOW NAME IN PERSONAL RESULT
        TITLEV.innerHTML = "VOTES" + " " + C08.innerHTML;
        //TO SHOW VOTES IN PERSONAL RESULT
        TITLEX.innerHTML = P08.innerHTML;
        //TO SHOW PERCENT IN PERCENT IN PERSONAL RESULT
        XOVPP.innerHTML = P08.innerHTML;
        //PERCENT IN PROGRESS
        PROGRESS01.style.width = P08.innerHTML;
        //PROGRESS WORK
    }
    if (R09.checked) {
        
        C09.innerHTML = ++C09.innerHTML;
        //TO ADD ONE EVERY CLICK VOTE
        TITLEN.innerHTML = document.getElementById("SNAME09").innerHTML;
        //TO SHOW NAME IN PERSONAL RESULT
        TITLEV.innerHTML = "VOTES" + " " + C09.innerHTML;
        //TO SHOW VOTES IN PERSONAL RESULT
        TITLEX.innerHTML = P09.innerHTML;
        //TO SHOW PERCENT IN PERCENT IN PERSONAL RESULT
        XOVPP.innerHTML = P09.innerHTML;
        //PERCENT IN PROGRESS
        PROGRESS01.style.width = P09.innerHTML;
        //PROGRESS WORK
    }
    if (R10.checked) {
        
        C10.innerHTML = ++C10.innerHTML;
        //TO ADD ONE EVERY CLICK VOTE
        TITLEN.innerHTML = document.getElementById("SNAME10").innerHTML;
        //TO SHOW NAME IN PERSONAL RESULT
        TITLEV.innerHTML = "VOTES" + " " + C10.innerHTML;
        //TO SHOW VOTES IN PERSONAL RESULT
        TITLEX.innerHTML = P10.innerHTML;
        //TO SHOW PERCENT IN PERCENT IN PERSONAL RESULT
        XOVPP.innerHTML = P10.innerHTML;
        //PERCENT IN PROGRESS
        PROGRESS01.style.width = P10.innerHTML;
        //PROGRESS WORK
    }
    if (R11.checked) {
        
        C11.innerHTML = ++C11.innerHTML;
        //TO ADD ONE EVERY CLICK VOTE
        TITLEN.innerHTML = document.getElementById("SNAME11").innerHTML;
        //TO SHOW NAME IN PERSONAL RESULT
        TITLEV.innerHTML = "VOTES" + " " + C11.innerHTML;
        //TO SHOW VOTES IN PERSONAL RESULT
        TITLEX.innerHTML = P11.innerHTML;
        //TO SHOW PERCENT IN PERCENT IN PERSONAL RESULT
        XOVPP.innerHTML = P11.innerHTML;
        //PERCENT IN PROGRESS
        PROGRESS01.style.width = P11.innerHTML;
        //PROGRESS WORK
    }
    if (R12.checked) {
        
        C12.innerHTML = ++C12.innerHTML;
        //TO ADD ONE EVERY CLICK VOTE
        TITLEN.innerHTML = document.getElementById("SNAME12").innerHTML;
        //TO SHOW NAME IN PERSONAL RESULT
        TITLEV.innerHTML = "VOTES" + " " + C12.innerHTML;
        //TO SHOW VOTES IN PERSONAL RESULT
        TITLEX.innerHTML = P12.innerHTML;
        //TO SHOW PERCENT IN PERCENT IN PERSONAL RESULT
        XOVPP.innerHTML = P12.innerHTML;
        //PERCENT IN PROGRESS
        PROGRESS01.style.width = P12.innerHTML;
        //PROGRESS WORK
    }
    if (R13.checked) {
        
        C13.innerHTML = ++C13.innerHTML;
        //TO ADD ONE EVERY CLICK VOTE
        TITLEN.innerHTML = document.getElementById("SNAME13").innerHTML;
        //TO SHOW NAME IN PERSONAL RESULT
        TITLEV.innerHTML = "VOTES" + " " + C13.innerHTML;
        //TO SHOW VOTES IN PERSONAL RESULT
        TITLEX.innerHTML = P13.innerHTML;
        //TO SHOW PERCENT IN PERCENT IN PERSONAL RESULT
        XOVPP.innerHTML = P13.innerHTML;
        //PERCENT IN PROGRESS
        PROGRESS01.style.width = P13.innerHTML;
        //PROGRESS WORK
    }
    if (R14.checked) {
        
        C14.innerHTML = ++C14.innerHTML;
        //TO ADD ONE EVERY CLICK VOTE
        TITLEN.innerHTML = document.getElementById("SNAME14").innerHTML;
        //TO SHOW NAME IN PERSONAL RESULT
        TITLEV.innerHTML = "VOTES" + " " + C14.innerHTML;
        //TO SHOW VOTES IN PERSONAL RESULT
        TITLEX.innerHTML = P14.innerHTML;
        //TO SHOW PERCENT IN PERCENT IN PERSONAL RESULT
        XOVPP.innerHTML = P14.innerHTML;
        //PERCENT IN PROGRESS
        PROGRESS01.style.width = P14.innerHTML;
        //PROGRESS WORK
    }
    if (R15.checked) {
        
        C15.innerHTML = ++C15.innerHTML;
        //TO ADD ONE EVERY CLICK VOTE
        TITLEN.innerHTML = document.getElementById("SNAME15").innerHTML;
        //TO SHOW NAME IN PERSONAL RESULT
        TITLEV.innerHTML = "VOTES" + " " + C15.innerHTML;
        //TO SHOW VOTES IN PERSONAL RESULT
        TITLEX.innerHTML = P15.innerHTML;
        //TO SHOW PERCENT IN PERCENT IN PERSONAL RESULT
        XOVPP.innerHTML = P15.innerHTML;
        //PERCENT IN PROGRESS
        PROGRESS01.style.width = P15.innerHTML;
        //PROGRESS WORK
    }
    
    //MATH
    
    P01.innerHTML = (((C01.innerHTML / VOTERS) * 100).toFixed(3) + "%" );
    //PERCENT MATH 01
    P02.innerHTML = (((C02.innerHTML / VOTERS) * 100).toFixed(3) + "%" );
    //PERCENT MATH 02
    P03.innerHTML = (((C03.innerHTML / VOTERS) * 100).toFixed(3) + "%" );
    //PERCENT MATH 03
    P04.innerHTML = (((C04.innerHTML / VOTERS) * 100).toFixed(3) + "%" );
    //PERCENT MATH 04
    P05.innerHTML = (((C05.innerHTML / VOTERS) * 100).toFixed(3) + "%" );
    //PERCENT MATH 05
    P06.innerHTML = (((C06.innerHTML / VOTERS) * 100).toFixed(3) + "%" );
    //PERCENT MATH 06
    P07.innerHTML = (((C07.innerHTML / VOTERS) * 100).toFixed(3) + "%" );
    //PERCENT MATH 07
    P08.innerHTML = (((C08.innerHTML / VOTERS) * 100).toFixed(3) + "%" );
    //PERCENT MATH 08
    P09.innerHTML = (((C09.innerHTML / VOTERS) * 100).toFixed(3) + "%" );
    //PERCENT MATH 09
    P10.innerHTML = (((C10.innerHTML / VOTERS) * 100).toFixed(3) + "%" );
    //PERCENT MATH 10
    P11.innerHTML = (((C11.innerHTML / VOTERS) * 100).toFixed(3) + "%" );
    //PERCENT MATH 11
    P12.innerHTML = (((C12.innerHTML / VOTERS) * 100).toFixed(3) + "%" );
    //PERCENT MATH 12
    P13.innerHTML = (((C13.innerHTML / VOTERS) * 100).toFixed(3) + "%" );
    //PERCENT MATH 13
    P14.innerHTML = (((C14.innerHTML / VOTERS) * 100).toFixed(3) + "%" );
    //PERCENT MATH 14
    P15.innerHTML = (((C15.innerHTML / VOTERS) * 100).toFixed(3) + "%" );
    //PERCENT MATH 15
    
}

//TIMER COUNTDOWN

var countdown = function (end, elements, callback) {
    
    var _MSE = 10,
        _SEC = 1000, 
        _MIN = _SEC * 60,
        _HOU = _MIN * 60,
        _DAY = _HOU * 24,
        
        end = new Date(end),
        timer,
        
        calculate = function() {
            
            var now = new Date(),
                remaining = end.getTime() - now.getTime(),
                data;
            
            if (isNaN(end)) {
                
                console.log('Invalid date/time');
                return;
            }
            
            if (remaining <= 0) {
                
                clearInterval(timer);
        
            if (typeof callback === 'function') {
                
                callback();
            }
                
            //CALLBACK
            } else {
                
                if(!timer) {
                    
                    timer = setInterval(calculate, _MSE);
                }
            }
            data = {
                
                'D': Math.floor(remaining / _DAY),
                'H': Math.floor((remaining % _DAY) / _HOU),
                'M': Math.floor((remaining % _HOU) / _MIN),
                'S': Math.floor((remaining % _MIN) / _SEC),
                'MS': Math.floor((remaining % _SEC) / _MSE)
            }
                    
            if (elements.length) {
                
                for(x in elements) {
                    
                    var x = elements[x];
                    data[x] = ('00' + data[x]).slice(-2);
                    document.getElementById(x).innerHTML = data[x];
                }
            }
        };

    calculate();
}
var callbackfunction = function() {
    
    console.log('Done!');
        }
countdown('2018/10/10 05:33:00 PM' , ['D', 'H', 'M', 'S', 'MS'], callbackfunction);

