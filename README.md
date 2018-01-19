# ninjadojoTakehome
Take home component for Ninja Dojo application

Hi guys!
So here is my build of the design I was given for the take home component,
Its built using:
  SASS
  Gulp
  Html5
  CSS3
  Javascript
  
files are organised for both development and distribution as you can see in the file tree with the folders dev & dist

#Extra points questions

Describe the difference between padding & margin

  Padding is what surrounds the content of an element within its borders,
   where margin is the space outside an elements border.
   
In your own words describe the css3 box model

  before styling all elements are rendered as a box. the box consists of 
  content, padding, border and margin,(innermost -> outermost) each of these are able to be styled to
  get a desired look. 
  Content is where the actual content is(text/images),
  padding is the space inbetween the content and the border
  border is a border that surrounds the content and padding and contributes to the size of the element
  margin is the area around an elements border, it is transparent and used for positioning,
  
How to vertically center a h1 inside a div

  div {
  display:flex;
  align-items: center; 
  }
  
  or if you only wanted the h1 vertical
  
  div {
  display: flex;
  }
  
  div h1 {
  align-self: center;
  }
  
  Explain how media queries work 
    Media queries are essentially If statements. They are used to check what type of media, 
    what size the display is, orientation, the list goes on. Most commonly they are used
    for breakpoints in building responsive sites. 
    
    @media (min-width: 600px) and (max-width: 800px) {
    html { background: red; }
    }
    basically means if the browser is in between 600px and 800px show a red background.
  



