const color = $('#color');
const card = $('.card');
const text = $('#text');
const name = $('#name');
const number = $('#number');
const imgContainer= $('.name-and-image');
//color change from input color value
color.on('change', ()=>{
//card.css('background-color',color.val());
if(color.val() !== null){
name.css('color',color.val());
}
});



// take input name and print on card

text.on('keyup' , ()=>{
name.text(text.val());
});

// control text size
number.on('change' , ()=>{
name.css('font-size', number.val() + 'px');
});


$(document).on('input', '#range', function() {
   $('#output').css('width', $('#range').val());
});




// showing images on the card
var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
	if(event.target.files.length >= 1){
		$('#range').show();
		$('.delete-img').show();
	}

// delete Image
//var x = $('#output').remove();
$(document).on('click', '.delete-img', function() {
   $('#output').hide();
	 $('#range').hide();
		$(this).hide();
		
		
	$(document).on('click', '#file', function(e) {
if($('.delete-img').length <= 0){
	 $('#output').show();
	 $('#range').hide();
		$(this).hide();
}else{
$('#output').show();
	 $('#range').show();
		$(".delete-img").show();
}
});
});


};






// Make the text element draggable.
    $(document).ready(function() {
        $(function() { 
            name.draggable({
                //containment: 'parent'     // set draggable area.
            }); 
						
        });
    });
		
		
		// Make the Image element draggable.
    $(document).ready(function() {
        $(function() { 
            	$('#output').draggable({
                //containment: 'parent'     // set draggable area.
            }); 
						
        });
    });
		
		
	// upload product images
	
	var loadProductFile = function(event) {
	var image1 = document.getElementById('change-product-image');
	image1.src = URL.createObjectURL(event.target.files[0]);
	}
	
	
	
	
	
	// Preview on btn click
	
	$(document).ready(function(){

	
var element = $(".product-details"); // global variable
var getCanvas; // global variable
 
    $("#btn-Preview-Image").on('click', function () {
         html2canvas(element, {
				 allowTaint: true,
				 useCORS: true,
         onrendered: function (canvas) {
                $("#previewImage").append(canvas);
                getCanvas = canvas
								
								 //Canvas2Image.convertToJPEG(canvas, 300,250);
             }
         });
				 
    });

	$("#btn-Convert-Html2Image").on('click', function () {
    var imgageData = getCanvas.toDataURL("image/png");
		
    // Now browser starts downloading it instead of just showing it
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", newData);
	});

});
	
	
	
	
	
	
	
	
	
	