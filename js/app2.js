//This is the viewModel for the website. Here I control the data show on the UI based on  user's interaction with the site.
//Knockout.js
 function myViewModel(){
	var self = this;
	//The array below contains all the properties of the images shown in the portfolio site
	self.work = ko.observableArray(
		[

				{
					title:" Business Card",
					description: " I needed to create a personal brand for myself, so I created a set of business stationary pieces in order to help brand myself as a designer. I wanted to keep my logo designs simple so that it could be used in any medium without complications.In my business card , I included my basic information so that I can be easily contacted. On the back side, I decided to wish a nice day to whoever ends up with one of my business card in their hands. It reflects my personality and myself as a designer;fun, approachable and caring.",
					img: "pieces/bussinessCard.jpg",
					thumb: ["pieces/bussinessCard.jpg","pieces/bussinessCard2.jpg"],
                    type: "graphic"
				},
				{
					title: "Brochure",
					description: "I designed this brochure as part of my final project for my Typography class. I had to design a brochure of the Ouija board for Hasbro inc. The project took a lot of typography and image manipulation skills. All I know from Photoshop, Adobe InDesign and Illustrator came into play in this project in order to bring it to live. I deciced to apply a wood texture as the background for the brochure since the Ouija Board itself is made out of wood. The blue glow around the Ouija title represents how playing the game opens the door to another dimensionFor the inside pages of the brochure I decided to use the typeface as the element that unifies the designs. I faded the alphabet on the background to the sides of both pages. Besides helping to create unity, it also helped with the ancient look and feel I was going for with the design.Using the same background texture I used for the front cover, I was able to craft the planchette on the back of the brochure. Also, I created a magnifying effect in the center to make the graphic more visually appealing and interesting to the whole composition.",
					img: "pieces/brochure.jpg",
					thumb: ["pieces/brochure.jpg", "pieces/brochure2.jpg", "pieces/brochure3.jpg"],
                    type:"graphic"
				},
				{
					title: "Ad",
					description: "An advertising piece for the Febreze I use in my room everyday. I was inspired by my love for the product and advertising. As I result, I decided to create a marketing piece for the product I love.<br><b>Purpose</b>:To create a piece of advertisement in order to showcase my ability to create ads for products to possible employers.<br><b>Goal</b>:To create an advertisement piece for Frebreze's shimmer spray depicting the aroma of the spray in a visual manner , and to sell the product to the target audience while catching them attention visually.<br><b>Design Solution and Approach</b>:In order to  depict the aroma of the product, I came up with the idea of surrounding the product in a storm of petals using the same colors and similar typeface as in the spray's  bottle. I wanted to represent visually the striking scent of the product and how I felt every time I used the product in my own room. Using Adobe Photoshop I started by first replicating the petals in the bottle and then placing them around the bottle in an asymetrical fashion. Afterwards, I placed  masked images of flowers in the background and used art brushes to reveal them in a way that gave the impresion of flowers  bursting around the bottle.At the end, I finished the piece with some lighting effects and color adjustments so that the composition looked cohesive.<br> <b>Challenges</b>:It was challenging to come up with a way to represent a scent in a visual manner. It took a lot of thinnking and brainstorming to get to the final piece. The question I asked myself which really sent me the right direction was:  where does this smell takes me? I answered: somewhere with lots of petals.",
					img: "pieces/ad.jpg",
					thumb: ["pieces/ad.jpg","pieces/ad2.jpg","pieces/ad3.jpg"],
                    type:"graphic"
				},
				{
					title: "Book Jacket",
					description: "I wanted to give my redesign of the book a more modern look and feel compared to the old design. Moreover, I want it my cover to be a symbol of what the book represented to me after reading it. As a result, I decided to place an Illustration of a chopped trunk on the cover since it represents what was left of the relationship between the tree and the boy in the story.<br> started drawings comps of the whole composition including the illustration of the tree before even touching the computer. I illustrated the illustrations by hand and then imported it to Adobe Photoshop for digitalization.",
					img: "pieces/book.jpg",
					thumb: ["pieces/book.jpg","pieces/book2.jpg","pieces/book3.jpg","pieces/book4.jpg"],
                    type: "graphic"
				},
                
				{
					title: "Tea Box Design",
					description: "<b>Purpose</b>: To showcase the ability to design for print package and work with dye cuts while showcasing my personal style and taste as a designer.<br><b>Design Solution Chosen:</b> For this project, my design is heavily influenced by the pop art culture and geometric design. As a designer, I have always admired the movement of pop art.  I like how artists in the late 1950’s started to create art of out any object and subject. The vibrant colors and unordinary typography are the two main elements that attracts me the most from the movement. In addition, geometric design is very popular among designers lately; I like how almost any geometric design is so visually impressive and eye catching. I saw the possibility of combing elements from both Geometric design and Pop Art, so I decided to base my project on them.<br><b>Research Done</b>: As part of my research process, I did a lot of reading on Pop Art and Geometric Design. I did not want to just emulate these styles. I wanted to know more about them and find out their origins and characteristics. I found interesting to learn how Pop Art came about in the United States as a form of art in the 1950’s and rapidly spread to other disciplines such as Graphic Design, Advertising, Commercial Photography and Sculptures.After I researched the styles I was going to emulate. I headed out to supermarkets and took pictures of plenty of tea box designs. I needed to know how other designers out there are designing for tea packages and how I would come up with the measurements in order to create my dye cut.<br><b>Facts leading to Approach</b>: Looking at a variety of tea box designs was of great help to get me started on my own project. I already knew that I wanted to emulate a modern tea box design that was targeted to a younger audience. However, most of the boxes were pretty dull and boring to my taste. It was not until I stumbled upon Lipton tea box design that an idea sparked inside my head and suddenly I had the finished product visualized on my head before even beginning. The package design that inspired me was really modern and colorful; it was visually interesting and engaging. The design was geometric and was using the Low Poly technique.<br><b>Typefaces used and why?</b> For this project, I decided to draw my own typeface in order to fit my specific needs. There were a great variety of typefaces out there that were geometric, which was the kind of typeface I was looking for; However, they did not seem to work in harmony with the rest of the design very well. As a result, I decided to solve the problem by drawing the typeface myself. The typeface I drew is very geometric with sharp edges.; almost all the characters are made up of pointy triangular shapes. It is not  perfect, but it did the trick for the title of the tea box.As my secondary typeface, I used Anita semi-square normal. This is also a geometric typeface; However, it is more squared and rounded than the pointy triangles I used for the title of the tea box. I think it was a great choice because it goes with the style of the composition  and creates contrast with the triangular shapes present on 80% of my design.",
					img: "pieces/tea.jpg",
					thumb: ["pieces/tea.jpg","pieces/tea2.jpg","pieces/tea3.jpg","pieces/tea4.jpg"],
                    type: "graphic"
				},
				{
					title: "Image Manipulation",
					description: "In this self started project, I manipulated four images using Adobe Photoshop to create a dramatic rewind falling scene in Adobe Photoshop. Creativity and attention to detail as well as high proficiency of Photoshop tools were required in order to pull this off.",
					img: "pieces/mani.jpg",
					thumb: ["pieces/mani.jpg"],
                    type:"graphic"
				},
				{
					title: "Landing Page",
					description: 'For this self started project, I created a landing page for Nina Ricci. I love the brand and the style of the website , so I went ahaead and recreated the landing page of their website and modified it. All images belong to their website. I am only taking credit for the layout design and developtment(not the images)<br><a href="http://silvodesigns.com/home/index.html">Live Project</a>',
					img: "pieces/landing.jpg",
					thumb: ["pieces/landing.jpg","pieces/landing2.jpg"],
                    type:"web"
				},
				{
					title: "App UI Design",
					description: "Task It, it is a non-real app that allows you to create a list of task and add reminders to them so that you never forget your next dentist appoinment or deadline for projects. The UI is clean , simple and unobtrusive to the users. The organic and modern look and feel of this application will make the day of user's a little bit better by providing them with functionality to help them organazie their daily task better.",
					img: "pieces/uxm.jpg",
					thumb: ["pieces/uxm.jpg","pieces/ux1.jpg","pieces/ux2.jpg","pieces/ux3.jpg","pieces/ux4.jpg"],
                    type: "web"
				}


		]);
	//The renderWork method renders a page with for information about the piece of work selected
	self.renderWork = function(piece){
        
            $('.arrow').removeClass('not_visible');//make arrow  invisible
			$('.display_area').html("").removeClass('not_visible');;//empty the display area before rendering a new project
			$('.arrow').css("display","block");
            
            // atributes of each image are store in the following vars
				var image = piece.img;
				var description = piece.description;
				var title = piece.title;
				var thumbnails = piece.thumb;

			$('.display_area').append('<img class="img-responsive center-block lightbox_img" src="' + image + '">');
			$('.display_area').append('<div class="row thumbs"></div>');
            
            
            // render each thumbnail image associated with the piece clicked
			thumbnails.forEach(function(entry){
				$('.thumbs').append('<img class="img-responsive col-sm-2 lightbox_thumb" src="'+ entry + '">');
			});
            
            
			$('.display_area').append('<h1 class="lightbox_h1">' + title +'</h1>');
			$('.display_area').append('<p class="lightbox_p">' + description + '</p>');
            
            //add event handler to each of the thumbnail img so that they can change to main view when clicked
			nails = $('.lightbox_thumb');
			nails.on('click', function(){

					self.changeThumb($(this));
			});

	};
    

	// Change the display image to the selected thumb image
	self.changeThumb = function(display){

		var newSrc = display.attr('src');
            $('.lightbox_img').attr('src', newSrc);



	};
  // renders the main view back when arrow is clicked
	self.renderBack = function(){
        
        $('.pieces').html("");//empty content
        $('.pieces').html(main);// append main content
        $('.work_filter').addClass('yes_visible');
        $('.arrow').removeClass('yes_visible');
        $('.arrow').addClass('not_visible');

};

   self.clearDisplay =function(){
       
        $('.arrow').addClass('not_visible');
        $('.display_area').html("");
        $('.work_filter').addClass('yes_visible');// make the filter bar  invisible
        $('.pieces').css('opacity','1');

   };
   //only makes visible item with graphic type
   self.isGraphic= function(type){
       
      
       if(type === "graphic") {
           return true;
               
           }
       else{ 
           return false;
        }
   }
    //only makes visible item with web type
   self.isWeb= function(type){
       
      
       if(type === "web") {
           return true;
               
           }
       else{ 
           return false;
        }
   }
   
 

}

ko.applyBindings( new myViewModel());

