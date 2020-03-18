Managing dates and times using Moment.js

School project, learning moment.js

#Browser

    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>

    <script src="moment.js"></script>

    <script>
        moment.locale("sv");
        moment().format();
    </script>
    
    
#Node.js

    npm install moment

    var moment = require('moment');
    
    moment().format();
    
    [Demo] (https//:louisebackstrom.github.io/Moment.js/)
