#Moment.js

#Node.js

npm install moment

var moment = require('moment');
moment().format();


#Browser

//CDN Link
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>

//Import
<script src="moment.js"></script>


<script>
    //language, Swedish
    moment.locale("sv");
    //Date in the context of the user's local time 
    moment().format();
</script>