 $(document).ready(function(){
            var n = $("#slideShow div img").length;
            var c = 0;
            Slide(c,n);
        });
        function Slide(c,n){
            c = ++c % n;
            $("#slideShow div").animate({left:-500*c},7000,function() {Slide(c,n)});
        }